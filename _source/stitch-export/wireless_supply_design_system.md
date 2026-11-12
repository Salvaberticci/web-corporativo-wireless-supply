---
name: "Wireless Supply Cyber-Fiber"
description: "Tecno-futuristic corporate design system for Wireless Supply ISP & fiber optic telecom solutions."
---

## Overview

Wireless Supply Cyber-Fiber balances institutional reliability, technological speed, and modern fiber-optic connectivity. Designed for Venezuelan corporate and residential telecom customers, it bridges high-speed fiber data conduits with humanized 24/7 WhatsApp customer service. The aesthetic blends deep cyber navy, crisp electric cyan, luminous fiber blue, and pure sterile white surfaces with circuit-line micro-accents and glass-sheen elevations.

```markdown
Brand personality: Resilient, Ultra-fast, Grounded, Hyper-connected, Accessible.
Design movement: Techno-futuristic Corporate with clean high-contrast readability.
```

## Colors

The palette directly honors the Wireless Supply logo cyan-blue tone (`#298fc2`), anchoring it with deep deep tech navy (`#081728` and `#0f2744`) for contrast and corporate authority, energized with vibrant electric cyan (`#00D2FF`) and grounded in crisp light surfaces with strict WCAG AA adherence.

- **Primary:** High-speed tech navy for commanding text and authoritative structure.
- **Secondary:** Logo-derived cyber blue (`#1D7DAF`) optimized for high-contrast on white.
- **Accent:** Electric cyan glow (`#00A7D6`) evoking pulsing fiber-optic pulses.
- **Neutral:** Clean sterile white (`#FFFFFF`) with cool tech-tinted slate containers (`#F4F8FB`).

```yaml
colors:
  brand-blue: "#298fc2"
  cyan-glow: "#00D2FF"
  fiber-core: "#0EA5E9"
  success: "#059669"
  error: "#DC2626"
  warning: "#D97706"
  light:
    primary: "#0A2540"
    on-primary: "#FFFFFF"
    surface: "#FFFFFF"
    on-surface: "#0A192F"
    surface-container: "#F4F8FB"
    surface-container-high: "#E6F0F8"
    outline: "#BCD5E6"
    secondary: "#1A6B99"
    on-secondary: "#FFFFFF"
    accent: "#0284C7"
    on-accent: "#131313"
  dark:
    primary: "#7DD3FC"
    on-primary: "#082F49"
    surface: "#081325"
    on-surface: "#F0F9FF"
    surface-container: "#0C1D36"
    surface-container-high: "#132D52"
    outline: "#234975"
    secondary: "#38BDF8"
    on-secondary: "#082F49"
    accent: "#38BDF8"
    on-accent: "#082F49"
```

## Typography

A dual pairing featuring **Space Grotesk** for futuristic, high-tech headlines and **Plus Jakarta Sans** for clean, modern readability across plans, specifications, and legal policies.

```yaml
typography:
  display-lg:
    fontFamily: "Space Grotesk"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 56px
    letterSpacing: -1px
  display-lg-mobile:
    fontFamily: "Space Grotesk"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 38px
    letterSpacing: -0.5px
  headline-xl:
    fontFamily: "Space Grotesk"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: -0.8px
  headline-xl-mobile:
    fontFamily: "Space Grotesk"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 34px
    letterSpacing: -0.4px
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -0.5px
  headline-lg-mobile:
    fontFamily: "Space Grotesk"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: -0.3px
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.2px
  title-lg:
    fontFamily: "Space Grotesk"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
  title-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  body-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  label-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0.5px
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.5px
```

## Layout & Spacing

A 12-column responsive fluid grid structured with high visual breathing room. Micro-steps follow an 8px modular baseline.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section-sm: 40px
  section-lg: 80px
  page-margin: 24px
```

## Elevation & Depth

Subtle tech glass layers using frosted boundary borders (`border-light-outline`), soft diffused tech shadows tinted with navy (`0 8px 30px -4px rgba(10, 37, 64, 0.08)`), and glowing fiber highlights on focused interactive states.

## Shapes

Precise geometric rounding reflecting aerodynamic network hardware:

```yaml
rounded:
  sm: 6px
  DEFAULT: 10px
  md: 14px
  lg: 20px
  xl: 28px
  full: 9999px
```

## Motion & Micro-interaction

Fast, clean, fiber-like response times:

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0.4, 0, 0.2, 1)
  beam-pulse:
    duration: 400ms
    delay: 0ms
    timingFunction: ease-in-out
```

## Voice & Content Strategy

- **Tone:** Authoritative, cutting-edge, transparent, client-obsessed.
- **Language:** Spanish (Latin America / Venezuela context), professional telecom terms (Fibra Óptica Dedicada, GPON, Simetría 1:1, RIF J507358860).
- **CTA Grammar:** Direct outcome action phrases: "Cotizar por WhatsApp", "Verificar Cobertura", "Consultar Planes Empresariales".
- **Legal & Compliance:** Explicit adherence to Meta WhatsApp Business API standards, data privacy disclosure, and corporate legitimacy.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Input Field** → `@components/input-field.html`: `input-field-text`, `input-field-icon`
