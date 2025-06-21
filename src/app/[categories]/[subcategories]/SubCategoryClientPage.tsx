"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Mail, Eye, Sparkles, Grid3X3, X, ImageIcon } from "lucide-react";

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

interface SubCategory {
  name: string;
  description: string;
  category: string;
  images?: string[];
}

export default function SubCategoryClientPage({
  subCategory,
}: {
  subCategory: SubCategory;
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 dark:border-purple-400/20 mb-6">
            <Grid3X3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Gallery Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {subCategory.name}
            </span>{" "}
            Collection
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {subCategory.description}
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

        {subCategory.images && subCategory.images.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {subCategory.images.map((image, index) => {
              const layoutClass =
                productLayouts[
                  Math.min(
                    subCategory.images!.length,
                    6
                  ) as keyof typeof productLayouts
                ]?.[
                  index %
                    productLayouts[
                      Math.min(
                        subCategory.images!.length,
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
                    categoryName={subCategory.name}
                    gradientOverlay={gradientOverlay}
                    onMailto={() => handleMailto(subCategory.name, image)}
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
                No Images{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Available
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We&apos;re working on adding beautiful images to this
                collection. Please check back soon!
              </p>
            </div>
          </div>
        )}
      </div>

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
                className="object-cover rounded-xl max-w-[90vw] max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
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
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="group relative overflow-hidden border-0 h-full cursor-pointer transform-gpu transition-all duration-500 hover:shadow-2xl hover:shadow-black/25 hover:-translate-y-1">
      <div className="relative h-full overflow-hidden">
        {!imageError ? (
          <Image
            src={image}
            alt={`${categoryName} mukhwas`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">Broken image</p>
              <p className="text-xs mt-1">{categoryName}</p>
            </div>
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex justify-between items-start"></div>

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
                  onView();
                }}
                className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 px-3 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-1 z-50"
              >
                <Eye className="w-3 h-3" />
                View
              </button>

              <button
                onClick={() => {
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

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-500" />
      </div>
    </Card>
  );
}
