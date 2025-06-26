"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ClassName } from "@/types";
import { cn } from "@/lib/utils";

type FadeImageProps = {
  images: string[];
  transitionDuration?: number;
  displayDuration?: number;
};

function FadeImage({
  images,
  className,
  transitionDuration = 3000,
  displayDuration = 3000,
}: FadeImageProps & ClassName) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length === 0) return;

    const startTransition = () => {
      setIsTransitioning(true);
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);

      setTimeout(() => {
        setIsTransitioning(false);
        setPrevIndex(-1);
      }, transitionDuration);
    };
    intervalRef.current = setInterval(
      startTransition,
      displayDuration + transitionDuration
    );

    // Initial setup: clear interval if component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images, currentIndex, displayDuration, transitionDuration]); // Re-run if images or durations change

  if (images.length === 0) {
    return null; // Or render a placeholder if no images are provided
  }

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      <div className="h-full relative">
        <Image
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className={cn(
            "absolute inset-0 object-cover transition-opacity ease-in-out",
            `duration-[${transitionDuration}ms]`,
            isTransitioning ? "opacity-100" : "opacity-100"
          )}
          priority={currentIndex === 0} // Prioritize loading the first image
        />

        {prevIndex !== -1 && isTransitioning && (
          <Image
            key={prevIndex}
            src={images[prevIndex]}
            alt={`Slide ${prevIndex + 1}`}
            fill
            className={cn(
              "absolute inset-0 object-cover transition-opacity ease-in-out",
              `duration-[${transitionDuration}ms]`, // Dynamically set duration
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
          />
        )}
      </div>
    </div>
  );
}

export { FadeImage };
