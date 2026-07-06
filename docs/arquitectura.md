# Arquitectura

Objetivo: que el proyecto sea **mantenible, reutilizable y extensible**.
Guías: separación por capas (variante de MVC), principios SOLID y garantías
tipo ACID en la persistencia.

## Capas (MVC adaptado a React)

| Capa MVC | Carpeta | Regla |
|---|---|---|
| **Modelo** | `src/domain/` + `src/data/` | Lógica y datos puros. Prohibido importar React o APIs del navegador. |
| **Controlador** | `src/ui/hooks/` + `src/services/` | Los hooks orquestan modelo ↔ vista; los servicios encapsulan el navegador. |
| **Vista** | `src/ui/` (componentes y pantallas) | Solo pinta y delega. No contiene reglas de negocio ni toca localStorage. |

Dependencias permitidas (solo hacia abajo):
`ui → services → domain` y `ui → data → domain`. Nunca al revés.

## SOLID en la práctica

- **S — Responsabilidad única**: cada módulo hace una cosa. `evaluation.ts`
  solo compara respuestas; `storage.ts` solo persiste; `tts.ts` solo habla.
- **O — Abierto/cerrado**: los ejercicios son una unión discriminada
  (`domain/content.ts`) + un despacho exhaustivo (`ui/exercises/ExerciseView.tsx`).
  Añadir un tipo de ejercicio no modifica los existentes, y el `default: never`
  hace que el compilador señale el punto de extensión. Igual con el contenido:
  añadir lecciones o niveles no toca código de la app.
- **L — Sustitución de Liskov**: cualquier implementación de
  `ProgressRepository`, `SpeechService` o `RecognitionService` es
  intercambiable (p. ej. un repositorio en memoria para tests o IndexedDB en
  el futuro) sin que la UI lo note.
- **I — Segregación de interfaces**: interfaces mínimas. La UI que reproduce
  audio solo conoce `speak()`; la que evalúa habla solo conoce `listenOnce()`.
- **D — Inversión de dependencias**: la UI depende de las **interfaces** de
  `services/`, nunca de localStorage/Web Speech directamente. Las
  implementaciones concretas se inyectan en un único punto
  (`ProgressProvider`, singletons de servicio).

## ACID en la persistencia

localStorage no es una base de datos transaccional, pero el diseño aplica los
mismos principios dentro de sus límites (`services/storage.ts`):

- **Atomicidad**: todo el estado del progreso se serializa y escribe en UNA
  clave con un único `setItem`. Nunca existen estados a medio escribir.
- **Consistencia**: el estado lleva `version`; al cargar se valida y se migra.
  JSON corrupto o esquema desconocido ⇒ estado inicial válido, jamás un
  estado inválido en memoria.
- **Aislamiento**: no aplica hoy (un único escritor). Si algún día hay
  varias pestañas/sincronización, se resolverá en el repositorio sin tocar la UI.
- **Durabilidad**: `setItem` es síncrono y persiste entre sesiones. Si la
  escritura falla (cuota, modo privado), la app sigue funcionando en memoria.

Cuando el progreso crezca (SRS con miles de tarjetas) o haya backend, se
sustituye `LocalStorageProgressRepository` por una implementación con
IndexedDB o una API remota con transacciones reales — mismo contrato.

## Decisiones registradas

- **PWA (React + TypeScript + Vite + vite-plugin-pwa)** en vez de app nativa:
  un solo código para PC y teléfono, instalable, offline, y con las voces
  pt-BR/pt-PT del sistema gratis vía Web Speech API. Si hiciera falta tienda,
  se envuelve con Capacitor.
- **Contenido como datos tipados** (TS) en vez de JSON suelto: el compilador
  valida el pensum en cada build.
- **Sin librería de rutas ni de estado** por ahora: dos pantallas no lo
  justifican; se añadirá react-router cuando haya URLs que compartir.
