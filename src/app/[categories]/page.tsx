"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/components/ui/Category";
import categoriesJson from "@/utils/categories.json";
import { ArrowRight, Sparkles, Grid3X3, Mail, Eye, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

// Gradient color schemes for different subcategories
const subcategoryGradients = [
  "from-blue-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-red-500 to-pink-600",
  "from-green-500 to-emerald-600",
  "from-orange-500 to-red-600",
];

const subcategoryBackgrounds = [
  "from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20",
  "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
  "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
  "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
  "from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20",
  "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
  "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20",
  "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
  "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
  "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
];

const clothLayouts = {
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

export default function CategoryPage(props: {
  params: Promise<{ categories: string }>;
}) {
  const { categories } = use(props.params);
  const category = categoriesJson.categories.find(
    (category) => category.category === categories
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!category) {
    return <Category />;
  }

  const handleMailto = (categoryName: string, imageSrc: string) => {
    const subject = encodeURIComponent(`Inquiry about ${categoryName} Dupatta`);
    const body = encodeURIComponent(
      `Hi,\n\nI'm interested in this beautiful dupatta from your ${categoryName} collection.\n\nImage: ${imageSrc}\n\nCould you please provide more details about pricing and availability?\n\nThank you!`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950">
      {/* Enhanced Background decoration */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Category Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 dark:border-purple-400/20 mb-6">
            <Grid3X3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Category Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                  category={subCategory.category}
                  image={subCategory.images || []}
                  route={`/${category.category}/${subCategory.category}/items`}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
        {category.images && category.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {category.images.map((image, index) => {
              const layoutClass =
                clothLayouts[
                Math.min(
                  category.images!.length,
                  6
                ) as keyof typeof clothLayouts
                ]?.[
                index %
                clothLayouts[
                  Math.min(
                    category.images!.length,
                    6
                  ) as keyof typeof clothLayouts
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
          category.images.length === 0 &&
          ((!category.subCategories || category.subCategories.length === 0) && (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center max-w-md mx-auto">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  Coming{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Soon
                  </span>
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We&apos;re working hard to bring you an amazing collection in
                  this category. Stay tuned for updates!
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
                alt="Dupatta detail"
                width={300}
                height={400}
                className="object-cover rounded-xl max-w-[90vw] max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
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
  category: string;
  route: string;
  image: string[];
  index: number;
}) {
  const router = useRouter();
  const gradient = subcategoryGradients[index % subcategoryGradients.length];
  const bgPattern =
    subcategoryBackgrounds[index % subcategoryBackgrounds.length];

  return (
    <Card
      className={`group relative overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:-translate-y-2 cursor-pointer transform-gpu bg-gradient-to-br ${bgPattern} backdrop-blur-sm`}
      onClick={() => router.push(route)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
      />

      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
      />

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${gradient}`} />
      </div>
      <div className="absolute bottom-4 left-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient}`}
        />
      </div>

      <CardContent className="relative h-full flex flex-col justify-between min-h-[200px] p-6">
        <div>
          {/* Title with enhanced styling */}
          <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight uppercase group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-gray-100 dark:group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>

          {/* Description with line clamping */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Enhanced Call to action */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            Explore products
          </span>
          <div
            className={`p-2 rounded-full bg-gradient-to-r ${gradient} text-white transform translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
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
    <Card className="group relative overflow-hidden border-0 h-full cursor-pointer transform-gpu transition-all duration-500 hover:shadow-2xl hover:shadow-black/25 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-full overflow-hidden">
        <Image
          src={image}
          alt={`${categoryName} dupatta`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* Top actions */}
          <div className="flex justify-between items-start">
            {/* <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${isLiked
                ? 'bg-red-500 text-white scale-110'
                : 'bg-white/20 text-white hover:bg-white/30'
                }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button> */}

            {/* <button
              onClick={(e) => {
                e.stopPropagation();
                if (navigator.share) {
                  navigator.share({
                    title: `${categoryName} Dupatta`,
                    url: image
                  });
                }
              }}
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
            </button> */}
          </div>

          {/* Bottom actions */}
          <div className="space-y-3">
            <div className="text-center">
              <h3 className="text-white font-semibold text-sm mb-1 uppercase">
                {categoryName}
              </h3>
              <p className="text-white/80 text-xs">Premium Quality</p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => {
                  // e.stopPropagation();
                  onView();
                }}
                className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 px-3 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-1 z-50"
              >
                <Eye className="w-3 h-3" />
                View
              </button>

              <button
                onClick={() => {
                  // e.stopPropagation();
                  onMailto();
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-3 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1 z-50"
              >
                <Mail className="w-3 h-3" />
                Inquire
              </button>
            </div>
          </div>
        </div>

        {/* Subtle border glow */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-500" />
      </div>
    </Card>
  );
}
