"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

const logos = [
  { name: "GIZEH", src: "/landingpage/logoCarousel/GIZEH.svg" },
  { name: "Jägermeister", src: "/landingpage/logoCarousel/Jagermeifter.svg" },
  { name: "Marshall", src: "/landingpage/logoCarousel/Marshall.svg" },
  { name: "Prinz", src: "/landingpage/logoCarousel/Prinz.svg" },
  { name: "Purize", src: "/landingpage/logoCarousel/Purize.svg" },
  { name: "T", src: "/landingpage/logoCarousel/T.svg" },
  { name: "RedBull", src: "/landingpage/logoCarousel/RedBull.svg" },
  { name: "SOUNDCLOUD", src: "/landingpage/logoCarousel/SoundCloud.svg" },
];

const topRow = logos.slice(0, 4);
const bottomRow = logos.slice(4, 8);

export default function LogoCarousel() {
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const mobileTopRef = useRef<HTMLDivElement>(null);
  const mobileBottomRef = useRef<HTMLDivElement>(null);

  const [desktopTrackWidth, setDesktopTrackWidth] = useState(0);
  const [mobileTopWidth, setMobileTopWidth] = useState(0);
  const [mobileBottomWidth, setMobileBottomWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      if (desktopTrackRef.current) {
        setDesktopTrackWidth(desktopTrackRef.current.scrollWidth / 3);
      }

      if (mobileTopRef.current) {
        setMobileTopWidth(mobileTopRef.current.scrollWidth / 3);
      }

      if (mobileBottomRef.current) {
        setMobileBottomWidth(mobileBottomRef.current.scrollWidth / 3);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  const renderLogos = (
    items: typeof logos,
    slotClassName: string,
    imageSizes: string,
  ) =>
    [0, 1, 2].map((copyIndex) =>
      items.map((logo, i) => (
        <div
          key={`${logo.name}-${copyIndex}-${i}`}
          className={`relative flex shrink-0 items-center justify-center ${slotClassName}`}
          title={logo.name}
        >
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            className="object-contain brightness-0 invert"
            sizes={imageSizes}
          />
        </div>
      )),
    );

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* fades */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-24 md:w-40 lg:w-80"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-24 md:w-40 lg:w-80"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* phone */}
      <div className="flex h-[120px] flex-col justify-center gap-8 px-2 sm:hidden">
        <div className="overflow-hidden">
          <motion.div
            ref={mobileTopRef}
            className="flex w-max items-center gap-8"
            animate={mobileTopWidth > 0 ? { x: [0, -mobileTopWidth] } : false}
            transition={{
              duration: 16,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {renderLogos(topRow, "h-[28px] w-[92px]", "92px")}
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={mobileBottomRef}
            className="flex w-max items-center gap-8"
            animate={mobileBottomWidth > 0 ? { x: [-mobileBottomWidth, 0] } : false}
            transition={{
              duration: 16,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {renderLogos(bottomRow, "h-[28px] w-[92px]", "92px")}
          </motion.div>
        </div>
      </div>

      {/* tablet + desktop */}
      <div className="hidden h-[70px] items-center sm:flex">
        <motion.div
          ref={desktopTrackRef}
          className="flex w-max items-center gap-10 md:gap-16"
          animate={desktopTrackWidth > 0 ? { x: [0, -desktopTrackWidth] } : false}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {renderLogos(logos, "h-[44px] w-[110px] md:h-[60px] md:w-[120px]", "120px")}
        </motion.div>
      </div>
    </section>
  );
}