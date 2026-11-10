---
description: Responde sobre todos los colegios de un mismo sostenedor — «¿qué colegios tiene nuestra fundación?», «¿cómo ha evolucionado la matrícula de la red?», «¿cuál de nuestros colegios crece y cuál baja?», «tengo varios colegios, ¿cómo están?». Parte de un RBD de la red o del RUT del sostenedor. Para un solo colegio, leer-un-colegio; para un SLEP como territorio, el saber no lo sirve.
---

# Leer una red

Quien pregunta por una red suele ser el sostenedor mismo, o alguien que lo asesora: conoce sus colegios mejor que el
saber. El valor está en la serie ordenada y en lo que no ve desde dentro, no en recitarle su lista.

## El orden

0. **Primero, cuál colegio.** Si la persona nombra un colegio y no da el RBD ni el RUT, `buscar_colegio` (sin «Liceo»,
   «Colegio» ni «Escuela»; con `comuna` si la menciona) y, si hay homónimos, pregunta cuál o declara el supuesto, como
   en leer-un-colegio. «Patricio Mekis» trae tres colegios en tres comunas, de sostenedores distintos.
1. **`colegios_del_sostenedor`** con un RBD de la red o con el RUT (sin puntos ni dígito verificador). Devuelve todos
   los colegios con el mismo RUT, abiertos y cerrados.
2. **Confirma la red con quien pregunta** si la lista trae colegios que no esperaba, o le faltan: el RUT del
   sostenedor puede haber cambiado (una fundación nueva, el paso a un SLEP) y la red de hoy no es la de hace diez años.
3. **`ficha_colegio`** con los RBD de la red, separados por coma (hasta 20), con `detalle=resumen` para la evolución:
   trae cada colegio y la suma por año. Con más de 20, en tandas, y di que la suma es tuya.
4. Si la pregunta sigue a los resultados de la red, `resultados_colegio` con los mismos RBD (skill leer-los-resultados).

## Lo que la red no trae

- **El nombre del sostenedor no está.** Sólo su RUT. No lo completes con conocimiento general aunque lo sepas.
- **El RUT viene en blanco** cuando el sostenedor no es persona jurídica, y **no existe antes de 2024** para los
  colegios que no están en los Directorios 2024–2026. Una red puede verse incompleta hacia atrás por eso: dilo.
- **Una red puede repartirse en varios RUT.** En Maipú, la Escuela Hermanos Carrera y el Colegio Hermanos Carrera de
  Chile (básica y media) tienen RUT distintos, y `colegios_del_sostenedor` no los une. Si la red parece incompleta,
  dilo: puede tener otro RUT, y el saber no lo sabe. Pregúntale a quien consulta si hay otros colegios.
- **Un SLEP no se sirve como territorio.** Sus colegios eran municipales antes de su creación, y falta la tabla comuna →
  SLEP de los que cerraron antes. Si preguntan por un SLEP, `colegios_del_sostenedor` da los colegios que hoy tienen su
  RUT, que no es la serie histórica del servicio.

## Al comparar colegios de la red

- **Se describe, no se califica.** Que un colegio crezca y otro baje no dice cuál es mejor. Si un colegio pierde
  matrícula, mira en su ficha los cambios de dependencia, los saltos y los cierres cercanos antes de leerlo como
  tendencia; el porqué de una pérdida no está en el saber.
- **Un cierre o una absorción dentro de la red** mueve alumnos en bloque de un colegio a otro: aparece como `eventos_s5`
  y en los corredores con `nota_s5`. Es institucional, no una elección de las familias.
- **El tamaño de cada colegio** es la matrícula regular; la especial va aparte y con k = 5 por colegio.

## Cierra con las fuentes

Desde `procedencia`, con la versión de la evidencia y del directorio. Nunca de memoria.
