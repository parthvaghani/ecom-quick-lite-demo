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
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

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
  [key: string]: unknown;
}

interface Category {
  name: string;
  description: string;
  category: string;
  images?: string[];
  subCategories?: SubCategory[];
  pricingEnabled?: boolean;
  heroImage?: string;
}

interface ShippingConfig {
  inGujarat: number;
  outsideGujarat: number;
  abroad: number | string;
}

export default function CategoryClientPage({
  category,
  shippingConfig,
}: {
  category: Category;
  shippingConfig: ShippingConfig;
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
                  variants={subCategory.variants}
                  pricingEnabled={category.pricingEnabled}
                  shippingConfig={shippingConfig}
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
  variants,
  pricingEnabled,
  shippingConfig,
}: {
  name: string;
  description: string;
  image?: string;
  index: number;
  categorySlug: string;
  subcategorySlug: string;
  variants?: Variants;
  pricingEnabled?: boolean;
  shippingConfig: ShippingConfig;
}) {
  const [selectedVariant, setSelectedVariant] = useState<{
    group: string;
    value: string;
    details: PriceInfo;
  } | null>(null);

  const shippingOptions = useMemo(
    () => [
      {
        label: "In Gujarat",
        value: "inGujarat",
        price: shippingConfig.inGujarat,
      },
      {
        label: "In India",
        value: "outsideGujarat",
        price: shippingConfig.outsideGujarat,
      },
      { label: "Worldwide", value: "abroad", price: shippingConfig.abroad },
    ],
    [shippingConfig]
  );
  const [selectedShipping, setSelectedShipping] = useState(
    shippingOptions[0].value
  );

  useEffect(() => {
    if (variants) {
      const firstGroup = Object.keys(variants)[0] as keyof Variants;
      if (firstGroup && variants[firstGroup]) {
        const firstValue = Object.keys(variants[firstGroup]!)[0];
        if (firstValue && variants[firstGroup]![firstValue]) {
          setSelectedVariant({
            group: firstGroup,
            value: firstValue,
            details: variants[firstGroup]![firstValue],
          });
        }
      }
    }
  }, [variants]);

  const allVariants: { group: string; value: string; details: PriceInfo }[] =
    [];
  if (variants) {
    for (const group in variants) {
      const variantGroup = variants[group as keyof Variants];
      if (variantGroup) {
        for (const value in variantGroup) {
          if (variantGroup[value])
            allVariants.push({
              group,
              value,
              details: variantGroup[value],
            });
        }
      }
    }
  }

  const handleVariantChange = (variantString: string) => {
    const [group, value] = variantString.split(":");
    const variantGroup = variants?.[group as keyof Variants];
    if (variantGroup?.[value]) {
      setSelectedVariant({
        group,
        value,
        details: variantGroup[value],
      });
    }
  };

  const selectedShippingOption = useMemo(
    () => shippingOptions.find((opt) => opt.value === selectedShipping),
    [shippingOptions, selectedShipping]
  );

  const whatsappInquiryText = useMemo(() => {
    if (pricingEnabled && selectedVariant && selectedShippingOption) {
      const originalPrice = selectedVariant.details.price;
      const discount = selectedVariant.details.discount || 0;
      const discountedPrice = originalPrice - discount;
      const shippingPrice = selectedShippingOption.price;
      const isShippingPriceNumber = typeof shippingPrice === "number";

      let message = `Hi, I'd like to inquire about the following product:\n\n`;
      message += `*Product:* ${name}\n`;
      message += `*Variant:* ${selectedVariant.value}\n`;

      if (discount > 0) {
        message += `*Original Price:* ₹${originalPrice}\n`;
        message += `*Discount:* -₹${discount}\n`;
        message += `*Price after Discount:* ₹${discountedPrice}\n`;
      } else {
        message += `*Price:* ₹${originalPrice}\n`;
      }

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

      message += `Please let me know how to proceed. Thank you!`;
      return message;
    }

    return `Hi, I'm interested in the ${name}. Could you please provide more details?`;
  }, [name, pricingEnabled, selectedVariant, selectedShippingOption]);

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
            <div className="relative h-80 w-full overflow-hidden">
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

              {pricingEnabled && variants && selectedVariant && (
                <div className="mb-4">
                  {allVariants.length > 1 && (
                    <Select
                      onValueChange={handleVariantChange}
                      defaultValue={`${selectedVariant.group}:${selectedVariant.value}`}
                    >
                      <SelectTrigger className="w-full mb-2">
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
                  )}

                  <div className="flex items-center flex-wrap gap-x-3 mt-2">
                    {selectedVariant.details.discount &&
                    selectedVariant.details.discount > 0 ? (
                      <>
                        <span className="text-2xl font-bold text-primary">
                          ₹
                          {selectedVariant.details.price -
                            selectedVariant.details.discount}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          ₹{selectedVariant.details.price}
                        </span>
                        <Badge variant="destructive" className="font-semibold">
                          {Math.round(
                            (selectedVariant.details.discount /
                              selectedVariant.details.price) *
                              100
                          )}
                          % OFF
                        </Badge>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-primary">
                        ₹{selectedVariant.details.price}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-1">
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
                </div>
              )}

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
