import { useState, useCallback, useLayoutEffect } from "react";

const useContainerDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    if (node !== null) {
      setNode(node);
    }
  }, []);

  useLayoutEffect(() => {
    if (!node) return;

    const measure = () => {
      window.requestAnimationFrame(() => {
        const { width, height } = node.getBoundingClientRect();
        
        setDimensions((prev) => {
          if (prev.width === width && prev.height === height) return prev;
          return { width, height };
        });
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);

    return () => observer.disconnect();
  }, [node]);
    
  return [ref, dimensions];
};

export default useContainerDimensions;