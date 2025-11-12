"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsed, setElapsed] = useState(0); // ms elapsed on current slide
  const slideDuration = 4000;

  const slides = [
    {
      id: 1,
      bgImage: "https://aavkarmukhwas.github.io/images/hero/herodesktop2.png",
      smBgImage: "https://aavkarmukhwas.github.io/images/hero/heromobile2.png",
      href: "/categories",
      alt: "Categories",
    },
    {
      id: 2,
      bgImage: "https://aavkarmukhwas.github.io/images/hero/herodesktop.png",
      smBgImage: "https://aavkarmukhwas.github.io/images/hero/heromobile.png",
      href: "/categories",
      alt: "Categories",
    },
  ];
  const slidesCount = slides.length;

  // Touch state for swipe
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const frameRef = React.useRef<number | null>(null);
  const startTimeRef = React.useRef<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slidesCount;
      // If looping from last to first, disable animation
      if (prev === slidesCount - 1 && next === 0) {
        setIsAnimated(false);
      }
      return next;
    });
    setElapsed(0);
    setProgress(0);
  }, [slidesCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slidesCount) % slidesCount;
      // If looping from first to last, disable animation
      if (prev === 0 && next === slidesCount - 1) {
        setIsAnimated(false);
      }
      return next;
    });
    setElapsed(0);
    setProgress(0);
  }, [slidesCount]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index !== currentSlide) {
        // If jumping from last to first or first to last, disable animation
        if (
          (currentSlide === slidesCount - 1 && index === 0) ||
          (currentSlide === 0 && index === slidesCount - 1)
        ) {
          setIsAnimated(false);
        }
        setCurrentSlide(index);
        setElapsed(0);
        setProgress(0);
      }
    },
    [currentSlide, slidesCount]
  );

  // Re-enable animation after a non-animated jump
  useEffect(() => {
    if (!isAnimated) {
      // Re-enable after a tick so the jump is instant
      const timeout = setTimeout(() => setIsAnimated(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isAnimated]);

  // Smooth pause/resume logic
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (isPaused) return;
    startTimeRef.current = Date.now();
    let rafActive = true;
    const update = () => {
      if (!rafActive) return;
      const now = Date.now();
      const totalElapsed = elapsed + (now - startTimeRef.current);
      const newProgress = Math.min((totalElapsed / slideDuration) * 100, 100);
      setProgress(newProgress);
      if (totalElapsed < slideDuration) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setProgress(100);
        timerRef.current = setTimeout(() => {
          nextSlide();
        }, 100); // short delay to show full bar
      }
    };
    frameRef.current = requestAnimationFrame(update);
    return () => {
      rafActive = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [currentSlide, nextSlide, slideDuration, isPaused, elapsed]);

  // When pausing, record elapsed time
  useEffect(() => {
    if (isPaused) {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      setElapsed((prevElapsed) => {
        // Add time since last start
        return prevElapsed + (Date.now() - startTimeRef.current);
      });
    } else {
      // On resume, do not reset elapsed
    }
  }, [isPaused]);

  // Reset elapsed when slide changes
  useEffect(() => {
    setElapsed(0);
  }, [currentSlide]);

  // Touch handlers for swipe and pause
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true); // Pause on touch
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    setIsPaused(false); // Resume on touch end
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swiped left
          nextSlide();
        } else {
          // Swiped right
          prevSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Pause on hover (desktop)
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div
        className="relative w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div
          className={`flex ${
            isAnimated ? "transition-transform duration-500 ease-in-out" : ""
          }`}
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
