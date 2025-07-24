"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideDuration = 4000;

  const slides = [
    {
      id: 1,
      bgImage: "https://aavkarmukhwas.github.io/images/hero/herodesktop.png",
      smBgImage: "https://aavkarmukhwas.github.io/images/hero/heromobile.png",
      href: "/pan-varieties",
      alt: "Pan Varieties",
    },
    {
      id: 2,
      bgImage: "https://aavkarmukhwas.github.io/images/hero/herodesktop2.png",
      smBgImage: "https://aavkarmukhwas.github.io/images/hero/heromobile2.png",
      href: "/pan-varieties",
      alt: "Pan Varieties",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index !== currentSlide) {
        setCurrentSlide(index);
        setProgress(0);
      }
    },
    [currentSlide]
  );

  useEffect(() => {
    setProgress(0);

    const startTime = Date.now();
    let frameId: number | null = null;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
      setProgress(newProgress);

      if (elapsed < slideDuration) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    const slideTimer = setTimeout(() => {
      nextSlide();
    }, slideDuration);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      clearTimeout(slideTimer);
    };
  }, [currentSlide, nextSlide, slideDuration]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <Link
              key={slide.id}
              href={slide.href}
              className="w-full flex-shrink-0 cursor-pointer"
            >
              {/* Desktop Image */}
              <div className="hidden sm:block relative w-full aspect-[4/1] overflow-hidden">
                <Image
                  src={slide.bgImage}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="100vw"
                  quality={85}
                  className="object-cover object-center"
                />
              </div>

              {/* Mobile Image */}
              <div className="block sm:hidden relative w-full aspect-[0.7/1] overflow-hidden">
                <Image
                  src={slide.smBgImage}
                  alt={slide.alt}
                  fill
                  priority
                  sizes="100vw"
                  quality={85}
                  className="object-cover object-center"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Controls */}
        <Button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 hover:bg-transparent hover:text-white text-white transition-all duration-300 group"
          variant="ghost"
          size="icon"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>

        <Button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 hover:bg-transparent hover:text-white text-white transition-all duration-300 group"
          variant="ghost"
          size="icon"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              className="relative h-[2px] bg-white/40 transition-all"
              style={{ width: index === currentSlide ? "100px" : "40px" }}
            >
              <button
                onClick={() => goToSlide(index)}
                className="absolute inset-0 w-full h-full"
              />
              <div
                className="h-full bg-white"
                style={{
                  width: index === currentSlide ? `${progress}%` : "0%",
                  transition:
                    index === currentSlide ? "none" : "width 300ms ease",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
