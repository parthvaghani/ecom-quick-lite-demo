"use client";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { default as categoriesData } from "@/utils/categories.json";
import { useState } from "react";

// Add this interface to solve the type errors
interface SubCategory {
  name: string;
  description: string;
  category: string;
  images?: string[];
  ingredients?: string[];
  benefits?: string[];
  isPopular?: boolean;
  isPremium?: boolean;
  badge?: string;
}

const WHATSAPP_NUMBER = "918128826764";

export function PromotionalProductsBanner() {
  const [filter, setFilter] = useState<"premium" | "popular">("popular");

  const allPromotionalProducts = categoriesData.categories.flatMap(
    (category) =>
      (category.subCategories as SubCategory[])
        ?.filter((sub) => sub.isPopular || sub.isPremium)
        .map((sub) => ({
          ...sub,
          parentCategory: category.category,
        })) ?? []
  );

  const filteredProducts = allPromotionalProducts.filter((product) => {
    if (filter === "premium") return product.isPremium;
    if (filter === "popular") return product.isPopular;
    return false;
  });

  return (
    <section className="relative pb-20 pt-16 overflow-hidden bg-secondary/50 dark:bg-secondary/20">
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Our Featured Delights
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Handpicked for{" "}
            <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
              You
            </span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular and flavorful mukhwas selections. Click on
            any product to inquire on WhatsApp and bring home the authentic
            taste of tradition.
          </p>
        </div>

        <div className="flex justify-center items-center mb-12 bg-primary/10 p-1 rounded-full max-w-xs mx-auto">
          <button
            onClick={() => setFilter("popular")}
            className={`w-1/2 text-center px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${
              filter === "popular"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground"
            }`}
          >
            Most Popular
          </button>
          <button
            onClick={() => setFilter("premium")}
            className={`w-1/2 text-center px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${
              filter === "premium"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground"
            }`}
          >
            Premium
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.images ? product.images[0] : ""}
              badge={product.badge}
              index={index}
              parentCategory={product.parentCategory}
              category={product.category}
            />
          ))}
        </div>
      </div>
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
    </section>
  );
}

function ProductCard({
  name,
  description,
  image,
  badge,
  index,
  parentCategory,
  category,
}: {
  name: string;
  description: string;
  image: string;
  badge?: string;
  index: number;
  parentCategory: string;
  category: string;
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
      <Link href={`/${parentCategory}/${category}`} passHref>
        <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 cursor-pointer h-full flex flex-col">
          {badge && (
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-2xl z-10 transform group-hover:scale-105 transition-transform duration-300">
              {badge}
            </div>
          )}
          <CardContent className="p-0 flex flex-col flex-grow">
            <div className="relative h-80 w-full overflow-hidden">
              <ImageWithFallback
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                {description}
              </p>
              <Button
                className="w-full bg-gradient-to-r from-primary to-brand-green-dark text-white font-semibold transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-primary/40 group-hover:scale-105 mt-auto"
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
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
