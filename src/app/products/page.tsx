"use client";

import { default as categoriesData } from "@/utils/categories.json";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ImageIcon, MessageSquare, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const WHATSAPP_NUMBER = "918128826764";

// Define types based on the structure in categories.json
type SubCategory = {
    name: string;
    description: string;
    category: string;
    images?: string[];
    heroImage?: string;
    image?: string;
    isPopular?: boolean;
    isPremium?: boolean;
    variants?: {
        gm?: {
            [key: string]: {
                price: number;
            };
        };
        kg?: {
            [key: string]: {
                price: number;
            };
        };
    };
};

type Category = {
    category: string;
    name: string;
    description: string;
    heroImage: string;
    subCategories: SubCategory[];
};

export default function ProductsPage() {
    const { categories } = categoriesData;

    // Collect all subcategories from all categories as products
    const allProducts = categories.flatMap((category: Category) =>
        (category.subCategories || []).map((subcategory: SubCategory) => ({
            ...subcategory,
            parentCategory: category.category,
            parentName: category.name,
            // Get first price available if any
            price: getFirstPrice(subcategory.variants)
        }))
    );

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
                            All Products
                        </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Explore Our{" "}
                        <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
                            All Products
                        </span>
                    </h3>

                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Discover our complete collection of authentic mukhwas and premium products,
                        handcrafted with the finest ingredients using traditional recipes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProducts.map((product, index) => (
                        <div
                            key={`${product.parentCategory}-${product.category}-${index}`}
                            className="animate-fade-in-up"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: "both",
                            }}
                        >
                            <ProductCard
                                title={product.name}
                                description={product.description}
                                parentCategory={product.parentCategory}
                                category={product.category}
                                image={product.images?.[0] || product.heroImage || ""}
                                price={product.price}
                                isPremium={product.isPremium}
                                isPopular={product.isPopular}
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

// Helper function to get first available price
function getFirstPrice(variants?: SubCategory['variants']): string | undefined {
    if (!variants) return undefined;

    // Check gm variants
    if (variants.gm) {
        const gmKeys = Object.keys(variants.gm);
        if (gmKeys.length > 0) {
            const key = gmKeys[0];
            return variants.gm[key].price.toString();
        }
    }

    // Check kg variants
    if (variants.kg) {
        const kgKeys = Object.keys(variants.kg);
        if (kgKeys.length > 0) {
            const key = kgKeys[0];
            return variants.kg[key].price.toString();
        }
    }

    return undefined;
}

function ProductCard({
    title,
    description,
    parentCategory,
    category,
    image,
    price,
    isPremium,
    isPopular,
}: {
    title: string;
    description: string;
    parentCategory: string;
    category: string;
    image?: string;
    price?: string;
    isPremium?: boolean;
    isPopular?: boolean;
}) {
    const router = useRouter();
    const whatsappInquiryText = `Hi, I'm interested in the ${title}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappInquiryText
    )}`;

    const handleNavigation = () => {
        router.push(`/${parentCategory}/${category}`);
    };

    return (
        <Card className="group relative overflow-hidden rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 h-full flex flex-col">
            {(isPremium || isPopular) && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-2xl z-10 transform transition-transform duration-300">
                    {isPremium ? "Premium" : "Popular"}
                </div>
            )}
            <CardContent className="p-0 flex flex-col flex-grow">
                <div
                    className="relative h-60 w-full overflow-hidden cursor-pointer"
                    onClick={handleNavigation}
                >
                    {image ? (
                        <ImageWithFallback
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                    {price && (
                        <div className="mb-4">
                            <span className="text-md text-muted-foreground">Starts at</span>{" "}
                            <span className="text-lg font-bold text-primary">₹{price}</span>
                        </div>
                    )}
                    <div className="mt-auto pt-4 border-t border-primary/20 relative z-10 flex items-center justify-between">
                        <button
                            onClick={handleNavigation}
                            className="text-primary flex items-center"
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
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