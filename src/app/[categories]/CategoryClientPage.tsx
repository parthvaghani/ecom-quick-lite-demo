"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  Grid3X3,
  Mail,
  Eye,
  X,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Gradient color schemes for different subcategories
const subcategoryGradients = [
  "from-brand-green to-primary",
  "from-primary to-brand-green-dark",
  "from-brand-green-dark to-brand-green",
  "from-primary to-brand-green",
  "from-brand-green to-primary",
  "from-primary to-brand-green-dark",
  "from-brand-green-dark to-brand-green",
  "from-primary to-brand-green",
];

const subcategoryBackgrounds = [
  "from-brand-green/20 to-primary/20 dark:from-brand-green/30 dark:to-primary/30",
  "from-primary/20 to-brand-green-dark/20 dark:from-primary/30 dark:to-brand-green-dark/30",
  "from-brand-green-dark/20 to-brand-green/20 dark:from-brand-green-dark/30 dark:to-brand-green/30",
  "from-primary/20 to-brand-green/20 dark:from-primary/30 dark:to-brand-green/30",
  "from-brand-green/20 to-primary/20 dark:from-brand-green/30 dark:to-primary/30",
  "from-primary/20 to-brand-green-dark/20 dark:from-primary/30 dark:to-brand-green-dark/30",
  "from-brand-green-dark/20 to-brand-green/20 dark:from-brand-green-dark/30 dark:to-brand-green/30",
  "from-primary/20 to-brand-green/20 dark:from-primary/30 dark:to-brand-green/30",
];

// Product layouts for different image counts
const productLayouts = {
  1: ["col-span-2 row-span-2"],
  2: ["col-span-1 row-span-2", "col-span-1 row-span-2"],
  3: [
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
  4: [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
  5: [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
  6: [
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
};

const gradientOverlays = [
  "from-blue-600/80 to-purple-600/80",
  "from-emerald-600/80 to-teal-600/80",
  "from-amber-600/80 to-orange-600/80",
  "from-pink-600/80 to-rose-600/80",
  "from-indigo-600/80 to-blue-600/80",
  "from-violet-600/80 to-purple-600/80",
];

interface Category {
  name: string;
  description: string;
  category: string;
  images?: string[];
  subCategories?: SubCategory[];
}

interface SubCategory {
  name: string;
  description: string;
  category: string;
  images?: string[];
}

export default function CategoryClientPage({
  category,
}: {
  category: Category;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleMailto = (categoryName: string, imageSrc: string) => {
    const subject = encodeURIComponent(`Inquiry about ${categoryName} Mukhwas`);
    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in this delicious mukhwas from your ${categoryName} collection.\n\nImage: ${imageSrc}\n\nCould you please provide more details about pricing and availability?\n\nThank you!`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="relative min-h-screen bg-secondary/50 dark:bg-secondary/20">
      {/* Enhanced Background decoration */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Category Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Grid3X3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Category Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
              {category.name}
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Enhanced Subcategory Grid or Coming Soon */}
        {category?.subCategories && category.subCategories.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-10">
            {category.subCategories.map((subCategory, index) => (
              <div
                key={subCategory.name}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <CategoryCard
                  title={subCategory.name}
                  description={subCategory.description}
                  route={`/${category.category}/${subCategory.category}`}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
        {category.images && category.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {category.images.map((image: string, index: number) => {
              const layoutClass =
                productLayouts[
                  Math.min(
                    category.images!.length,
                    6
                  ) as keyof typeof productLayouts
                ]?.[
                  index %
                    productLayouts[
                      Math.min(
                        category.images!.length,
                        6
                      ) as keyof typeof productLayouts
                    ].length
                ] || "col-span-1 row-span-1";
              const gradientOverlay =
                gradientOverlays[index % gradientOverlays.length];

              return (
                <div
                  key={image}
                  className={`animate-fade-in-up ${layoutClass}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <ImageCard
                    image={image}
                    categoryName={category.name}
                    gradientOverlay={gradientOverlay}
                    onMailto={() => handleMailto(category.name, image)}
                    onView={() => setSelectedImage(image)}
                  />
                </div>
              );
            })}
          </div>
        )}

        {!category.images ||
          (category.images.length === 0 &&
            (!category.subCategories ||
              category.subCategories.length === 0) && (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center max-w-md mx-auto">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-r from-brand-green to-primary rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-brand-green to-primary rounded-full blur-xl opacity-30 animate-pulse" />
                  </div>

                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Coming{" "}
                    <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
                      Soon
                    </span>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We&apos;re working hard to bring you an amazing collection
                    in this category. Stay tuned for updates!
                  </p>
                </div>
              </div>
            ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 margin-auto">
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-black/60 p-1.5 rounded-full text-white hover:text-gray-300 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl p-4">
              <Image
                src={selectedImage}
                alt="Mukhwas detail"
                width={300}
                height={400}
                className="object-contain w-full h-full max-w-full max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  route,
  index,
}: {
  title: string;
  description: string;
  route: string;
  index: number;
}) {
  const router = useRouter();
  const gradient = subcategoryGradients[index % subcategoryGradients.length];
  const bgPattern =
    subcategoryBackgrounds[index % subcategoryBackgrounds.length];

  return (
    <Card
      className={`group relative overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:-translate-y-2 cursor-pointer transform-gpu bg-gradient-to-br ${bgPattern} backdrop-blur-sm hover:rotate-1`}
      onClick={() => router.push(route)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`}
      />

      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}
      />

      <CardContent className="relative h-full flex flex-col justify-between min-h-[240px] p-6">
        <div className="flex-grow">
          {/* Icon with gradient background */}
          <div
            className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
          >
            <ImageIcon className="w-5 h-5" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight uppercase group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-gray-100 dark:group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Enhanced Call to action */}
        <div className="flex items-center justify-between pt-4 border-t border-primary/10">
          <span className="text-sm font-semibold text-primary">
            Explore Our Range
          </span>
          <div
            className={`p-2 rounded-full bg-primary/10 text-primary group-hover:bg-gradient-to-r ${gradient} group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300`}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ImageCard({
  image,
  categoryName,
  gradientOverlay,
  onMailto,
  onView,
}: {
  image: string;
  categoryName: string;
  gradientOverlay: string;
  onMailto: () => void;
  onView: () => void;
}) {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer"
      onClick={onView}
    >
      <Image
        src={image}
        alt={`${categoryName} Mukhwas`}
        fill
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
          {categoryName}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMailto();
            }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
            title="Inquire about this product"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onView();
            }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
            title="View larger image"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
