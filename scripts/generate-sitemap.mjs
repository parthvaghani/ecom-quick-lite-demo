import fs from "fs";
import path from "path";

// Read and parse the JSON file directly to avoid import assertion issues
const sitemapData = JSON.parse(
    fs.readFileSync(
        path.resolve(process.cwd(), "src/utils/categories.json"),
        "utf-8"
    )
);
const { categories } = sitemapData;

const SITE_URL = "https://aavkarmukhwas.com";

function generateSitemap() {
    const staticPages = fs
        .readdirSync(path.join(process.cwd(), "src/app"))
        .filter(
            (file) =>
                !file.startsWith("(") &&
                !file.startsWith("[") &&
                !file.startsWith("api") &&
                !file.startsWith("layout") &&
                !file.startsWith("global") &&
                file.endsWith(".tsx")
        )
        .map((file) => file.replace(/\.tsx$/, ""));

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
            .map((page) => {
                const path = page === "page" ? "/" : `/${page}`;
                return `
    <url>
      <loc>${`${SITE_URL}${path}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
            })
            .join("")}
  ${categories
            .flatMap(({ category, subCategories }) => {
                const parentUrl = `
    <url>
      <loc>${`${SITE_URL}/${category}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;

                const childUrls = subCategories.map((sub) => {
                    return `
    <url>
      <loc>${`${SITE_URL}/${category}/${sub.category}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`;
                });

                return [parentUrl, ...childUrls];
            })
            .join("")}
</urlset>`;

    fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), sitemap);
}

generateSitemap(); 