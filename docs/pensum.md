# Pensum — Portugués para hispanohablantes (MCER)

Principios del curso:

1. **Bivarietal desde el día uno**: cada concepto se marca 🇧🇷 (Brasil),
   🇵🇹 (Portugal) o 🇧🇷🇵🇹 (común). Las divergencias sistemáticas (trato,
   colocación de pronombres, gerundio, léxico, pronunciación) se enseñan
   contrastadas, nunca escondidas.
2. **Variante principal**: el estudiante produce (habla/escribe) en su
   variante elegida y aprende a **reconocer** la otra.
3. **Apoyo en el español**: se aprovechan los cognados y se atacan
   explícitamente los falsos amigos y las interferencias típicas del
   hispanohablante.
4. **4 habilidades en cada lección**: escuchar (audio en ambos acentos),
   leer, escribir y hablar, más pronunciación contrastiva.
5. **Repaso espaciado** (pendiente de implementar): vocabulario y
   estructuras entran en un mazo SRS.

---

## A1 — Acceso (en desarrollo)

| Módulo | Tema | Gramática clave | Divergencias BR/PT destacadas |
|---|---|---|---|
| 1 ✅ | Saludos y presentaciones | ser; chamar-se; pronombres de trato | você/tu; me chamo/chamo-me; oi/olá; tchau/adeus |
| 2 | Números, fechas y horas | horas; dias da semana; ter (edad) | seis/meia (BR al dictar); manhã/tarde usos |
| 3 | Familia y descripciones | ser vs estar vs ficar; ter; posesivos | uso del artículo con posesivos (PT lo exige más) |
| 4 | Comida y restaurante | gostar de; querer; pedir | léxico: café da manhã/pequeno-almoço; suco/sumo |
| 5 | La ciudad y direcciones | haver; ficar; imperativo básico | ônibus/autocarro; trem/comboio; ponto/paragem |
| 6 | Rutina diaria | presente regular -ar/-er/-ir; reflexivos | estar + gerundio (BR) vs estar a + inf. (PT) ⭐ |
| 7 | Compras y ropa | demostrativos; este/esse/aquele; precios | legal/fixe; celular/telemóvel |
| 8 | Viajes y transporte | ir; ir + infinitivo (futuro próximo) | pronunciación: reducción vocálica PT en frases reales |

Módulo 1 implementado: **Lección 1** (saludos y despedidas; obrigado/a;
você/tu) y **Lección 2** (presentarse; ser; chamar-se y colocación
pronominal; reducción vocálica y s final).

## A2 — Plataforma

- Pretérito **perfeito** e **imperfeito** (contraste con el español: el
  perfeito cubre también "he hecho").
- Futuro simple e "ir + infinitivo"; condicional de cortesía.
- Temas: salud, trabajo, tiempo libre, clima, biografías.
- Divergencias: léxico cotidiano masivo (banheiro/casa de banho,
  geladeira/frigorífico…), "a gente" = nós (BR coloquial), tener que:
  ter que/ter de.

## B1 — Umbral

- **Subjuntivo presente**; imperativo completo; pronombres de objeto.
- Discurso: conectores, opinión, acuerdo/desacuerdo, narrar en pasado.
- Temas: medios, tecnología, educación, medio ambiente.
- Divergencias: colocación pronominal en frases complejas; "estar a fazer"
  vs "estar fazendo" en todos los tiempos; tratamiento formal en cartas.

## B2 — Avanzado

- **Subjuntivo futuro** (quando puderes, se quiseres) — estructura sin
  equivalente vivo en español, prioridad máxima.
- Infinitivo personal (para fazermos), voz pasiva, estilo indirecto.
- Temas: debate, trabajo profesional, cultura de ambos países.
- Divergencias: registro coloquial brasileño vs europeo; ortografía y
  pronunciación de cultismos.

## C1 — Dominio

- Matices de registro, ironía, expresiones idiomáticas de cada país,
  variación regional interna (paulista/carioca; Lisboa/Oporto).
- Producción larga: ensayo, presentación oral, comprensión de medios
  nativos a velocidad real (radio, podcast, telenovela, noticiario).

---

## Tipos de ejercicio por habilidad

| Habilidad | Tipos implementados |
|---|---|
| 👂 Escuchar | `listen-choice` (audio → comprensión), `dictation` |
| 📖 Leer | `read-choice` (texto → comprensión; incluye identificar la variante) |
| ✍️ Escribir | `dictation`, `fill-blank`, `order-words`, `translate` |
| 🗣️ Hablar | `speak` (reconocimiento de voz compara con el objetivo) |

Ideas futuras: emparejar columnas BR↔PT, escritura libre con corrección,
conversación guiada, sombreado (shadowing) con grabación.
