"use client";
import { cn } from "@/lib/utils";
import { appConfig } from "@/appConfig";

const { features } = appConfig;

export function GrowthSection() {
  const getGradientClass = (
    feature: (typeof features.data)[0],
    index: number
  ) => {
    if (feature.size !== "lg") {
      return (feature.title.length + feature.description.length) % 2 === 0
        ? "bg-gradient-to-r from-brand-green to-brand-green-dark"
        : "bg-gradient-to-r from-primary to-primary/80";
    } else {
      return index % 2 === 0
        ? "bg-gradient-to-r from-brand-green to-brand-green-dark"
        : "bg-gradient-to-r from-primary to-primary/80";
    }
  };
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary/50 dark:bg-secondary/20">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative text-center mb-12">
          <h2 className="inline-flex items-center text-sm font-semibold text-primary dark:text-primary mb-2">
            PREMIUM HOMEMADE MUKHWAS COLLECTION
            <span className="ml-2 w-12 h-px bg-primary dark:bg-primary"></span>
          </h2>
          <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            All the finest homemade and hygienic mukhwas to elevate your taste
            and business in one place.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.data.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "rounded-2xl p-8 text-white dark:text-primary-foreground overflow-hidden relative group transition-all duration-300",
                getGradientClass(feature, index),
                feature.size === "lg" ? "md:col-span-2" : ""
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-black/10 dark:bg-white/10 rounded-full mb-4">
                  {feature.tag}
                </span>

                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p
                  className={`${
                    feature.size === "sm" ? "w-[85%]" : ""
                  } text-white/80 mb-4`}
                >
                  {feature.description}
                </p>

                <div className="absolute bottom-4 right-4 opacity-10">
                  <feature.icon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
