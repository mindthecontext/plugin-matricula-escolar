---
description: Responde sobre la matrícula escolar de una comuna, una región o Chile entero — «¿cuántos alumnos hay en Temuco?», «¿cómo ha cambiado la matrícula pública en la Araucanía?», «¿cuántos alumnos hay en 1° medio en Chile?», «¿qué proporción son prioritarios?», «¿cuántos egresan de 4° medio en mi comuna?», «¿por qué baja la matrícula?», «¿cuántos colegios han cerrado en mi comuna?», «¿adónde se fueron los alumnos del colegio que cerró?», «¿cuánto será la matrícula de 1° básico en 2035?», «¿cómo cambiará la matrícula en los próximos 20 años?», «¿cuánto faltan a clases los alumnos de mi comuna?», «¿cuántos tienen inasistencia grave?». Para listar u ordenar los colegios de una comuna, colegios_comuna; para los resultados de un territorio (NEM, PAES, ingreso a la educación superior), leer-los-resultados; para los movimientos de alumnos entre colegios y comunas, leer-un-mercado.
---

# Leer un territorio

## Por dónde entrar

- **Chile entero**: `panorama_pais`. Trae también la matrícula de cada región por año.
- **Una región**: `panorama_region`, por código («9») o nombre («Araucanía», «Metropolitana»). Trae sus comunas para
  bajar a una.
- **Una comuna**: `buscar_comuna` para su código si sólo tienes el nombre, y luego `panorama_comuna`.

Acota los años con `desde` y `hasta`: la serie completa, 2004–2026, es pesada si basta un año. Con `grado=True`, la
matrícula regular por grado (y la de una `dependencia`, si la pides). Con `dependencia`, el detalle por nivel y los
prioritarios vienen sólo de esa dependencia, y la serie por dependencia sigue completa para ver su peso.

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

## Colegios, cierres y por qué cambia la matrícula

Los tres panoramas traen `colegios_y_cierres` (cierres@1). **Sin años, los panoramas traen los últimos cinco
(2022–2026)**, con su `colegios_y_cierres`, y el primer aviso lo dice: si la pregunta es por la evolución larga, pide
`desde=2004` y dilo en la respuesta.

- **`colegios_por_anio`**: cuántos colegios tienen matrícula cada año, por dependencia. **`aperturas_y_cierres`**:
  cuántos abren y cuántos cierran. Un colegio cierra el año siguiente a su último año con matrícula; `cierran_s5` se
  vaciaron hacia un colegio que los absorbió o los sucedió. En la comuna, **`cierres`** los nombra en orden alfabético,
  con su matrícula del último año y adónde fueron sus alumnos.
- **`balance`**: para «¿por qué baja la matrícula?». El cambio entre un año y el siguiente es lo que entra (niños
  nuevos en parvularia y en otros grados, alumnos de otras comunas) menos lo que sale (egresos de 4° medio, alumnos que
  se van a otra comuna o que no vuelven sin haber egresado). Da primero el cambio y después qué parte lo explica: en
  Chile, 2024→2025, la matrícula baja 38.306 con 188.861 niños nuevos en parvularia y 218.822 egresos.

Junto a esas cifras se dice:

- **El registro no dice por qué cierra un colegio.** No lo atribuyas a la matrícula, al financiamiento ni al sostenedor.
- **La `salida` de un colegio que cerró es sólo de básica y media.** La parvularia no se sigue: si tenía 67 alumnos y la
  salida suma 39, la diferencia es su parvularia, no alumnos perdidos. Dilo así.
- **Un «otros» de la salida no se despeja** restándolo de la matrícula de básica y media del último año: es un grupo de
  1 a 4 aunque la cuenta sea posible.
- **«sin egresar» no es deserción.** Es no aparecer en la matrícula escolar del año siguiente: puede ser irse del país
  o pasar a adultos.
- **Los «nuevos en otro grado» no son «migrantes».** Son reingresos o llegadas desde fuera del sistema escolar; ninguna
  base escolar trae la nacionalidad.
