import { Metadata } from "next";
import categoriesJson from "@/utils/categories.json";
import SubCategoryClientPage from "./SubCategoryClientPage";
import { Category } from "@/components/ui/Category";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categories: string; subcategories: string }>;
}): Promise<Metadata> {
  const { categories, subcategories } = await params;

  const category = categoriesJson.categories.find(
    (c) => c.category === categories
  );
  const subCategory = category?.subCategories?.find(
    (sc) => sc.category === subcategories
  );

  if (!subCategory) {
    return {
      title: "Subcategory Not Found | Aavkar Mukhwas",
      description: "The subcategory you are looking for does not exist.",
    };
  }

  return {
    title: `${subCategory.name} - ${category?.name} | Aavkar Mukhwas`,
    description: subCategory.description,
  };
}

interface PageProps {
  params: Promise<{ categories: string; subcategories: string }>;
}

export default async function SubCategoryPage({ params }: PageProps) {
  const { categories, subcategories } = await params;

  const category = categoriesJson.categories.find(
    (category) => category.category === categories
  );
  const subCategory = category?.subCategories?.find(
    (sc) => sc.category === subcategories
  );

  if (!subCategory) {
    return <Category />;
  }

  return <SubCategoryClientPage subCategory={subCategory} />;
}
