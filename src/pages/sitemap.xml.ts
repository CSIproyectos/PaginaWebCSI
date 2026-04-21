const siteUrl = 'https://proyectoscsi.mx';

const routes = [
  '/',
  '/nosotros',
  '/soluciones',
  '/sectores',
  '/financiamiento',
  '/contacto',
  '/soporte',
  '/blog',
  '/ebooks',
  '/cableado-estructurado',
  '/control-de-acceso',
  '/videovigilancia',
  '/ciberseguridad',
  '/deteccion-de-incendios',
  '/desarrollo-de-software',
  '/energias-alternativas',
  '/casos-de-exito',
  '/garantias',
  '/aviso-de-privacidad',
  '/sectores/corporativo',
  '/sectores/hospitalidad',
  '/sectores/industria-y-produccion',
  '/sectores/logistica-recintos-fiscales',
  '/sectores/mineria',
];

export async function GET() {
  const urls = routes
    .map((route) => `
  <url>
    <loc>${siteUrl}${route}</loc>
  </url>`)
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}