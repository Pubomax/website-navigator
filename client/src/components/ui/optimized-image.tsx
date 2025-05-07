import React from 'react';
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component that implements best practices for image optimization:
 * - WebP format support
 * - Responsive images with srcset
 * - Explicit width and height to prevent layout shifts
 * - Lazy loading for below-the-fold images
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  ...props
}: OptimizedImageProps) {
  // Determine if this is pointing to an optimized image or not
  const isOptimized = src.includes('/images/optimized/');
  
  // If the image is already in the optimized folder, use it directly
  // Otherwise, assume there's an equivalent WebP version in the optimized folder
  const baseSrc = isOptimized ? src : src.replace('/images/', '/images/optimized/');
  
  // Get the filename without extension
  const fileNameWithExt = baseSrc.split('/').pop() || '';
  const fileName = fileNameWithExt.split('.')[0];
  const optimizedFolder = baseSrc.substring(0, baseSrc.lastIndexOf('/') + 1);
  
  // Generate srcset for responsive images
  const srcSet = width 
    ? `${optimizedFolder}${fileName}-small.webp ${Math.round(width / 3)}w,
       ${optimizedFolder}${fileName}-medium.webp ${Math.round(width / 1.5)}w,
       ${optimizedFolder}${fileName}-large.webp ${width}w`
    : undefined;

  return (
    <img
      src={`${optimizedFolder}${fileName}${isOptimized ? '' : '.webp'}`}
      alt={alt}
      width={width}
      height={height}
      className={cn("", className)}
      loading={priority ? "eager" : "lazy"}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      {...props}
    />
  );
}