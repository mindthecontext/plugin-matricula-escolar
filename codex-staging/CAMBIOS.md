# Cambios · Matrícula Escolar

<!-- Generado al derivar el paquete desde cambios.yaml. No editar a mano. -->

Qué cambia para quien usa este saber, versión por versión. Lo que corre de verdad el servicio lo dice su herramienta `ver_cambios`; esto es la copia del paquete.

## v0.24.1 · 2026-11-11

Lo que pasa después de 8° básico se lee con menos cuentas a mano. Cada cifra trae ya sumados cuántos terminaron la media (como jóvenes o como adultos) y cuántos quedaron sin licencia a los ocho años, que es lo más cercano a «cuántos desertaron» que estos datos permiten decir, como un techo y no como deserción. Y el asistente ya no estima márgenes de error por su cuenta, no explica las tendencias con lo que los datos no traen ni afirma la composición de un grupo sin un corte que la muestre. Los datos no cambian.

- Herramientas: `asistencia`, `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `despues_de_octavo`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@4+directorio@3+agregados@3+resultados@11+cierres@2+proyecciones@2+asistencia@3+trayectoria8@1`

## v0.24.0 · 2026-11-11

Qué pasa con quienes salen de 8° básico. Una herramienta nueva, despues_de_octavo, sigue a los alumnos de cada colegio, comuna, región y del país que salieron de 8° entre 2004 y 2017, y dice cuántos obtuvieron la licencia de media como jóvenes, cuántos en la educación de adultos y cuántos se matricularon en la educación superior y en una universidad, con el mismo horizonte para todos (ocho años para la licencia, nueve para la superior). Va en tres ventanas de cohortes, con cortes rural y urbano, por dependencia y por escuelas con y sin media. Un colegio muestra sus cifras con 30 alumnos o más en la ventana; si no, se compara con su comuna en la misma zona. En las escuelas que terminan en 8°, el paso a 1° medio deja de verse sólo como un traslado: ahora se sabe cómo les fue.

