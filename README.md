<div align="center">

<br>

# Ψ &nbsp; S I M P L E &nbsp; Y O G A &nbsp; E L I T E

**Santuario Boutique · La Ingeniería del Silencio**

<br>

<a href="https://github.com/FrankUsqAbant/simple-yoga-elite">
  <img src="./public/Pantalla.webp" alt="Simple Yoga Elite — Obsidian Zen Luxury" width="680">
</a>

<br>
<br>

[![React 19](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite 7](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com/)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com/)

---

</div>

## Acerca del Proyecto

Simple Yoga Elite es una aplicación web boutique para un estudio de yoga de alto rendimiento. Construida con una estética **Obsidian Zen Luxury** — tonos obsidiana oscuros, acentos en oro champagne, tipografía serif clásica y tarjetas con efecto glassmorphism.

## Características

| Módulo | Descripción |
|---|---|
| **Universo** | Página principal con hero cinematográfico, disciplinas de élite y precios |
| **Sesiones** | Catálogo de clases con calendario interactivo y modal de reserva |
| **Diario** | Blog de bienestar con artículos de alto rendimiento |
| **Contacto** | Formulario de concierge privado con mapa integrado |
| **Pagos** | Integración con Stripe para procesamiento seguro de membresías |
| **Admin** | Panel protegido con gestión de clases, blog y reservaciones |

## Stack Tecnológico

```
Frontend     →  React 19 · React Router 7 · Lucide Icons
Build        →  Vite 7 · ESLint 9
Backend      →  Supabase (Auth + Database) · Stripe (Pagos)
Estilos      →  CSS3 Vanilla (Design Tokens + Glassmorphism)
Deploy       →  Netlify (SPA + Redirects)
```

## Inicio Rápido

```bash
# Clonar
git clone https://github.com/FrankUsqAbant/simple-yoga-elite.git
cd simple-yoga-elite

# Instalar
npm install

# Desarrollo
npm run dev
```

### Variables de Entorno (opcional)

Crear un archivo `.env` en la raíz:

```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
VITE_STRIPE_PUBLIC_KEY=tu_stripe_public_key
STRIPE_SECRET_KEY=tu_stripe_secret_key
```

> La aplicación funciona en modo demo sin variables de entorno.

## Estructura

```
simple-yoga-elite/
├── public/
│   ├── hero_sanctuary.webp
│   ├── Pantalla.webp
│   └── _redirects
├── src/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   │   ├── admin/
│   │   └── public/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── supabase.js
├── server.js
├── index.html
├── vite.config.js
└── package.json
```

---

<div align="center">
  <sub>Desarrollado por <strong>Franquer Abanto</strong></sub>
</div>
