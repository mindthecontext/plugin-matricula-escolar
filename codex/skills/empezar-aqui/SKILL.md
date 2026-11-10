---
name: empezar-aqui
description: Orienta a quien acaba de instalar Matrícula Escolar y no sabe qué pedirle — «¿qué puedes hacer?», «¿qué datos tienes?», «¿por dónde empiezo?», «ayuda», «¿sirve para mi colegio?», «¿qué hay de nuevo?». Presenta lo que este saber responde sobre los colegios de Chile, con la cobertura consultada en vivo, y dice desde el principio lo que NO cubre. NO es la puerta para una consulta concreta sobre un colegio o una comuna.
---

# Empezar aquí

Quien llega no sabe qué preguntar. El trabajo de esta puerta es **mostrarle el terreno en su idioma** y, en la misma
respuesta, decirle dónde termina: que no descubra la frontera cuando ya confiaba en una cifra.

## Consulta la cobertura en vivo, no la recites

Llama `listar_cobertura()` antes de responder. De ahí salen los años, cuántas comunas y colegios hay, las reglas
vigentes y la lista de lo que no es derivable. Las cifras cambian cuando llega una evidencia nueva, y un número
memorizado envejece mal.

## Lo que este saber responde

Qué pasa con los alumnos de cada colegio de Chile entre 2004 y 2026, y cómo les va al egresar, desde los registros
públicos del Mineduc y del DEMRE:

- **Un colegio**: cuántos alumnos tiene por grado y año, qué proporción son prioritarios en cada nivel (desde 2016),
  y cada año quién llega y quién se va: quién sigue, quién egresa, quién deja de aparecer, quién se traslada y a qué
  tipo de colegio.
- **Los colegios con nombre**: de qué colegios llegan sus alumnos y a cuáles se van, por ventanas de cinco años.
- **Una comuna**: cómo se reparte su matrícula entre público, subvencionado y pagado; los pares de colegios entre
  los que más alumnos se mueven; qué colegios reciben y pierden más traslados en un año; qué colegios cerraron o
  fueron absorbidos.
- **Una región o Chile entero**: la matrícula exacta por dependencia, nivel y grado, la especial y los prioritarios.
- **Una red**: todos los colegios de un mismo sostenedor, a partir de uno de ellos.
- **La asistencia**, de un colegio, una comuna, una región o Chile, en 2015–2019 y 2022–2025: la tasa de asistencia y
  cuántos alumnos tienen inasistencia reiterada, grave o crítica, por nivel; en el territorio, también por dependencia,
  sexo y prioritario. Sin el particular pagado, que la base del Mineduc no incluye.
- **Gráficos y reportes**: láminas de la matrícula, el ingreso a la educación superior, el tramo alto o el balance de la
  matrícula, legibles para daltónicos y con las fuentes y el método al pie (skill graficar-y-reportar).
- **Los resultados de cada promoción**, de un colegio, una comuna, una región o Chile: el NEM (desde la promoción
  2005), la PAES de Competencia Lectora y Matemática 1 (desde la promoción 2022), cuántos entraron a la educación
  superior el año siguiente y en los tres siguientes, a qué universidades, institutos y centros técnicos, con nombre, y
  a qué carreras y áreas, con cuántas carreras suman la mitad de los egresados de un colegio.
  Y dónde están los alumnos de mejor puntaje: cuántos de cada colegio y territorio quedan en el 10 % y el 20 % superior
  de la PAES del país, y cuántos de ellos son prioritarios.

Sirve igual a quien dirige un colegio, a un sostenedor con varios, a un SLEP, a un investigador o a una familia: no
hay datos reservados, todos ven lo mismo, y el foco lo pone la pregunta.

## Di la frontera en la primera respuesta

No al final, no si preguntan. Empieza por las tres que más se preguntan:

- **no hay matrícula por sexo**, pero el ingreso de los egresados a la educación superior **sí** va por sexo, por
  prioritario, por dependencia y por su posición en el colegio (`resultados_territorio` con `cruce`);
- **del ingreso a la educación superior dice cuántos entran, a qué institución y a qué carrera, pero no qué carrera en
  qué institución** (eso es otro saber, Matrícula de Educación Superior), ni si siguieron estudiando o se titularon. Y su tasa es la de los egresados
  jóvenes: el SIES publica una más baja porque incluye la educación de adultos;
- **«particular» son dos cosas**: particular pagado y particular subvencionado. Aclara cuál, o responde los dos.

Y una cuarta, si preguntan por párvulos: **la parvularia es parcial**. Los jardines de JUNJI y de Integra no están en
la Matrícula Escolar del Mineduc, así que el saber no sirve para la matrícula total de parvularia de un territorio.
Las escuelas de lenguaje sí están, dentro de la educación especial, que el saber entrega aparte de la regular.

