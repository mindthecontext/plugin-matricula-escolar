// laminas.js — las láminas de Matrícula Escolar con Observable Plot (MEE-52).
//
// Se escribe UNA vez y se versiona con el saber (el mismo patrón de carreras-lab, ADR-0027): el asistente
// no diseña el gráfico, llama a una de estas funciones con los datos que trajeron las herramientas. Cada
// función es `tipo(el, datos, opt)` con opt = {t: título, s: subtítulo, src: fuente, …}.
//
// Necesita d3 y Plot cargados ANTES (el UMD de Plot depende de d3; sin d3, Plot no se define y la página
// queda en blanco sin error visible). La plantilla los carga: d3@7.9.0 (dist/d3.min.js) y
// @observablehq/plot@0.6.17 (dist/plot.umd.min.js), desde cdn.jsdelivr.net.
// OJO: este archivo se incrusta dentro de un elemento script; no escribas aquí la etiqueta de cierre de
// script, ni siquiera en un comentario: el navegador cerraría el script en ese punto.
//
// DALTONISMO (Ernesto lee mal azul y morado): cada serie lleva COLOR Okabe-Ito + FORMA de marcador + TRAZO,
// y su nombre escrito al final de la línea. Nunca se distingue una serie sólo por color.
(function () {
  "use strict";

  // Cada dependencia tiene SIEMPRE el mismo color, forma y trazo, en todos los gráficos del saber.
  const DEP = {
    publico: { n: "Público", c: "#0072B2", sh: "circle", dash: null },
    ps:      { n: "Particular subvencionado", c: "#E69F00", sh: "square", dash: "6 4" },
    pp:      { n: "Particular pagado", c: "#009E73", sh: "triangle", dash: "2 3" },
    ad:      { n: "Administración delegada", c: "#D55E00", sh: "diamond", dash: "8 3 2 3" },
    todas:   { n: "Todas", c: "#1f2328", sh: "circle", dash: null },
  };
  const OTRAS = [["#0072B2", "circle", null], ["#E69F00", "square", "6 4"], ["#009E73", "triangle", "2 3"],
                 ["#D55E00", "diamond", "8 3 2 3"], ["#56779b", "cross", "1 3"], ["#CC79A7", "star", "10 4"]];
  const ENTRA = "#0072B2", SALE = "#D55E00", GRILLA = "#e6e1d8", EJE = "#5f5a50", TINTA = "#1f2328";

  // Números en español de Chile: punto de miles, coma decimal y el signo menos verdadero.
  const ES = d3.formatLocale({ decimal: ",", thousands: ".", grouping: [3], currency: ["$", ""], minus: "−" });
  const FMT = {
    miles: ES.format(",.0f"),                       // 3439347 → «3.439.347»
    abrev: (v) => (v === 0 ? "0" : ES.format(".2~s")(v)),   // eje: 3439347 → «3,4M» · 400000 → «400k» · 0 → «0»
    pct: (v) => ES.format(".1f")(v * 100) + " %",   // 0,513 → «51,3 %» (las herramientas dan proporciones)
    pct0: (v) => ES.format(".0f")(v * 100) + " %",
    decimal: ES.format(",.1f"),
    signo: ES.format("+,.0f"),                      // −38306 → «−38.306»
  };
  const fmt = (k) => (typeof k === "function" ? k : FMT[k] || FMT.miles);

  function estilo(i, clave) {
    if (clave && DEP[clave]) return DEP[clave];
    const [c, sh, dash] = OTRAS[i % OTRAS.length];
    return { c, sh, dash };
  }

  // El marcador de la leyenda, con la misma forma que en el gráfico.
  function simbolo(e) {
    const c = e.c;
    if (e.sh === "square") return `<rect x="11" y="3" width="6" height="6" fill="${c}"/>`;
    if (e.sh === "triangle") return `<path d="M14,2 L18,10 L10,10 Z" fill="${c}"/>`;
    if (e.sh === "diamond") return `<path d="M14,1.5 L18.5,6 L14,10.5 L9.5,6 Z" fill="${c}"/>`;
    return `<circle cx="14" cy="6" r="3.6" fill="${c}"/>`;
  }

  // Marco común: título (el QUÉ), subtítulo (unidad y alcance), el gráfico, nota y fuente (desde procedencia).
  function marco(el, opt, chart) {
    el.classList.add("lamina");
    el.innerHTML = `<div class="ft">${opt.t || ""}</div>` + (opt.s ? `<div class="fs">${opt.s}</div>` : "");
    el.append(chart);
    if (opt.nota) el.insertAdjacentHTML("beforeend", `<div class="nota">${opt.nota}</div>`);
    if (opt.src) el.insertAdjacentHTML("beforeend", `<div class="src">${opt.src}</div>`);
  }
  const ancho = (el) => Math.max(320, Math.min(960, el.clientWidth || 720));

  // Cada lámina se dibuja al ancho de su contenedor y se VUELVE A DIBUJAR cuando ese ancho cambia (MEE-74). Antes
  // se medía una sola vez: si la página se dibujaba en un panel angosto (un artifact que abre estrecho y después se
  // ensancha), el gráfico quedaba para siempre en el modo celular, en un tercio de la tarjeta. Se redibuja sólo si
  // el ancho útil cambia en 8 px o más, una vez por cuadro.
  function responsiva(dibujar) {
    return function (el, datos, opt) {
      dibujar(el, datos, opt);
      if (typeof ResizeObserver === "undefined") return;
      let ultimo = ancho(el), cuadro = 0;
      new ResizeObserver(() => {
        if (Math.abs(ancho(el) - ultimo) < 8) return;
        cancelAnimationFrame(cuadro);
        cuadro = requestAnimationFrame(() => { ultimo = ancho(el); dibujar(el, datos, opt); });
      }).observe(el);
    };
  }
  const base = (el, alto) => ({ width: ancho(el), height: alto, style: { fontSize: "13px", color: EJE, background: "transparent" } });

  // ── serie — una o varias series anuales (líneas con marcadores y nombre al final) ──────────────────────────
  // datos: {x: [2004, …], series: [{k?: "publico", n?: "Público", v: [ …alineado a x… ]}]}  (v puede traer null)
  // opt: {t, s, src, nota, fmt: "miles"|"pct"|"decimal"|func, y0: true, quiebres: [{x, rotulo}], alto}
  function serie(el, datos, opt) {
    opt = opt || {};
    const f = fmt(opt.fmt), w = ancho(el), marks = [], alto = opt.alto || 340;
    const M = { top: 22, bottom: 30 };
    const angosto = w < 560;                       // celular: leyenda debajo en vez de nombres al final
    const largo = Math.max(...datos.series.map((s) => (s.n || (DEP[s.k] || {}).n || "").length));
    const margenDer = angosto ? 44 : Math.min(220, 14 + largo * 7.2);
    (opt.quiebres || []).forEach((q) => {
      marks.push(Plot.ruleX([q.x], { stroke: "#9a9488", strokeDasharray: "3 3" }));
      if (!angosto) marks.push(Plot.text([q], { x: "x", frameAnchor: "top", text: "rotulo", dy: 2, dx: 4, textAnchor: "start", fontSize: 11, fill: EJE }));
    });
    if (angosto && (opt.quiebres || []).length)
      opt = { ...opt, nota: [opt.nota, "Línea punteada: " + opt.quiebres.map((q) => q.rotulo).join("; ") + "."].filter(Boolean).join(" ") };
    const finales = [];
    datos.series.forEach((s, i) => {
      const e = estilo(i, s.k), nombre = s.n || e.n || s.k;
      const pts = datos.x.map((x, j) => ({ x, y: s.v[j], serie: nombre })).filter((p) => p.y != null);
      marks.push(Plot.line(pts, { x: "x", y: "y", stroke: e.c, strokeWidth: 2.4, ...(e.dash ? { strokeDasharray: e.dash } : {}) }));
      const paso = Math.max(1, Math.round(pts.length / (angosto ? 4 : 8)));
      const marc = pts.filter((_, j) => j % paso === 0 || j === pts.length - 1);
      marks.push(Plot.dot(marc, { x: "x", y: "y", symbol: e.sh, r: 4, fill: i % 2 ? "#ffffff" : e.c, stroke: e.c, strokeWidth: 1.6 }));
      const ult = pts[pts.length - 1];
      if (ult) finales.push({ ...ult, nombre, c: e.c });
    });
    // El nombre y la cifra van al final de cada línea. Si dos series terminan cerca, los rótulos se separan
    // (28 px por rótulo de dos renglones) en vez de montarse: se calcula en píxeles con la misma escala del
    // gráfico y se vuelve al valor del dato para dibujarlo.
    const valores = datos.series.flatMap((s) => s.v).filter((v) => v != null);
    const dominio = [opt.y0 ? Math.min(0, ...valores) : Math.min(...valores), Math.max(...valores)];
    const escY = d3.scaleLinear().domain(dominio).nice().range([alto - M.bottom - 14, M.top]);
    const orden = [...finales].sort((a, b) => escY(a.y) - escY(b.y));
    let previo = -Infinity;
    orden.forEach((d) => { d.py = Math.max(escY(d.y), previo + 28); previo = d.py; });
    const exceso = orden.length ? orden[orden.length - 1].py - (alto - M.bottom - 18) : 0;
    if (exceso > 0) orden.forEach((d) => { d.py -= exceso; });
    orden.forEach((d) => { d.yr = escY.invert(d.py); });
    if (!angosto) {
      marks.push(Plot.text(orden, { x: "x", y: "yr", text: "nombre", dx: 9, dy: -6, textAnchor: "start", fontSize: 12, fontWeight: 600, fill: (d) => d.c }));
      marks.push(Plot.text(orden, { x: "x", y: "yr", text: (d) => f(d.y), dx: 9, dy: 8, textAnchor: "start", fontSize: 11, fill: EJE }));
    }
    const todos = datos.series.flatMap((s, i) => datos.x.map((x, j) => ({ x, y: s.v[j], serie: s.n || estilo(i, s.k).n || s.k })).filter((p) => p.y != null));
    marks.push(Plot.tip(todos, Plot.pointer({ x: "x", y: "y",
      channels: { serie: "serie", año: (d) => `${d.x}`, valor: (d) => f(d.y) },
      format: { x: false, y: false, serie: true, año: true, valor: true } })));   // el globo dice «año» y «valor», no x/y
    const ejeY = { miles: FMT.abrev, pct: FMT.pct0, pct0: FMT.pct0 }[opt.fmt || "miles"] || f;
    const chart = Plot.plot({
      ...base(el, alto), marginLeft: 64, marginRight: margenDer, marginTop: M.top, marginBottom: M.bottom,
      x: { label: null, tickFormat: (d) => `${d}`, ticks: Math.min(angosto ? 4 : 10, datos.x.length) },
      y: { label: null, grid: true, domain: escY.domain(), range: escY.range(), tickFormat: ejeY },
      marks,
    });
    chart.querySelectorAll("[aria-label='y-grid'] line").forEach((l) => l.setAttribute("stroke", GRILLA));
    marco(el, opt, chart);
    if (angosto) {
      const ley = document.createElement("div");
      ley.className = "leyenda";
      ley.innerHTML = orden.slice().sort((a, b) => a.py - b.py).map((d) => {
        const e = datos.series.map((s, i) => [s, estilo(i, s.k)]).find(([s, e]) => (s.n || e.n || s.k) === d.nombre)[1];
        return `<span><svg viewBox="0 0 28 12" width="28" height="12"><line x1="0" y1="6" x2="28" y2="6" stroke="${e.c}" stroke-width="2.4"${e.dash ? ` stroke-dasharray="${e.dash}"` : ""}/>${simbolo(e)}</svg>${d.nombre}: ${f(d.y)}</span>`;
      }).join("");
      el.insertBefore(ley, el.querySelector(".nota") || el.querySelector(".src"));
    }
  }

  // ── balance — qué entra y qué sale de la matrícula en una transición (barras horizontales con signo) ────────
  // datos: {par: "2024→2025", entran: {etiqueta: n, …}, salen: {etiqueta: n, …}, cambio: n}
  // opt: {t, s, src, nota}.  Entradas a la derecha (+, azul), salidas a la izquierda (−, bermellón); el signo y
  // la cifra van escritos, así que el color nunca es la única pista.
  function balance(el, datos, opt) {
    opt = opt || {};
    const filas = [
      ...Object.entries(datos.entran).map(([n, v]) => ({ n, v, lado: "entra" })),
      ...Object.entries(datos.salen).map(([n, v]) => ({ n, v: -v, lado: "sale" })),
    ].filter((d) => d.v !== 0);
    const max = Math.max(...filas.map((d) => Math.abs(d.v)));
    const largoEtiq = Math.max(...filas.map((d) => FMT.signo(d.v).length));
    const w = ancho(el), margenIzq = Math.min(240, 16 + Math.max(...filas.map((d) => d.n.length)) * 7.1);
    const plotW = w - margenIzq - 20, aire = Math.min(0.45, (2 * (largoEtiq * 7.4 + 12)) / plotW);
    const lim = max / (1 - aire);
    const chart = Plot.plot({
      ...base(el, 46 + filas.length * 34), marginLeft: margenIzq, marginRight: 20, marginTop: 10, marginBottom: 30,
      x: { label: null, domain: [-lim, lim], grid: true, tickFormat: (d) => FMT.abrev(Math.abs(d)) },
      y: { label: null, domain: filas.map((d) => d.n), tickSize: 0 },
      marks: [
        Plot.barX(filas, { x: "v", y: "n", fill: (d) => (d.lado === "entra" ? ENTRA : SALE), insetTop: 5, insetBottom: 5 }),
        Plot.ruleX([0], { stroke: TINTA }),
        Plot.text(filas.filter((d) => d.v > 0), { x: "v", y: "n", text: (d) => FMT.signo(d.v), dx: 6, textAnchor: "start", fontSize: 12, fill: TINTA }),
        Plot.text(filas.filter((d) => d.v < 0), { x: "v", y: "n", text: (d) => FMT.signo(d.v), dx: -6, textAnchor: "end", fontSize: 12, fill: TINTA }),
      ],
    });
    chart.querySelectorAll("[aria-label='x-grid'] line").forEach((l) => l.setAttribute("stroke", GRILLA));
    const cuadra = filas.reduce((a, d) => a + d.v, 0) === datos.cambio;
    opt = { ...opt, nota: (opt.nota ? opt.nota + " " : "") +
      `Cambio ${datos.par}: <b>${FMT.signo(datos.cambio)}</b> = entradas − salidas${cuadra ? "" : " (⚠ no cuadra: revisa los datos)"}.` };
    marco(el, opt, chart);
  }

  // ── barras — una lista con nombre (instituciones, carreras, áreas), de mayor a menor ───────────────────────
  // datos: [{n, v, muestra_chica?}]   ·   opt: {t, s, src, nota, fmt}
  // Una barra con `muestra_chica` (menos de 30) va con relleno claro y borde: se cita, no se lee como tendencia.
  function barras(el, datos, opt) {
    opt = opt || {};
    const f = fmt(opt.fmt), filas = [...datos].sort((a, b) => b.v - a.v);
    const margenIzq = Math.min(300, 16 + Math.max(...filas.map((d) => String(d.n).length)) * 7.1);
    const largo = Math.max(...filas.map((d) => f(d.v).length));
    const w = ancho(el), plotW = w - margenIzq - 16, aire = Math.min(0.4, (largo * 7.4 + 12) / plotW);
    const chart = Plot.plot({
      ...base(el, 30 + filas.length * 30), marginLeft: margenIzq, marginRight: 16, marginTop: 6, marginBottom: 24,
      x: { label: null, axis: null, domain: [0, Math.max(...filas.map((d) => d.v)) / (1 - aire)] },
      y: { label: null, domain: filas.map((d) => d.n), tickSize: 0 },
      marks: [
        Plot.barX(filas, { x: "v", y: "n", fill: (d) => (d.muestra_chica ? "#cfe3f1" : ENTRA), stroke: ENTRA, insetTop: 4, insetBottom: 4 }),
        Plot.text(filas, { x: "v", y: "n", text: (d) => f(d.v) + (d.muestra_chica ? " *" : ""), dx: 6, textAnchor: "start", fontSize: 12, fill: TINTA }),
      ],
    });
    if (filas.some((d) => d.muestra_chica)) opt = { ...opt, nota: (opt.nota ? opt.nota + " " : "") + "* Menos de 30: se cita, no se lee como tendencia." };
    marco(el, opt, chart);
  }

  // ── fuentes — el bloque «Fuentes y método» del reporte, armado desde `procedencia` y los criterios ─────────
  // f: {fuentes: [{nombre, detalle}], universo, medidas: [{n, def}], divulgacion, quiebres: [..], cobertura,
  //     no_derivable: [..], elaborado, reproducibilidad, generado}
  // `elaborado` se ve («Elaborado por …», de para_el_lector.elaborado_por). `reproducibilidad` (las versiones de
  // procedencia.auditoria) va plegada en un <details>: es para quien quiera reproducir la cifra, no para el lector (MEE-81).
  function fuentes(el, f) {
    const li = (xs) => (xs && xs.length ? `<ul>${xs.map((x) => `<li>${x}</li>`).join("")}</ul>` : "<p>—</p>");
    el.classList.add("fuentes");
    el.innerHTML = `<h2>Fuentes y método</h2>
      <dl>
        <dt>De dónde salen los datos</dt><dd>${li((f.fuentes || []).map((x) => `<b>${x.nombre}</b>${x.detalle ? ` — ${x.detalle}` : ""}`))}</dd>
        <dt>A quién cuentan</dt><dd><p>${f.universo || "—"}</p></dd>
        <dt>Qué mide cada cifra</dt><dd>${li((f.medidas || []).map((m) => `<b>${m.n}</b>: ${m.def}`))}</dd>
        <dt>Qué se protege</dt><dd><p>${f.divulgacion || "—"}</p></dd>
        <dt>Quiebres de serie</dt><dd>${li(f.quiebres)}</dd>
        <dt>Cobertura</dt><dd><p>${f.cobertura || "—"}</p></dd>
        <dt>Lo que estos datos no dicen</dt><dd>${li(f.no_derivable)}</dd>
      </dl>
      <p class="versiones">${f.elaborado || ""}${f.generado ? ` · generado el ${f.generado}` : ""}</p>
      ${f.reproducibilidad ? `<details class="versiones"><summary>Para reproducir estas cifras</summary>${f.reproducibilidad}</details>` : ""}`;
  }

  window.Laminas = { serie: responsiva(serie), balance: responsiva(balance), barras: responsiva(barras), fuentes, DEP, FMT };
})();
