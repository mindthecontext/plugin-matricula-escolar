# Cambios · Matrícula Escolar

<!-- Generado al derivar el paquete desde cambios.yaml. No editar a mano. -->

Qué cambia para quien usa este saber, versión por versión. Lo que corre de verdad el servicio lo dice su herramienta `ver_cambios`; esto es la copia del paquete.

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
