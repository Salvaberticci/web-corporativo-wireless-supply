# AGENTS.md — Instrucciones para agentes IA

Este proyecto es el sitio corporativo de **Wireless Supply C.A.**

## Antes de tocar código

1. Lee `docs/memoria-ia/README.md`.
2. Lee `docs/memoria-ia/00-contexto.md`, `01-arquitectura.md`, `02-sistema-diseno.md` y `07-estado-proyecto.md`.
3. Revisa el estado de Git: `git status` y `git branch`.
4. No reescribas archivos completos si basta una edición puntual.

## Reglas

- Mantén la estética **cyber-premium**: fondo oscuro, acentos cian, superficies de cristal, tipografía Space Grotesk + Plus Jakarta Sans.
- No añadas dependencias sin registrarlas en `01-arquitectura.md`.
- No añadas animaciones sin documentarlas en `03-motion.md`.
- Toda página debe cumplir `04-responsive.md` y `05-accesibilidad.md`.
- No cambies el número de WhatsApp placeholder sin confirmación del cliente.
- No publiques `_source/`, `docs/` ni archivos de build.
- No incluyas secretos ni datos personales.

## Al terminar

- Actualiza `docs/memoria-ia/07-estado-proyecto.md`.
- Si tomaste una decisión relevante, añádela a `08-decisiones.md`.
- Ejecuta `npm run build` si tocaste Tailwind.
- Verifica en navegador: sin errores de consola, sin 404, sin overflow.
- Haz commit con Conventional Commits.