- Herramientas: `asistencia`, `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `despues_de_octavo`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios` · aparece `despues_de_octavo`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@4+directorio@3+agregados@3+resultados@11+cierres@2+proyecciones@2+asistencia@3+trayectoria8@1` · antes `evidencia@4+directorio@3+agregados@3+resultados@11+cierres@2+proyecciones@2+asistencia@3`

## v0.23.1 · 2026-11-11

Los gráficos de los reportes ocupan el ancho de la página. Antes medían el espacio una sola vez, al dibujarse: si el reporte se abría en un panel angosto, el gráfico quedaba en formato de celular, en un tercio de la tarjeta, aunque la página se ensanchara después. Ahora cada gráfico se vuelve a dibujar cuando cambia su espacio. Los datos no cambian.

- Herramientas: `asistencia`, `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@4+directorio@3+agregados@3+resultados@11+cierres@2+proyecciones@2+asistencia@3`

## v0.23.0 · 2026-11-10

Llega la matrícula 2026, publicada por el Mineduc el 28 de octubre, con el Directorio 2026: el saber cubre ahora 2004–2026. Sin años, los panoramas traen 2022–2026; los colegios y la captación de una comuna van por defecto en 2026; los cierres usan el estado del Directorio 2026; y la última ventana de corredores pasa a 2021–2026. La matrícula futura se estima ahora con 2026 como año observado (2027–2050): 1° básico baja a unos 123 mil alumnos en 2035. En 2026 no hay prioritarios, porque la base SEP de ese año aún no se publica: el saber lo dice en vez de mostrar cero. Los resultados siguen con la promoción 2025 y la asistencia con 2025, los últimos publicados.

- Herramientas: `asistencia`, `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@4+directorio@3+agregados@3+resultados@11+cierres@2+proyecciones@2+asistencia@3` · antes `evidencia@3+directorio@2+agregados@2+resultados@10+cierres@1+proyecciones@1+asistencia@2`

## v0.22.0 · 2026-11-10

La asistencia trae ahora nueve años: de 2015 a 2019 y de 2022 a 2025. Usa los archivos que el Mineduc volvió a publicar en febrero de 2026, en los que cada alumno queda en su último colegio del año y los días de suspensión de clases cuentan como no trabajados; las cifras nacionales casi no cambian, pero las de algunas comunas y colegios sí. Para comparar con antes de la pandemia, la respuesta usa 2015–2018 como rango, porque la asistencia venía subiendo esos años. En 2015 no hay corte por alumnos prioritarios.

- Herramientas: `asistencia`, `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@10+cierres@1+proyecciones@1+asistencia@2` · antes `evidencia@3+directorio@2+agregados@2+resultados@10+cierres@1+proyecciones@1+asistencia@1`

## v0.21.1 · 2026-11-09

La asistencia dice mejor lo que trae: qué es el sexo y qué es un alumno prioritario en los cortes, que los no prioritarios van sin el particular pagado, por qué la cobertura puede pasar del 100 % y sobre qué matrícula se calcula (ahora con y sin particular pagado), la inasistencia grave oficial del Mineduc (33 % en 2023 y 27,7 % en 2024) para compararla, y que un colegio particular pagado no tiene asistencia. Las respuestas pesan menos.

- Herramientas: `asistencia`, `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@10+cierres@1+proyecciones@1+asistencia@1`

## v0.21.0 · 2026-11-09

Nueva herramienta asistencia: la asistencia y el ausentismo crónico de un colegio, una comuna, una región o Chile, en 2018, 2019 y 2022 a 2024 (2020 y 2021 no existen). Trae la tasa de asistencia y cuántos alumnos tienen asistencia esperada o inasistencia reiterada, grave o crítica, con las categorías del Mineduc, por nivel; en el territorio, también por dependencia, sexo y prioritario, y qué parte de la matrícula cubre. No incluye el particular pagado, que la base del Mineduc no trae, ni la educación de adultos, y no ordena colegios por asistencia.

- Herramientas: `asistencia`, `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios` · aparece `asistencia`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@10+cierres@1+proyecciones@1+asistencia@1` · antes `evidencia@3+directorio@2+agregados@2+resultados@10+cierres@1+proyecciones@1`

## v0.20.0 · 2026-11-09

En el cubo de egresados de una comuna, cuando los cruces con dependencia juntan dependencias en «otras» o una promoción va sin esos cruces, la respuesta dice ahora cuál es la dependencia de un solo colegio y cuál se le juntó, con cuántos colegios tiene. Por ejemplo, en Temuco, la administración delegada tiene un colegio y va con el particular pagado, que tiene varios. La cobertura del saber describe esa regla tal como es, y en los cruces de tres cortes da lo medido: con dos cortes, entre el 10 y el 23 % de las celdas queda bajo 5; con cuatro, el 34 %; con tres no se midió.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@10+cierres@1+proyecciones@1` · antes `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1+proyecciones@1`

## v0.19.0 · 2026-11-09

Nueva herramienta proyeccion_matricula: la matrícula regular de Chile de 1° básico a 4° medio estimada para cada año entre 2026 y 2050, con la proyección de población del INE (base Censo 2024) y la cobertura de cada grado en 2025. Trae 1° básico, básica, media y el total, con un escenario central, una banda y el cambio desde 2025, y dice desde qué año la cifra depende de niños que todavía no nacen. Es una estimación con supuestos, no un pronóstico, y es solo del país: por región, comuna o colegio no hay.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `proyeccion_matricula`, `resultados_colegio`, `resultados_territorio`, `ver_cambios` · aparece `proyeccion_matricula`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1+proyecciones@1` · antes `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1`

## v0.18.0 · 2026-11-08

