export const appConfig = {
  cookieName: "aavkar_mukhwas_auth_token",
  sessionId: "session_id",
  title: "Aavkar Mukhwas",
  description:
    "Discover premium quality homemade and hygienic mukhwas from Aavkar. Explore our extensive range of traditional mouth fresheners, sweet supari, and natural ingredients with authentic taste and quality.",
  company: {
    name: "Aavkar Home Made Hygienic Mukhwas",
    email: "sales@aavkarmukhwas.com",
    website: "https://aavkarmukhwas.com",
    address:
      "Plot No 26, Swastik Raw House, Near Shivdhara Circle, D Mart Road, Mota Varachha, Surat 394101 Gujarat",
    location: "Surat, Gujarat, India",
    phone: "+91 81288 26764",
    contact: "Sangeeta D. Vaghani, Pinal C Miyani, Hina A. Kakadiya",
    updatedAt: {
      privacy: "June 1, 2025",
      terms: "June 1, 2025",
    },
  },
  meta: {
    keywords:
      "mukhwas, aavkar mukhwas, homemade mukhwas, hygienic mukhwas, mouth freshener, sweet supari, betel nut, traditional mukhwas, indian mouth freshener, surat mukhwas, wholesale mukhwas, beet root mukhwas, amla mukhwas, multi seeds mukhwas, jaipuri mukhwas, roasted alsi mukhwas, makhana nuts mukhwas, oats mix mukhwas, roasted green wheat mukhwas",
    author: "Aavkar Home Made Hygienic Mukhwas",
    themeColor: "#059669", // emerald-600 - representing fresh and natural ingredients
  },
  feature: {
    title: "Premium Homemade Mukhwas Collection",
    description:
      "Explore our curated selection of high-quality homemade and hygienic mukhwas. From traditional mouth fresheners to sweet supari, find the perfect mukhwas for every occasion.",
    benefits: [
      "Wide variety of mukhwas categories and traditional recipes",
      "Premium quality homemade ingredients from trusted sources",
      "Competitive wholesale and retail pricing",
      "Expert guidance from Surat's traditional mukhwas specialists",
    ],
  },
  categories: {
    featured: [
      {
        id: "traditional-mukhwas",
        name: "Traditional Mukhwas",
        description: "Classic homemade mukhwas with authentic taste",
        image: "/images/traditional-mukhwas.jpg",
        popular: true,
      },
      {
        id: "sweet-supari",
        name: "Sweet Supari",
        description: "Delicious sweetened betel nut preparations",
        image: "/images/sweet-supari.jpg",
        popular: true,
      },
      {
        id: "mouth-freshener",
        name: "Mouth Freshener",
        description: "Refreshing mouth fresheners with natural ingredients",
        image: "/images/mouth-freshener.jpg",
        popular: true,
      },
      {
        id: "premium-mukhwas",
        name: "Premium Mukhwas",
        description: "Premium quality mukhwas for special occasions",
        image: "/images/premium-mukhwas.jpg",
        popular: false,
      },
    ],
  },
  products: {
    beetRootAmla: {
      name: "Beet Root Amla Mukhwas",
      image: "/images/products/beet-root-amla.jpg",
      tagline: "A healthy and tasty mix of beet root and amla.",
      ingredients: ["Beet Root", "Amla", "Jaggery Powder", "Black Salt"],
      benefits: [
        "Helps to improve blood quality",
        "One of richest source of Vitamin-C",
        "Helps to improve skin tone & removes toxins from blood",
      ],
    },
    multiSeeds: {
      name: "Multi Seeds",
      image: "/images/products/multi-seeds.jpg",
      tagline: "A crunchy and nutritious mix of various seeds.",
      ingredients: [
        "Melon Seeds",
        "Pumpkin Seeds",
        "Musk Melon Seeds",
        "Sunflower Seeds",
        "Black Salt",
      ],
      benefits: [
        "Immunity Booster",
        "Reduced Bad Cholesterol",
        "Full Of Omega 3 Fatty Acid",
        "Natural Source Of Fibers",
        "Rich Source Of Vitamin-C, B Complex, And Vitamin-E",
      ],
    },
    seedTilAlsi: {
      name: "Seed Til Alsi",
      image: "/images/products/seed-til-alsi.jpg",
      tagline: "A wholesome blend of seeds, til, and alsi.",
      ingredients: [
        "Pumpkin Seeds",
        "Melon Seeds",
        "Sunflower Seeds",
        "White Til",
        "Flax Seeds",
        "Turmeric - Salt",
      ],
      benefits: [
        "Rich source of omega 3 fatty acid",
        "Improves heart health",
        "Helps in providing good sleep",
        "Improves Immunity",
      ],
    },
    specialJaipuriMukhwas: {
      name: "Special Jaipuri Mukhwas",
      image: "/images/products/jaipuri-mukhwas.jpg",
      tagline: "A royal mix of sweet and savory flavors.",
      ingredients: [
        "Tini Mini (Sweet Saunf)",
        "Coriander Seeds",
        "Coconut Flakes",
        "Dry Betel Stick",
      ],
      benefits: [
        "Removes bad odour of mouth",
        "Rich in antioxidants & natural fibers",
        "Helps to Enhance Gut & Skin Health",
        "Helps to Regulates menstrual cycle",
      ],
    },
    seedsDryFruits: {
      name: "Seeds Dry Fruits",
      image: "/images/products/seeds-dry-fruits.jpg",
      tagline: "A nutritious and crunchy mix of seeds and dry fruits.",
      ingredients: [
        "Pumpkin Seeds",
        "Walnuts",
        "Cashew Nuts",
        "Melon Seeds",
        "Sunflower Seeds",
        "Pistachio",
        "Almonds",
      ],
      benefits: [
        "Immunity Booster",
        "Reduces Bad Cholesterol",
        "Helpful For Infertility Patients",
        "Natural Source Of Fibers",
        "Rich Source Of Vitamin -A. Good For Eye, Hair & Skin",
        "Helpfull In Sugar Level & Weight Management",
      ],
    },
    roastedAlsi: {
      name: "Roasted Alsi",
      image: "/images/products/roasted-alsi.jpg",
      tagline: "A healthy and flavorful roasted flax seeds mix.",
      ingredients: ["Flax Seeds", "Rock Salt", "Turmeric", "Lemon Juice"],
      benefits: [
        "Helps to Lower Cholesterol & Relieves hyperlipidemia & Obesity",
        "Protects Against Heart Diseases",
        "Richest Source of Omega 3 Fatty Acid",
        "Fights Cancer",
        "Rich In Dietary Fibers",
      ],
    },
    premiumTil: {
      name: "Premium Til (Sesame Seed)",
      image: "/images/products/premium-til.jpg",
      tagline: "A premium and flavorful til mix.",
      ingredients: ["White Til", "Rock Salt", "Turmeric", "Lemon Juice"],
      benefits: [
        "Anti - Ageing Properties",
        "Boosts Digestion.",
        "Boosts Skin & Dental Health",
        "Good Source of Calcium",
        "Improves Bone Health",
      ],
    },
    roastedGreenWheat: {
      name: "Roasted Green Wheat Mukhwas",
      image: "/images/products/roasted-green-wheat.jpg",
      tagline: "A healthy and delicious roasted green wheat mix.",
      ingredients: ["Green Wheat", "Black Salt", "Turmeric", "Rock Salt"],
      benefits: [
        "Full of Natural Fibers",
        "Improves Metabolism",
        "Maintain Body Weight",
        "Rich Source Of Minerals",
      ],
    },
    crunchyTilCoconut: {
      name: "Crunchy Til Coconut",
      image: "/images/products/crunchy-til-coconut.jpg",
      tagline: "A crunchy and flavorful til coconut mix.",
      ingredients: ["Coated White Til", "Coconuts Flakes", "Coriander Seeds"],
      benefits: [
        "Full of Antioxidants",
        "Source of Vitamin-E, Vitamin-K",
        "Better for Oral Health",
      ],
    },
    shahiKhajurPan: {
      image: "/images/products/shahi-khajur-pan.jpg",
      tagline: "A sweet and flavorful khajur pan mix.",
      name: "Shahi Khajur Pan",
      ingredients: [
        "Dates (Khajur)",
        "Betel Leaves",
        "Tutti Frutti",
        "Fennel Seeds",
        "Gulkand",
        "Coriender Seeds",
        "Dry",
        "Betel Sticks",
        "Coconut",
        "Powder",
        "Khajur Tukda",
      ],
      benefits: [
        "Rich Source Of Fibers",
        "Rich Source Of Iron & Calcium",
        "Great Energy Booster",
        "Improves Brain Health",
        "Anti-ageing",
        "Maintain Skin & Bowel Health",
      ],
    },
    paanCoconutLadoo: {
      name: "Pan Coconut Ladoo",
      image: "/images/products/pan-coconut-ladoo.jpg",
      tagline: "A crunchy and flavorful pan coconut ladoo mix.",
      ingredients: [
        "Menthol",
        "Betel Leaves",
        "Tutti Frutti",
        "Fennel Seeds",
        "Gulkand",
        "Coriander Seeds",
        "Dry Coconuts",
      ],
      benefits: [
        "Improves Digestion",
        "Good For Oral Health",
        "Good For Heart & Bone Health",
        "Promotes Skin Health",
      ],
    },
    chiaQuinoaBerries: {
      name: "Chia Quinoa Berries",
      image: "/images/products/chia-quinoa-berries.jpg",
      tagline: "A nutritious and crunchy mix of chia, quinoa, and berries.",
      ingredients: [
        "Chia Seeds",
        "Quinoa Seeds",
        "Black Til",
        "Blueberry",
        "Cranberry",
        "Black Raisins",
      ],
      benefits: [
        "Natural Laxative - full of Fibers",
        "Helpfull In Weight Reduction",
        "Helpful In Arthritis Pain",
        "Great Substitute of Milk In Nutrients",
        "Loaded With Antioxidants",
      ],
    },
    chanothiPan: {
      name: "Chanothi Pan",
      image: "/images/products/chanothi-pan.jpg",
      tagline: "A nutritious and crunchy mix of chanothi.",
      ingredients: [
        "Tutti Frutti",
        "Fennel Seeds",
        "Gulkand",
        "Coriander Seeds",
        "Dry Coconut Flacks",
        "Chanothi Leaves",
      ],
      benefits: [
        "Relieves oral ulcer",
        "Natural laxative property",
        "Helpful in relieving cough",
        "Good For skin & healthy hair",
      ],
    },
    healthyNutsBarriesMix: {
      name: "Healthy Nuts & Barries Mix",
      image: "/images/products/healthy-nuts-barries-mix.jpg",
      tagline: "A nutritious and crunchy mix of healthy nuts and barries.",
      ingredients: [
        "Hazelnuts",
        "Anjeer (Dried Fig)",
        "Black Raisin",
        "Sunflower seeds",
        "Walnuts",
        "Melon Seeds",
        "Green Raisin",
        "Flax Seeds",
        "Chia Seeds",
        "Pumpkin Seeds",
        "White Til",
        "Pistachio",
        "Blueberry",
        "Quinoa Seeds",
        "Cranberry",
        "Black Til",
        "Saffron",
      ],
      benefits: [
        "Great Immunity Booster",
        "Excellent For Weight Loss",
        "Improves Good Cholestrol & Reduces Bad Cholesterol",
        "Improves Heamoglobin",
        "Best For Skin,bones And Hair Health",
      ],
    },
    greenPanMukhwas: {
      name: "Green Pan Mukhwas",
      image: "/images/products/green-pan-mukhwas.jpg",
      tagline: "A nutritious and crunchy mix of green pan.",
      ingredients: [
        "Betel Sticks",
        "Navrang",
        "Supari Menthol",
        "Banaras",
        "Betel Leaves",
        "Tutti Frutti",
        "Calcutta Betel Leaves",
        "Fennel Seeds",
        "Gulkand",
        "Katha Powder",
        "Khajur",
        "Tukda",
        "Coriander Seeds",
      ],
      benefits: [
        "Improves Digestion",
        "Good for Oral health",
        "Good for heart & Bone health",
        "Promotes Skin health",
      ],
    },
    panCherryMix: {
      name: "Pan Cherry Mix",
      image: "/images/products/pan-cherry-mix.jpg",
      tagline: "A nutritious and crunchy mix of pan cherry.",
      ingredients: [
        "Betel Sticks",
        "Navrang",
        "Supari",
        "Menthol",
        "Banaras",
        "Leaves",
        "Tutti Frutti",
        "Calcutta",
        "Leaves",
        "Fennel Seeds",
        "Gulkand",
        "Katha Powder",
        "Khajur",
        "Tukda",
        "Coriander",
        "Seeds",
        "Cherry",
      ],
      benefits: [
        "Improves Digestions",
        "Good for Oral health",
        "Good for heart & Bone health",
        "Promotes Skin health",
        "Cherry is Rich source of vitamin- C",
      ],
    },
    homeMadeNaturalMultivitaminProtienPowder: {
      name: "Home Made Natural Multivitamin Protien Powder",
      image:
        "/images/products/home-made-natural-multivitamin-protien-powder.jpg",
      tagline:
        "A nutritious and crunchy mix of home made natural multivitamin protien powder.",
      ingredients: [
        "Almonds",
        "Makhana",
        "Pistachio",
        "Cashew nuts",
        "Chickpea dal",
        "Pumpkin seeds",
        "Melon seeds",
        "Sunflower seeds",
      ],
      benefits: [
        "Full of natural proteins, vitamins minerals & antioxidants",
        "Specially beneficial for children, pregnant women, elders, housewives, gym workers",
        "Also works as an energy booster & immunity booster",
        "Helps to maintain weight",
        "Helps to develop muscles mass",
      ],
    },
  },
  help: {
    visible: true,
    sections: [
      {
        title: "Getting Started",
        items: [
          {
            question: "How do I browse mukhwas categories?",
            displayInLanding: true,
            answer:
              "Browse our extensive collection by selecting any category from the main menu. Each category showcases different types of mukhwas and traditional recipes.",
          },
          {
            question: "Do you offer wholesale pricing?",
            displayInLanding: true,
            answer:
              "Yes! We offer competitive wholesale rates for bulk orders. Contact us at +91 81288 26764 for wholesale pricing.",
          },
          {
            question: "What is the quality of your mukhwas?",
            displayInLanding: true,
            answer:
              "We prepare all mukhwas in hygienic conditions using premium quality ingredients. All products are carefully prepared and packaged before dispatch.",
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
              "Contact us directly via WhatsApp at +91 81288 26764 or email sales@aavkarmukhwas.com with your requirements.",
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
            question: "Can I get custom flavors in mukhwas?",
            displayInLanding: false,
            answer:
              "Absolutely! Our mukhwas can be customized to your preferred flavors and ingredients. Minimum order quantities may apply.",
          },
          {
            question: "Do you have new arrivals regularly?",
            displayInLanding: true,
            answer:
              "Yes, we regularly update our mukhwas collection with latest traditional recipes and new flavors. Follow us for new arrival updates.",
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
            description: "Save your favorite mukhwas varieties",
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
              "Set your favorite mukhwas categories for personalized recommendations",
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
    emailSave: "aavkar_mukhwas_email_save",
    nameSave: "aavkar_mukhwas_name_save",
    cartSave: "aavkar_mukhwas_cart_save",
  },
  testimonials: {
    visible: true,
    data: [
      {
        name: "Priyaben Trivedi",
        body: "We've been stocking mouth fresheners for our family shop in Rajkot since 2021. The beetroot amla variety is popular with health-conscious customers. Good margins and consistent supply.",
        img: "https://avatar.vercel.sh/priyaben",
        location: "Rajkot",
      },
      {
        name: "Kiransinh Patel",
        body: "As a distributor in Maninagar, I source directly from Surat suppliers. Their multi seeds mukhwas moves fast in our area. Professional dealing and they understand small business needs.",
        img: "https://avatar.vercel.sh/kiransinh",
        location: "Ahmedabad",
      },
      {
        name: "Meera Singh",
        body: "Ordered samples first, then placed bulk order. The traditional jaiphal variety has good shelf life and customers like the authentic taste. Packaging protects well during transport.",
        img: "https://avatar.vercel.sh/meera",
        location: "Delhi",
      },
      {
        name: "Bhavesh Shah",
        body: "Running grocery store in Vastrapur since 10 years. Started stocking these products last year - the roasted varieties are gaining popularity. Reasonable wholesale rates from Surat.",
        img: "https://avatar.vercel.sh/bhavesh",
        location: "Ahmedabad",
      },
      {
        name: "Dhavalbhai Modi",
        body: "Supply chain from Surat to Bopal is efficient. The makhana mix variety suits our customer base. They provide proper invoicing and GST documentation for our records.",
        img: "https://avatar.vercel.sh/dhavalbhai",
        location: "Ahmedabad",
      },
      {
        name: "Hitesh Desai",
        body: "Being in same city, we get fresh stock regularly from local manufacturers. The roasted varieties with natural ingredients appeal to health-aware customers in our area.",
        img: "https://avatar.vercel.sh/hitesh",
        location: "Surat",
      },
      {
        name: "Jayaben Gohil",
        body: "Small pan shop in Satellite area. Basic fennel mukhwas has consistent taste and quality. Customers return for the same product regularly, which means good repeat business for us.",
        img: "https://avatar.vercel.sh/jayaben",
        location: "Ahmedabad",
      },
      {
        name: "Manishbhai Joshi",
        body: "Trading in Navsari for many years. Tried sesame-based varieties - they move well in our local market. Rates are competitive compared to other Gujarat suppliers.",
        img: "https://avatar.vercel.sh/manishbhai",
        location: "Navsari",
      },
      {
        name: "Nilesh Thakkar",
        body: "Shop in Katargam area. Get fresh supplies and quick delivery from nearby production units. The coconut flakes variety works well for customers wanting something different.",
        img: "https://avatar.vercel.sh/nilesh",
        location: "Surat",
      },
      {
        name: "Ashaben Pandya",
        body: "Small retail outlet on CG Road. Mix varieties work well for gifting customers during festivals. Quality packaging makes products suitable for occasions. Decent profit margins.",
        img: "https://avatar.vercel.sh/ashaben",
        location: "Ahmedabad",
      },
      {
        name: "Pankajbhai Raval",
        body: "Been in Paldi market for years. During winter months, jaggery-based varieties sell better to local customers. Surat production means fresher stock compared to distant suppliers.",
        img: "https://avatar.vercel.sh/pankajbhai",
        location: "Ahmedabad",
      },
      {
        name: "Dipika Shah",
        body: "Our Pal area shop serves office crowd. Cardamom variety is popular for after-lunch refreshment. Suppliers provide proper trade terms and payment flexibility for small retailers.",
        img: "https://avatar.vercel.sh/dipika",
        location: "Surat",
      },
    ],
  },
  reviews: {
    visible: false,
    data: [
      {
        name: "Food Boutique Owner",
        username: "@foodista_mumbai",
        body: "Best mukhwas supplier in Surat! Their Beet Root Amla Mukhwas with Vitamin-C is a customer favorite. Quality is consistent and pricing is competitive.",
        img: "https://avatar.vercel.sh/foodista",
      },
      {
        name: "Traditional Food Store",
        username: "@traditional_delhi",
        body: "Aavkar Mukhwas never disappoints. Their Multi Seeds collection with immunity boosting properties is exceptional! Our customers love their collection!",
        img: "https://avatar.vercel.sh/traditionalstore",
      },
      {
        name: "Restaurant Owner",
        username: "@restaurant_ahmd",
        body: "Premium quality mukhwas at wholesale rates. Their Jaipuri Mukhwas with natural fibers is perfect for our restaurant needs.",
        img: "https://avatar.vercel.sh/restaurant",
      },
      {
        name: "Food Trader",
        username: "@food_trader",
        body: "Reliable supplier with excellent customer service. Their Roasted Alsi Mukhwas with heart health benefits is highly recommended!",
        img: "https://avatar.vercel.sh/trader",
      },
      {
        name: "Wedding Caterer",
        username: "@wedding_caterer",
        body: "Their traditional mukhwas are perfect for wedding functions. The Makhana Nuts Oats Mix with kidney health benefits is excellent quality!",
        img: "https://avatar.vercel.sh/caterer",
      },
      {
        name: "Online Food Retailer",
        username: "@online_food",
        body: "Great partner for online business. Their Roasted Green Wheat Mukhwas with natural fibers is a bestseller. Fast processing and quality products always.",
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
          "Browse through various mukhwas categories including traditional, sweet supari, mouth fresheners, and specialty collections with detailed ingredient and benefit information.",
        icon: "Grid3x3",
        tag: "VARIETY",
        size: "lg",
      },
      {
        title: "Premium Quality Assurance",
        description:
          "Every mukhwas product undergoes strict quality control to ensure you receive only the finest homemade and hygienic products from Surat with authentic ingredients.",
        icon: "Award",
        tag: "QUALITY",
        size: "lg",
      },
      {
        title: "Wholesale & Retail Options",
        description:
          "Flexible pricing for both individual customers and bulk wholesale orders with competitive rates. Perfect for retailers and bulk buyers.",
        icon: "ShoppingCart",
        tag: "PRICING",
        size: "lg",
      },
      {
        title: "Health Benefits Focused",
        description:
          "Our mukhwas are crafted with ingredients rich in Omega 3, Vitamin-C, natural fibers, and minerals for overall health and wellness.",
        icon: "Heart",
        tag: "HEALTH",
        size: "sm",
      },
      {
        title: "Expert Traditional Guidance",
        description:
          "Benefit from decades of traditional mukhwas expertise with personalized recommendations for your specific health and taste requirements.",
        icon: "Users",
        tag: "EXPERTISE",
        size: "sm",
      },
      {
        title: "Fast Nationwide Shipping",
        description:
          "Quick and secure delivery across India from our Surat facility with proper packaging and handling to maintain product freshness.",
        icon: "Truck",
        tag: "DELIVERY",
        size: "sm",
      },
      {
        title: "Regular New Arrivals",
        description:
          "Stay updated with latest traditional recipes and flavors as we regularly refresh our mukhwas collection with new varieties and health-focused ingredients.",
        icon: "Sparkles",
        tag: "TRENDS",
        size: "sm",
      },
    ],
  },
  contact: {
    whatsapp: "+918128826764",
    phone: "+918128826764",
    email: "sales@aavkarmukhwas.com",
    address:
      "Plot No 26, Swastik Raw House, Near Shivdhara Circle, D Mart Road, Mota Varachha, Surat 394101 Gujarat",
    contactPerson: "Sangeeta D. Vaghani, Pinal C Miyani, Hina A. Kakadiya",
    businessHours: "Monday to Saturday: 9:00 AM - 7:00 PM",
    additionalPhones: ["+91 96873 73515", "+91 70161 00540"],
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
