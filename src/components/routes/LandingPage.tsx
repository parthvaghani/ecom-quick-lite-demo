"use client";

import { appConfig } from "@/appConfig";
import Link from "next/link";
import { ArrowRight, Award, Truck, ShoppingCart } from "lucide-react";
import { Category } from "@/components/ui/Category";
import { PromotionalProductsBanner } from "@/components/ui/PromotionalProductsBanner";
import dynamic from "next/dynamic";
import FullScreenLoader from "@/components/FullScreenLoader";
import HeroSlider from "@/components/HeroSlider";
import { ReviewSection } from "../review";

const ProductDetailsSection = dynamic(
  () => import("@/components").then((mod) => mod.ProductDetailsSection),
  { loading: () => <FullScreenLoader /> }
);
const IngredientsGuide = dynamic(
  () => import("../ui/IngredientsGuide").then((mod) => mod.IngredientsGuide),
  { loading: () => <FullScreenLoader /> }
);
const FeaturesSection = dynamic(
  () => import("@/components").then((mod) => mod.FeaturesSection),
  { loading: () => <FullScreenLoader /> }
);
const ReviewsSection = dynamic(
  () => import("@/components").then((mod) => mod.ReviewsSection),
  { loading: () => <FullScreenLoader /> }
);
const GrowthSection = dynamic(
  () => import("@/components").then((mod) => mod.GrowthSection),
  { loading: () => <FullScreenLoader /> }
);
const TestimonialsSection = dynamic(
  () => import("../TestimonialsSection").then((mod) => mod.TestimonialsSection),
  { loading: () => <FullScreenLoader /> }
);
const FAQSection = dynamic(
  () => import("@/components").then((mod) => mod.FAQSection),
  { loading: () => <FullScreenLoader /> }
);

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSlider />
      {/* Category Section */}
      <PromotionalProductsBanner />
      <Category />
      {/* Product Details Section */}
      <ProductDetailsSection />

      <IngredientsGuide />

      {/* Features Section */}
      <FeaturesSection />

      {/* Reviews Section */}
      {appConfig.reviews.visible && <ReviewsSection />}

      {/* Growth Section */}
      {appConfig.features.visible && <GrowthSection />}

      {/* Testimonials Section */}
      {appConfig.testimonials.visible && <TestimonialsSection />}

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        {/* <div className="absolute inset-0 bg-secondary dark:bg-secondary/20">
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        </div> */}
        {/* Dynamic background with gradient overlay */}
        <div className="p-8 lg:p-12 bg-secondary dark:bg-secondary/20 backdrop-blur-sm border-border">
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
                href={`https://wa.me/916353528830?text=Hi, I'm interested in your mukhwas collection`}
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
                Fast Shipping Nationwide & Internationally
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
      <ReviewSection />

    </div>
  );
}
