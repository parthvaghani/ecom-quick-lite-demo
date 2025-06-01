"use client";

import { Grid3X3, Award, ShoppingCart, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { appConfig } from "@/appConfig";

export function FeaturesSection() {
  return (
    <section className="relative pb-12 pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h2 className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
            POWERFUL FEATURES
            <span className="ml-2 w-12 h-px bg-blue-600 dark:bg-blue-400"></span>
          </h2>
          <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Why Choose {appConfig.title}?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Discover the perfect balance of heritage and innovation with our modern platform designed to help you build and explore your family’s legacy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Grid3X3 className="w-7 h-7" />}
            title="Extensive Category Range"
            description="Browse through 11+ distinct dupatta categories including Chanderi, Digital, Jacquard, and specialty collections"
            color="blue"
          />
          <FeatureCard
            icon={<Award className="w-7 h-7" />}
            title="Premium Quality Assurance"
            description="Every dupatta undergoes strict quality control to ensure you receive only the finest textiles from Surat"
            color="amber"
          />
          <FeatureCard
            icon={<ShoppingCart className="w-7 h-7" />}
            title="Wholesale & Retail Options"
            description="Flexible pricing for both individual customers and bulk wholesale orders with competitive rates"
            color="purple"
          />
          <FeatureCard
            icon={<Palette className="w-7 h-7" />}
            title="Custom Dyeable Options"
            description="Get dupattas in your preferred colors with our dyeable collection - perfect for matching specific requirements"
            color="emerald"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "amber" | "purple" | "emerald";
}) {
  const colorClasses = {
    // Original colors
    blue: "bg-blue-50/40 dark:bg-blue-900/30 text-blue-500 dark:text-blue-300 border border-blue-100/40 dark:border-blue-800/30 hover:bg-blue-100/50 dark:hover:bg-blue-900/40 transition-colors",
    amber: "bg-amber-50/40 dark:bg-amber-900/30 text-amber-500 dark:text-amber-300 border border-amber-100/40 dark:border-amber-800/30 hover:bg-amber-100/50 dark:hover:bg-amber-900/40 transition-colors",
    purple: "bg-purple-50/40 dark:bg-purple-900/30 text-purple-500 dark:text-purple-300 border border-purple-100/40 dark:border-purple-800/30 hover:bg-purple-100/50 dark:hover:bg-purple-900/40 transition-colors",
    emerald: "bg-emerald-50/40 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-300 border border-emerald-100/40 dark:border-emerald-800/30 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/40 transition-colors",

    // New colors for additional categories
    rose: "bg-rose-50/40 dark:bg-rose-900/30 text-rose-500 dark:text-rose-300 border border-rose-100/40 dark:border-rose-800/30 hover:bg-rose-100/50 dark:hover:bg-rose-900/40 transition-colors",
    indigo: "bg-indigo-50/40 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-300 border border-indigo-100/40 dark:border-indigo-800/30 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/40 transition-colors",
    cyan: "bg-cyan-50/40 dark:bg-cyan-900/30 text-cyan-500 dark:text-cyan-300 border border-cyan-100/40 dark:border-cyan-800/30 hover:bg-cyan-100/50 dark:hover:bg-cyan-900/40 transition-colors",
    pink: "bg-pink-50/40 dark:bg-pink-900/30 text-pink-500 dark:text-pink-300 border border-pink-100/40 dark:border-pink-800/30 hover:bg-pink-100/50 dark:hover:bg-pink-900/40 transition-colors",
    teal: "bg-teal-50/40 dark:bg-teal-900/30 text-teal-500 dark:text-teal-300 border border-teal-100/40 dark:border-teal-800/30 hover:bg-teal-100/50 dark:hover:bg-teal-900/40 transition-colors",
    violet: "bg-violet-50/40 dark:bg-violet-900/30 text-violet-500 dark:text-violet-300 border border-violet-100/40 dark:border-violet-800/30 hover:bg-violet-100/50 dark:hover:bg-violet-900/40 transition-colors",
    orange: "bg-orange-50/40 dark:bg-orange-900/30 text-orange-500 dark:text-orange-300 border border-orange-100/40 dark:border-orange-800/30 hover:bg-orange-100/50 dark:hover:bg-orange-900/40 transition-colors",
    lime: "bg-lime-50/40 dark:bg-lime-900/30 text-lime-500 dark:text-lime-300 border border-lime-100/40 dark:border-lime-800/30 hover:bg-lime-100/50 dark:hover:bg-lime-900/40 transition-colors",
    sky: "bg-sky-50/40 dark:bg-sky-900/30 text-sky-500 dark:text-sky-300 border border-sky-100/40 dark:border-sky-800/30 hover:bg-sky-100/50 dark:hover:bg-sky-900/40 transition-colors",
  };


  return (
    <Card className="group relative overflow-hidden border-transparent transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg/25 hover:-translate-y-1 bg-white dark:bg-gray-900">
      <CardContent className="p-6">
        <div
          className={`inline-flex rounded-xl p-3 ${colorClasses[color]} transition-colors duration-200`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
        {/* <div className="mt-4 flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </div> */}
      </CardContent>
    </Card>
  );
}
