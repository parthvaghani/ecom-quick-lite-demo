// Analytics tracking utilities for Aavkar Mukhwas

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Helper functions to get current context
export const getPageCategory = (): string => {
  if (typeof window === "undefined") return "unknown";

  const path = window.location.pathname;
  if (path.includes("/product/")) return "product";
  if (path.includes("/category/")) return "category";
  if (path === "/") return "home";
  return "other";
};

export const getCurrentCategory = (): string | null => {
  if (typeof window === "undefined") return null;

  const path = window.location.pathname;
  const match = path.match(/\/category\/([^\/]+)/);
  return match ? match[1] : null;
};

export const getCurrentProduct = (): string | null => {
  if (typeof window === "undefined") return null;

  const path = window.location.pathname;
  const match = path.match(/\/product\/([^\/]+)/);
  return match ? match[1] : null;
};

// Page view tracking with enhanced data
// DISABLED: Analytics disabled for demo site
export const trackPageView = (_additionalData?: Record<string, unknown>) => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_category: getPageCategory(),
    collection_name: getCurrentCategory(),
    product_name: getCurrentProduct(),
    ...additionalData,
  });
  */
};

// Category/Collection page tracking
// DISABLED: Analytics disabled for demo site
export const trackCategoryView = (_categoryName: string, _categoryId: string) => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "view_item_list", {
    event_category: "engagement",
    event_label: "Category View",
    item_list_name: categoryName,
    item_list_id: categoryId,
    items: [
      {
        item_id: categoryId,
        item_name: categoryName,
        item_category: "mukhwas_category",
      },
    ],
  });
  */
};

// Product view tracking
// DISABLED: Analytics disabled for demo site
export const trackProductView = (
  _product: {
    name: string;
    category: string;
    variants?: Record<
      string,
      Record<string, { price: number; discount?: number }>
    >;
  },
  _categoryName?: string
) => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  if (typeof window === "undefined" || !window.gtag) return;

  const basePrice = product.variants?.gm?.["250g"]?.price || 0;

  window.gtag("event", "view_item", {
    event_category: "engagement",
    event_label: "Product View",
    currency: "INR",
    value: basePrice,
    items: [
      {
        item_id: product.category,
        item_name: product.name,
        item_category: "mukhwas",
        item_category2: categoryName || getCurrentCategory(),
        price: basePrice,
        currency: "INR",
      },
    ],
  });
  */
};

// WhatsApp tracking with enhanced data
// DISABLED: Analytics disabled for demo site
export const trackWhatsAppClick = (
  _buttonType: "floating" | "category_card" | "product_card",
  _context: Record<string, unknown> = {}
) => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "whatsapp_chat_started", {
    event_category: "conversion",
    event_label: `WhatsApp ${buttonType}`,
    method: buttonType,
    page_location: window.location.href,
    page_title: document.title,
    current_page: window.location.pathname,
    user_agent: navigator.userAgent,
    ...context,
  });
  */
};

// Floating WhatsApp button tracking
// DISABLED: Analytics disabled for demo site
export const trackFloatingWhatsAppClick = () => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  trackWhatsAppClick("floating", {
    current_page: window.location.pathname,
  });
  */
};

// Category card WhatsApp button tracking
// DISABLED: Analytics disabled for demo site
export const trackCategoryCardWhatsAppClick = (_category: {
  name: string;
  category: string;
}) => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  trackWhatsAppClick("category_card", {
    category_name: category.name,
    category_id: category.category,
    current_page: window.location.pathname,
  });
  */
};

// Product card WhatsApp button tracking
// DISABLED: Analytics disabled for demo site
export const trackProductCardWhatsAppClick = (
  _product: {
    name: string;
    category: string;
    variants?: Record<
      string,
      Record<string, { price: number; discount?: number }>
    >;
  },
  _category?: {
    name: string;
    category: string;
  }
) => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  const basePrice = product.variants?.gm?.["250g"]?.price || 0;

  trackWhatsAppClick("product_card", {
    product_name: product.name,
    product_id: product.category,
    category_name: category?.name,
    category_id: category?.category,
    product_price: basePrice,
    current_page: window.location.pathname,
  });
  */
};

// Initialize analytics tracking
// DISABLED: Analytics disabled for demo site
export const initializeAnalytics = () => {
  // Analytics disabled - no-op
  return;
  /* Original code - commented out for demo site
  if (typeof window === "undefined") return;

  // Track initial page view
  trackPageView();

  // Track page views on route changes (for SPA)
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(history, args);
    setTimeout(() => trackPageView(), 100);
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(history, args);
    setTimeout(() => trackPageView(), 100);
  };

  // Track popstate events (back/forward navigation)
  window.addEventListener("popstate", () => {
    setTimeout(() => trackPageView(), 100);
  });
  */
};
