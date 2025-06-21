import { Metadata } from "next";
import categoriesJson from "@/utils/categories.json";
import SubCategoryClientPage from "./SubCategoryClientPage";
import { Category } from "@/components/ui/Category";

export async function generateMetadata({
  params,
}: {
  params: { categories: string; subcategories: string };
}): Promise<Metadata> {
  const category = categoriesJson.categories.find(
    (c) => c.category === params.categories
  );
  const subCategory = category?.subCategories?.find(
    (sc) => sc.category === params.subcategories
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

export default function SubCategoryPage({
  params,
}: {
  params: { categories: string; subcategories: string };
}) {
  const { categories, subcategories } = params;
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
