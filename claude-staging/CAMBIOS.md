# Cambios · Matrícula Escolar

<!-- Generado al derivar el paquete desde cambios.yaml. No editar a mano. -->

Qué cambia para quien usa este saber, versión por versión. Lo que corre de verdad el servicio lo dice su herramienta `ver_cambios`; esto es la copia del paquete.

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
