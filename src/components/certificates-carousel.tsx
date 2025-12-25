"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CertificateSlide {
  src: string;
  alt: string;
  title: string;
}

interface CertificatesCarouselProps {
  slides: CertificateSlide[];
}

export function CertificatesCarousel({ slides }: CertificatesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group rounded-xl overflow-hidden border border-border bg-background/50 max-w-4xl mx-auto">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                 {/* Link to full image */}
                 <a href={slide.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-zoom-in">
                    <Image 
                        src={slide.src} 
                        alt={slide.alt}
                        fill
                        className="object-contain transition-transform duration-500 hover:scale-105"
                    />
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12 flex justify-between items-end">
                    <p className="text-white text-sm md:text-base font-medium">
                        {slide.title}
                    </p>
                    <ExternalLink className="text-white/80 w-5 h-5" />
                    </div>
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 p-0"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 p-0"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === selectedIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
