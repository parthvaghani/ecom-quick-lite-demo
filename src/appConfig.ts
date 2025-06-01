export const appConfig = {
  cookieName: "kk_dupatta_auth_token",
  sessionId: "session_id",
  title: "K.K. Dupatta House",
  description:
    "Discover premium quality dupattas from Surat's finest collection. Explore our extensive range of Chanderi, Digital, Jacquard, and specialty dupattas with exquisite craftsmanship.",
  company: {
    name: "K.K. Dupatta House",
    email: "kkdupattathouse9508@gmail.com",
    website: "https://kkdupattas.com",
    address: "Bombay Market, Surat",
    location: "Surat, Gujarat, India",
    phone: "+91 95866 21717",
    contact: "Vicky Kotak",
    updatedAt: {
      privacy: "June 1, 2025",
      terms: "June 1, 2025",
    },
  },
  meta: {
    keywords:
      "dupatta, chanderi dupatta, digital dupatta, jacquard dupatta, dyeable dupatta, surat dupattas, wholesale dupatta, indian textiles, ethnic wear",
    author: "K.K. Dupatta House",
    themeColor: "#F59E0B", // amber-500 - representing traditional textile colors
  },
  feature: {
    title: "Premium Dupatta Collection",
    description:
      "Explore our curated selection of high-quality dupattas in various categories. From traditional Chanderi to modern Digital prints, find the perfect dupatta for every occasion.",
    benefits: [
      "Wide variety of dupatta categories and styles",
      "Premium quality fabrics from trusted manufacturers",
      "Competitive wholesale and retail pricing",
      "Expert guidance from Surat's textile specialists",
    ],
  },
  categories: {
    featured: [
      {
        id: "dyeable",
        name: "Dyeable Dupatta",
        description: "Versatile dupattas perfect for custom dyeing",
        image: "/images/dyeable-dupatta.jpg",
        popular: true,
      },
      {
        id: "chanderi-mx-36-2side",
        name: "Chanderi MX 36 2Side",
        description: "Classic Chanderi weave with elegant finish",
        image: "/images/chanderi-2side.jpg",
        popular: true,
      },
      {
        id: "digital",
        name: "Digital Dupatta",
        description: "Modern digital prints with vibrant colors",
        image: "/images/digital-dupatta.jpg",
        popular: true,
      },
      {
        id: "jacquard-suit",
        name: "Jacquard Suit Dupatta",
        description: "Intricate jacquard patterns for premium suits",
        image: "/images/jacquard-dupatta.jpg",
        popular: false,
      },
    ],
  },
  help: {
    visible: true,
    sections: [
      {
        title: "Getting Started",
        items: [
          {
            question: "How do I browse dupatta categories?",
            displayInLanding: true,
            answer:
              "Browse our extensive collection by selecting any category from the main menu. Each category showcases different styles and fabric types.",
          },
          {
            question: "Do you offer wholesale pricing?",
            displayInLanding: true,
            answer:
              "Yes! We offer competitive wholesale rates for bulk orders. Contact us at +91 95866 21717 for wholesale pricing.",
          },
          {
            question: "What is the quality of your dupattas?",
            displayInLanding: true,
            answer:
              "We source premium quality fabrics and maintain strict quality control. All dupattas are carefully inspected before dispatch.",
          },
        ],
      },
      {
        title: "Orders & Shipping",
        items: [
          {
            question: "How do I place an order?",
            displayInLanding: false,
            answer:
              "Contact us directly via WhatsApp at +91 95866 21717 or email kkdupattathouse9508@gmail.com with your requirements.",
          },
          {
            question: "Do you ship across India?",
            displayInLanding: false,
            answer:
              "Yes, we ship nationwide from our Surat location. Shipping charges apply based on location and order value.",
          },
        ],
      },
      {
        title: "Products & Customization",
        items: [
          {
            question: "Can I get custom colors in dyeable dupattas?",
            displayInLanding: false,
            answer:
              "Absolutely! Our dyeable dupattas can be customized to your preferred colors. Minimum order quantities may apply.",
          },
          {
            question: "Do you have new arrivals regularly?",
            displayInLanding: true,
            answer:
              "Yes, we regularly update our collection with latest designs and trends. Follow us for new arrival updates.",
          },
        ],
      },
    ],
  },
  settings: {
    sections: [
      {
        title: "Account",
        description: "Manage your account settings and preferences",
        items: [
          {
            key: "notifications",
            label: "Product Updates",
            description: "Get notified about new arrivals and special offers",
          },
          {
            key: "wishlist",
            label: "Wishlist",
            description: "Save your favorite dupatta designs",
          },
          {
            key: "orderHistory",
            label: "Order History",
            description: "View your previous orders and reorder easily",
          },
        ],
      },
      {
        title: "Preferences",
        description: "Customize your shopping experience",
        items: [
          {
            key: "categories",
            label: "Preferred Categories",
            description:
              "Set your favorite dupatta categories for personalized recommendations",
          },
          {
            key: "priceRange",
            label: "Price Range",
            description:
              "Set your preferred price range for better product filtering",
          },
          {
            key: "language",
            label: "Language",
            description: "Choose between English, हिंदी, and ગુજરાતી",
          },
        ],
      },
    ],
  },
  storage: {
    emailSave: "kk_dupatta_email_save",
    nameSave: "kk_dupatta_name_save",
    cartSave: "kk_dupatta_cart_save",
  },
  testimonials: {
    visible: true,
    data: [
      {
        name: "Priya Sharma",
        body: "Amazing quality dupattas! The Chanderi collection is absolutely beautiful. K.K. Dupatta House has become my go-to for all ethnic wear needs.",
        img: "https://avatar.vercel.sh/priya",
        location: "Mumbai",
      },
      {
        name: "Rajesh Patel",
        body: "As a retailer, I've been sourcing from K.K. Dupatta House for 3 years. Consistent quality, competitive prices, and excellent service!",
        img: "https://avatar.vercel.sh/rajesh",
        location: "Ahmedabad",
      },
      {
        name: "Meera Singh",
        body: "The digital print dupattas are stunning! Great variety and the customer service is very helpful in selecting the right pieces.",
        img: "https://avatar.vercel.sh/meera",
        location: "Delhi",
      },
      {
        name: "Amit Kumar",
        body: "Wholesale orders are handled professionally. Quick delivery and packaging is excellent. Highly recommend for bulk purchases.",
        img: "https://avatar.vercel.sh/amit",
        location: "Jaipur",
      },
      {
        name: "Kavya Reddy",
        body: "Love the dyeable dupatta range! I can get them in any color I want. Perfect for matching with different outfits.",
        img: "https://avatar.vercel.sh/kavya",
        location: "Bangalore",
      },
      {
        name: "Suresh Shah",
        body: "Being from the textile industry, I appreciate the quality K.K. Dupatta House maintains. Their Jacquard collection is exceptional.",
        img: "https://avatar.vercel.sh/suresh",
        location: "Surat",
      },
    ],
  },
  reviews: {
    visible: false,
    data: [
      {
        name: "Fashion Boutique Owner",
        username: "@fashionista_mumbai",
        body: "Best dupatta supplier in Surat! Quality is consistent and pricing is competitive.",
        img: "https://avatar.vercel.sh/fashionista",
      },
      {
        name: "Ethnic Wear Store",
        username: "@ethnicwear_delhi",
        body: "K.K. Dupatta House never disappoints. Our customers love their collection!",
        img: "https://avatar.vercel.sh/ethnicstore",
      },
      {
        name: "Designer Studio",
        username: "@designer_ahmd",
        body: "Premium quality dupattas at wholesale rates. Perfect for our design studio needs.",
        img: "https://avatar.vercel.sh/designer",
      },
      {
        name: "Textile Trader",
        username: "@textile_trader",
        body: "Reliable supplier with excellent customer service. Highly recommended!",
        img: "https://avatar.vercel.sh/trader",
      },
      {
        name: "Bridal Store",
        username: "@bridal_collection",
        body: "Their Chanderi and Jacquard collections are perfect for bridal wear. Excellent quality!",
        img: "https://avatar.vercel.sh/bridal",
      },
      {
        name: "Online Retailer",
        username: "@online_fashion",
        body: "Great partner for online business. Fast processing and quality products always.",
        img: "https://avatar.vercel.sh/online",
      },
    ],
  },
  features: {
    visible: true,
    data: [
      {
        title: "Extensive Category Range",
        description:
          "Browse through 11+ distinct dupatta categories including Chanderi, Digital, Jacquard, and specialty collections.",
        icon: "Grid3x3",
        tag: "VARIETY",
        size: "lg",
      },
      {
        title: "Premium Quality Assurance",
        description:
          "Every dupatta undergoes strict quality control to ensure you receive only the finest textiles from Surat.",
        icon: "Award",
        tag: "QUALITY",
        size: "lg",
      },
      {
        title: "Wholesale & Retail Options",
        description:
          "Flexible pricing for both individual customers and bulk wholesale orders with competitive rates.",
        icon: "ShoppingCart",
        tag: "PRICING",
        size: "lg",
      },
      {
        title: "Custom Dyeable Options",
        description:
          "Get dupattas in your preferred colors with our dyeable collection - perfect for matching specific requirements.",
        icon: "Palette",
        tag: "CUSTOMIZATION",
        size: "sm",
      },
      {
        title: "Expert Textile Guidance",
        description:
          "Benefit from decades of textile expertise with personalized recommendations for your needs.",
        icon: "Users",
        tag: "EXPERTISE",
        size: "sm",
      },
      {
        title: "Fast Nationwide Shipping",
        description:
          "Quick and secure delivery across India from our Surat facility with proper packaging and handling.",
        icon: "Truck",
        tag: "DELIVERY",
        size: "sm",
      },
      {
        title: "Regular New Arrivals",
        description:
          "Stay updated with latest trends and designs as we regularly refresh our collection with new patterns and styles.",
        icon: "Sparkles",
        tag: "TRENDS",
        size: "sm",
      },
    ],
  },
  contact: {
    whatsapp: "+919586621717",
    phone: "+919586621717",
    email: "kkdupattathouse9508@gmail.com",
    address: "Bombay Market, Surat, Gujarat, India",
    contactPerson: "Vicky Kotak",
    businessHours: "Monday to Saturday: 9:00 AM - 7:00 PM",
  },
};

