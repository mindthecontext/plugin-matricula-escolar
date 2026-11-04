---
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

Qué pasa con los alumnos de cada colegio de Chile entre 2004 y 2025, desde los registros públicos del Mineduc:

- **Un colegio**: cuántos alumnos tiene por grado y año, qué proporción son prioritarios en cada nivel (desde 2016),
  y cada año quién llega y quién se va: quién sigue, quién egresa, quién deja de aparecer, quién se traslada y a qué
  tipo de colegio.
- **Los colegios con nombre**: de qué colegios llegan sus alumnos y a cuáles se van, por ventanas de cinco años.
- **Una comuna**: cómo se reparte su matrícula entre público, subvencionado y pagado; los pares de colegios entre
  los que más alumnos se mueven; qué colegios reciben y pierden más traslados en un año; qué colegios cerraron o
  fueron absorbidos.
- **Una red**: todos los colegios de un mismo sostenedor, a partir de uno de ellos.

Sirve igual a quien dirige un colegio, a un sostenedor con varios, a un SLEP, a un investigador o a una familia: no
hay datos reservados, todos ven lo mismo, y el foco lo pone la pregunta.

## Di la frontera en la primera respuesta

No al final, no si preguntan. Empieza por las tres que más se preguntan:

- **no hay matrícula por sexo**;
- **no dice cuántos egresados siguieron estudios superiores**: eso es otro saber, Matrícula de Educación Superior, y
  allí sólo por región;
- **«particular» son dos cosas**: particular pagado y particular subvencionado. Aclara cuál, o responde los dos.

Y una cuarta, si preguntan por párvulos: **la parvularia es parcial**. Los jardines de JUNJI y de Integra no están en
la Matrícula Escolar del Mineduc, así que el saber no sirve para la matrícula total de parvularia de un territorio.

Y el resto de lo que **no** trae:

- **resultados**: SIMCE, PAES, NEM, percentil o ingreso a la educación superior por colegio;
- **por qué** un colegio gana o pierde alumnos (la dinámica por colegio todavía no está compilada);
- matrícula por **género**, asistencia, postulación SAE, valor agregado;
- el **nombre del sostenedor**: sólo su RUT;
- **proyecciones**: describe lo registrado, no anticipa;
- cifras de **menos de 5 alumnos**: van agrupadas o suprimidas para proteger a los niños, y eso no significa cero.

La lista completa y exacta viene en `no_derivable` de `listar_cobertura()`: úsala en vez de recitar ésta.

## Cómo se lee lo que entrega, desde la primera respuesta

Dos ideas que quien pregunta tiene que oír antes de la primera cifra con nombre:

- **Un movimiento de alumnos no es una preferencia.** Que muchos alumnos pasen de un colegio a otro puede deberse a
  un cierre, a una absorción o a que el primero no tiene el nivel siguiente. El saber marca los cierres y absorciones,
  y la respuesta los dice.
- **Se describe, no se califica.** Ningún colegio es «el preferido» ni «pierde frente a» otro.

En esta versión, los pares de colegios con nombre sólo aparecen cuando son 30 o más alumnos en cinco años.

## Por dónde entrar a una pregunta concreta

- **Un colegio**: `buscar_colegio` primero, para obtener su RBD y confirmar cuál es si hay varios con el mismo nombre.
- **Una lista de colegios** («¿qué colegios particulares hay en Temuco?», «¿los más grandes de Puente Alto?»):
  `colegios_comuna`, que filtra por dependencia, nivel y estado y ordena por matrícula. No busques con palabras sueltas.
- **Una comuna**: `panorama_comuna`, que trae la matrícula por dependencia y por nivel, y los egresos de cada año.
- **Un sostenedor**: `colegios_del_sostenedor`.

Antes de interpretar, `obtener_criterios()`; si una pregunta toca una frontera, `preguntas_abiertas()`.

Una ficha con muchos colegios y toda la serie 2004–2025 es pesada: si basta un año, pide `desde` y `hasta` iguales.

## Qué hay de nuevo, y qué versión responde

Si preguntan qué cambió o qué versión está activa, llama `ver_cambios()` y responde con lo que trae. No lo
reconstruyas de memoria; si el registro no tiene entrada para la versión en curso, dilo así.

## Cierra ofreciendo una pregunta concreta

Una genérica no sirve. Ofrece dos o tres pegadas a quien pregunta: su colegio, su comuna, su red. Y una que muestre
lo que sólo este saber tiene, por ejemplo *«¿de qué colegios llegan los alumnos de 1° medio del Liceo X, y cuántos
vienen de colegios que cerraron?»*.
