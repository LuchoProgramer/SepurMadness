export async function GET() {
    // Definir las páginas estáticas de tu sitio
    const staticPages = [
        { url: "/", priority: "1.0" },
        { url: "/nosotros", priority: "0.8" },
        { url: "/servicios", priority: "0.7" },
        { url: "/store", priority: "0.9" },
        { url: "/proyectos", priority: "0.9" }
    ];

    // Si tienes productos dinámicos, puedes obtenerlos de una API o base de datos
    // const products = await fetch('https://sepurmadness.com/api/products').then(res => res.json());

    const pages = staticPages; // Agrega aquí los productos si los tienes dinámicos

    // Generar el contenido del sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map(
                (page) => `
        <url>
            <loc>https://sepurmadness.com${page.url}</loc>
            <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
            <priority>${page.priority}</priority>
        </url>`
            )
            .join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}