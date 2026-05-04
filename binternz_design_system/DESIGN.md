---
name: Binternz Design System
colors:
  surface: '#fff8f5'
  surface-dim: '#e8d7cb'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e8'
  surface-container: '#fdebdf'
  surface-container-high: '#f7e5d9'
  surface-container-highest: '#f1dfd3'
  on-surface: '#231a13'
  on-surface-variant: '#554336'
  inverse-surface: '#392e27'
  inverse-on-surface: '#ffeee2'
  outline: '#887364'
  outline-variant: '#dbc2b0'
  surface-tint: '#8f4e00'
  primary: '#8f4e00'
  on-primary: '#ffffff'
  primary-container: '#ff9933'
  on-primary-container: '#693800'
  inverse-primary: '#ffb77a'
  secondary: '#056e00'
  on-secondary: '#ffffff'
  secondary-container: '#8dfc75'
  on-secondary-container: '#067500'
  tertiary: '#585c7d'
  on-tertiary: '#ffffff'
  tertiary-container: '#abafd4'
  on-tertiary-container: '#3d4261'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc2'
  primary-fixed-dim: '#ffb77a'
  on-primary-fixed: '#2e1500'
  on-primary-fixed-variant: '#6d3a00'
  secondary-fixed: '#8dfc75'
  secondary-fixed-dim: '#72de5c'
  on-secondary-fixed: '#012200'
  on-secondary-fixed-variant: '#035300'
  tertiary-fixed: '#dee0ff'
  tertiary-fixed-dim: '#c0c4ea'
  on-tertiary-fixed: '#141936'
  on-tertiary-fixed-variant: '#404564'
  background: '#fff8f5'
  on-background: '#231a13'
  surface-variant: '#f1dfd3'
  saffron-main: '#FF9933'
  saffron-light: '#FFB347'
  india-green: '#138808'
  navy-deep: '#0A0F2C'
  page-bg: '#F8F9FB'
  card-bg: '#FFFFFF'
  text-primary: '#1A1A2E'
  text-muted: '#6B7280'
  border-base: '#E5E7EB'
  tag-default-bg: '#F3F4F6'
  chip-green-bg: '#F0FDF4'
  chip-green-text: '#15803D'
  chip-orange-bg: '#FFF7ED'
  chip-orange-text: '#C2410C'
  chip-blue-bg: '#EFF6FF'
  chip-blue-text: '#1D4ED8'
  prestige-gold: '#FBBF24'
typography:
  hero-h1:
    fontFamily: Noto Serif
    fontSize: clamp(2rem, 5vw, 3.6rem)
    fontWeight: '900'
    lineHeight: '1.1'
  card-h2:
    fontFamily: Noto Serif
    fontSize: 1.3rem
    fontWeight: '700'
    lineHeight: '1.4'
  stat-number:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1'
  body-main:
    fontFamily: Be Vietnam Pro
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 13.5px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.5px
  button-text:
    fontFamily: Be Vietnam Pro
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  max-width: 900px
  container-padding-top: 56px
  container-padding-inline: 20px
  container-padding-bottom: 80px
  card-gap: 20px
  inner-padding: 24px
  label-min-width: 100px
---

# Binternz Design System

A clean, professional design language rooted in the Indian tricolor palette. Built for internship listing pages and resource directories.

---

## Brand Identity

**Brand Name:** Binternz — Interns from Bharat
**Tagline:** Interns from Bharat
**Personality:** Trustworthy, modern, proudly Indian, approachable for students

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|---|---|---|
| Saffron | `#FF9933` | Primary accent, buttons, card numbers, gradients |
| Saffron Light | `#FFB347` | Hover states, gradient endpoints |
| India Green | `#138808` | Success chips, positive indicators |
| Navy | `#0A0F2C` | Hero background, footer background |
| White | `#FFFFFF` | Base background, text on dark surfaces |

### Neutral Colors

| Name | Hex | Usage |
|---|---|---|
| Page Background | `#F8F9FB` | Main page background |
| Card Background | `#FFFFFF` | Card surfaces |
| Text Primary | `#1A1A2E` | Headings, body text |
| Text Muted | `#6B7280` | Subtext, labels, secondary info |
| Border | `#E5E7EB` | Card borders, dividers |
| Tag Background | `#F3F4F6` | Default chip/badge backgrounds |

### Semantic Chip Colors

| Variant | Background | Border | Text |
|---|---|---|---|
| Default | `#F3F4F6` | `#E5E7EB` | `#6B7280` |
| Green | `#F0FDF4` | `#BBF7D0` | `#15803D` |
| Orange | `#FFF7ED` | `#FED7AA` | `#C2410C` |
| Blue | `#EFF6FF` | `#BFDBFE` | `#1D4ED8` |
| Prestige (Gold) | `#FEF3C7`→`#FDE68A` | `#FBBF24` | `#92400E` |

---

## Typography

### Font Stack

```css
/* Display / Headings */
font-family: 'Playfair Display', serif;
font-weight: 700 | 900;

/* Body / UI */
font-family: 'DM Sans', sans-serif;
font-weight: 300 | 400 | 500 | 600;
```

Import via Google Fonts:
```
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap
```

### Type Scale

