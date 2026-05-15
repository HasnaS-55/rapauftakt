"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/landingpage/hero/rapper1.jpg",
    title: ["RAP", "AUF TAKT"],
    subtitle: "Cluture – Music – Community",
  },
  {
    src: "/landingpage/hero/rapper2.jpg",
    title: ["RAP", "AUF TAKT"],
    subtitle: "Cluture – Music – Community",
  },
  {
    src: "/landingpage/hero/rapper3.jpg",
    title: ["RAP", "AUF TAKT"],
    subtitle: "Cluture – Music – Community",
  },
  {
    src: "/landingpage/hero/rapper4.jpg",
    title: ["RAP", "AUF TAKT"],
    subtitle: "Cluture – Music – Community",
  },
  {
    src: "/landingpage/hero/rapper5.jpg",
    title: ["RAP", "AUF TAKT"],
    subtitle: "Cluture – Music – Community",
  },
  {
    src: "/landingpage/hero/rapper6.jpg",
    title: ["RAP", "AUF TAKT"],
    subtitle: "Cluture – Music – Community",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("out");
      setAnimating(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setDirection("in");
        setTimeout(() => setAnimating(false), 200);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[420px] w-full overflow-hidden rounded-[20px] sm:h-[520px] md:h-[620px] lg:h-[700px] lg:rounded-[35px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            transform:
              i === current
                ? animating && direction === "out"
                  ? "translateX(-100%) scale(1.05)"
                  : "translateX(0) scale(1)"
                : "translateX(100%) scale(1.05)",
            opacity: i === current ? 1 : 0,
            transition:
              "transform 700ms cubic-bezier(0.76, 0, 0.24, 1), opacity 700ms ease",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.title.join(" ")}
            fill
            priority={i === 0}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 md:p-8 lg:p-10">
            <div className="mb-3 flex flex-col sm:mb-4">
              {slide.title.map((line, j) => (
                <div key={j} className="relative block w-fit">
                  <h1
                    className="block font-black uppercase leading-[0.9] text-orange"
                    style={{
                      fontSize: "clamp(2.8rem, 13vw, 9.375rem)",
                      fontFamily: "var(--font-nohemi)",
                    }}
                  >
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            <p
              className="max-w-[90%] text-sm font-semibold tracking-wide text-white sm:text-lg md:text-xl lg:text-[25px]"
              style={{ fontFamily: "var(--font-nohemi)" }}
            >
              {slide.subtitle}
            </p>
          </div>

          <div className="absolute bottom-5 right-5 z-10 sm:bottom-7 sm:right-7 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
            <button
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-orange hover:text-white sm:h-20 sm:w-20 sm:text-xs md:h-24 md:w-24 lg:h-30 lg:w-30"
              style={{ fontFamily: "var(--font-nohemi)" }}
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              SCROLL
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}