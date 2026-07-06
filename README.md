# Portu 🇧🇷🇵🇹

Curso de portugués para hispanohablantes que distingue **siempre** entre el
portugués de Brasil y el de Portugal, organizado por niveles del **MCER**
(A1 → C1) y cubriendo las **4 habilidades**: leer, escribir, escuchar y hablar.

Es una **PWA**: se abre en el navegador y se instala en el teléfono
("Añadir a pantalla de inicio"), funciona offline y guarda el progreso en el
dispositivo.

## Cómo ejecutar

```bash
npm install
npm run dev        # desarrollo → http://localhost:5173
npm run build      # verificación de tipos + build de producción en dist/
npm run preview    # sirve el build de producción
npm run icons      # regenera los iconos PNG de la PWA
```

Para probarla en el teléfono durante el desarrollo: `npm run dev -- --host`
y abre la IP local en el móvil (misma red Wi-Fi). El audio (TTS) y el
micrófono funcionan mejor en Chrome/Edge; el reconocimiento de voz no está
disponible en Firefox.

## El método

- **Banderitas por concepto**: cada palabra, frase o regla lleva 🇧🇷, 🇵🇹 o
  ambas. Cuando las variantes divergen (p. ej. 🇧🇷 *eu me chamo* / 🇵🇹
  *chamo-me*) se muestran las dos formas lado a lado, cada una con su audio
  en el acento correcto.
- **Variante principal**: el estudiante elige la variante que practica
  activamente; la otra se enseña para reconocerla al oírla o leerla.
- **4 habilidades por lección**: comprensión oral (TTS con voces pt-BR y
  pt-PT), lectura, escritura (dictado, huecos, ordenar, traducir) y habla
  (reconocimiento de voz que compara lo dicho con el objetivo).

El detalle pedagógico completo está en [docs/pensum.md](docs/pensum.md).

## Arquitectura

Capas estrictas (ver [docs/arquitectura.md](docs/arquitectura.md)):

```
src/
├── domain/     Modelo puro: tipos del contenido, evaluación, progreso.
│               Sin React ni APIs del navegador. Testeable de forma aislada.
├── services/   Infraestructura tras interfaces: persistencia (localStorage),
│               TTS y reconocimiento de voz (Web Speech API).
├── data/       El pensum: currículo y lecciones tipadas (el compilador
│               valida el contenido).
└── ui/         React: pantallas, secciones, ejercicios y hooks
                (los hooks actúan de controladores).
```

**Para añadir contenido no se toca código de la app**: se crea una lección
nueva en `src/data/` siguiendo los tipos de `domain/content.ts` y se registra
en `src/data/curriculum.ts`.

**Para añadir un tipo de ejercicio nuevo**: ampliar la unión `Exercise` en
`domain/content.ts`, crear su componente en `ui/exercises/` y añadir el caso
en `ExerciseView.tsx` (el compilador avisa si falta).

## Estado actual (v0.1)

- ✅ A1 · Módulo 1 completo: 2 lecciones con vocabulario, gramática,
  pronunciación contrastiva y 20 ejercicios.
- ✅ PWA instalable con soporte offline.
- ✅ Progreso persistente y elección de variante principal.
- 🔜 Repaso espaciado (SRS), módulos 2–8 de A1, niveles A2+.