Si no pides años, los panoramas de comuna, región y país traen los últimos cinco (2021–2025), con la serie de colegios, cierres y balance, y lo dicen al principio; el cubo de egresados, las últimas cinco promociones. Para la serie completa, pide desde=2004 (o desde=2006 en el cubo). La desvinculación escolar no se deriva de este saber: con los registros públicos no se replica la cifra oficial desde 2022, así que se cita la del Mineduc con su fuente. Textos corregidos: «otras» junta la dependencia de un solo colegio con la de menos colegios, que puede tener varios; el motivo de una promoción sin cruces con dependencia dice la regla tal como es; el rechazo de tres cortes en una comuna da lo medido; y la matrícula no va por sexo, aunque el ingreso de los egresados sí.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1`

## v0.17.0 · 2026-11-08

panorama_region trae ahora, para cada comuna de la región, su matrícula regular del primer y del último año del rango pedido y la variación entre ambos (número y %). «¿Qué comunas de la región pierden o ganan alumnos?» se responde con una sola consulta, en vez de una por comuna; las cifras cuadran con las de panorama_comuna.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1`

## v0.16.2 · 2026-11-08

Sólo en staging, donde el acceso es medido: cuando te quedan 8 créditos gratuitos o menos, la respuesta trae un aviso con cuántos te quedan, y Claude te lo dice al terminar. En producción el cupo no está encendido.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1`

## v0.16.1 · 2026-11-08

Sólo en staging, donde el acceso es medido: cuando se acaban tus créditos gratuitos, el aviso ahora habla de créditos y te dice qué es uno (cada vez que Claude consulta el servicio usa un crédito), que esa consulta no se ejecutó ni se descontó y cuándo vuelven. obtener_criterios y preguntas_abiertas ya no gastan créditos. En producción el cupo no está encendido.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1`

## v0.16.0 · 2026-11-07

El ingreso de los egresados por comuna, sin el de un colegio con nombre. Cuando una comuna tuvo un solo colegio con egresados, esa promoción va sin cruces y la respuesta ofrece la región; en los cruces con dependencia, las dependencias de un solo colegio van juntas en «otras», y la respuesta dice cuáles. Cada cifra del cruce trae ahora su proporción de universidad, técnico-profesional y a tres años sobre los egresados, para no dividir a mano. Y los textos dicen la regla como es: el «menos de 5» evita imprimir cifras de una a cuatro personas.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@9+cierres@1` · antes `evidencia@3+directorio@2+agregados@2+resultados@8+cierres@1`

## v0.15.0 · 2026-11-07

Los egresados, por partes. resultados_territorio cruza ahora el ingreso a la educación superior de cada promoción por dependencia, sexo, condición de prioritario y posición del alumno dentro de su colegio (el 10 % superior, entre el 10 y el 30 %, o el resto), y dice cuántos estudian en la región de su colegio y adónde se van. En Chile, el 10 % superior de cada colegio entra a la educación superior en la misma proporción sea prioritario o no, y la diferencia está en el resto del curso; el 87 % de los que entran estudia en su región. Las regiones y el país van con cualquier cruce; una comuna, con dos a la vez. Además, las respuestas traen sus advertencias al principio, antes de los datos.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@8+cierres@1` · antes `evidencia@3+directorio@2+agregados@2+resultados@7+cierres@1`

## v0.14.0 · 2026-11-07

Gráficos y reportes con las fuentes a la vista. Una skill nueva, graficar-y-reportar, arma páginas con las láminas del saber: la matrícula o el ingreso a la educación superior por dependencia, el 10 % superior de la PAES, el balance de la matrícula y las listas de instituciones o carreras. Se leen bien con daltonismo, porque cada serie lleva color, forma y trazo, y cada reporte cierra con un bloque de fuentes y método armado desde la procedencia de los datos. Además, la salida de un colegio que cerró aclara que no incluye su parvularia, y el saber pide no despejar sus cifras chicas. Y una corrección: el cupo gratuito de consultas está encendido en staging desde el 6 de noviembre, aunque las notas de la 0.10.2 y la 0.10.3 dicen que no. Quien no tiene asiento usa ese cupo. Por ahora, una consulta es una sesión de llamadas seguidas, no una llamada: se cierra tras 3 minutos sin llamadas, a las 25 llamadas o a los 15 minutos. ver_cambios, listar_cobertura y registrar_impresion no gastan cupo. En producción el cupo no está encendido.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `graficar-y-reportar`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red` · aparece `graficar-y-reportar`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@7+cierres@1`

