"use client";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/utils/categories.json";
import {
  Zap,
  Crown,
  Star,
  Diamond,
  Sparkles,
  Gem,
  Layers,
  Waves,
  Wand2,
  Heart,
  ArrowRight,
  Leaf,
  Package,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Icon mapping for different category types
const categoryIcons = {
  dyeable: <Leaf className="w-5 h-5" />,
  grieg: <Zap className="w-5 h-5" />,
  pure: <Crown className="w-5 h-5" />,
  chanderi: <Star className="w-5 h-5" />,
  digital: <Diamond className="w-5 h-5" />,
  double: <Layers className="w-5 h-5" />,
  beam: <Waves className="w-5 h-5" />,
  jenny: <Heart className="w-5 h-5" />,
  extra: <Sparkles className="w-5 h-5" />,
  jacquard: <Wand2 className="w-5 h-5" />,
  suit: <Package className="w-5 h-5" />,
  muslin: <Gem className="w-5 h-5" />,
  default: <Leaf className="w-5 h-5" />,
};

// Gradient color schemes for different categories
const categoryGradients = [
  "from-brand-green to-primary",
  "from-primary to-brand-green-dark",
  "from-brand-green-dark to-brand-green",
  "from-primary to-brand-green",
  "from-brand-green to-primary",
  "from-primary to-brand-green-dark",
  "from-brand-green-dark to-brand-green",
  "from-primary to-brand-green",
];

const categoryBackgrounds = [
  "from-brand-green/20 to-primary/20 dark:from-brand-green/30 dark:to-primary/30",
  "from-primary/20 to-brand-green-dark/20 dark:from-primary/30 dark:to-brand-green-dark/30",
  "from-brand-green-dark/20 to-brand-green/20 dark:from-brand-green-dark/30 dark:to-brand-green/30",
  "from-primary/20 to-brand-green/20 dark:from-primary/30 dark:to-brand-green/30",
  "from-brand-green/20 to-primary/20 dark:from-brand-green/30 dark:to-primary/30",
  "from-primary/20 to-brand-green-dark/20 dark:from-primary/30 dark:to-brand-green-dark/30",
  "from-brand-green-dark/20 to-brand-green/20 dark:from-brand-green-dark/30 dark:to-brand-green/30",
  "from-primary/20 to-brand-green/20 dark:from-primary/30 dark:to-brand-green/30",
];

function getIconForCategory(category: string) {
  const categoryLower = category.toLowerCase();

  // Primary category checks (most specific first)
  if (categoryLower.includes("jacquard")) return categoryIcons.jacquard;
  if (categoryLower.includes("double-beam-jenny")) return categoryIcons.beam;
  if (categoryLower.includes("muslin")) return categoryIcons.muslin;
  if (categoryLower.includes("suit")) return categoryIcons.suit;
  if (categoryLower.includes("jenny")) return categoryIcons.jenny;
  if (categoryLower.includes("double")) return categoryIcons.double;
  if (categoryLower.includes("extra")) return categoryIcons.extra;

  // Original category checks
  if (categoryLower.includes("dyeable")) return categoryIcons.dyeable;
  if (categoryLower.includes("grieg")) return categoryIcons.grieg;
  if (categoryLower.includes("pure")) return categoryIcons.pure;
  if (categoryLower.includes("chanderi")) return categoryIcons.chanderi;
  if (categoryLower.includes("digital")) return categoryIcons.digital;

  return categoryIcons.default;
}

export function Category() {
  return (
    <section className="relative pb-20 pt-32 overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-secondary/50 dark:bg-secondary/20">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="relative text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Categories
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-brand-green to-primary bg-clip-text text-transparent">
              Mukhwas Collections
            </span>
          </h3>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Indulge in our exquisite collection of premium homemade mukhwas,
            hygienically crafted with time-honored recipes and the finest
            authentic ingredients.
          </p>
        </div>

        {/* Enhanced Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
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
                index={index}
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
  index,
}: {
  title: string;
  description: string;
  category: string;
  index: number;
}) {
  const router = useRouter();
  const gradient = categoryGradients[index % categoryGradients.length];
  const bgPattern = categoryBackgrounds[index % categoryBackgrounds.length];
  const icon = getIconForCategory(category);

  return (
    <Card
      className={`group relative overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:-translate-y-2 cursor-pointer transform-gpu bg-gradient-to-br ${bgPattern} backdrop-blur-sm hover:rotate-1`}
      onClick={() => router.push(`/${category}`)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`}
      />

      {/* Animated border glow */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}
      />

      <CardContent className="relative h-full flex flex-col justify-between min-h-[240px] p-6">
        <div className="flex-grow">
          {/* Icon with gradient background */}
          <div
            className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
          >
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight uppercase group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-gray-100 dark:group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Enhanced Call to action */}
        <div className="flex items-center justify-between pt-4 border-t border-primary/10">
          <span className="text-sm font-semibold text-primary">
            View Collection
          </span>
          <div
            className={`p-2 rounded-full bg-primary/10 text-primary group-hover:bg-gradient-to-r ${gradient} group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300`}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