| Element | Font | Size | Weight |
|---|---|---|---|
| Hero H1 | Playfair Display | `clamp(2rem, 5vw, 3.6rem)` | 900 |
| Card H2 | Playfair Display | `1.3rem` | 700 |
| Stat Number | Playfair Display | `28px` | 700 |
| Body | DM Sans | `13.5px–15px` | 400 |
| Label / Chip | DM Sans | `11–12px` | 600–700 |
| Button | DM Sans | `13px` | 600 |

---

## Spacing & Layout

- **Max content width:** `900px`, centered
- **Container padding:** `56px 20px 80px`
- **Card gap:** `20px`
- **Card border-radius:** `16px`
- **Button border-radius:** `8px`
- **Chip border-radius:** `100px` (pill)

---

## Components

### Hero Section

- Background: `#0A0F2C` (navy)
- Top & bottom border: 5px tricolor stripe (`saffron | white | green`, each 33.3%)
- Decorative radial blob (saffron, 12% opacity) for depth
- Logo: circular, 96px, with saffron ring + box shadow
- Tag pill: semitraparent saffron background, uppercase, letter-spacing `2.5px`
- H1 accent word: saffron gradient text via `background-clip: text`

```css
/* Tricolor stripe */
background: linear-gradient(90deg, #FF9933 33.3%, #FFFFFF 33.3% 66.6%, #138808 66.6%);

/* Gradient text */
background: linear-gradient(135deg, #FF9933, #FFB347);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Cards

- White background, `1px` border in `#E5E7EB`
- `border-radius: 16px`, `overflow: hidden`
- Hover: `translateY(-3px)` + box-shadow `0 12px 40px rgba(0,0,0,0.08)`
- Two zones separated by a border: **card-top** (title area) and **card-body** (details)
- Number badge: 38×38px, `border-radius: 10px`, saffron gradient, Playfair Display

```css
/* Card number badge */
background: linear-gradient(135deg, #FF9933, #E8861F);
box-shadow: 0 4px 12px rgba(255, 153, 51, 0.35);
```

### Buttons

**Primary:**
```css
background: linear-gradient(135deg, #FF9933, #E8861F);
color: white;
box-shadow: 0 3px 10px rgba(255, 153, 51, 0.35);
/* Hover: stronger shadow + translateY(-1px) */
```

**Outline:**
```css
background: transparent;
border: 1.5px solid #E5E7EB;
color: #1A1A2E;
/* Hover: saffron border + text + #FFF7ED background */
```

### Chips / Tags

Pill-shaped inline badges for metadata. Available in 5 variants: default, green, orange, blue, prestige (gold gradient).

```css
border-radius: 100px;
padding: 4px 12px;
font-size: 12px;
font-weight: 500;
```

### Info List

Used inside cards for structured key-value info:

```css
.lbl {
  font-weight: 600;
  min-width: 100px;
  flex-shrink: 0;
}
```

### Postal / Warning Note

Dashed amber border box for special instructions:

```css
background: #FFFBEB;
border: 1.5px dashed #FBBF24;
border-radius: 10px;
color: #78350F;
```

### Section Label

Inline label with a trailing horizontal rule:

```css
display: flex;
align-items: center;
gap: 12px;
/* ::after pseudo-element: flex:1, height:1px, background: #E5E7EB */
```

---

## Iconography

Uses Unicode emoji for lightweight, no-dependency icons:
- 🔗 External links
- 📝 Application forms
- 📮 Postal / mail
- ⭐ Prestige badge
- ✅ Paid / confirmed
- 🇮🇳 India / Bharat identity

---

## Animations & Interactions

- **Card hover:** `transform: translateY(-3px)` + enhanced shadow — `transition: 0.22s ease`
- **Button hover:** `translateY(-1px)` + shadow intensifies — `transition: 0.18s ease`
- **Outline button hover:** border and text color shift to saffron, background tints amber

---

## Footer

- Same navy background as hero (`#0A0F2C`)
- Top tricolor border stripe (4px)
- Muted white text at 40% opacity
- Brand name highlighted in saffron

---

## Responsive Breakpoints

```css
@media (max-width: 580px) {
  /* card-top stacks vertically */
  /* hero H1 reduces to ~1.9rem */
  /* stats-row gap reduces to 20px */
  /* info label min-width reduces to 80px */
}
```

---

## CSS Variables Reference

```css
:root {
  --saffron: #FF9933;
  --saffron-light: #FFB347;
  --green: #138808;
  --green-light: #1AAB0A;
  --white: #FFFFFF;
  --navy: #0A0F2C;
  --card-bg: #FFFFFF;
  --text: #1A1A2E;
  --muted: #6B7280;
  --border: #E5E7EB;
  --tag-bg: #F3F4F6;
}
```

---

## Design Principles

1. **Proudly Indian** — Tricolor stripes are structural, not decorative. They appear at page boundaries as identity anchors.
2. **Hierarchy through contrast** — Navy hero vs white cards vs gray background creates clear visual layers without noise.
3. **Warmth via saffron** — The accent color is applied sparingly but decisively: numbers, CTAs, gradients, hover states.
4. **Readable density** — Cards pack a lot of info but use spacing, weight contrast, and chips to prevent overwhelm.
5. **No unnecessary decoration** — Blobs and shadows are subtle atmosphere, not the focus.
