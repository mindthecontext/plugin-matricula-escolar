---
description: Arma gráficos y reportes con los datos de Matrícula Escolar, con las fuentes y el método a la vista — «grafícame la matrícula por dependencia», «hazme un gráfico del ingreso a la educación superior», «arma un reporte de mi comuna», «quiero una lámina para un hilo», «muéstrame la caída de la matrícula en un gráfico». Produce una página HTML con las láminas del saber (Observable Plot, legibles para daltónicos) y un bloque de fuentes y método construido desde `procedencia`. Para responder en texto sin gráfico, las otras skills.
---

# Graficar y reportar

Un gráfico de este saber es una afirmación pública. Tiene que poder sostenerse ante alguien que no confía en él: cada
cifra sale de una herramienta, cada lámina dice qué mide y sobre quién, y el reporte cierra con de dónde salen los datos
y qué no dicen. **El formato es fijo; el contenido lo dictan los datos.**

## Cómo se arma

1. **Trae los datos con las herramientas** (las mismas de las otras skills), en esta misma sesión. Nunca una cifra de
   memoria ni transcrita de otro lado.
2. **Usa la plantilla y las láminas del saber, sin rediseñarlas.** Están junto a esta skill:
   - `assets/plantilla.html`: la página. Reemplaza sólo sus cuatro marcas: `__TITULO__`, `__BAJADA__`,
     `__LAMINAS_JS__` (pega ahí el contenido de `assets/laminas.js`) y `__REPORTE__` (el JSON del reporte).
   - `assets/laminas.js`: las láminas, ya probadas. Colores, formas, trazos, formato de números y rótulos están
     resueltos ahí.
3. **Arma el JSON del reporte** (abajo) y entrega la página como artifact o archivo HTML. Las láminas se dibujan con
   JavaScript: un visor que muestra el archivo sin ejecutar scripts lo verá en blanco. Ábrelo en un navegador o publícalo
   como artifact.

El JSON tiene esta forma:

```json
{"hallazgos": [{"texto": "…", "lamina": {"tipo": "serie", "datos": {…}, "opt": {…}}, "no_implica": "…"}],
 "fuentes": {…}}
```

Cada hallazgo es una tarjeta: una frase con la cifra principal, la lámina y lo que la cifra **no** implica.

## Las láminas

Las tres llevan siempre `opt.t` (título: el QUÉ, frase nominal breve), `opt.s` (subtítulo: unidad, universo y años) y
`opt.src` (fuente: «Fuente: …», armada desde `procedencia.para_el_lector.fuentes`: institución y conjunto de datos, sin versiones).

| Tipo | Para qué | `datos` |
|---|---|---|
| `serie` | Una o varias series anuales: matrícula, ingreso, tramo alto, colegios. | `{x: [años], series: [{k: "publico", v: [...]}]}` |
| `balance` | Qué entra y qué sale de la matrícula en una transición. | `{par: "2024→2025", cambio, entran: {etiqueta: n}, salen: {etiqueta: n}}` |
| `barras` | Una lista con nombre, de mayor a menor: instituciones, carreras, áreas. | `[{n, v, muestra_chica?}]` |

Opciones de `serie`:
- `fmt`: `"miles"`, `"pct"` (las herramientas dan proporciones: 0,513), `"pct0"` o `"decimal"`;
- `y0: true`, para que el eje parta en cero;
- `quiebres: [{x, rotulo}]`, una línea punteada con su rótulo.

En `serie`, cada dependencia se pasa con su clave (`publico`, `ps`, `pp`, `ad`, `todas`) y sale siempre con el mismo
color, forma y trazo. Las series que no son dependencias llevan `n` (su nombre).

**Daltonismo.** Ninguna serie se distingue sólo por color. Cada una lleva un color Okabe-Ito, una forma de marcador, un
trazo y su nombre escrito al final de la línea (en celular, una leyenda debajo con los tres). Si agregas algo a una
lámina, respeta eso.

