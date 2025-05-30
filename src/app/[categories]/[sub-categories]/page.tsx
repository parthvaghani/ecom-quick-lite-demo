"use client"
 
import { Card, CardContent } from "@/components/ui/card";
import categoriesJson from "@/utils/categories.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
 
export default function SubCategoryCard({params}: {params: {categories: string}}) {
    console.log(params);
    const {categories} = params;
    const category = categoriesJson.categories.find((category) => category.category === categories);
    if(!category) {
        return <div>Category not found</div>;
    }
    return (
        <section className="relative pb-12 pt-32 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-4 text-center">Sub Category Page</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CategoryCard
                title={category?.name || ""}
                description={category?.description || ""}
                category={category?.category || ""}
                image={category?.image || []}
                subCategories={category?.subCategories || []}
            />
            </div>
            </div>
        </section>
    )
}
 
 
function CategoryCard({
    title,
    description,
    category,
    image,
    subCategories
  }: {
    title: string;
    description: string;
    category: string;
    image: {name: string, description: string, image: string}[];
    subCategories: {name: string, description: string, image: {name: string, description: string, image: string}[]}[];
  }) {
    const router = useRouter();
    return (
      <Card className="group relative overflow-hidden border-transparent transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg/25 hover:-translate-y-1 bg-white dark:bg-gray-900 cursor-pointer"
      onClick={() => router.push(`/${category}`)}>
        <CardContent className="p-6">
          {
            image.map((image) => (
                <Image src={image.image} alt={image.name} width={50} height={50} key={image.name} />
            ))
          }
        </CardContent>
      </Card>
    );
  }