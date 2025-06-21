"use client";

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
  "from-brand-green/80 to-primary/80",
  "from-primary/80 to-brand-green-dark/80",
  "from-brand-green-dark/80 to-brand-green/80",
  "from-primary/80 to-brand-green/80",
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
    <div className="relative min-h-screen bg-secondary/50 dark:bg-secondary/20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Grid3X3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Gallery Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
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
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-brand-green to-primary rounded-full flex items-center justify-center mb-6 animate-pulse">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-brand-green to-primary rounded-full blur-xl opacity-30 animate-pulse" />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                No Images{" "}
                <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
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
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer"
      onClick={onView}
    >
      {!imageError ? (
        <Image
          src={image}
          alt={`${categoryName} Mukhwas`}
          fill
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
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