**Qué lámina para qué:**
- Una serie de matrícula o de colegios por dependencia → `serie` con `fmt: "miles"` y `y0: true`.
- Una tasa por dependencia (ingreso directo, el 10 % superior) → `serie` con `fmt: "pct"`.
- «¿Por qué baja la matrícula?» → `balance`, con los datos de `colegios_y_cierres.balance`.
- Adónde entran los egresados (`destino_es`, `carreras_es`, `areas_es`) → `barras`. Las de menos de 30 llevan
  `muestra_chica`, y la lámina las marca.

## El bloque «Fuentes y método»

Va siempre, al final del reporte. Se construye desde `procedencia.para_el_lector` y `obtener_criterios`, nunca de memoria, y lo lee alguien de fuera del laboratorio: **ningún identificador con «@»** en el texto visible.

| Campo | De dónde sale |
|---|---|
| `fuentes` | `procedencia.para_el_lector.fuentes`: institución, conjunto de datos, período, fecha de los datos y enlace. Sólo las de los bloques que usa el reporte (`por_bloque` en los resultados). |
| `universo` | `universo` de la respuesta, en palabras. Si hay resultados, agrega que son de los jóvenes (sin adultos). |
| `medidas` | Una línea por cada medida graficada, con la definición de su criterio (`obtener_criterios`): matrícula regular, ingreso directo, 10 % superior, balance… |
| `divulgacion` | `procedencia.para_el_lector.reglas_en_lenguaje_llano`: los totales de territorio son exactos; en un colegio, una cifra de 1 a 4 es «menos de 5», que no es cero, y no se despeja. |
| `quiebres` | Los que tocan los años del reporte: el hueco de 2008 (faltan 31 colegios), la PAES desde la promoción 2022 (la PSU no es comparable), la región actual de cada comuna para toda la serie, la pandemia en 2020–2021 si hay ingreso. |
| `cobertura` | Sin educación de adultos ni jardines de JUNJI e Integra. |
| `no_derivable` | Lo que el lector podría creer que el gráfico dice y no dice: por qué cambia o cierra un colegio, la nacionalidad, si los que entran a la educación superior siguen o se titulan, la calidad de un colegio. |
| `elaborado` | `procedencia.para_el_lector.elaborado_por`. Se ve al pie. |
| `reproducibilidad` | `procedencia.auditoria` (las versiones: evidencia, agregados, resultados, cierres). La plantilla la pliega en un `<details>`; nunca va en `elaborado` ni en el texto visible. |

## Reglas

- **Cifras interpoladas, no transcritas.** Todo número del texto de una tarjeta sale de la respuesta de una
  herramienta en esta sesión.
- **Un superlativo se verifica antes de escribirlo.** «Máximo», «mínimo», «primera vez», «el mayor»: recorre la serie
  completa (pide `desde=2004`) y míralo. Si no lo verificaste, no lo escribas.
- **Ningún gráfico ordena colegios por resultado, carrera, caída de matrícula ni concentración.** Tampoco con «sólo
  los cinco primeros». Un gráfico de colegios con nombre va en el orden en que el usuario los nombró.
- **Un «menos de 5» no se grafica como cifra ni se despeja.** Si una serie de un colegio tiene huecos de «menos de 5»,
  la lámina los deja vacíos y la nota lo dice.
- **El `no_implica` de cada tarjeta viene de la lectura de la herramienta** (`_leer_primero`): la dependencia no es el
  ingreso de la familia; matricularse no es seguir estudiando; el tramo alto no mide la calidad del colegio; «sin
  egresar» no es deserción.
- **Peso.** `panorama_pais` y `panorama_region` con `desde=2004` pesan mucho: pide sólo los años del gráfico.
- **Revisa la página antes de entregarla.** Cada lámina dibujó algo, ningún rótulo se sale del gráfico y las cifras del
  texto son las del gráfico.

## Cierra con las fuentes

La página cierra con el bloque de fuentes y método. Si además respondes en texto, cierra con las mismas fuentes, desde `procedencia.para_el_lector`.
