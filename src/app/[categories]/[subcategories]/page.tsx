"use client"

import { Card } from "@/components/ui/card";
import { Category } from "@/components/ui/Category";
import categoriesJson from "@/utils/categories.json";
import Image from "next/image";
import { use, useState } from "react";
import { Mail, Eye, Sparkles, Grid3X3, X } from "lucide-react";

// Cloth-like layouts for different image counts
const clothLayouts = {
  1: ["col-span-2 row-span-2"],
  2: ["col-span-1 row-span-2", "col-span-1 row-span-2"],
  3: ["col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1"],
  4: ["col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1"],
  5: ["col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-1"],
  6: ["col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-1"]
};

const gradientOverlays = [
  "from-blue-600/80 to-purple-600/80",
  "from-emerald-600/80 to-teal-600/80",
  "from-amber-600/80 to-orange-600/80",
  "from-pink-600/80 to-rose-600/80",
  "from-indigo-600/80 to-blue-600/80",
  "from-violet-600/80 to-purple-600/80"
];

export default function SubCategoryCard(props: { params: Promise<{ categories: string }> }) {
  const { categories } = use(props.params)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const category = categoriesJson.categories.find((category) => category.category === categories);

  if (!category) {
    return <Category />
  }

  const handleMailto = (categoryName: string, imageSrc: string) => {
    const subject = encodeURIComponent(`Inquiry about ${categoryName} Dupatta`);
    const body = encodeURIComponent(`Hi,\n\nI'm interested in this beautiful dupatta from your ${categoryName} collection.\n\nImage: ${imageSrc}\n\nCould you please provide more details about pricing and availability?\n\nThank you!`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950">
      {/* Enhanced Background decoration */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-200/30 dark:bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 dark:border-purple-400/20 mb-6">
            <Grid3X3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Gallery Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {category.name}
            </span>
            {" "}Collection
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {category.description}
          </p>

          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              Click to view
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              Click to inquire
            </span>
          </div>
        </div>

        {/* Enhanced Gallery Grid */}
        {category.images && category.images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {category.images.map((image, index) => {
              const layoutClass = clothLayouts[Math.min(category.images!.length, 6) as keyof typeof clothLayouts]?.[index % clothLayouts[Math.min(category.images!.length, 6) as keyof typeof clothLayouts].length] || "col-span-1 row-span-1";
              const gradientOverlay = gradientOverlays[index % gradientOverlays.length];

              return (
                <div
                  key={image}
                  className={`animate-fade-in-up ${layoutClass}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
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
        ) : (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center max-w-md mx-auto">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                No Images <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Available</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We&apos;re working on adding beautiful images to this collection. Please check back soon!
              </p>
            </div>
          </div>
        )}
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
  )
}

function ImageCard({
  image,
  categoryName,
  gradientOverlay,
  onMailto,
  onView
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
        <div className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

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
              <h3 className="text-white font-semibold text-sm mb-1 uppercase">{categoryName}</h3>
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