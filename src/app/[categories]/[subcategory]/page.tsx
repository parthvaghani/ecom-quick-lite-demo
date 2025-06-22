import { default as categoriesData } from "@/utils/categories.json";
import { notFound } from "next/navigation";
import ProductDetailClientPage from "./ProductDetailClientPage";

// Define the proper types for Next.js App Router (15+)
interface PageProps {
  params: Promise<{
    categories: string;
    subcategory: string;
  }>;
}

export default async function SubCategoryPage({ params }: PageProps) {
  // Await the params Promise
  const { categories, subcategory } = await params;

  const currentCategory = categoriesData.categories.find(
    (cat) => cat.category === categories
  );

  if (!currentCategory) {
    notFound();
  }

  const currentSubCategory = currentCategory.subCategories.find(
    (sub) => sub.category === subcategory
  );

  if (!currentSubCategory) {
    notFound();
  }

  return (
    <ProductDetailClientPage
      product={currentSubCategory}
      pricingEnabled={currentCategory.pricingEnabled || false}
      shippingConfig={categoriesData.shippingConfig}
    />
  );
}
