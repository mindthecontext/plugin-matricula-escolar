---
description: Responde sobre la matrícula y los movimientos de alumnos de uno o varios colegios chilenos — «¿cuántos alumnos tiene el Liceo X?», «¿cómo ha evolucionado su matrícula?», «¿cuántos prioritarios tiene?», «¿cuántos se fueron este año y adónde?», «¿de qué colegios llegan sus alumnos de 1° medio?», «¿cuánto faltan a clases en el Liceo X?». Para los resultados del colegio (NEM, PAES, ingreso a la educación superior), leer-los-resultados; para los colegios de un sostenedor, leer-una-red; para la competencia entre los colegios de una comuna, leer-un-mercado.
---

# Leer un colegio

## Primero, cuál colegio

`buscar_colegio` siempre, antes de cualquier herramienta por colegio, aunque el nombre parezca inequívoco. Los
nombres se repiten: «Carmela Carvajal» trae cuatro colegios (Talcahuano, San Felipe, Osorno y Providencia), e
«Instituto Nacional» trae también un instituto de rehabilitación en Peñalolén. **Busca sin «Liceo», «Colegio» ni
«Escuela»**: la búsqueda pide el texto tal cual dentro del nombre, y «Liceo Carmela Carvajal» trae sólo dos de los
cuatro, porque los otros se llaman «Colegio» y «Escuela». Si vuelve más de un candidato,
**pregunta cuál es**, mostrando comuna, dependencia y si sigue abierto. Si no puedes preguntar, elige, **declara el
supuesto** en la respuesta y ofrece los otros. El orden de los candidatos no es de relevancia.

**Si te dan una sigla** («INBA», «IN»), la búsqueda no la reconoce: busca por el nombre completo («Internado Nacional
Barros Arana») o pregunta cuál es.

Si la persona da el RBD, úsalo directo. Si menciona la comuna, pásala en `comuna` para acotar.

## El orden

1. **`ficha_colegio`** para la matrícula: por grado y año (exacta), la especial aparte, la dependencia de cada año
   y el % de prioritarios por nivel desde 2016.
   - Para una pregunta de evolución, `detalle=resumen` (total y niveles por año, sin grados).
   - Para una de un año, `desde` = `hasta`.
   - Varios colegios van en una llamada (RBD separados por coma, hasta 20) y traen su suma por año.
2. **`flujos_colegio`** para «quién llega y quién se va» en un año: permanece, egresa, sin matrícula, traslado, a la
   especial, a adultos, con los traslados agrupados por la dependencia y la comuna del otro colegio. Pide el `anio`:
   sin él trae los 21 años.
3. **`corredores_colegio`** para los colegios **con nombre** de los que llegan y a los que se van, por ventana de cinco
   años. Pide la `ventana` (casi siempre 2021–2026) y, si la pregunta es de un lado, el `sentido` (sale o llega). Trae
   los 15 pares más grandes de cada ventana y sentido: `no_mostrados` cuenta el resto, y el total sale de `cobertura`,
   no de sumar los pares mostrados.

## Lo que se dice junto a la cifra

- **Dependencia del año.** Si el colegio cambió de dependencia, su serie lo muestra; dilo antes de leer una variación.
  El paso de municipal a SLEP no es un cambio: los dos son público.
- **Saltos y el hueco de 2008.** Si la ficha trae `saltos_sin_evento`, o la pregunta toca 2008 o 2009, avísalo: en el
  archivo de 2008 faltan 31 colegios, y un salto sin cierre ni absorción puede ser del registro.
- **La especial no se suma a ciegas.** Va aparte y con k = 5: «menos de 5» no es cero, y no se suma como si lo fuera.
- **Prioritarios no es rendimiento.** Es la condición socioeconómica que asigna el Mineduc (Ley SEP), por nivel y
  nunca por grado.
- **`egresa` no es licenciarse ni entrar a la educación superior.** Es estar en 4° medio y no aparecer al año
  siguiente. Si la pregunta es si entraron a la educación superior y adónde, eso está en `resultados_colegio`
  (skill leer-los-resultados).
- **«otros» junta las categorías de 1 a 4 alumnos**, nunca es un colegio. Si viene como «menos de 5», son entre 1 y 4
  alumnos, no cero. Toda categoría de 5 o más va con su nombre (divulgacion@3).
- **Un «menos de 5» no se despeja.** Un total publicado puede dejar calcular un grado de la especial, un «otros» o
  los no prioritarios de un nivel, restando del total o multiplicando un porcentaje por `n`. Aunque la cuenta sea
  posible, esa cifra no se da. Si el usuario pide la cuenta, explica que el saber no publica grupos de 1 a 4.
- **`estado` es el oficial.** Un liceo puede figurar «funcionando» con un `anio_ultimo` antiguo: su matrícula actual
  es de adultos y no está en este saber.

## Los corredores, con cuidado

Un corredor describe un movimiento, no una preferencia. Antes de describirlo, revisa:

- **`nota_s5`**: el otro colegio cerró o fue absorbido, y el traslado fue institucional. Dilo junto a la cifra.
- **El nivel siguiente**: muchos traslados son el paso de 8° básico a 1° medio porque el colegio de origen no tiene
  media.
- **`muestra_chica`** (menos de 30 en la ventana): se cita con su cifra, «8 alumnos», sin leerlo como tendencia.
- **`cobertura`**: qué parte de los traslados explican los pares con nombre. Que un par no aparezca no significa que
  no haya movimiento: los de 1 a 4 alumnos no se publican.
- **La primera ventana, 2005–2010, tiene seis años**; las demás, cinco.

Nunca digas que un colegio «pierde frente a» otro ni que es «el preferido».

## La asistencia del colegio

Para «¿cuánto faltan en el Liceo X?»: `asistencia` con su `rbd`, en 2015–2019 y 2022–2025. Trae, por nivel, la tasa
y los alumnos en cada categoría del Mineduc (esperada, reiterada, grave y crítica), con k = 5, y su comuna como
`contexto`. Léela como dice la sección «La asistencia» de leer-un-territorio, y además:

- **«Menos de 5» es de 1 a 4, no cero, y no lo despejes**, aunque restando las otras categorías se pueda calcular.
- **Un particular pagado no tiene asistencia:** la base del Mineduc no lo incluye. Dilo y no la estimes, tampoco con
  la de la comuna.
- **No expliques una cifra baja** con tomas, paros o suspensiones que conozcas de otra fuente: la base no registra por
  qué faltaron los alumnos.
- **No ordenes colegios por asistencia**, tampoco si te piden comparar varios: describe cada uno con su comuna.

## Lo que no está

Matrícula por sexo, el nombre del sostenedor (sólo su RUT), la matrícula de adultos, la especial por tipo de
diagnóstico, por qué un colegio gana o pierde alumnos, y la media separada en científico-humanista y
técnico-profesional. Lo que llegue como `no_derivable` no se estima.

## Cierra con las fuentes

Desde `procedencia`: fuente original, años, versión de la evidencia y sus consideraciones. Nunca de memoria.