## v0.13.0 · 2026-11-07

Cuántos colegios abren y cierran, y por qué cambia la matrícula. La comuna, la región y el país traen ahora cuántos colegios tienen matrícula cada año, cuántos abren y cuántos cierran, y el balance de la matrícula: los niños nuevos que entran, los que egresan, los que se van a otra comuna o no vuelven. En Chile hay 10.566 colegios en 2025, 1.226 menos que en 2012, y la caída de la matrícula desde 2022 viene sobre todo de que entran menos niños a la parvularia. La comuna nombra a los colegios que cerraron, con adónde fueron sus alumnos. El saber no dice por qué cierra un colegio, no lista colegios abiertos por su caída y no atribuye a la inmigración a los alumnos nuevos. Lo decidió Ernesto el 7 de noviembre.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@7+cierres@1` · antes `evidencia@3+directorio@2+agregados@2+resultados@7`

## v0.12.1 · 2026-11-07

Lo que pidió la undécima ronda de pruebas. Un total publicado puede dejar calcular restando un grupo de uno a cuatro alumnos, como un grado de la educación especial o los pocos de un colegio que entraron a un técnico; ahora el saber le pide al asistente que no lo despeje: aunque la cuenta sea posible, esa cifra no se da. Las «otras» instituciones, carreras y áreas de uno a cuatro alumnos salen como «menos de 5», igual que las demás cifras chicas, y los criterios dejan de describir la regla anterior: la especial por grado, el grupo «otros» y la frase de los promedios, que siguen sin publicarse con menos de cinco alumnos.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@7`

## v0.12.0 · 2026-11-06

El agregado manda. Toda cifra de cinco o más se publica, aunque al restarla de otra quede un grupo de uno a cuatro alumnos; sólo las cifras de uno a cuatro siguen como «menos de 5». Desaparece «todos menos de 5»: el ingreso a la educación superior, el tramo alto y los prioritarios de un colegio se publican con su cifra aunque casi todos estén en el grupo. Los flujos de alumnos ya no ocultan bloques enteros, la educación especial publica cada nivel y grado de cinco o más, y el total de traslados de un colegio va exacto. Las ventanas de un colegio suman todas sus promociones donde entraron cinco o más: el Colegio Tabancura suma ahora sus cinco promociones de 2021–2025, con 492 que ingresan y 28 carreras distintas. Lo decidió Ernesto el 6 de noviembre.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@3+directorio@2+agregados@2+resultados@7` · antes `evidencia@2+directorio@2+agregados@1+resultados@6`

## v0.11.1 · 2026-11-06

Correcciones de la ronda 10. Cuando la ventana de cinco promociones de un colegio suma menos promociones, el saber ahora lo dice: las promociones donde entraron todos salvo menos de cinco no se publican, para proteger a los pocos que no entraron, y quedan fuera de la ventana. Pasa sobre todo en los colegios donde casi todos siguen estudiando. En el Colegio Tabancura, la ventana 2021–2025 suma sólo 2022 y 2025, y el ejemplo de la versión 0.11.0 («en el Colegio Tabancura dos») es de esas dos promociones. Las fuentes nombran también la carrera y el área, y la guía de lectura de un colegio dice que una sigla como «INBA» se busca por el nombre completo.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@6`

## v0.11.0 · 2026-11-06

