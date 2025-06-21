"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const promotionalProducts = [
  {
    name: "Dilbahar Mix",
    description:
      "A delightful and aromatic blend of premium fennel seeds and sweet spices.",
    image: "/fresheners/dilbahar-mix.jpg",
    badge: "Most Popular",
  },
  {
    name: "Imli Laddu",
    description:
      "Tangy and sweet tamarind balls, a traditional treat for all ages.",
    image: "/fresheners/imli-laddu.jpg",
    badge: "Best Seller",
  },
  {
    name: "Satrangi Mix",
    description:
      "A colorful and crunchy mix of seven mouth-watering ingredients.",
    image: "/fresheners/satrangi-mix.jpg",
  },
  {
    name: "Green Mix",
    description:
      "A refreshing and healthy mix featuring green fennel seeds and herbs.",
    image: "/fresheners/green-mix.jpg",
    badge: "New Arrival",
  },
];

const WHATSAPP_NUMBER = "918128826764";

export function PromotionalProductsBanner() {
  return (
    <section className="relative pb-20 pt-32 overflow-hidden bg-secondary/50 dark:bg-secondary/20">
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-20">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {promotionalProducts.map((product, index) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image}
              badge={product.badge}
              index={index}
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
}: {
  name: string;
  description: string;
  image: string;
  badge?: string;
  index: number;
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
      <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {badge && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-2xl z-10 transform group-hover:scale-105 transition-transform duration-300">
            {badge}
          </div>
        )}
        <CardContent className="p-0">
          <div className="relative h-80 w-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {description}
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-brand-green-dark text-white font-semibold transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-primary/40 group-hover:scale-105"
            >
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
