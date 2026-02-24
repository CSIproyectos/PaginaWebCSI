# Proyectos CSI - Website

Sitio web corporativo de Proyectos CSI migrado de WordPress a Astro para máximo rendimiento y SEO.

## Stack Tecnológico

- **Framework**: Astro 4.x (SSG)
- **Styling**: Tailwind CSS
- **Components**: React (islas de interactividad)
- **Language**: TypeScript (strict mode)
- **Deployment**: Hostinger Premium (archivos estáticos)
- **Backend Futuro**: PHP 8 + MySQL

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Estructura del Proyecto

```
/
├── public/
│   ├── images/          # Imágenes optimizadas
│   ├── fonts/           # Fuentes web
│   ├── robots.txt       # SEO
│   └── .htaccess        # Configuración Apache
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts base
│   ├── pages/           # Rutas (file-based)
│   ├── content/         # Markdown/MDX content
│   ├── styles/          # CSS global
│   └── utils/           # Helpers y utilidades
└── astro.config.mjs     # Configuración Astro
```

## Objetivos SEO

- Lighthouse Score: 95+ en todas las métricas
- Core Web Vitals optimizados
- Schema.org markup completo
- Ranking Top 3 en México

## Integraciones

- HubSpot Blog
- HubSpot Forms (captura de leads)
- Google Analytics 4
- Google Search Console

##  Gestión de Contenido

El contenido se gestiona mediante:
- **Markdown/MDX**: Para páginas estáticas
- **JSON**: Para datos estructurados (catálogo futuro)
- **HubSpot**: Para blog y contenido dinámico

##  Deployment

1. Build del proyecto: `npm run build`
2. Los archivos se generan en `/dist`
3. Subir contenido de `/dist` a Hostinger vía FTP/cPanel
4. Configurar `.htaccess` para redirects y optimizaciones

##  Contacto

Proyectos CSI - https://proyectoscsi.mx
