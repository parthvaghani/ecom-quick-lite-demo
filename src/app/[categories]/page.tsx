import { Metadata } from "next";
import categoriesJson from "@/utils/categories.json";
import CategoryClientPage from "./CategoryClientPage";
import { Category } from "@/components/ui/Category";

export async function generateMetadata({
  params,
}: {
  params: { categories: string };
}): Promise<Metadata> {
  const category = categoriesJson.categories.find(
    (c) => c.category === params.categories
  );

  if (!category) {
    return {
      title: "Category Not Found | Aavkar Mukhwas",
      description: "The category you are looking for does not exist.",
    };
  }

  return {
    title: `${category.name} | Aavkar Mukhwas`,
    description: category.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { categories: string };
}) {
  const { categories } = params;
  const category = categoriesJson.categories.find(
    (category) => category.category === categories
  );

  if (!category) {
    return <Category />;
  }

  return <CategoryClientPage category={category} />;
}
