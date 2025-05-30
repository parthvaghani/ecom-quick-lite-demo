"use client"
 
import { Card, CardContent } from "@/components/ui/card";
import categoriesJson from "@/utils/categories.json";
import Image from "next/image";
import { useRouter } from "next/navigation";
 
export default function CategoryPage({params}: {params: {categories: string}}) {
    const {categories} = params;
    const category = categoriesJson.categories.find((category) => category.category === categories);
   
    if(!category) {
        return <div>Category not found</div>;
    }
 
    return (
        <section className="relative pb-12 pt-32 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold mb-4 text-center">{category.name}</h1>
                <p className="text-center text-gray-600 mb-8">{category.description}</p>
               
                {category.subCategories && category.subCategories.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.subCategories.map((subCategory) => (
                            <CategoryCard
                                key={subCategory.category}
                                title={subCategory.name}
                                description={subCategory.description}
                                category={subCategory.category}
                                image={subCategory.image || []}
                                route={`/${category.category}/${subCategory.category}`}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <CategoryCard
                            title={category.name}
                            description={category.description}
                            category={category.category}
                            image={category.image || []}
                            route={`/${category.category}`}
                            key={category.category}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}
 
function CategoryCard({
    title,
    description,
    category,
    image,
    route
  }: {
    title: string;
    description: string;
    category: string;
    route: string;
    image:string[];
  }) {
    const router = useRouter();
    return (
      <Card
        className="group relative w-full h-[200px] overflow-hidden border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg/25 hover:-translate-y-1 bg-white dark:bg-gray-900 cursor-pointer"
        onClick={() => router.push(route)}
      >
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </CardContent>
      </Card>
    );
  }