Qué carreras eligen los egresados. Los resultados traen a qué carrera y a qué área del conocimiento entraron los egresados con ingreso directo a la educación superior: en un colegio, por ventana de cinco promociones, y en una comuna, una región o Chile, por promoción. La carrera es la genérica, la misma en cualquier institución, con las Ingenierías Civiles y su plan común juntas. Cada carrera va desde cinco alumnos y el resto en «otras». Un colegio trae además cuántas carreras suman la mitad de sus egresados: en el Instituto Nacional son seis, en el Colegio Tabancura dos. La carrera va por separado de la institución: el saber no dice qué carrera en qué institución.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@6` · antes `evidencia@2+directorio@2+agregados@1+resultados@5`

## v0.10.3 · 2026-11-06

Sin cambios para quien usa el saber. En staging queda conectado el registro de consumo del cupo gratuito, que todavía no está encendido: hasta que se encienda, el saber responde exactamente como en la 0.10.2.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@5`

## v0.10.2 · 2026-11-06

Sin cambios para quien usa el saber. Prepara el acceso con un cupo gratuito de consultas para quien no tiene contrato, que todavía no está encendido: hasta que se encienda, el saber responde exactamente como en la 0.10.1.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@5`

## v0.10.1 · 2026-11-06

Correcciones de la ronda 9. Las fuentes de los resultados nombran también la Matrícula de Educación Superior (SIES), de donde salen el ingreso y el destino, y Alumnos SEP, de donde salen los prioritarios del tramo alto. La cobertura dice desde qué promoción hay cada resultado. El aviso del tramo alto da la cifra medida de por qué los prioritarios de un colegio van sumando 2022 a 2025: por año, cerca de la mitad de los colegios quedaría bajo 5. La lista destacar aclara que es de colegios con financiamiento público, no sólo públicos, y ordena las comunas sin que las tildes y la Ñ queden al final.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@5`

## v0.10.0 · 2026-11-06

Dónde están los alumnos de mejor puntaje. Los resultados traen el tramo alto de la PAES: cuántos de cada promoción quedan en el 10 % y el 20 % superior del país, que es una posición y no un puntaje, y por eso se compara entre años. En una comuna, una región o Chile, exacto: de cuántos colegios vienen, cuántos prioritarios llegan y cómo se reparten los puntajes en tramos de 50. En un colegio, cuántos quedan en cada tramo por promoción, y sus prioritarios en el 20 % superior sumando 2022 a 2025. Con destacar, los colegios con financiamiento público que llevan a cinco o más prioritarios al 20 % superior, por nombre y nunca ordenados por resultado. La mitad del 10 % superior viene de colegios con financiamiento público, y sólo uno de cada diez prioritarios llega al 20 % superior.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@5` · antes `evidencia@2+directorio@2+agregados@1+resultados@4`

## v0.9.2 · 2026-11-06

Respuestas que caben. Los corredores de un colegio traen los 15 pares más grandes de cada ventana y sentido, y cuentan el resto: los del Instituto Nacional pasan de 70 KB a 12 con una ventana, y de 277 a 34 sin ella. Se puede pedir un solo sentido (sale o llega) o subir el tope hasta 200. La captación de una comuna trae los 30 colegios con más traslados que llegan y cuenta los demás. En el panorama de una comuna, una región o Chile, pedir una dependencia acota el detalle por nivel y los prioritarios a esa dependencia. Ninguna cifra cambia: los totales y la cobertura siguen siendo los de todos los pares y colegios.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@4`

## v0.9.1 · 2026-11-06

