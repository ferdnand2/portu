---
name: verify
description: Verifica Portu de punta a punta - build, preview y recorrido con Playwright sobre el Edge del sistema, con capturas.
---

# Verificar Portu

Receta que funcionó (Windows, sin descargar navegadores de Playwright):

```bash
npm run build                      # tsc --noEmit + vite build (+ PWA)
npm run preview -- --port 4173 --strictPort   # en segundo plano
node scripts/verify-drive.mjs      # recorrido E2E + capturas en .verify-shots/
node scripts/verify-ipa.mjs        # transcripciones AFI interactivas (hoja por símbolo)
```

`scripts/verify-drive.mjs` usa `chromium.launch({ channel: 'msedge', headless: true })`
(la librería `playwright` está en devDependencies; usa el Edge instalado, no
descarga browsers). Viewport 390×844 (móvil). Hace: home → cambio de variante
a PT → lección 1 → 4 pestañas → los 10 ejercicios de práctica (incluye un
fallo a propósito en e1) → resumen → vuelta al home → recarga (persistencia)
→ localStorage corrupto (resiliencia). Capturas en `.verify-shots/`
(gitignored) o en `$SHOTS_DIR`.

Detalles a saber:

- El script debe ejecutarse desde la raíz del proyecto (resuelve `playwright`
  de node_modules).
- En headless no hay voces TTS: aparece el aviso "no tiene voces de portugués"
  — es lo esperado, no un bug.
- Los ejercicios `speak` (e9/e10) fallan en headless tras 2 intentos (no hay
  micrófono): el resumen esperado del recorrido es **7 de 10** en la lección 1.
- Los emoji de bandera 🇧🇷🇵🇹 se ven como letras "BR/PT" en Windows; en
  Android/iOS se ven como banderas. No es un bug.
- Si cambias el contenido de la lección 1, el script puede requerir ajustes
  (busca textos concretos de ejercicios).