// Routes that require authentication
export const privatePaths = [
  "/dashboard",
  "/profile",
  "/settings",
  "/account",
  "/feature",
  "/help",
];

// Routes that require admin privileges
export const adminPaths = [
  "/admin",
  "/admin/dashboard",
  "/admin/users",
  "/admin/settings",
];

// Routes that are publicly accessible
export const publicPaths = [
  "/",
  "/login",
  "/signup",
  "/about",
  "/privacy",
  "/terms",
  "/pricing",
  "/unauthorized",
];

// URL redirects
export const redirects: { [key: string]: string } = {
  "/home": "/dashboard",
  "/admin": "/admin/dashboard",
};

// Application routes
export const routes = {
  // Public routes
  home: "/",
  login: "/login",
  signup: "/signup",
  about: "/about",
  privacy: "/privacy",
  terms: "/terms",
  pricing: "/pricing",
  feature: "/feature",

  // Protected routes
  dashboard: "/dashboard",
  profile: "/profile",
  settings: "/settings",
  account: "/account",
  help: "/help",

  // Admin routes
  adminDashboard: "/admin/dashboard",
  adminUsers: "/admin/users",
  adminSettings: "/admin/settings",
};

// Footer menu items
export interface MenuItem {
  label: string;
  href: string;
  show: "everyone" | "guest_only" | "user_only" | "admin_only";
  footer: boolean;
}

export const footerMenuItems: MenuItem[] = [
  {
    label: "About",
    href: "/about",
    show: "everyone",
    footer: true,
  },
  {
    label: "Terms",
    href: "/terms",
    show: "everyone",
    footer: true,
  },
  {
    label: "Privacy",
    href: "/privacy",
    show: "everyone",
    footer: true,
  },
  {
    label: "Pricing",
    href: "/pricing",
    show: "everyone",
    footer: true,
  },
];