Correcciones de la ronda 8. El panorama de una comuna decía que el saber no sabe dónde siguieron estudiando los egresados: lo sabe desde la versión 0.7, y ahora remite a resultados_territorio. La 0.8.1 anunció esta corrección sin que llegara al servidor. La matriz de una comuna avisa que «sale» y «llega» son sólo hacia y desde otras comunas, y que los traslados dentro de la comuna, que suelen ser la mayoría, van en «interno». Un colegio sin resultados dice cuál es el motivo: si está en el saber y no tuvo egresados de 4° medio, o si el RBD no está. Las skills enseñan a buscar un colegio sin «Liceo», «Colegio» ni «Escuela», a confirmar el colegio antes de buscar su red, y que una red puede repartirse en varios RUT.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@4`

## v0.9.0 · 2026-11-06

Guías de lectura. Cinco skills nuevas enseñan a leer cada tipo de pregunta: un colegio, una comuna o una región, la red de un sostenedor, los movimientos de alumnos entre colegios y los resultados (NEM, PAES e ingreso a la educación superior). Dicen por dónde entrar, qué avisar junto a cada cifra y lo que nunca se hace, como ordenar colegios por resultado. La presentación del saber dejó de decir que no tiene resultados: los tiene desde la versión 0.6.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`, `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red` · aparece `leer-los-resultados`, `leer-un-colegio`, `leer-un-mercado`, `leer-un-territorio`, `leer-una-red`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@4`

## v0.8.1 · 2026-11-05

Textos y rótulos de las pruebas sobre resultados. Cuando el saber da una tasa de ingreso a la educación superior del país o de un territorio, avisa que es la de los jóvenes y que la cifra oficial del SIES es más baja porque incluye a la educación de adultos. Lo que se protege por tener menos de cinco alumnos ya no desaparece en silencio: el reparto entre universidad y técnico-profesional, y los años sin rendidores de la PAES, van rotulados. Se corrigieron textos que contradecían lo que el saber ya responde (a qué institución entran, dónde siguieron), y la cobertura declara que no hay titulación, ni SIMCE, ni rankings por destino.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@4`

## v0.8.0 · 2026-11-05

A qué institución entran. Los resultados dicen ahora, con nombre, a qué universidades, institutos y centros técnicos entraron los egresados de un colegio (agrupando cinco promociones) y de una comuna, una región o Chile (por promoción). Cada institución aparece desde cinco alumnos y el resto va junto. Describe adónde entraron, no lo bueno que es el colegio, y ninguna herramienta ordena colegios por destino. La tasa de ingreso del saber es la de los jóvenes; con el universo del SIES, que incluye a los egresados de adultos, el saber reproduce su cifra.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@4` · antes `evidencia@2+directorio@2+agregados@1+resultados@3`

## v0.7.0 · 2026-11-05

Ingreso a la educación superior. Los resultados de un colegio, una comuna, una región o Chile traen ahora cuántos egresados de cada promoción se matricularon en la educación superior el año siguiente y en los tres años siguientes, y si fue en una universidad o en un instituto o centro técnico: en Chile, el ingreso inmediato pasó de 41 % en la promoción 2006 a 57 % en la de 2025. En los colegios chicos la proporción se protege como los alumnos prioritarios. A qué carrera o institución entran queda para una etapa siguiente. Además, el contexto de un colegio dice qué proporción de la comuna y del país rindió la PAES e ingresó a la educación superior.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@3` · antes `evidencia@2+directorio@2+agregados@1+resultados@2`

## v0.6.1 · 2026-11-05

Corrección de los resultados por territorio. Algunos egresados quedaban en un grupo de dependencia «sin dato» cuando su colegio no tenía registro ese año, y en ciertas comunas ese grupo mostraba el promedio de una a cuatro personas. Ahora cada colegio toma la dependencia del año más cercano en que la tiene, y ese grupo desaparece. Las cifras de cada colegio y los totales no cambian.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@2` · antes `evidencia@2+directorio@2+agregados@1+resultados@1`

## v0.6.0 · 2026-11-05

Resultados por colegio. Dos herramientas nuevas dan el NEM (promedio de notas de enseñanza media, desde 2005) y la PAES de cada promoción (Competencia Lectora, Matemática 1 y su promedio, desde 2022, con cuántos rindieron), de un colegio, una comuna, una región o Chile. La definición es la del informe por colegio del DEMRE y lo reproduce exacto. Cada resultado viene con su contexto y con la advertencia de que describe a los alumnos que rindieron y no la calidad del colegio: ninguna herramienta ordena colegios por resultado. Además, lo que pidió la quinta ronda de pruebas: la búsqueda encuentra con plurales («diaconales»), «estatal» dice que se leyó como público sin la administración delegada, la ficha explica qué es un alumno prioritario, la matriz trae la suma de saldos rotulada como mínimo y la comuna avisa cuando su especial es la de un solo colegio.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `resultados_colegio`, `resultados_territorio`, `ver_cambios` · aparece `resultados_colegio`, `resultados_territorio`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2+agregados@1+resultados@1` · antes `evidencia@2+directorio@2+agregados@1`

