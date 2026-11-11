---
description: Responde sobre los resultados de los egresados de un colegio, una comuna, una región o Chile — «¿cómo le fue al Liceo X en la PAES?», «¿cuál es el NEM de la promoción 2025?», «¿cuántos egresados entraron a la educación superior?», «¿a qué universidades entran los alumnos de mi colegio?», «¿qué carreras eligen?», «¿se concentran en pocas carreras?», «¿cómo se compara mi colegio con la comuna?». También «¿dónde están los estudiantes con mejores puntajes?», «¿cuántos de mis alumnos quedan en el 10 % superior?», «¿cuántos prioritarios llegan a los mejores puntajes?», «¿qué liceos públicos llevan prioritarios a puntajes altos?». Y el ingreso cruzado: «¿entran más las mujeres o los hombres?», «¿cómo les va a los prioritarios?», «¿y a los mejores de cada colegio?», «¿cuántos se van a estudiar a otra región?». Y lo que pasa con quienes salen de 8° básico: «¿los que egresaron de la escuela terminaron la media?», «¿cuántos la terminaron en adultos?», «¿cuántos llegaron a la educación superior?». Cubre NEM, PAES (Competencia Lectora y Matemática 1), el tramo alto de la PAES, ingreso a la educación superior, a qué institución y a qué carrera. NO ordena colegios por resultado. Para la matrícula, leer-un-colegio o leer-un-territorio.
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
- **`carreras_es`** y **`areas_es`**: a qué carrera y a qué área del conocimiento entraron (ingreso directo). La
  carrera es la **genérica** del SIES, igual en cualquier institución, con las especialidades de Ingeniería Civil y su
  plan común juntas como «Ingeniería Civil». En un colegio van por ventana de cinco promociones, como `destino_es`; en
  un territorio, por promoción con las `top` mayores. Cada una desde 5 alumnos y el resto en «otras».
- **La ventana de un colegio suma sus promociones con 5 o más que ingresan** (`promociones`). Desde divulgacion@3 entran
  también aquellas donde entraron casi todos: el Colegio Tabancura suma sus cinco promociones de 2021–2025. Queda fuera
  una promoción donde entraron menos de 5, o que tuvo menos de 5 egresados. Si falta alguna, la herramienta lo avisa:
  **di cuántas promociones suma la ventana** y no presentes sus cifras como de las cinco.
- **`concentracion`** (en el colegio, sólo con 30 o más que ingresan en la ventana): cuántas carreras suman la mitad
  de los que ingresan (`carreras_que_suman_la_mitad`) y cuántas distintas. Pocas es concentración; muchas, dispersión.
- **`tramo_alto`**: la **posición** de los alumnos en su promoción, no su puntaje: cuántos quedan en el 10 % y el 20 %
  superior de todos los jóvenes del país que rinden (los cortes, en `cortes_tramo_alto`). Se compara entre años aunque
  la escala cambie. En un colegio, por promoción (`top10`, `top20`); los prioritarios en el 20 %, sólo en la ventana
  2022–2025 (`tramo_alto_prioritarios`). En un territorio, exacto: de cuántos colegios vienen y cuántos prioritarios
  llegan (`prioritarios_top20` sobre `prioritarios_que_rinden`), y `distribucion_50`.
- **`destacar`** (`resultados_territorio` con `destacar=True`): los colegios con financiamiento público que llevan 5 o
  más prioritarios al 20 % superior en 2022–2025. En una comuna, por nombre; en una región, cuántos por comuna; en Chile,
  cuántos por región. Es para mostrar que ese logro está repartido en muchos liceos. Es de **financiamiento público**,
  no sólo de colegios públicos: si preguntan por «públicos», di que incluye particulares subvencionados y de
  administración delegada, y cuántos son de cada uno (en Santiago, 11 públicos, 28 subvencionados y 4 de administración
  delegada).
- **`contexto`** (en el colegio): la comuna, la misma dependencia en la comuna y en el país, el país y el % de
  prioritarios de la media. Úsalo para situar al colegio, con el `rinden` de cada uno, sin convertirlo en un puesto.

## El cubo de egresados (cruces)

Para «¿cómo les va a los prioritarios?», «¿entran más las mujeres?», «¿qué pasa con los mejores de cada colegio?» o «¿se
van a estudiar a otra región?»: `resultados_territorio` con `cruce` o `region_estudio=True`. Con esos parámetros la
respuesta trae sólo el cubo, y pesa poco.

