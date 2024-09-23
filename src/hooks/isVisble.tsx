import { useEffect, useState } from "react";

const useIsVisible = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observe = new IntersectionObserver(
      ([event]) => {
        console.log(event.isIntersecting, event.intersectionRatio);
        setIsVisible(event.isIntersecting && (event.intersectionRatio) > 8)
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    if (ref.current) {
      observe.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observe.unobserve(ref.current);
      }
    };
  }, []);

  return isVisible;
};

export default useIsVisible;
