import { useEffect, useState } from "react";

export const useCounter = (end: number, duration = 1500, start = 0, trigger = false) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(progressRatio * (end - start) + start);

      setCount(current);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, start, trigger]);

  return count;
};