"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import categoriesJson from "@/utils/categories.json";
import Image from "next/image";
import { X, Search, Sparkles, ArrowRight } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";

// Types from products/page.tsx
export type VariantGroup = {
  [key: string]: {
    price: number;
  };
};
export type Variants = {
  gm?: VariantGroup;
  kg?: VariantGroup;
};
export type SubCategory = {
  name: string;
  description: string;
  category: string;
  images?: string[];
  heroImage?: string;
  image?: string;
  isPopular?: boolean;
  isPremium?: boolean;
  variants?: Variants;
};
export type Category = {
  category: string;
  name: string;
  description: string;
  heroImage: string;
  subCategories: SubCategory[];
};
export type ProductSearchItem = {
  name: string;
  category: string;
  subcategory: string;
  image: string;
  variants?: Variants;
};

interface WhatsAppInterestDialogProps {
  open: boolean;
  onClose: () => void;
}

export function WhatsAppInterestDialog({
  open,
  onClose,
}: WhatsAppInterestDialogProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductSearchItem | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      setTimeout(() => inputRef.current?.focus(), 150);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  // Flatten all products from categories.json
  const allProducts: ProductSearchItem[] = useMemo(() => {
    return (categoriesJson.categories as Category[]).flatMap((cat) =>
      (cat.subCategories || []).map((sub) => ({
        name: sub.name,
        category: cat.category,
        subcategory: sub.category,
        image: sub.images?.[0] || "",
        variants: sub.variants || undefined,
      }))
    );
  }, []);

  // Filter products by query
  const filtered: ProductSearchItem[] = useMemo(() => {
    if (!query.trim()) return [];
    if (!allProducts) return [];
    return allProducts
      .filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()))
      .slice(0, 8);
  }, [query, allProducts]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, -1));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        handleSelect(filtered[selectedIndex]);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filtered, open]);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  const handleSelect = (product: ProductSearchItem) => {
    setSelectedProduct(product);
    setQuery("");
  };

  // Prepare variant options
  const variantOptions = useMemo(() => {
    if (!selectedProduct || !selectedProduct.variants) return [];
    const variants = selectedProduct.variants;
    const options: { label: string; value: string; price: number }[] = [];
    (Object.keys(variants) as (keyof Variants)[]).forEach((group) => {
      const groupObj = variants[group];
      if (groupObj) {
        Object.keys(groupObj).forEach((value) => {
          options.push({
            label: `${group}: ${value} (${groupObj[value].price}₹)`,
            value: `${group}:${value}`,
            price: groupObj[value].price,
          });
        });
      }
    });
    return options;
  }, [selectedProduct]);

  // WhatsApp message logic
  const phoneNumber = "+918128826764";
  const message = useMemo(() => {
    if (selectedProduct) {
      let msg = `Hi, I'm interested in the product: ${selectedProduct.name}`;
      if (selectedVariant && variantOptions.length > 0) {
        const variant = variantOptions.find((v) => v.value === selectedVariant);
        if (variant) {
          msg += `\nVariant: ${variant.label}`;
        }
      }
      msg += `\nCan you provide more details?`;
      return msg;
    }
    return "Hi, I'm interested in your mukhwas collection.";
  }, [selectedProduct, selectedVariant, variantOptions]);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-lg transition-all duration-500"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl max-w-screen-md mx-auto px-4 animate-modal-enter overflow-x-hidden">
        <div className="relative bg-white dark:bg-gray-900/95 rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/30 backdrop-blur-2xl overflow-hidden overflow-x-hidden">
          <div className="relative p-4 pb-6">
            <button
              className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 border-2 border-gray-200/50 dark:border-gray-700/50 shadow-xl p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 focus:outline-none transition-all duration-200 z-10 group"
              onClick={onClose}
              aria-label="Close WhatsApp dialog"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-400/20 to-green-200/10">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Product Inquiry
                </h2>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  (Optional: Select product & variant)
                </div>
              </div>
            </div>
            {!selectedProduct ? (
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 z-10">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200/50 dark:border-gray-700/50 focus:border-green-600 focus:ring-4 focus:ring-green-400/20 bg-gray-50/50 dark:bg-gray-800/50 text-base shadow-inner placeholder:text-gray-400 transition-all duration-200 backdrop-blur-sm"
                  placeholder="Search for any product..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none" />
              </div>
            ) : null}
          </div>
          {/* Results or selected product */}
          <div className="px-4 pb-8">
            {!selectedProduct ? (
              <>
                {Array.isArray(filtered) && filtered.length > 0 ? (
                  <div className="space-y-2 max-h-96 overflow-y-auto  overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    {filtered.map((product, idx) => (
                      <div
                        key={`${product.category}-${product.subcategory}`}
                        className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer animate-slide-up ${
                          selectedIndex === idx
                            ? "bg-green-100/40 border-green-400/30 shadow-lg shadow-green-200/10 scale-[1.02]"
                            : "bg-white/60 dark:bg-gray-800/60 border-gray-200/30 dark:border-gray-700/30 hover:bg-green-100/20 hover:border-green-400/20 hover:shadow-md"
                        }`}
                        style={{ animationDelay: `${idx * 50}ms` }}
                        onClick={() => handleSelect(product)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                      >
                        <div className="relative">
                          {product.image ? (
                            <div className="relative overflow-hidden rounded-xl">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={56}
                                height={56}
                                className="w-14 h-14 object-cover transition-transform duration-200 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-xl" />
                            </div>
                          ) : (
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center border border-gray-200/50 dark:border-gray-600/50">
                              <Search className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 dark:text-white truncate text-lg group-hover:text-green-600 transition-colors">
                            {product.name}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <span className="truncate">{product.category}</span>
                            <ArrowRight className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">
                              {product.subcategory}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`transition-all duration-200 ${
                            selectedIndex === idx
                              ? "translate-x-0 opacity-100"
                              : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        >
                          <ArrowRight className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center py-12 text-gray-400 animate-fade-in">
                      <div className="p-4 rounded-full bg-gradient-to-br from-green-400/10 to-green-200/5 mb-4">
                        <Sparkles className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-lg font-medium mb-1">
                        Start typing to search
                      </div>
                      <div className="text-sm">
                        Optionally select a product to specify your interest
                      </div>
                    </div>
                    {/* Default WhatsApp CTA for no search/default state or no results */}
                    <div className="flex flex-col items-center mt-8">
                      <button
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-200"
                        onClick={() =>
                          window.open(
                            `https://wa.me/+918128826764?text=${encodeURIComponent(
                              "Hi, I'm interested in your mukhwas collection."
                            )}`,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        Chat on WhatsApp
                      </button>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="flex flex-col gap-4 items-center justify-center py-6 animate-fade-in">
                <div className="flex items-center gap-4">
                  {selectedProduct.image && (
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-cover rounded-xl"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-lg">
                      {selectedProduct.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedProduct.category} / {selectedProduct.subcategory}
                    </div>
                  </div>
                </div>
                {variantOptions.length > 0 && (
                  <div className="w-full mt-2">
                    <Select
                      value={selectedVariant}
                      onValueChange={setSelectedVariant}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select variant (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {variantOptions.map((v) => (
                          <SelectItem key={v.value} value={v.value}>
                            {v.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <button
                  className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-200"
                  onClick={() =>
                    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
                  }
                >
                  Chat on WhatsApp (Product Inquiry)
                </button>
                <button
                  className="mt-2 text-xs text-gray-400 underline hover:text-gray-600"
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedVariant("");
                  }}
                >
                  Change product
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
