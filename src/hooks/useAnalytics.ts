import { useEffect } from "react";
import {
  trackPageView,
  trackCategoryView,
  trackProductView,
  trackFloatingWhatsAppClick,
  trackCategoryCardWhatsAppClick,
  trackProductCardWhatsAppClick,
} from "@/utils/analytics";

// Hook for tracking page views
export const usePageTracking = (additionalData?: Record<string, unknown>) => {
  useEffect(() => {
    trackPageView(additionalData);
  }, [additionalData]);
};

// Hook for tracking category views
export const useCategoryTracking = (
  categoryName: string,
  categoryId: string
) => {
  useEffect(() => {
    trackCategoryView(categoryName, categoryId);
  }, [categoryName, categoryId]);
};

// Hook for tracking product views
export const useProductTracking = (
  product: {
    name: string;
    category: string;
    variants?: Record<
      string,
      Record<string, { price: number; discount?: number }>
    >;
  },
  categoryName?: string
) => {
  useEffect(() => {
    trackProductView(product, categoryName);
  }, [product, categoryName]);
};

// Export tracking functions for direct use
export {
  trackFloatingWhatsAppClick,
  trackCategoryCardWhatsAppClick,
  trackProductCardWhatsAppClick,
};
