"use client";

import { useEffect, useState } from "react";

type HeroMetricValueProps = {
  start: number;
  end: number;
  prefix?: string;
  suffix?: string;
  endSuffix?: string;
  duration?: number;
  loopDelay?: number;
  className?: string;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function HeroMetricValue({
  start,
  end,
  prefix = "",
  suffix = "",
  endSuffix,
  duration = 1200,
  loopDelay = 4200,
  className = "inline-block min-w-[6rem] tabular-nums"
}: HeroMetricValueProps) {
  const [value, setValue] = useState(start);
  const [currentSuffix, setCurrentSuffix] = useState(suffix);

  useEffect(() => {
    let frame = 0;
    let timeout = 0;

    function animate() {
      const startedAt = performance.now();
      setValue(start);
      setCurrentSuffix(suffix);

      function tick(now: number) {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = easeOutCubic(progress);
        const nextValue = start + (end - start) * eased;
        setValue(Math.round(nextValue));
        setCurrentSuffix(endSuffix && progress > 0.72 ? endSuffix : suffix);

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          timeout = window.setTimeout(animate, loopDelay);
        }
      }

      frame = window.requestAnimationFrame(tick);
    }

    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [duration, end, endSuffix, loopDelay, start, suffix]);

  return (
    <span className={className}>
      {prefix}
      {value}
      {currentSuffix}
    </span>
  );
}
