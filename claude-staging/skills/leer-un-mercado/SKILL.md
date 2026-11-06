---
description: Responde sobre cómo se mueven los alumnos entre los colegios de una comuna y entre comunas — «¿qué colegios reciben más traslados en Puente Alto?», «¿hacia qué comunas se van los alumnos de La Pintana?», «¿entre qué colegios se mueven más alumnos?», «¿con qué colegios compite el mío?», «¿cuántos alumnos ganamos y perdimos este año?». Describe movimientos, no preferencias ni calidad. Para un colegio solo, leer-un-colegio; para la matrícula de un territorio, leer-un-territorio.
---

# Leer un mercado

La pregunta de un mercado suele venir cargada: «¿quién nos quita alumnos?», «¿cuál es el colegio preferido?». El saber
responde la parte medible —cuántos alumnos se movieron, entre qué colegios y comunas— y no la otra: **un movimiento no
es una preferencia, y un saldo no es una nota.** Dilo antes de la primera cifra con nombre.

## El orden

1. **`captacion_comuna`** para «¿qué colegios reciben y pierden más traslados?» en un año (por defecto 2025): por
   colegio, los traslados que llegan, los que salen y el saldo.
2. **`matriz_comuna`** para «¿hacia qué comunas se van y desde cuáles llegan?» (`resumen_por_comuna`) y para los pares
   colegio → colegio con nombre de una ventana de cinco años (por defecto 2021–2025). Filtra con `sentido` (sale,
   llega, interno) o `contraparte_comuna`, o sube `top` (hasta 200): por defecto vienen los 30 pares más grandes.
3. **`corredores_colegio`** si la pregunta es de un colegio y sus competidores: los colegios con nombre de los que le
   llegan y a los que se le van alumnos, por ventana.

## Lo que se dice junto a la cifra

- **Los cierres y las absorciones van aparte.** Cuando un colegio cierra o es absorbido, sus alumnos se trasladan en
  bloque: es institucional, no una elección. `captacion_comuna` los deja fuera de `llegan` y `salen`
  (`institucionales_s5`); en la matriz y los corredores, los pares afectados traen `nota_s5`, y el aviso nombra los
  colegios con un evento fuera de los pares mostrados. Repítelo junto a la cifra.
- **El paso de nivel no es una mudanza.** Muchos traslados son de 8° básico a 1° medio porque el colegio de origen no
  tiene media. Un traslado entre comunas no es una familia que se va de la comuna.
- **La matriz es un mínimo.** `resumen_por_comuna` suma sólo los pares con nombre (desde 5 alumnos); `cobertura` dice
  qué parte de los traslados explican. En una comuna grande puede ser menos de la mitad: da esa proporción cuando
  hables de «hacia dónde se van».
- **`captacion_comuna` no es la lista de colegios.** Deja fuera a los que no tienen flujos ese año (`sin_flujos`), y
  sólo cuenta traslados entre colegios: no a quien entra desde parvularia, sin registro previo o desde adultos (eso
  está en `flujos_colegio`). Para listar colegios, `colegios_comuna`.
- **Una fila `incompleto` no tiene saldo.** Tiene alguna parte con menos de 5: `suma_conocida` no es el total y
  `suprimido_por_divulgacion` no es cero. Un `total` de 0 sí es cero.
- **`muestra_chica`** (menos de 30 en la ventana): se cita con su cifra, sin leerlo como tendencia.

## Lo que nunca se dice

- Que un colegio es «el preferido», «el más elegido» o que «pierde frente a» otro. El orden de `captacion_comuna` es por
  traslados que llegan: el primer lugar no es un ganador.
- Por qué se movieron los alumnos. El saber no lo tiene (`dinamica_por_colegio` no está compilada): un saldo negativo
  puede ser un cierre cercano, un nivel que el colegio no imparte, o un cambio de dependencia.
- Una cifra de un par de 1 a 4 alumnos: no se publica, y que un par no aparezca no significa que no haya movimiento.

## Cierra con las fuentes

Desde `procedencia`, con la ventana o el año de cada cifra. Nunca de memoria.
