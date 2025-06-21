"use client";
import { Card, CardContent } from "@/components/ui/card";
import { default as categoriesData } from "@/utils/categories.json";
import { Sparkles, ImageIcon, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const WHATSAPP_NUMBER = "918128826764";

export function Category() {
  const { categories } = categoriesData;
  return (
    <section className="relative pb-20 pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50 dark:bg-secondary/20">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Our Collections
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
              Mukhwas Varieties
            </span>
          </h3>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Indulge in our exquisite collection of premium homemade mukhwas,
            hygienically crafted with time-honored recipes and the finest
            authentic ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((catEl, index) => (
            <div
              key={catEl.name}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <CategoryCard
                title={catEl.name}
                description={catEl.description}
                category={catEl.category}
                image={catEl.heroImage}
              />
            </div>
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

function CategoryCard({
  title,
  description,
  category,
  image,
}: {
  title: string;
  description: string;
  category: string;
  image?: string;
}) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const whatsappInquiryText = `Hi, I'm interested in the ${title} collection. Could you please provide more details?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappInquiryText
  )}`;

  const handleNavigation = () => {
    router.push(`/${category}`);
  };

  return (
    <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
      <CardContent className="p-0 flex flex-col flex-grow">
        <div
          className="relative h-60 w-full overflow-hidden cursor-pointer"
          onClick={handleNavigation}
        >
          {image && !imageError ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-secondary flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
          <div className="absolute inset-0" />
        </div>
        <div className="p-6 bg-background/30 backdrop-blur-sm flex flex-col flex-grow">
          <h3
            className="text-2xl font-bold mb-2 text-foreground relative z-10 cursor-pointer"
            onClick={handleNavigation}
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow relative z-10">
            {description}
          </p>
          <div className="mt-auto pt-4 border-t border-primary/20 relative z-10 flex items-center justify-between">
            <button
              onClick={() => router.push(`/${category}`)}
              className="text-primary flex items-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              View Collection
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary flex items-center"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
