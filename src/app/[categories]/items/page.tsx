"use client";

import { Category } from "@/components/ui/Category";
import categoriesJson from "@/utils/categories.json";
import { X } from "lucide-react";
import Image from "next/image";
import { use, useState } from "react";

export default function CategoryPage(props: {
  params: Promise<{ categories: string }>;
}) {
  const { categories } = use(props.params);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mainCategory = categoriesJson.categories.find(
    (cat) => cat.category === categories
  );

  if (!mainCategory) {
    return <Category />;
  }
  // if (!mainCategory.images?.length) {
  //   return (
  //     <div className="flex items-center justify-center min-h-[400px]">
  //       <div className="text-center max-w-md mx-auto">
  //         <div className="relative mb-8">
  //           <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
  //             <Sparkles
  //               className="w-12 h-12 text-white"
  //               onClick={() => router.push("/categories")}
  //             />
  //           </div>
  //           <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
  //         </div>

  //         <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
  //           Coming{" "}
  //           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  //             Soon
  //           </span>
  //         </h2>

  //         <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
  //           We&apos;re working hard to bring you an amazing collection in this
  //           category. Stay tuned for updates!
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <section className="relative pb-12 pt-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {mainCategory.name}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {mainCategory.description}
        </p>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {mainCategory.images.map((image, index) => {
            const layoutClass =
              productLayouts[
                Math.min(
                  mainCategory.images!.length,
                  6
                ) as keyof typeof productLayouts
              ]?.[
                index %
                  productLayouts[
                    Math.min(
                      mainCategory.images!.length,
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
                  categoryName={mainCategory.name}
                  gradientOverlay={gradientOverlay}
                  onMailto={() => handleMailto(mainCategory.name, image)}
                  onView={() => setSelectedImage(image)}
                />
              </div>
            );
          })}
        </div> */}
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
    </section>
  );
}
