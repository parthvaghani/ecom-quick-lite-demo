"use client";

import { Grid3X3, Award, ShoppingCart, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { appConfig } from "@/appConfig";

export function FeaturesSection() {
  return (
    <section className="relative pb-12 pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary/50 dark:bg-secondary/20">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h2 className="inline-flex items-center text-sm font-semibold text-primary dark:text-primary mb-2">
            POWERFUL FEATURES
            <span className="ml-2 w-12 h-px bg-primary dark:bg-primary"></span>
          </h2>
          <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Why Choose {appConfig.title}?
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the perfect balance of heritage and innovation with our
            modern platform designed to help you build and explore your family’s
            legacy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Grid3X3 className="w-7 h-7" />}
            title="Extensive Category Range"
            description="Browse through various mukhwas categories including traditional, sweet supari, mouth fresheners, and specialty collections"
            color="green"
          />
          <FeatureCard
            icon={<Award className="w-7 h-7" />}
            title="Premium Quality Assurance"
            description="Every mukhwas product undergoes strict quality control to ensure you receive only the finest homemade and hygienic products from Surat"
            color="green"
          />
          <FeatureCard
            icon={<ShoppingCart className="w-7 h-7" />}
            title="Wholesale & Retail Options"
            description="Flexible pricing for both individual customers and bulk wholesale orders with competitive rates"
            color="green"
          />
          <FeatureCard
            icon={<Palette className="w-7 h-7" />}
            title="Custom Flavor Options"
            description="Get mukhwas in your preferred flavors with our customizable collection - perfect for matching specific requirements"
            color="green"
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
  color: "green";
}) {
  const colorClasses = {
    green:
      "bg-primary/10 dark:bg-primary/20 text-primary dark:text-white border border-primary/20 dark:border-primary/30 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors",
  };

  return (
    <Card className="group relative overflow-hidden border-transparent transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg/25 hover:-translate-y-1 bg-card dark:bg-card">
      <CardContent className="p-6">
        <div
          className={`inline-flex rounded-xl p-3 ${colorClasses[color]} transition-colors duration-200`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        {/* <div className="mt-4 flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0">
          Learn more
          <ArrowRight className="ml-1 h-4 w-4" />
        </div> */}
      </CardContent>
    </Card>
  );
}