- **Los cortes:** `dependencia`, `sexo`, `prioritario` (desde 2016) y `posicion`. Combínalos con «×»: por ejemplo
  `cruce="prioritario×posicion"`. País y región aceptan cualquier combinación; una comuna, hasta dos.
- **Las proporciones ya vienen sobre los egresados:** `proporcion` (directo), `proporcion_universidad`,
  `proporcion_tecnico_profesional` y `proporcion_a_3_anios`. Úsalas; no dividas a mano, y nunca por `directo`.
- **En la comuna, ninguna cifra describe a un solo colegio.** Si la respuesta trae `promociones_sin_cubo` (la comuna
  tuvo un solo colegio con egresados), `promociones_sin_cruces_con_dependencia` o `dependencias_en_otras` («otras»
  junta la dependencia de un solo colegio con la de menos colegios de las demás, que puede tener varios: di cuáles van
  juntas y, con `otras_por_que`, cuál es la de un solo colegio y cuál la compañera, con sus colegios; no digas que todas
  son de un solo colegio), dilo y ofrece la región. El «menos de
  5» no oculta a nadie, evita imprimir cifras de una a cuatro personas: no lo despejes restando.
- **`posicion` es el decil de NEM dentro del colegio.** `top10` es el 10 % superior **de su colegio**, no del país (ese
  es el tramo alto de la PAES). Dilo así, y no compares colegios con ella.
- **Describe, no explica.** En 2025, el 10 % superior de cada colegio entra igual sea prioritario o no (73,2 % y 69,7 %
  directo), y la brecha está en el resto del curso. El saber no mide becas, PACE ni la decisión de cada alumno: no
  atribuyas la diferencia a ninguna de ellas.
- **«sin_dato»** son egresados sin sexo o sin condición SEP en el registro, o promociones antes de 2016 en `prioritario`.
- **`region_estudio`** (región y Chile): cuántos de los que ingresan estudian en la región de su colegio y adónde van.
  La región del colegio es la actual; la de la sede, la que registró el SIES ese año: antes de 2018 una sede que hoy
  está en Ñuble figura en el Biobío.
- **Para graficarlo**, la skill graficar-y-reportar: una `serie` por cruce, con `fmt: "pct"`.

## Después de 8° básico

Para «¿qué pasó con los que egresaron de la escuela?», sobre todo en las escuelas que terminan en 8°:
`despues_de_octavo`, de un colegio, una comuna, una región o Chile. Sigue a los alumnos que salen de 8° (cohortes
2004–2017, en tres ventanas) y dice si obtuvieron la licencia de media como jóvenes o como adultos, y si se
matricularon en la educación superior.

- **Terminar la media es `lic_joven` más `lic_adulto`.** Di las dos rutas por separado y la suma: la de adultos es
  grande (en el país, entre el 10 % y el 13 % según la ventana), y sin ella se subestima cuántos terminan.
- **Los cinco desenlaces suman el 100 %**; la licencia a tiempo, la superior y la universidad van aparte. `sin_registro`
  no es deserción: pudo emigrar o fallecer. La superior es haberse matriculado, no haberse titulado.
- **El horizonte es fijo** (licencia hasta 8 años después, superior hasta 9): por eso las ventanas se comparan entre sí.
  Di de qué ventana es cada cifra; la de 2014–2017 tiene cuatro cohortes.
- **El colegio, sólo con 30 alumnos o más en la ventana.** Si viene `publicable: false`, di su número de alumnos y usa el
  `comparador` (la comuna en la misma zona) diciendo que es la comuna, no el colegio. Con `contexto`, compara con la
  comuna, la región y el país en la misma zona.
- **En una escuela sin media, el paso a 1° medio no es un traslado**: todos sus alumnos se van a otro colegio. Si la
  pregunta viene de los flujos, ésta es la herramienta que dice cómo les fue.
- **No ordenes colegios ni califiques**: la trayectoria depende de quiénes son los alumnos y de la oferta de la zona.

## Lo que se dice junto a la cifra

- **La tasa del saber es la de los jóvenes.** Si das una tasa de ingreso del país o de un territorio, o la comparas
  con una oficial, di que el SIES publica otra más baja (50,4 % para la promoción 2025) porque incluye a los
  egresados de adultos, y **di cuál cifra es del saber y cuál del SIES**. La herramienta trae el aviso; repítelo.