## v0.5.0 · 2026-11-05

Totales exactos y alumnos prioritarios. Los totales de comuna, región y país ahora incluyen a todos los alumnos, también los de colegios con menos de 5 en la educación especial: el total con especial de Chile en 2025 es 3.439.347, ya no «al menos». En la ficha de cada colegio la protección sigue igual. Los tres panoramas traen los alumnos prioritarios desde 2016 por dependencia y nivel, en número y porcentaje, con el aviso de que el salto de 2022 a 2024 puede ser un cambio de criterio. El aviso de la región actual aparece sólo donde importa (Biobío y Ñuble, Los Lagos y Los Ríos, Tarapacá y Arica y Parinacota) y dice cómo comparar con la región de la época. Se acepta «estatal» como público, y la cobertura declara que la media no distingue científico-humanista de técnico-profesional y que los resultados por colegio están decididos pero sin compilar.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2+agregados@1` · antes `evidencia@2+directorio@2+territorios@1`

## v0.4.0 · 2026-11-05

Región y país. Dos herramientas nuevas responden sobre Chile entero y sobre cada región: cómo ha evolucionado la matrícula, por dependencia, por nivel, por nivel y dependencia a la vez, y por grado (por ejemplo, cuántos alumnos hay en 1° medio), con la educación especial aparte. Son la suma de todos los colegios, hecha y verificada por el laboratorio, y la región es la actual de cada comuna para toda la serie: Ñuble, Los Ríos y Arica y Parinacota tienen cifras también antes de existir, y se dice. La comuna también trae ahora su matrícula por grado y el cruce de nivel con dependencia. Los resultados por colegio quedan declarados como decididos y todavía sin compilar.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `panorama_pais`, `panorama_region`, `preguntas_abiertas`, `ver_cambios` · aparece `panorama_pais`, `panorama_region`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2+territorios@1` · antes `evidencia@2+directorio@2`

## v0.3.1 · 2026-11-04

Lo que pidió la tercera ronda de pruebas. La matriz de una comuna ahora responde primero «¿hacia qué comunas salen y desde cuáles llegan?», con el nombre de cada comuna y lo que queda sin atribuir, y trae sólo los 30 pares más grandes salvo que se filtre: la de una comuna grande ya no desborda la respuesta. Cada salto de matrícula dice en qué nivel ocurre. La ficha de un colegio tiene un modo resumen, sin grados, para preguntas de evolución. Una suma de la que no se publica ninguna parte se declara suprimida, nunca como un cero. La búsqueda encuentra un colegio aunque el nombre venga con otra terminación («diaconal» → «Diácono»), el listado de una comuna cuadra con su panorama y dice la diferencia, y el saber declara que no tiene vista regional ni nacional ni grado por territorio.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `preguntas_abiertas`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2`

## v0.3.0 · 2026-11-04

Pasa a evidencia@2, con la nueva regla de divulgación aprobada por Ernesto. La matrícula regular va exacta, por colegio, grado, dependencia y comuna: son los mismos conteos que el Mineduc publica en sus datos abiertos, y ya no hay «menos de 5», tramos ni «otros» en la matrícula. Quedan protegidos con k = 5 los desenlaces de los alumnos (llegadas, salidas, egresos, traslados) y la educación especial, que ahora está y va aparte: incluye las escuelas de lenguaje. La comuna se suma con la dependencia que cada colegio tenía ese año, y los cambios de dependencia se muestran. Los pares de colegios con nombre aparecen desde 5 alumnos (antes 30), con una ventana nueva, 2005–2010. Los traslados por el cierre o la absorción de un colegio van aparte y ya no inflan la captación. El aviso de saltos usa un umbral medido en todo el país (más de 50 %, con 100 alumnos o más).

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `preguntas_abiertas`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@2+directorio@2` · antes `evidencia@1+directorio@1`

