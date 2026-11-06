---
name: leer-un-territorio
description: Responde sobre la matrícula escolar de una comuna, una región o Chile entero — «¿cuántos alumnos hay en Temuco?», «¿cómo ha cambiado la matrícula pública en la Araucanía?», «¿cuántos alumnos hay en 1° medio en Chile?», «¿qué proporción son prioritarios?», «¿cuántos egresan de 4° medio en mi comuna?». Para listar u ordenar los colegios de una comuna, colegios_comuna; para los resultados de un territorio (NEM, PAES, ingreso a la educación superior), leer-los-resultados; para los movimientos de alumnos entre colegios y comunas, leer-un-mercado.
---

# Leer un territorio

## Por dónde entrar

- **Chile entero**: `panorama_pais`. Trae también la matrícula de cada región por año.
- **Una región**: `panorama_region`, por código («9») o nombre («Araucanía», «Metropolitana»). Trae sus comunas para
  bajar a una.
- **Una comuna**: `buscar_comuna` para su código si sólo tienes el nombre, y luego `panorama_comuna`.

Acota los años con `desde` y `hasta`: la serie completa, 2004–2025, es pesada si basta un año. Con `grado=True`, la
matrícula regular por grado (y la de una `dependencia`, si la pides).

**Si piden la lista de colegios** («¿qué liceos hay en Temuco?», «¿los más grandes?»): `colegios_comuna`, que filtra
por dependencia, nivel y estado y ordena por matrícula. No los busques con palabras sueltas, y no reconstruyas la lista
desde otra herramienta.

## Los totales territoriales son exactos

La matrícula regular, la especial y los prioritarios de una comuna, una región o Chile son **exactos y completos**:
incluyen a los alumnos de los colegios que en su ficha van con «menos de 5». El k = 5 rige en la ficha de cada colegio,
no en el territorio. **No presentes un total territorial como un mínimo.**

Hay una excepción, y viene dicha: los **egresos** de una comuna se suman desde los colegios, y si en alguno quedaron
dentro de «otros» (`colegios_con_egreso_agrupado`), la suma es un mínimo («al menos»). Repite el aviso cuando llegue.

## Lo que se dice junto a la cifra

- **La región es la actual de cada comuna para toda la serie.** Arica y Parinacota y Los Ríos (2007) y Ñuble (2018)
  se leen hacia atrás con sus comunas de hoy. Cuando el aviso llegue en `_leer_primero`, dilo en la respuesta.
- **La dependencia es la de cada colegio ese año.** Un colegio que cambia de dependencia mueve su matrícula de una
  serie a otra sin que se mueva ningún alumno (`cambios_de_dependencia`). Dilo antes de leer la variación de una
  dependencia. Municipal y SLEP son, los dos, público.
- **«estatal» es público.** Si la herramienta lo interpretó (`dependencia_interpretada`), repite cómo se leyó: no
  incluye la administración delegada.
- **«particular» son dos cosas**: pagado y subvencionado. Aclara o responde los dos.
- **Un cambio de un año a otro casi nunca es un salto.** Cuando hay `saltos_sin_evento`, nómbralos; cuando no hay, no
  concluyas que el cambio es tendencia ni que es un error. 2008 tiene 31 colegios faltantes en el archivo.
- **Prioritarios** (desde 2016) son la condición socioeconómica que asigna el Mineduc (Ley SEP), no un rendimiento.
  Cada cifra trae `p` prioritarios entre `n` alumnos del nivel; da los dos.
- **La especial va aparte** de la regular. `total_con_especial` las suma como lo hace el Mineduc; di cuál das.
- **La parvularia es parcial**: sin JUNJI ni Integra. No sirve para la matrícula total de parvularia de un territorio.

## Lo que no es un territorio

- **Un SLEP no se sirve como territorio.** Los SLEP se crearon entre 2018 y 2025, antes sus colegios eran municipales,
  y una serie por SLEP quedaría incompleta. No la armes sumando colegios.
- **Un territorio no tiene ranking.** Ordenar comunas o regiones por una cifra es posible con estas herramientas, pero
  describe tamaño o proporción, no calidad: dilo así.

## Lo que no está

Matrícula por sexo, la media separada en científico-humanista y técnico-profesional, la educación de adultos, y la
región de la época. Los egresos dicen quién dejó de aparecer en 4° medio, no dónde siguió: si la pregunta es cuántos
entraron a la educación superior y adónde, `resultados_territorio` (skill leer-los-resultados).

## Cierra con las fuentes

Desde `procedencia`: la fuente original, los años y la versión de la evidencia (`agregados` para comuna, región y
país), con sus consideraciones. Nunca de memoria.
