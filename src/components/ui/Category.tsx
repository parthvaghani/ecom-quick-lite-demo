"use client"
import { Card, CardContent } from "@/components/ui/card";
import categories from "@/utils/categories.json";
import { useRouter } from "next/navigation";

export function Category() {
    return (
        <section className="relative pb-12 pt-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="relative text-center mb-20">
            <h2 className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Categories
              <span className="ml-2 w-12 h-px bg-blue-600 dark:bg-blue-400"></span>
            </h2>
            <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Choose your category
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Choose your category to get started
            </p>
          </div>
  
          {/* Category Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.categories.map((category) => (
            <CategoryCard
              title={category.name}
              description={category.description}
              category={category.category}
              key={category.name}
            />
            ))}
          </div>
        </div>
      </section>
    )
}

function CategoryCard({
    title,
    description,
    category
  }: {
    title: string;
    description: string;
    category: string;
  }) {
    const router = useRouter();
    return (
      <Card className="group relative overflow-hidden border-transparent transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg/25 hover:-translate-y-1 bg-white dark:bg-gray-900 cursor-pointer" onClick={() => router.push(`/${category}`)}>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    );
  }