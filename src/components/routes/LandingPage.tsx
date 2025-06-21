"use client";

import { appConfig } from "@/appConfig";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Truck,
  ShoppingCart,
  Leaf,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FeaturesSection,
  ReviewsSection,
  FAQSection,
  GrowthSection,
  ProductDetailsSection,
} from "@/components";
import { Category } from "../ui/Category";
import { ROUTES } from "@/utils/constants";
import { TestimonialsSection } from "../TestimonialsSection";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[calc(100vh-4rem)] flex items-center">
        {" "}
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern dark:bg-grid-slate-800/10" />
        {/* Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/70 to-brand-green/70 bg-[length:200%_200%] animate-gradient-shift" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <Badge
              variant="outline"
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm mb-6 dark:bg-slate-800/20 dark:text-slate-200 dark:border-slate-600 select-none"
            >
              🌿 Discover Natural Ingredients & Health Benefits
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white bg-clip-text dark:text-slate-100">
              {appConfig.title}
            </h1>
            <p className="text-xl md:text-xl mb-10 text-white max-w-3xl mx-auto dark:text-slate-300">
              {appConfig.description}
            </p>

            <Button
              size="lg"
              variant="default"
              className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary dark:hover:bg-white/90"
            >
              <Link
                href={ROUTES.CATEGORIES}
                className="flex items-center gap-2"
              >
                View our collections <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Trust Badges */}
            <div className="mt-8 flex justify-center items-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center text-white text-sm font-mono">
                <Leaf className="w-5 h-5 mr-2 text-green-400" />
                <span>100% Veg</span>
              </div>
              <div className="flex items-center text-white text-sm font-mono">
                <ShieldCheck className="w-5 h-5 mr-2 text-blue-300" />
                <span>FSSAI Approved</span>
              </div>
              <div className="flex items-center text-white text-sm font-mono">
                <Globe className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Export Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section */}
      <Category />

      {/* Product Details Section */}
      <ProductDetailsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Reviews Section */}
      {appConfig.reviews.visible && <ReviewsSection />}

      {/* Growth Section */}
      {appConfig.features.visible && <GrowthSection />}

      {/* Testimonials Section */}
      {appConfig.testimonials.visible && <TestimonialsSection />}

      {/* CTA Section */}
      <section className="relative py-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950">
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        </div>
        {/* Dynamic background with gradient overlay */}
        <div className="p-8 lg:p-12 bg-gradient-to-r from-brand-green-light/50 to-brand-green/20 dark:from-brand-green/10 dark:to-brand-green-dark/20 backdrop-blur-sm border-border">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ready to Explore Our Premium Homemade Mukhwas Collection?
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of customers who trust {appConfig.title} for
              premium quality homemade and hygienic mukhwas with authentic taste
              and competitive pricing.
            </p>

            <div className="relative inline-block group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-brand-green-dark opacity-50 group-hover:opacity-70 blur transition duration-200" />
              <Link
                href={`https://wa.me/918128826764?text=Hi, I'm interested in your mukhwas collection`}
                className="relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-brand-green-dark rounded-lg hover:from-primary/90 hover:to-brand-green-dark/90 transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 animate-bounce-x" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Premium Quality Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Fast Nationwide Shipping
              </div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Wholesale & Retail Options
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      {appConfig.help.visible && <FAQSection />}
    </div>
  );
}