- **Los nuevos de parvularia incluyen a los que vienen de JUNJI o Integra**, que el saber no cubre.
- **Ninguna lista de colegios abiertos por cuánto cae su matrícula.** Se leería como «los que van a cerrar». Fuera de
  la comuna va sólo `cambio_desde_2015`, una distribución sin nombres; un colegio con nombre, con su ficha.

## La asistencia

Para «¿cuánto faltan los alumnos?» o «¿cuántos tienen inasistencia grave?»: `asistencia`, de un colegio, una comuna,
una región o Chile, en 2015–2019 y 2022–2025.

- **Di la tasa y las categorías como vienen.** La tasa acumulada es días asistidos sobre días trabajados. Las categorías
  son las del Mineduc: esperada (90 % o más), reiterada (85 a 90 %), grave (50 a 85 %) y crítica (menos de 50 %).
  `bajo_85` es grave más crítica. Usa las proporciones que vienen; no dividas a mano.
- **Sin particular pagado y sin adultos.** La base del Mineduc no trae el particular pagado: dilo siempre, y con más
  fuerza si el primer aviso dice que en ese territorio pesa. `cobertura` dice qué parte de la matrícula cubre.
- **2020 y 2021 no existen, y 2019 coincide con el estallido social.** Para hablar del efecto de la pandemia, compara
  con 2015–2018 como rango, no con un solo año: la asistencia venía subiendo en esos años.
- **Son los archivos que el Mineduc re-publicó en febrero de 2026:** cada alumno queda en su último colegio del año. En
  2015 no hay corte por prioritario.
- **Cortes:** en territorio, `corte` = dependencia, sexo o prioritario. Con corte y sin años, trae los últimos cinco;
  para la línea base, pide `desde=2015`. En el colegio, ninguno: va por nivel, con
  k = 5, y con su comuna como contexto.
- **La cifra oficial difiere un poco en las categorías** (el Mineduc redondea la tasa de cada alumno y cuenta adultos).
  Si la citas, di que es otra medición.
- **No expliques ni ordenes.** La base no dice por qué falta un alumno, y ningún colegio es «el que más falta».

## Después de 8° básico

Para «¿cuántos de los que salen de 8° terminan la media o llegan a la educación superior?» en una comuna, una región o
Chile: `despues_de_octavo`. Sin corte trae rural y urbano; con `corte=tipo_escuela`, los colegios con y sin media; con `corte=zona_tipo_escuela`, los
dos juntos (rural sin media, por ejemplo). Se
lee como dice «Después de 8° básico» en leer-los-resultados.

## La matrícula futura

Para «¿cuánto será la matrícula de 1° básico en 2035?» o «¿cómo cambia la media en 5, 10, 15, 20 y 25 años?»:
`proyeccion_matricula`. Es **solo del país**. Sin años trae 2030, 2035, 2040, 2045 y 2050; para cada año, `desde` y
`hasta` (todos: `desde=2027`; 2026 es el año observado). Para «en N años», cuenta desde 2026 y pide esos años.

- **Es una estimación, no un pronóstico.** Población del INE (base Censo 2024) con la edad de cada grado, por la
  cobertura de ese grado en 2026, el último año observado. Dilo así, con los supuestos: fecundidad, mortalidad y migración del INE, y que la
  cobertura no cambie.
- **Di desde qué año depende de niños que no han nacido** (`grados_por_nacer`; en 1° básico, desde 2032). Antes de eso,
  la mayor fuente de error es la migración.
- **Da la banda** (`bajo`–`alto`) y redondea a miles. La banda cubre cambios de cobertura como los de 2022–2025, no
  un error de la proyección del INE.
- **Usa `cambio_desde_base`** (desde el año de `anio_base`), que ya viene calculado. No dividas a mano.
- **Por región, comuna o colegio no hay**, y no se arma repartiendo la cifra del país: dilo y ofrece la de Chile o la
  serie observada del territorio (`panorama_region`, `panorama_comuna`).
- **No expliques por qué baja la natalidad.** El saber no lo mide.

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
