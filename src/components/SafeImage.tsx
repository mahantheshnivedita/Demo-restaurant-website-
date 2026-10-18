import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Restaurant dish photograph',
  fallbackTitle,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1c1f28] to-[#12141a] border border-[#d4af37]/20 p-4 text-center ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || 'Dish presentation'}
      >
        <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-2 border border-[#d4af37]/30">
          <Utensils className="w-5 h-5" />
        </div>
        <span className="text-xs font-serif tracking-wider text-[#d4af37] uppercase">The Royal Plate</span>
        {fallbackTitle && (
          <span className="text-xs text-[#a0a5b5] mt-1 line-clamp-1 max-w-[90%] font-medium">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#161820] animate-pulse flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/60 font-serif">Crafting...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
