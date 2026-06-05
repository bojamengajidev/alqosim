"use client";

import { useEffect, useState } from "react";
import quotesData from "@/lib/quotedata";

export function QuotesRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotesData.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const quote = quotesData[index];

  return (
    <section
      className="
        bg-amber-50 dark:bg-slate-950
        border-l-4 border-lime-400
        rounded-xl
        px-6 py-5
        max-w-3xl
        motion-safe:animate-in
        motion-safe:fade-in
        motion-safe:slide-in-from-bottom-2
        duration-500
      "
    >
      <p className="text-sm italic text-slate-700 mb-4">
        {quote.source}
      </p>

      <p className="font-arabic text-lg leading-loose text-right mb-4 dark:text-slate-200">
        {quote.arabic}
      </p>

      <p className="italic text-slate-600 dark:text-slate-400 mb-2">
        {quote.translation}
      </p>

      <p className="text-sm font-medium dark:invert">
        ({quote.reference})
      </p>
    </section>
  );
}
