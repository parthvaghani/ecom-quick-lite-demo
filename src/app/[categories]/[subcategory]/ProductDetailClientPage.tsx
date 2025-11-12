"use client";

import {
  Badge,
  Button,
  ImageWithFallback,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import {
  MessageSquare,
  CheckCircle,
  Leaf,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import {
  trackProductView,
  trackProductCardWhatsAppClick,
} from "@/utils/analytics";

const WHATSAPP_NUMBER = "916353528830";

interface PriceInfo {
  price: number;
  discount?: number;
}

interface VariantType {
  [key: string]: PriceInfo | undefined;
}

interface Variants {
  gm?: VariantType;
  kg?: VariantType;
  sachet?: VariantType;
}

interface SubCategory {
  name: string;
  description: string;
  category: string;
  images?: string[];
  ingredients?: string[];
  benefits?: string[];
  variants?: Variants;
  badge?: string;
  isPopular?: boolean;
  isPremium?: boolean;
}

interface ShippingConfig {
  inGujarat: number;
  outsideGujarat: number;
  abroad: number | string;
}

export default function ProductDetailClientPage({
  product,
  pricingEnabled,
  shippingConfig,
}: {
  product: SubCategory;
  pricingEnabled: boolean;
  shippingConfig: ShippingConfig | null;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);

  const [selectedVariant, setSelectedVariant] = useState<{
    group: string;
    value: string;
    details: PriceInfo;
  } | null>(null);

  // Track product view when component mounts
  useEffect(() => {
    trackProductView(
      {
        name: product.name,
        category: product.category,
        variants: product.variants as
          | Record<string, Record<string, { price: number; discount?: number; }>>
          | undefined,
      },
      getCurrentCategory() || undefined
    );
  }, [product]);

  // Helper function to get current category from URL
  const getCurrentCategory = () => {
    if (typeof window === "undefined") return null;
    const path = window.location.pathname;
    const match = path.match(/\/category\/([^\/]+)/);
    return match ? match[1] : null;
  };

  const shippingOptions = useMemo(
    () => [
      {
        label: "In Gujarat",
        value: "inGujarat",
        price: shippingConfig?.inGujarat ?? 0,
      },
      {
        label: "In India",
        value: "outsideGujarat",
        price: shippingConfig?.outsideGujarat ?? 0,
      },
      {
        label: "Worldwide",
        value: "abroad",
        price: shippingConfig?.abroad ?? 0,
      },
    ],
    [shippingConfig]
  );
  const [selectedShipping, setSelectedShipping] = useState(
    shippingOptions[0].value
  );

  useEffect(() => {
    if (product.variants) {
      const firstGroup = Object.keys(product.variants)[0] as keyof Variants;
      if (firstGroup) {
        const variantGroup = product.variants[firstGroup];
        if (variantGroup) {
          const firstValue = Object.keys(variantGroup)[0];
          const details = variantGroup[firstValue];
          if (details) {
            setSelectedVariant({
              group: firstGroup,
              value: firstValue,
              details,
            });
          }
        }
      }
    }
  }, [product.variants]);

  const allVariants = useMemo(() => {
    const variants: { group: string; value: string; details: PriceInfo; }[] = [];
    if (product.variants) {
      for (const group in product.variants) {
        const variantGroup = product.variants[group as keyof Variants];
        if (variantGroup) {
          for (const value in variantGroup) {
            const details = variantGroup[value];
            if (details) {
              variants.push({
                group,
                value,
                details,
              });
            }
          }
        }
      }
    }
    return variants;
  }, [product.variants]);

  const handleVariantChange = (variantString: string) => {
    const [group, value] = variantString.split(":");
    const variantGroup = product.variants?.[group as keyof Variants];
    const details = variantGroup?.[value];
    if (details) {
      setSelectedVariant({
        group,
        value,
        details,
      });
    }
  };

  const selectedShippingOption = useMemo(
    () => shippingOptions.find((opt) => opt.value === selectedShipping),
    [shippingOptions, selectedShipping]
  );

  const whatsappInquiryText = useMemo(() => {
    if (pricingEnabled && selectedVariant) {
      const originalPrice = selectedVariant.details.price;
      const discount = selectedVariant.details.discount || 0;
      const discountedPrice = originalPrice - discount;

      let message = `Hi, I'd like to inquire about the following product:\n\n`;
      message += `*Product:* ${product.name}\n`;
      message += `*Variant:* ${selectedVariant.value}\n`;

      if (discount > 0) {
        message += `*Original Price:* ₹${originalPrice}\n`;
        message += `*Discount:* -₹${discount}\n`;
        message += `*Price after Discount:* ₹${discountedPrice}\n`;
      } else {
        message += `*Price:* ₹${originalPrice}\n`;
      }

      if (shippingConfig && selectedShippingOption) {
        const shippingPrice = selectedShippingOption.price;
        const isShippingPriceNumber = typeof shippingPrice === "number";

        const shippingPriceText = isShippingPriceNumber
          ? `₹${shippingPrice}`
          : shippingPrice;
        message += `*Shipping to:* ${selectedShippingOption.label} (${shippingPriceText})\n`;

        if (isShippingPriceNumber) {
          const totalPrice = discountedPrice + (shippingPrice as number);
          message += `*Total Price:* ₹${totalPrice}\n\n`;
        } else {
          message += `\n`;
        }
      } else {
        message += `\n`;
      }

      message += `Please let me know how to proceed. Thank you!`;
      return message;
    }

    return `Hi, I'm interested in the ${product.name}. Could you please provide more details?`;
  }, [
    product.name,
    pricingEnabled,
    selectedVariant,
    selectedShippingOption,
    shippingConfig,
  ]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappInquiryText
  )}`;

  const { name, description, images, ingredients, benefits } = product;
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
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mb-4">
              {validImages.length > 0 ? (
                <ImageWithFallback
                  src={validImages[selectedImageIndex]}
                  alt={`${name} - Image ${selectedImageIndex + 1}`}
                  fill
                  className="object-fill cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openImageModal(selectedImageIndex)}
                />
              ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <ImageIcon className="w-24 h-24 text-muted-foreground" />
                </div>
              )}

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

            {hasMultipleImages && (
              <div className="flex gap-2 overflow-x-auto p-2">
                {validImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${index === selectedImageIndex
                      ? "ring-2 ring-primary ring-offset-2"
                      : "hover:opacity-80"
                      }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${name} thumbnail ${index + 1}`}
                      fill
                      className="object-fill"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                🌍 We Ship Worldwide
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                🏆 Expo Participant
              </span>
            </div>
            <h1 className="text-3xl md:text-3xl font-bold mb-4">{name}</h1>
            <p className="text-base text-muted-foreground mb-6">
              {description}
            </p>

            {pricingEnabled && selectedVariant && (
              <div className="bg-secondary/50 p-6 rounded-2xl mb-8">
                {allVariants.length > 1 && (
                  <div className="mb-4">
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Select Variant
                    </label>
                    <Select
                      onValueChange={handleVariantChange}
                      defaultValue={`${selectedVariant.group}:${selectedVariant.value}`}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select variant" />
                      </SelectTrigger>
                      <SelectContent>
                        {allVariants.map((v) => (
                          <SelectItem
                            key={`${v.group}:${v.value}`}
                            value={`${v.group}:${v.value}`}
                          >
                            {v.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      {selectedVariant.details.discount && selectedVariant.details.discount > 0 ? (
                        <>
                          <span className="text-3xl font-bold text-primary">₹{selectedVariant.details.price - selectedVariant.details.discount}</span>
                          <span className="text-xl text-gray-400 line-through">₹{selectedVariant.details.price}</span>
                        </>
                      ) : (
                        <span className="text-2xl font-bold text-primary">₹{selectedVariant.details.price}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {selectedVariant.details.discount && selectedVariant.details.discount > 0 && (
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                          Save {Math.round(
                            (selectedVariant.details.discount /
                              selectedVariant.details.price) *
                            100
                          )}
                          % OFF
                        </span>
                      )}
                      <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                        + Shipping charges
                      </span>
                    </div>
                  </div>
                {shippingConfig && (
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">
                      Additional Shipping Charge
                    </label>
                    <Select
                      onValueChange={setSelectedShipping}
                      value={selectedShipping}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select shipping location" />
                      </SelectTrigger>
                      <SelectContent>
                        {shippingOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex justify-between w-full items-center">
                              <div className="mr-1">{option.label}</div>
                              <div className="font-semibold">
                                {typeof option.price === "number"
                                  ? `₹${option.price}`
                                  : option.price}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Leaf className="w-6 h-6 mr-3 text-primary" /> Ingredients
                </h2>
                <div className="flex flex-wrap gap-3 text-md">
                  {ingredients?.map((ing) => (
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
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-primary" /> Benefits
                </h2>
                <ul className="space-y-3">
                  {benefits?.map((ben) => (
                    <li key={ben} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-3 mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground text-md">
                        {ben}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Button
                className="w-full bg-gradient-to-r from-primary to-brand-green-dark text-white font-semibold transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-primary/40 group-hover:scale-105 py-6"
                onClick={() => {
                  window.open(whatsappUrl, "_blank");
                  const currentCategory = getCurrentCategory();
                  trackProductCardWhatsAppClick(
                    {
                      name: product.name,
                      category: product.category,
                      variants: product.variants as
                        | Record<
                          string,
                          Record<string, { price: number; discount?: number; }>
                        >
                        | undefined,
                    },
                    currentCategory
                      ? { name: currentCategory, category: currentCategory }
                      : undefined
                  );
                }}
              >
                <div className="flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                  Chat on WhatsApp
                </div>
              </Button>
            </div>

            {/* Reviews Section */}
            {/* <div className="mt-10">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <span className="mr-2">⭐</span> Customer Reviews
              </h2>
              <div className="space-y-4 mb-6">
                <div className="bg-secondary/50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">Priya S.</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    "Absolutely delicious and fresh! Will order again."
                  </div>
                </div>
                <div className="bg-secondary/50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">Rahul M.</span>
                    <span className="text-yellow-500">★★★★☆</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    "Loved the taste and fast shipping. Highly recommend."
                  </div>
                </div>
              </div>
              <form className="bg-secondary/30 p-4 rounded-xl flex flex-col gap-3">
                <label className="font-medium text-sm">Leave a Review</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Review"
                  className="rounded px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
                <button
                  type="submit"
                  className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-primary/90 transition"
                >
                  Submit
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>

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