Y el resto de lo que **no** trae:

- de los **resultados**: el SIMCE, la PSU (la PAES empieza en la promoción 2022 y no se compara con ella), las pruebas
  electivas (Matemática 2, Historia, Ciencias), el percentil y el ranking;
- **por qué** un colegio gana o pierde alumnos (la dinámica por colegio todavía no está compilada);
- matrícula por **género**, postulación SAE, valor agregado;
- el **nombre del sostenedor**: sólo su RUT;
- **asistencia del particular pagado y de adultos**: la asistencia (`asistencia`, 2015–2019 y 2022–2025) no los trae;
- **proyecciones por colegio, comuna o región**: no las hay. Para Chile sí hay una estimación de la matrícula hasta
  2050 (`proyeccion_matricula`), hecha con la proyección de población del INE: se presenta como estimación con
  supuestos, nunca como pronóstico;
- cifras de **menos de 5 alumnos** en la educación especial y en lo que les pasa a los alumnos (llegadas, salidas,
  egresos, traslados): van como «menos de 5» o juntas en «otros», y eso no significa cero: es de 1 a 4. No oculta a nadie, evita imprimir cifras de una a cuatro personas, y no se despeja restando. La matrícula
  regular, en cambio, va exacta: es la misma que el Mineduc publica en sus datos abiertos.

La lista completa y exacta viene en `no_derivable` de `listar_cobertura()`: úsala en vez de recitar ésta.

## Cómo se lee lo que entrega, desde la primera respuesta

Tres ideas que quien pregunta tiene que oír antes de la primera cifra con nombre:

- **Un movimiento de alumnos no es una preferencia.** Que muchos alumnos pasen de un colegio a otro puede deberse a
  un cierre, a una absorción o a que el primero no tiene el nivel siguiente. El saber marca los cierres y absorciones,
  y la respuesta los dice.
- **Se describe, no se califica.** Ningún colegio es «el preferido» ni «pierde frente a» otro.
- **Los resultados describen a los alumnos que rindieron, no la calidad del colegio.** Dependen de quiénes rinden y
  de la composición del alumnado: el saber no ordena colegios por puntaje ni por adónde entran sus egresados.

Los pares de colegios con nombre aparecen desde 5 alumnos por ventana; los de menos de 30 se citan con su cifra y no
se leen como tendencia.

## Por dónde entrar a una pregunta concreta

- **Un colegio**: `buscar_colegio` primero, para obtener su RBD y confirmar cuál es si hay varios con el mismo nombre.
- **Una lista de colegios** («¿qué colegios particulares hay en Temuco?», «¿los más grandes de Puente Alto?»):
  `colegios_comuna`, que filtra por dependencia, nivel y estado y ordena por matrícula. No busques con palabras sueltas.
- **Una comuna**: `panorama_comuna`, que trae la matrícula por dependencia y por nivel, la educación especial aparte y
  los egresos de cada año.
- **Una región o Chile entero**: `panorama_region` o `panorama_pais`.
- **Un sostenedor**: `colegios_del_sostenedor`.
- **Resultados** (NEM, PAES, el tramo alto, ingreso a la educación superior y a qué institución): `resultados_colegio` para uno o
  varios colegios, `resultados_territorio` para una comuna, una región o Chile.

Antes de interpretar, `obtener_criterios()`; si una pregunta toca una frontera, `preguntas_abiertas()`.

Para leer bien cada tipo de pregunta hay una skill: leer-un-colegio, leer-un-territorio, leer-una-red,
leer-un-mercado y leer-los-resultados.

Una ficha con muchos colegios y toda la serie 2004–2026 es pesada: si basta un año, pide `desde` y `hasta` iguales. Los panoramas y el cubo de egresados, sin años, traen los últimos cinco: para la serie completa, `desde=2004`.

## Qué hay de nuevo, y qué versión responde

Si preguntan si hay un **límite de uso o un costo**: en staging, quien no tiene asiento usa un cupo gratuito de consultas,
y la regla vigente está en la entrada más reciente de `ver_cambios()` que hable del cupo. Léela ahí; no la inventes ni la
des por apagada.

Si preguntan qué cambió o qué versión está activa, llama `ver_cambios()` y responde con lo que trae. No lo
reconstruyas de memoria; si el registro no tiene entrada para la versión en curso, dilo así.

## Cierra ofreciendo una pregunta concreta

Una genérica no sirve. Ofrece dos o tres pegadas a quien pregunta: su colegio, su comuna, su red. Y una que muestre
lo que sólo este saber tiene, por ejemplo *«¿de qué colegios llegan los alumnos de 1° medio del Liceo X, y cuántos
vienen de colegios que cerraron?»* o *«¿cuántos egresados del Liceo X entraron a la educación superior, y a qué
instituciones?»*.
