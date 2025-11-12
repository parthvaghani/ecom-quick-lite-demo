import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import categoriesJson from "@/utils/categories.json";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

interface ProductSearchItem {
  name: string;
  category: string;
  subcategory: string;
  image: string;
}

interface SubCategoryJson {
  name: string;
  category: string;
  images?: string[];
}

interface CategoryJson {
  category: string;
  subCategories?: SubCategoryJson[];
}

export function SearchIconButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="group relative p-2 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 shadow-lg hover:shadow-xl border border-primary/20"
        aria-label="Search"
        onClick={() => setOpen(true)}
      >
        <Search className="w-4 h-4 transition-transform group-hover:scale-105" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </button>
      {open && <GlobalSearchBarModal onClose={() => setOpen(false)} />}
    </>
  );
}

function GlobalSearchBarModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setTimeout(() => inputRef.current?.focus(), 150);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // Flatten all products from categories.json
  const allProducts: ProductSearchItem[] = useMemo(() => {
    return (categoriesJson.categories as CategoryJson[]).flatMap((cat) =>
      (cat.subCategories || []).map((sub) => ({
        name: sub.name,
        category: cat.category,
        subcategory: sub.category,
        image: sub.images?.[0] || "",
      }))
    );
  }, []);

  // Filter products by query
  const filtered: ProductSearchItem[] = useMemo(() => {
    if (!query.trim()) return [];
    return allProducts
      .filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()))
      .slice(0, 8); // Limit results for better UX
  }, [query, allProducts]);

  const handleSelect = useCallback((product: ProductSearchItem) => {
    onClose();
    setQuery("");
    router.push(`/${product.category}/${product.subcategory}`);
  }, [onClose, router]);

  // Handle keyboard navigation
  useEffect(() => {
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
  }, [selectedIndex, filtered, onClose, handleSelect]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
      {/* Enhanced backdrop with gradient */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-lg transition-all duration-500"
        onClick={onClose}
      /> */}

      {/* Main modal container */}
      <div className="relative w-full max-w-2xl mx-auto px-4 animate-modal-enter">
        <div className="relative bg-white dark:bg-gray-900/95 rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/30 backdrop-blur-2xl overflow-hidden">
          {/* Header section */}
          <div className="relative p-4 pb-6">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 border-2 border-gray-200/50 dark:border-gray-700/50 shadow-xl p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 focus:outline-none transition-all duration-200 z-10 group"
              onClick={onClose}
              aria-label="Close search"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            </button>

            {/* Search header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  Search Collection
                </h2>
              </div>
            </div>

            {/* Enhanced search input */}
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary z-10">
                <Search className="w-5 h-5" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200/50 dark:border-gray-700/50 focus:border-primary focus:ring-4 focus:ring-primary/20 bg-gray-50/50 dark:bg-gray-800/50 text-base shadow-inner placeholder:text-gray-400 transition-all duration-200 backdrop-blur-sm"
                placeholder="Search for any product..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none" />
            </div>
          </div>

          {/* Results section */}
          <div className="px-4 pb-8">
            {filtered.length > 0 ? (
              <div className="space-y-2 max-h-96 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {filtered.map((product, idx) => (
                  <div
                    key={`${product.category}-${product.subcategory}`}
                    className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer animate-slide-up ${
                      selectedIndex === idx
                        ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/10 scale-[1.02]"
                        : "bg-white/60 dark:bg-gray-800/60 border-gray-200/30 dark:border-gray-700/30 hover:bg-primary/5 hover:border-primary/20 hover:shadow-md"
                    }`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                    onClick={() => handleSelect(product)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    {/* Product image */}
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

                    {/* Product info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 dark:text-white truncate text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <span className="truncate">{product.category}</span>
                        <ArrowRight className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{product.subcategory}</span>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div
                      className={`transition-all duration-200 ${
                        selectedIndex === idx
                          ? "translate-x-0 opacity-100"
                          : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    >
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400 animate-fade-in">
                <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <div className="text-lg font-medium mb-1">
                  No products found
                </div>
                <div className="text-sm">Try adjusting your search terms</div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400 animate-fade-in">
                <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div className="text-lg font-medium mb-1">
                  Start typing to search
                </div>
                <div className="text-sm">
                  Discover amazing mukhwas collection
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-modal-enter {
          animation: modal-enter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }

        .scrollbar-thin {
          scrollbar-width: thin;
        }

        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background-color: rgb(209 213 219);
          border-radius: 9999px;
        }

        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>
    </div>
  );
}