## v0.2.2 · 2026-11-04

Corrige una fuga de privacidad: en algunos años, la matrícula de una dependencia en una comuna permitía deducir, restando los colegios publicados, la cifra de un colegio con menos de 5 alumnos. Esas celdas van ahora como la suma de los colegios publicados (un mínimo, marcado incompleto) y dicen cuántos colegios quedaron fuera; cuando esa suma engañaría, van suprimidas. Afecta al 12% de las celdas de la serie por dependencia. El saber distingue además el nivel de la modalidad (las escuelas de lenguaje son educación especial que atiende párvulos) y su criterio de parvularia trae las cifras y los códigos de grado.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `preguntas_abiertas`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@1+directorio@1`

## v0.2.1 · 2026-11-04

Al listar colegios, escuelas o liceos de una comuna ya no aparecen los jardines infantiles que sólo tienen parvularia: se informan aparte y se pueden incluir si se piden. El saber dice ahora que su parvularia es parcial, porque los jardines de JUNJI y de Integra no están en la Matrícula Escolar del Mineduc. Las series avisan donde pueden engañar: el archivo incompleto de 2008, los colegios cuya matrícula salta sin cierre ni absorción (un registro incompleto puede parecer una caída) y qué dependencias quedaron dentro de «otros» cada año. Los egresos dicen cuántos colegios faltan en la suma, el listado de una comuna trae un resumen por tamaño y nivel, y los nombres de 77 comunas con tilde, que venían dañados, ya se leen y se buscan bien.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `preguntas_abiertas`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@1+directorio@1`

## v0.2.0 · 2026-11-04

Ahora se puede recorrer una comuna completa. Una herramienta nueva lista los colegios de una comuna, los filtra por dependencia, nivel o estado y los ordena por matrícula. El panorama de la comuna trae la matrícula por nivel (parvularia, básica, media) y los egresos de 4° medio de cada año. Los corredores dicen qué parte de los traslados explican, y los flujos de un colegio nombran el colegio de destino cuando hubo un cierre o una absorción. Además, el saber expone sus criterios de lectura y las preguntas que todavía no puede responder.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `obtener_criterios`, `panorama_comuna`, `preguntas_abiertas`, `ver_cambios` · aparece `colegios_comuna`, `obtener_criterios`, `preguntas_abiertas`
- Skills: `empezar-aqui`
- Datos: `evidencia@1+directorio@1`

## Línea base · v0.1.0 · 2026-11-04

Primera versión del saber. Responde sobre la matrícula escolar en Chile por colegio, comuna y red de sostenedor, 2004–2025: cuántos alumnos tiene cada colegio por grado y año, quién llega, quién se va y adónde, desde los registros públicos del Mineduc. Ninguna cifra publicada es menor que 5: los conteos chicos van agrupados o suprimidos, y se dice. Los traslados por el cierre o la absorción de un colegio se marcan como institucionales y no se leen como elección de las familias.

- Herramientas: `buscar_colegio`, `buscar_comuna`, `captacion_comuna`, `colegios_del_sostenedor`, `corredores_colegio`, `ficha_colegio`, `flujos_colegio`, `listar_cobertura`, `matriz_comuna`, `panorama_comuna`, `ver_cambios`
- Skills: `empezar-aqui`
- Datos: `evidencia@1+directorio@1`

Antes de v0.1.0 no hay registro de cambios.
