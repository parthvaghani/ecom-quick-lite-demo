import {
  Calendar,
  Globe,
  Paintbrush,
  PieChart,
  Users,
  Map,
  Search,
} from "lucide-react";
import { SubscriptionLookupKey, SubscriptionTier } from "@/types";

export const appConfig = {
  cookieName: "app_auth_token",
  sessionId: "session_id",
  title: "FinFlex",
  description:
    "A modern web application to create and explore your financial heritage. Build a comprehensive finflex with all your ancestors and descendants.",
  company: {
    name: "Your Company",
    email: "support@example.com",
    website: "https://example.com",
    address: "123 Main St",
    location: "San Francisco, CA",
    updatedAt: {
      privacy: "January 1, 2024",
      terms: "January 1, 2024",
    },
  },
  meta: {
    keywords:
      "finflex, heritage, genealogy, ancestry, family history, react, nextjs",
    author: "Your Name",
    themeColor: "#3B82F6", // blue-500
  },
  feature: {
    title: "Core Feature",
    description:
      "Create a rich and detailed finflex with all your ancestors and descendants, visualized in an easy-to-use tree-line view.",
    benefits: [
      "Visualize your family heritage",
      "Easily add fathers, mothers, sons, and daughters",
      "Track and manage multiple generations",
      "Interactive and collaborative tree-building",
    ],
  },
  help: {
    visible: true,
    sections: [
      {
        title: "Getting Started",
        items: [
          {
            question: "How do I create a finflex?",
            displayInLanding: true,
            answer:
              "Click on 'Create Tree' to start adding your family members, beginning with your parents and their ancestors.",
          },
          {
            question: "What are the system requirements?",
            displayInLanding: true,
            answer:
              "Our app works on any modern web browser with JavaScript enabled.",
          },
          {
            question: "Is my data secure?",
            displayInLanding: true,
            answer:
              "Yes, we use industry-standard encryption and security practices to protect your data.",
          },
        ],
      },
      {
        title: "Account Management",
        items: [
          {
            question: "How do I reset my password?",
            displayInLanding: false,
            answer:
              "Click the 'Forgot Password' link on the login page and follow the instructions sent to your email.",
          },
          {
            question: "Can I change my email address?",
            displayInLanding: false,
            answer:
              "Your email address is your unique identifier and cannot be changed. Please contact support if you need assistance.",
          },
        ],
      },
      {
        title: "Features & Usage",
        items: [
          {
            question: "What features are included in my plan?",
            displayInLanding: false,
            answer:
              "Visit the Pricing page to see a detailed comparison of features available in each plan.",
          },
          {
            question: "How do I upgrade my account?",
            displayInLanding: true,
            answer:
              "Go to Settings > Subscription to view and manage your plan options.",
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
            label: "Email Notifications",
            description: "Receive updates about your account and activity",
          },
          {
            key: "twoFactor",
            label: "Two-Factor Authentication",
            description: "Add an extra layer of security to your account",
          },
          {
            key: "sessions",
            label: "Active Sessions",
            description: "Manage your active login sessions",
          },
        ],
      },
      {
        title: "Privacy",
        description: "Control your privacy settings",
        items: [
          {
            key: "dataSharing",
            label: "Data Sharing",
            description: "Manage how your data is shared",
          },
          {
            key: "activityLog",
            label: "Activity Log",
            description: "View and manage your account activity",
          },
        ],
      },
      {
        title: "Preferences",
        description: "Customize your experience",
        items: [
          {
            key: "language",
            label: "Language",
            description: "Choose your preferred language",
          },
          {
            key: "theme",
            label: "Theme",
            description: "Choose between light and dark mode",
          },
        ],
      },
    ],
  },
  pricing: {
    visible: false,
    currency: "USD",
    intervals: ["month", "year"],
    plans: [
      {
        id: "free",
        name: "Free",
        tier: SubscriptionTier.STARTER,
        lookup_key: {
          month: SubscriptionLookupKey.FREE,
          year: SubscriptionLookupKey.FREE,
        },
        monthlyRequestLimit: 1000,
        description: "Best for individuals starting their finflex",
        price: { month: 0, year: 0 },
        plan_id: {
          month: "free_month",
          year: "free_year",
        },
        features: {
          month: [
            "Basic features",
            "Up to 1,000 requests/month",
            "Community support",
            "Basic finflex visualization",
          ],
          year: [
            "Basic features",
            "Up to 1,000 requests/month",
            "Community support",
            "Basic finflex visualization",
          ],
        },
        cta: "Get Started",
        highlighted: false,
      },
      {
        id: "pro",
        name: "Pro",
        tier: SubscriptionTier.PRO,
        monthlyRequestLimit: 50000,
        description: "Best for advanced finflex building",
        price: { month: 29, year: 290 },
        plan_id: {
          month: "price_1Qoelx2cn6HRYyjGOlDp6ATW",
          year: "price_1Qoens2cn6HRYyjGnuQclrf4",
        },
        lookup_key: {
          month: SubscriptionLookupKey.PRO_MONTH,
          year: SubscriptionLookupKey.PRO_YEAR,
        },
        features: {
          month: [
            "All Free features",
            "Up to 50,000 requests/month",
            "Priority support",
            "Advanced finflex visualizations",
            "Collaborative family building",
          ],
          year: [
            "All Free features",
            "Up to 50,000 requests/month",
            "Priority support",
            "Advanced finflex visualizations",
            "Collaborative family building",
          ],
        },
        cta: "Upgrade",
        highlighted: true,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tier: SubscriptionTier.ENTERPRISE,
        monthlyRequestLimit: 50000,
        description: "Best for agencies and large families",
        price: { month: 99, year: 990 },
        plan_id: {
          month: "enterprise_month",
          year: "enterprise_year",
        },
        lookup_key: {
          month: SubscriptionLookupKey.ENTERPRISE_MONTH,
          year: SubscriptionLookupKey.ENTERPRISE_YEAR,
        },
        features: {
          month: [
            "All Pro features",
            "Unlimited finflex nodes",
            "24/7 dedicated support",
            "Custom heritage solutions",
            "On-premise deployment",
          ],
          year: [
            "All Pro features",
            "Unlimited finflex nodes",
            "24/7 dedicated support",
            "Custom heritage solutions",
            "On-premise deployment",
          ],
        },
        cta: "Contact Sales",
        highlighted: false,
      },
    ],
  },
  storage: {
    emailSave: "app_email_save",
    nameSave: "app_name_save",
    passwordPassed: "app_password_passed",
  },
  testimonials: {
    visible: true,
    data: [
      {
        name: "Jack Smith",
        body: "Creating my finflex was an amazing experience. The app helped me map out my entire heritage from my father all the way back to my ancestors. Highly recommend!",
        img: "https://avatar.vercel.sh/jack",
      },
      {
        name: "Jill Smith",
        body: "I love how easy it is to build a finflex. I can visualize all my relatives in one place, and it's great for keeping track of our family history.",
        img: "https://avatar.vercel.sh/jill",
      },
      {
        name: "Emily Johnson",
        body: "This app made it so much easier to connect with distant relatives I never knew existed. It's incredibly helpful for anyone interested in genealogy.",
        img: "https://avatar.vercel.sh/emily",
      },
      {
        name: "Michael Lee",
        body: "The visual layout of the finflex is fantastic! It's really easy to use and helped me organize years of family history. A must-try for anyone into ancestry.",
        img: "https://avatar.vercel.sh/michael",
      },
      {
        name: "Sarah Brown",
        body: "I had so much fun tracing my roots using this app. It's intuitive and user-friendly. I found new relatives and learned a lot about my family's past.",
        img: "https://avatar.vercel.sh/sarah",
      },
      {
        name: "David Wilson",
        body: "Being able to explore my finflex has been a rewarding journey. This app made it super simple to chart and understand my ancestry in a few clicks.",
        img: "https://avatar.vercel.sh/david",
      },
      {
        name: "Lily Anderson",
        body: "This is by far the best finflex builder I've used. It’s sleek, organized, and so easy to add new information as I discover more about my ancestors.",
        img: "https://avatar.vercel.sh/lily",
      },
      {
        name: "Tom Harris",
        body: "The app allowed me to dig deep into my family's past, and I was amazed by how much history I uncovered. Definitely worth using for any family historian.",
        img: "https://avatar.vercel.sh/tom",
      },
    ],
  },
  reviews: {
    visible: true,
    data: [
      {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
      },
      {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
      },
      {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
      },
      {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
      },
      {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
      },
      {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
      },
    ],
  },
  features: {
    visible: true,
    data: [
      {
        title: "Interactive Tree View",
        description:
          "Build and visualize your family heritage in an easy-to-navigate tree-line view.",
        icon: Calendar,
        tag: "GENEALOGY",
        size: "lg",
      },
      {
        title: "Multi-Generation Support",
        description:
          "Add and manage multiple generations of your family, including parents, grandparents, and children.",
        icon: PieChart,
        tag: "FAMILY TREE",
        size: "lg",
      },
      {
        title: "Collaborative Building",
        description:
          "Invite family members to help build and expand your tree with ease.",
        icon: Paintbrush,
        tag: "COLLABORATION",
        size: "lg",
      },
      {
        title: "Heritage Insights",
        description:
          "Learn more about your family’s history with rich data and heritage insights.",
        icon: Users,
        tag: "HISTORY",
        size: "sm",
      },
      {
        title: "Customizable Trees",
        description:
          "Personalize the tree layout and details to fit your family's unique story.",
        icon: Globe,
        tag: "PERSONALIZATION",
        size: "sm",
      },
      {
        title: "Export & Share",
        description:
          "Export your finflex to share with relatives or keep a digital archive.",
        icon: Map,
        tag: "SHARING",
        size: "sm",
      },
      {
        title: "Ancestral Records Search",
        description:
          "Search historical records to uncover even more details about your ancestors and family history.",
        icon: Search,
        tag: "DISCOVERY",
        size: "sm",
      },
    ],
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
