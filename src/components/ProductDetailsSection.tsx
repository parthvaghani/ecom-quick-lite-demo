"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { appConfig } from "@/appConfig";
import { Leaf, Heart, Zap, Shield, Brain, Moon, Scale } from "lucide-react";

interface Product {
  name: string;
  ingredients: string[];
  benefits: string[];
}

const benefitIcons = {
  "Rich source of omega 3 fatty acid": <Heart className="w-4 h-4" />,
  "Improves heart health": <Heart className="w-4 h-4" />,
  "Helps in providing good sleep": <Moon className="w-4 h-4" />,
  "Improves Immunity": <Shield className="w-4 h-4" />,
  "Helps to improve blood quality": <Heart className="w-4 h-4" />,
  "One of richest source of Vitamin-C": <Zap className="w-4 h-4" />,
  "Helps to improve skin tone & removes toxins from blood": (
    <Leaf className="w-4 h-4" />
  ),
  "Immunity Booster": <Shield className="w-4 h-4" />,
  "Reduced Bad Cholesterol": <Heart className="w-4 h-4" />,
  "Full Of Omega 3 Fatty Acid": <Heart className="w-4 h-4" />,
  "Natural Source Of Fibers": <Leaf className="w-4 h-4" />,
  "Rich Source Of Vitamin-C, B Complex, And Vitamin-E": (
    <Zap className="w-4 h-4" />
  ),
  "Removes bad odour of mouth": <Leaf className="w-4 h-4" />,
  "Rich in antioxidants & natural fibers": <Leaf className="w-4 h-4" />,
  "Helps to Enhance Gut & Skin Health": <Leaf className="w-4 h-4" />,
  "Helps to Regulates menstrual cycle": <Heart className="w-4 h-4" />,
  "Helps to Lower Cholesterol & Relieves hyperlipidemia & Obesity": (
    <Heart className="w-4 h-4" />
  ),
  "Protects Against Heart Diseases": <Heart className="w-4 h-4" />,
  "Richest Source Omega 3 Fatty Acid": <Heart className="w-4 h-4" />,
  "Fights Cancer": <Shield className="w-4 h-4" />,
  "Rich In Dietary Fibers": <Leaf className="w-4 h-4" />,
  "Maintains Kidney Health": <Heart className="w-4 h-4" />,
  "Helpful In Weight Loss": <Scale className="w-4 h-4" />,
  "Rich Source of Iron, Calcium & Minerals": <Zap className="w-4 h-4" />,
  "Helps To Maintain Gut Health & Heart Health": <Heart className="w-4 h-4" />,
  "Relieves Stress & Improves Good Sleep": <Brain className="w-4 h-4" />,
  "Full of Natural Fibers": <Leaf className="w-4 h-4" />,
  "Improves Metabolism": <Zap className="w-4 h-4" />,
  "Maintain Body Weight": <Scale className="w-4 h-4" />,
  "Rich Source Of Minerals": <Zap className="w-4 h-4" />,
};

export function ProductDetailsSection() {
  const products = appConfig.products;

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary/50 dark:bg-secondary/20">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative text-center mb-16">
          <h2 className="inline-flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            OUR PREMIUM PRODUCTS
            <span className="ml-2 w-12 h-px bg-emerald-600 dark:bg-emerald-400"></span>
          </h2>
          <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Discover Our Health-Focused Mukhwas Collection
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Each mukhwas is carefully crafted with premium ingredients and
            traditional recipes to provide maximum health benefits and authentic
            taste.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {Object.entries(products).map(([key, product]) => (
            <ProductCard key={key} product={product as Product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group relative overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:-translate-y-2 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
          {product.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Ingredients */}
        <div>
          <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            Ingredients
          </h4>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ingredient: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/30"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Health Benefits
          </h4>
          <ul className="space-y-2">
            {product.benefits.map((benefit: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                  {benefitIcons[benefit as keyof typeof benefitIcons] || (
                    <Heart className="w-4 h-4" />
                  )}
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
