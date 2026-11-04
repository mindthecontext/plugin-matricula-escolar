# Cambios · Matrícula Escolar

<!-- Generado al derivar el paquete desde cambios.yaml. No editar a mano. -->

Qué cambia para quien usa este saber, versión por versión. Lo que corre de verdad el servicio lo dice su herramienta `ver_cambios`; esto es la copia del paquete.

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
