"use client"
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/utils/categories.json";
import {
  Palette,
  Zap,
  Crown,
  Star,
  Diamond,
  Shirt,
  Sparkles,
  Gem,
  Layers,
  Waves,
  Wand2,
  Heart,
  ShirtIcon,
  ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";

// Icon mapping for different category types
const categoryIcons = {
  dyeable: <Palette className="w-5 h-5" />,
  grieg: <Zap className="w-5 h-5" />,
  pure: <Crown className="w-5 h-5" />,
  chanderi: <Star className="w-5 h-5" />,
  digital: <Diamond className="w-5 h-5" />,
  double: <Layers className="w-5 h-5" />,
  beam: <Waves className="w-5 h-5" />,
  jenny: <Heart className="w-5 h-5" />,
  extra: <Sparkles className="w-5 h-5" />,
  jacquard: <Wand2 className="w-5 h-5" />,
  suit: <ShirtIcon className="w-5 h-5" />,
  muslin: <Gem className="w-5 h-5" />,
  default: <Shirt className="w-5 h-5" />
};

// Gradient color schemes for different categories
const categoryGradients = [
  "from-blue-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-red-500 to-pink-600"
];

const categoryBackgrounds = [
  "from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20",
  "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
  "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
  "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
  "from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20",
  "from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20",
  "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20",
  "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20"
];

function getIconForCategory(category: string) {
  const categoryLower = category.toLowerCase();

  // Primary category checks (most specific first)
  if (categoryLower.includes('jacquard')) return categoryIcons.jacquard;
  if (categoryLower.includes('double-beam-jenny')) return categoryIcons.beam;
  if (categoryLower.includes('muslin')) return categoryIcons.muslin;
  if (categoryLower.includes('suit')) return categoryIcons.suit;
  if (categoryLower.includes('jenny')) return categoryIcons.jenny;
  if (categoryLower.includes('double')) return categoryIcons.double;
  if (categoryLower.includes('extra')) return categoryIcons.extra;

  // Original category checks
  if (categoryLower.includes('dyeable')) return categoryIcons.dyeable;
  if (categoryLower.includes('grieg')) return categoryIcons.grieg;
  if (categoryLower.includes('pure')) return categoryIcons.pure;
  if (categoryLower.includes('chanderi')) return categoryIcons.chanderi;
  if (categoryLower.includes('digital')) return categoryIcons.digital;

  return categoryIcons.default;
}


export function Category() {
  return (
    <section className="relative pb-20 pt-32 overflow-hidden">
      {/* Enhanced Background decoration */}


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="relative text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200/20 dark:border-purple-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Categories
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Choose your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              category
            </span>
          </h3>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover our premium collection of dupattas crafted with exquisite materials and traditional techniques
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
                animationFillMode: 'both'
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
  )
}

function CategoryCard({
  title,
  description,
  category,
  index
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
      className={`group relative overflow-hidden border-0 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 hover:-translate-y-2 cursor-pointer transform-gpu bg-gradient-to-br ${bgPattern} backdrop-blur-sm`}
      onClick={() => router.push(`/${category}`)}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />

      {/* Animated border glow */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />

      <CardContent className="relative h-full flex flex-col justify-between min-h-[200px] p-6">
        <div>
          {/* Icon with gradient background */}
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight uppercase group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-gray-100 dark:group-hover:to-gray-300 transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Enhanced Call to action */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            View our collection
          </span>
          <div className={`p-2 rounded-full bg-gradient-to-r ${gradient} text-white transform translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300`}>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}