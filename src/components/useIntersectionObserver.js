import { useEffect } from 'react';

function useIntersectionObserver(ref, callback) {
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, callback]);
}

export default useIntersectionObserver;
