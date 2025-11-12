"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppInterestDialog } from "./WhatsAppInterestDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import categoriesJson from "@/utils/categories.json";
import type { Category } from "@/components/WhatsAppInterestDialog";
import Image from "next/image";

export function ReviewSection() {
  const [isSuggestionDialog, setIsSuggestionDialog] = useState(false);
  const [isReviewDialog, setIsReviewDialog] = useState(false);
  const [reviewCategory, setReviewCategory] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [suggestionText, setSuggestionText] = useState("");

  const allProducts: { name: string; category: string; subcategory: string; image: string }[] = useMemo(() => {
    return (categoriesJson.categories as Category[]).flatMap((cat) =>
      (cat.subCategories || []).map((sub) => ({
        name: sub.name,
        category: cat.category,
        subcategory: sub.category,
        image: sub.images?.[0] || "",
      }))
    );
  }, []);

  const handleSendSuggestion = () => {
    const whatsappNumber = "+916353528830";
    const message = `Hello,\nMy Suggestion:\n${suggestionText}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsSuggestionDialog(false);
    setSuggestionText("");
  };

  const handleReviewSubmit = () => {
    const whatsappNumber = "+916353528830";
    const productTitle = reviewCategory ? reviewCategory : "(Not specified)";
    const message = `Product Review\nProduct Title: ${productTitle}\nReview: ${reviewText}\nStars: ${rating}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsReviewDialog(false);
    setReviewCategory("");
    setReviewText("");
    setRating(0);   
  };

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-2 py-2 bg-green-200 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4  rounded-md p-12 ">
        
        {/* Left Section */}
        <div className="text-center md:text-left flex-1 ">
          <h3 className="text-lg font-semibold text-green-900 ">Share Your Thoughts</h3>
          <p className="text-sm text-green-900">
            Help us improve by sharing your suggestions or writing a review
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto justify-center md:justify-end">
          {/* Suggestion Dialog */}
          <Dialog open={isSuggestionDialog} onOpenChange={setIsSuggestionDialog}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                Suggest new flavor
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md w-[90%]">
              <DialogHeader>
                <DialogTitle>Suggest new products</DialogTitle>
                <DialogDescription>
                  Suggest a new product or flavor you&apos;d like to see!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label htmlFor="suggestion">Your Suggestion</Label>
                <Textarea
                  id="suggestion"
                  placeholder="Type your suggestion here."
                  value={suggestionText}
                  onChange={(e) => setSuggestionText(e.target.value)}
                />
                <Button
                  onClick={handleSendSuggestion}
                  disabled={!suggestionText.trim()}
                  className={`text-white ${
                    !suggestionText.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  <FaWhatsapp className="mr-2" /> Send to WhatsApp
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Review Dialog */}
          <Dialog open={isReviewDialog} onOpenChange={setIsReviewDialog}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                Review our product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md w-[90%]">
              <DialogHeader>
                <DialogTitle>Leave a Review</DialogTitle>
                <DialogDescription>Share your experience with us.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label htmlFor="category">Select Product</Label>
                <Select value={reviewCategory} onValueChange={setReviewCategory}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent className="max-h-56 sm:max-h-72 w-full sm:w-auto">
                    {allProducts.map((product) => (
                      <SelectItem key={product.name} value={product.name}>
                        <div className="flex items-center gap-2 w-full">
                          {product.image && (
                            <Image
                              src={product.image}
                              alt={product.name}
                              width={24}
                              height={24}
                              className="w-6 h-6 object-cover rounded-full"
                            />
                          )}
                          <span className="truncate max-w-[120px] sm:max-w-xs">{product.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Label htmlFor="review-text">Your Review</Label>
                <Textarea
                  id="review-text"
                  placeholder="Type your review here."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />

                <Label htmlFor="rating">Rating</Label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      variant="ghost"
                      size="icon"
                    
                      onClick={() => setRating(star)}
                      className={star <= rating ? "text-yellow-600" : "text-gray-300"}
                    >
                      ★
                    </Button>
                  ))}
                </div>
                <Button
                  onClick={handleReviewSubmit}
                  disabled={!reviewText.trim()}
                  className={`text-white ${
                    !reviewText.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  Send to WhatsApp
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <WhatsAppInterestDialog open={false} onClose={() => {}} />
    </div>
  );
}

