/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

// Lightweight lazy-loading image with decoding and a tiny placeholder
export default function LazyImage({ src, alt = '', className = '', width, height, style = {}, ...props }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // If browser supports native lazy loading, set attributes and src
    if ('loading' in HTMLImageElement.prototype) {
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = src;
      return;
    }

    // Fallback to IntersectionObserver
    let observer;
    if (window.IntersectionObserver) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            img.src = src;
            img.decoding = 'async';
            observer.disconnect();
          }
        });
      });
      observer.observe(img);
    } else {
      // Last resort: load immediately
      img.src = src;
      img.decoding = 'async';
    }

    return () => observer && observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={''} // placeholder; actual src set by native lazy or IO
      data-src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
