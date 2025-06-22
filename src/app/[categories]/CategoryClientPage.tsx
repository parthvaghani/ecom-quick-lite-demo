"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Grid3X3,
  Mail,
  Eye,
  X,
  ImageIcon,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  ingredients?: string[];
  benefits?: string[];
}

interface Category {
  name: string;
  description: string;
  category: string;
  images?: string[];
  subCategories?: SubCategory[];
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
                <SubCategoryProductCard
                  name={subCategory.name}
                  description={subCategory.description}
                  image={subCategory.images ? subCategory.images[0] : ""}
                  index={index}
                  categorySlug={category.category}
                  subcategorySlug={subCategory.category}
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
    </div>
  );
}

const WHATSAPP_NUMBER = "918128826764";

function SubCategoryProductCard({
  name,
  description,
  image,
  index,
  categorySlug,
  subcategorySlug,
}: {
  name: string;
  description: string;
  image?: string;
  index: number;
  categorySlug: string;
  subcategorySlug: string;
}) {
  const whatsappInquiryText = `Hi, I'm interested in the ${name}. Could you please provide more details?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappInquiryText
  )}`;

  return (
    <div
      className="animate-fade-in-up"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      <Link href={`/${categorySlug}/${subcategorySlug}`} passHref>
        <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 h-full flex flex-col cursor-pointer">
          <CardContent className="p-0 flex flex-col flex-grow">
            <div className="relative h-60 w-full overflow-hidden">
              {image ? (
                <ImageWithFallback
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-muted-foreground" />
                </div>
              )}
            </div>
            <div className="p-6 bg-background/30 backdrop-blur-sm flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                {description}
              </p>
              <div className="mt-auto pt-4 border-t border-primary/20">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-brand-green-dark text-white font-semibold transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-primary/40 group-hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  <div className="flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                    Chat on WhatsApp
                  </div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
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
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full h-full">
      <ImageWithFallback
        src={image}
        alt={`${categoryName} Mukhwas`}
        fill
        className="object-cover transition-all duration-500 ease-in-out transform group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
          {categoryName}
        </h3>
        <div className="flex space-x-4">
          <button
            onClick={onView}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
            aria-label="View Image"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={onMailto}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