- **«menos de 5» es de 1 a 4**, no cero. Desde divulgacion@3 («el agregado manda», decidida por Ernesto) toda cifra de
  5 o más se publica aunque al restarla quede un grupo chico: «ingresan 92 de 95» va con su cifra, y en el reparto
  universidad / técnico-profesional cada parte va con su cifra o como «menos de 5».
- **Un «menos de 5» no se despeja.** «Ingresan 134, a universidad 131» deja calcular la parte técnico-profesional, y
  unas «otras» de 1 a 4 salen restando de lo que ingresa. Aunque la cuenta sea posible, esa cifra no se da. Si el
  usuario pide la cuenta, explica que el saber no publica grupos de 1 a 4.
- **Los años de PAES sin rendidores publicables** van como `sin_publicar` («ninguno o menos de 5»). Dilo así; no lo leas
  como cero.
- **`muestra_chica`** (menos de 30): se cita, no se interpreta como tendencia.
- **Un colegio sin resultados** va en `sin_resultados`, y el aviso dice cuál de los dos motivos aplica: o el colegio
  está en el saber y no tuvo egresados de 4° medio de jóvenes con NEM en el período (por ejemplo, si sólo imparte
  básica o es de adultos), o el RBD no está. Da el motivo del aviso, no otro. Si acotaste los años, prueba sin acotar
  antes de decir que no tiene. No se le atribuyen las cifras de la comuna.
- **Matricularse no es seguir estudiando ni titularse.** La institución (`destino_es`) y la carrera (`carreras_es`) van
  por separado: el saber no dice qué carrera en qué institución. No las cruces.
- **La concentración no es calidad ni vocación.** Que la mitad de los egresados de un colegio entre a 2 carreras y en
  otro a 10 describe adónde entraron; depende del alumnado, del tamaño y de la oferta cercana.
- **El tramo alto dice dónde están los alumnos de mejor puntaje, no qué colegio es mejor.** Un colegio grande aporta más
  alumnos al tramo sin tener mejor promedio, y uno chico no puede aportar muchos: para comparar, la proporción
  (`top10` sobre los que rindieron CL y M1, `rinden.rindieron_cl_y_m1`) con la de su comuna y el país en `contexto`
  (`en_el_10`, `en_el_20`, sobre la misma base).
- **Los prioritarios tienen brecha.** Si el puntaje no dependiera de ser prioritario, el 20 % de ellos estaría en el
  20 % superior; en el país llega cerca del 11 %, y casi no cambia entre 2022 y 2025. Dilo con la cifra.
- **El universo es el de los jóvenes.** Si alguien cita que «cerca de 18 mil» están en el 10 % superior, es la cuenta
  con todos los que rinden, incluidos los egresados de adultos (18.186 en la promoción 2025); el saber cuenta 17.476.

## Lo que nunca se hace

- **Ordenar colegios por resultado o por destino**, ni con una herramienta ni a mano. No pidas 20 colegios para
  ordenarlos por puntaje, por tasa de ingreso o por cuántos entran a una universidad: sería un ranking, y el saber lo
  declara no derivable. Si la persona compara colegios que ella eligió, da las cifras en el orden en que los nombró,
  cada una con su `rinden`.
- **Ordenar colegios por cuántos aportan al tramo alto**, ni armar «los colegios con más alumnos en el 10 % superior»
  pidiendo varios. Tampoco ordenar `destacar` por resultado ni decir que un colegio que no está es peor: puede tener
  menos de 5 prioritarios en el tramo, menos alumnos o haber sido pagado algún año.
- **Listar dependencias por puntaje.** Usa el orden de la herramienta (público, particular subvencionado, particular
  pagado, administración delegada), no el del resultado.
- **Comparar con la PSU.** La PAES empieza en la promoción 2022; la PSU tiene otra escala.
- **Completar lo que no está**: SIMCE, percentil, ranking de notas, pruebas electivas (Matemática 2, Historia,
  Ciencias), NEM por rama, la carrera en cada institución, la titulación.

## Cierra con las fuentes

Desde `procedencia` y `procedencia.resultados`: el NEM es del Mineduc, la PAES del DEMRE, y el ingreso y el destino
de la Matrícula de Educación Superior (SIES), y los prioritarios del tramo alto de Alumnos SEP (Mineduc); con la versión que trae `procedencia.resultados.version`. Nunca de memoria.
