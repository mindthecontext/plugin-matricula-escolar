---
description: Responde sobre los resultados de los egresados de un colegio, una comuna, una región o Chile — «¿cómo le fue al Liceo X en la PAES?», «¿cuál es el NEM de la promoción 2025?», «¿cuántos egresados entraron a la educación superior?», «¿a qué universidades entran los alumnos de mi colegio?», «¿cómo se compara mi colegio con la comuna?». Cubre NEM, PAES (Competencia Lectora y Matemática 1), ingreso a la educación superior y a qué institución. NO ordena colegios por resultado. Para la matrícula, leer-un-colegio o leer-un-territorio.
---

# Leer los resultados

## Antes de la primera cifra

**Los resultados describen a los alumnos que rindieron, no la calidad del colegio.** Dependen de quiénes rinden y de la
composición del alumnado, y el DEMRE advierte en cada informe que no deben usarse para clasificar establecimientos.
La herramienta lo pide con «DILO EN LA RESPUESTA»: va en la respuesta, no sólo en las fuentes.

## El orden

1. **El colegio**: `buscar_colegio` para el RBD (confirma si hay homónimos, skill leer-un-colegio) y luego
   `resultados_colegio`. Varios colegios van en una sola llamada, separados por coma (hasta 20), y vuelven **en el
   orden pedido**: no es un orden de resultado.
2. **El territorio**: `resultados_territorio` con `comuna`, con `region` o sin ninguno para Chile, por dependencia.
3. Acota con `desde` y `hasta` (años de **promoción**) cuando baste un año.

## Cómo se lee cada bloque

- **Todo va por promoción**: el año en que egresaron de 4° medio. La PAES de la promoción 2025 es la que rindieron en
  diciembre de 2025, para la Admisión 2026. Di siempre cuál de las dos es.
- **`nem`**: el promedio de notas de enseñanza media (1 a 7) de los egresados, desde la promoción 2005.
- **`paes`**: Competencia Lectora (`cl`), Matemática 1 (`m1`) y su promedio (`cl_m1`), desde la promoción 2022; cada
  prueba con su propio `n`. Reproduce los informes por colegio del DEMRE.
- **`rinden`**: qué proporción de la promoción rindió. Va con todo puntaje que compares: un colegio donde rinde el
  95 % y otro donde rinde el 60 % no son comparables por el puntaje solo.
- **`ingreso_es`**: de la promoción, cuántos se matricularon en pregrado el año siguiente (`directo`, desde la
  promoción 2006) y en alguno de los tres siguientes (`a_3_anios`, hasta la promoción 2023), en universidad o en
  técnico-profesional (IP y CFT juntos: desde 2026 el CFT INACAP se informa como IP INACAP).
- **`destino_es`**: a qué institución entraron, con nombre. En un colegio va **por ventana de cinco promociones**, que
  no se corta con `desde` y `hasta` y suma sólo las promociones con ingreso publicado (`promociones`); en un
  territorio, por promoción, con las `top` mayores y el resto en `mas_instituciones`.
- **`contexto`** (en el colegio): la comuna, la misma dependencia en la comuna y en el país, el país y el % de
  prioritarios de la media. Úsalo para situar al colegio, con el `rinden` de cada uno, sin convertirlo en un puesto.

## Lo que se dice junto a la cifra

- **La tasa del saber es la de los jóvenes.** Si das una tasa de ingreso del país o de un territorio, o la comparas
  con una oficial, di que el SIES publica otra más baja (50,4 % para la promoción 2025) porque incluye a los
  egresados de adultos, y **di cuál cifra es del saber y cuál del SIES**. La herramienta trae el aviso; repítelo.
- **«menos de 5» y «todos menos de 5»** protegen a los alumnos de un colegio chico: «entraron todos salvo menos de 5»,
  no «todos». No es cero ni es todos.
- **Lo suprimido viene rotulado**: el reparto universidad/técnico-profesional con `suprimido_por_divulgacion`, y los
  años de PAES de un colegio con NEM pero sin rendidores publicables como `sin_publicar` («ninguno o menos de 5»).
  Dilo así; no lo leas como cero.
- **`muestra_chica`** (menos de 30): se cita, no se interpreta como tendencia.
- **Un colegio sin resultados** va en `sin_resultados`, y el aviso dice cuál de los dos motivos aplica: o el colegio
  está en el saber y no tuvo egresados de 4° medio de jóvenes con NEM en el período (por ejemplo, si sólo imparte
  básica o es de adultos), o el RBD no está. Da el motivo del aviso, no otro. Si acotaste los años, prueba sin acotar
  antes de decir que no tiene. No se le atribuyen las cifras de la comuna.
- **Matricularse no es seguir estudiando ni titularse**, y el saber no dice a qué carrera, sólo a qué institución.

## Lo que nunca se hace

- **Ordenar colegios por resultado o por destino**, ni con una herramienta ni a mano. No pidas 20 colegios para
  ordenarlos por puntaje, por tasa de ingreso o por cuántos entran a una universidad: sería un ranking, y el saber lo
  declara no derivable. Si la persona compara colegios que ella eligió, da las cifras en el orden en que los nombró,
  cada una con su `rinden`.
- **Listar dependencias por puntaje.** Usa el orden de la herramienta (público, particular subvencionado, particular
  pagado, administración delegada), no el del resultado.
- **Comparar con la PSU.** La PAES empieza en la promoción 2022; la PSU tiene otra escala.
- **Completar lo que no está**: SIMCE, percentil, ranking de notas, pruebas electivas (Matemática 2, Historia,
  Ciencias), NEM por rama, la carrera de destino, la titulación.

## Cierra con las fuentes

Desde `procedencia` y `procedencia.resultados`: el NEM es del Mineduc, la PAES del DEMRE, y el ingreso y el destino
de la Matrícula de Educación Superior (SIES); con la versión de la evidencia (`resultados@4`). Nunca de memoria.
