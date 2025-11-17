// Performance optimization utilities

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Defer non-critical CSS
export const deferCSS = () => {
  const loadDeferredStyles = () => {
    const addStylesNode = document.getElementById('deferred-styles');
    if (addStylesNode) {
      const replacement = document.createElement('div');
      replacement.innerHTML = addStylesNode.textContent;
      document.body.appendChild(replacement);
      addStylesNode.parentElement.removeChild(addStylesNode);
    }
  };
  
  const raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) raf(() => { window.setTimeout(loadDeferredStyles, 0); });
  else window.addEventListener('load', loadDeferredStyles);
};

// Preload critical assets
export const preloadCriticalAssets = () => {
  const criticalImages = [
    '/assets/ppte-logo-new.jpg',
    '/assets/hero-video.mp4'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = src.endsWith('.mp4') ? 'video' : 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Reduce CLS by setting image dimensions
export const setImageDimensions = () => {
  document.querySelectorAll('img:not([width]):not([height])').forEach(img => {
    if (img.naturalWidth && img.naturalHeight) {
      const aspectRatio = img.naturalHeight / img.naturalWidth;
      img.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
    }
  });
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  // Defer execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      lazyLoadImages();
      setImageDimensions();
    });
  } else {
    lazyLoadImages();
    setImageDimensions();
  }
};
