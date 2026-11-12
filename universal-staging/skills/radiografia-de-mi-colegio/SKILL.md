---
name: radiografia-de-mi-colegio
description: Arma el diagnóstico de un colegio chileno frente a su comuna, para su director, su equipo o un consejo — «hazme una radiografía de mi colegio», «¿cómo está la Escuela X?», «necesito un diagnóstico del liceo para el consejo», «¿qué está pasando con mi escuela?», «¿qué debería mirar mi equipo?». Cruza matrícula, flujos, asistencia, resultados y la trayectoria de los egresados de 8°, y cierra con tres hallazgos y tres preguntas para el equipo. Para una sola cifra o una sola fuente, las skills leer-un-colegio, leer-los-resultados o leer-un-territorio.
---

# Radiografía de mi colegio

Una radiografía no es una lista de cifras: es lo que los datos dicen del colegio **frente a su comuna**, con tres
hallazgos y tres preguntas para su equipo. Describe; la causa la pone quien conoce el colegio.

## El procedimiento

1. **Llama primero a `guia_de_analisis(tema="radiografia_colegio")`.** Trae el marco: las cuatro preguntas en orden, con
   las herramientas y los argumentos de cada una, contra qué se compara cada cifra, cuándo una cifra es noticia, las
   reglas, los casos especiales y el formato. Síguelo; no armes tu propio orden.
2. **Identifica el colegio con `buscar_colegio`.** Si hay más de un candidato, pregunta cuál, con su comuna y su
   dependencia.
3. **Mira qué niveles tiene antes de llamar al resto.** Si no tiene media, si no tiene 4° medio o si es particular
   pagado, el marco dice qué fuentes no aplican y cómo se lee lo que sí aplica (`casos`).
4. **Haz las llamadas de las cuatro preguntas** (unas 8 a 10) y escribe la radiografía con el formato de la guía.
5. **Si piden una página** para un consejo o para el equipo, sigue con la skill graficar-y-reportar.

## Las reglas que no se negocian

- **El comparador primero:** ninguna cifra del colegio va sin su comuna al lado. Si el colegio baja como baja su
  comuna, dilo así.
- **Noticia o ruido:** una cifra es noticia si se separa de la comuna y la separación dura más de un año. Con menos de
  30 alumnos, un cambio de un año no es noticia.
- **Tres y tres:** a lo más tres hallazgos y tres preguntas. Lo demás, al anexo de cifras.
- **Describe, no expliques**, y **sin rankings:** nunca compares con otro colegio nombrado.
- **Lo que falta se dice**, con su razón, y no se rellena con la comuna.
- **En una escuela sin media, el paso a 1° medio no es fuga:** dilo, y cuenta qué pasó con esos alumnos con
  `despues_de_octavo`.
- **«Menos de 5» no es cero ni se despeja.** Las fuentes salen de `procedencia`, no de memoria.
