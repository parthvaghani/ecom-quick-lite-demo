"use client";
import { default as categoriesData } from "@/utils/categories.json";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import {
  MessageSquare,
  CheckCircle,
  Leaf,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "918128826764";

// Define the proper types for Next.js App Router (15+)
interface PageProps {
  params: Promise<{
    categories: string;
    subcategory: string;
  }>;
}

export default function SubCategoryPage({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{
    categories: string;
    subcategory: string;
  } | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }
  const { categories } = categoriesData;
  const currentCategory = categories.find(
    (cat) => cat.category === resolvedParams.categories
  );
  const currentSubCategory = currentCategory?.subCategories.find(
    (sub) => sub.category === resolvedParams.subcategory
  );

  if (!currentSubCategory) {
    notFound();
  }

  const { name, description, images, ingredients, benefits } =
    currentSubCategory;
  const whatsappInquiryText = `Hi, I'm interested in the ${name}. Could you please provide more details?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappInquiryText
  )}`;

  // Use all images since ImageWithFallback handles errors internally
  const validImages = images || [];
  const hasMultipleImages = validImages.length > 1;

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === validImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? validImages.length - 1 : prev - 1
    );
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mb-4">
              {validImages.length > 0 ? (
                <ImageWithFallback
                  src={validImages[selectedImageIndex]}
                  alt={`${name} - Image ${selectedImageIndex + 1}`}
                  fill
                  className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openImageModal(selectedImageIndex)}
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <ImageIcon className="w-24 h-24 text-muted-foreground" />
                </div>
              )}

              {/* Navigation arrows for multiple images */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {hasMultipleImages && (
              <div className="flex gap-2 overflow-x-auto p-2">
                {validImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                      index === selectedImageIndex
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:opacity-80"
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
            <p className="text-lg text-muted-foreground mb-8">{description}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Leaf className="w-6 h-6 mr-3 text-primary" /> Ingredients
                </h2>
                <div className="flex flex-wrap gap-3">
                  {ingredients.map((ing) => (
                    <Badge
                      key={ing}
                      variant="secondary"
                      className="text-base px-3 py-1"
                    >
                      {ing}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-primary" /> Benefits
                </h2>
                <ul className="space-y-3">
                  {benefits.map((ben) => (
                    <li key={ben} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground text-lg">
                        {ben}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Button asChild size="lg" className="w-full text-lg py-6">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && validImages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-4 -right-4 bg-black/60 p-2 rounded-full text-white hover:text-gray-300 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl">
              <ImageWithFallback
                src={validImages[selectedImageIndex]}
                alt={`${name} - Image ${selectedImageIndex + 1}`}
                width={800}
                height={600}
                className="object-contain max-w-[90vw] max-h-[80vh]"
              />

              {/* Modal Navigation */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                    {selectedImageIndex + 1} / {validImages.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
