"use client";

import { useEffect, useState } from "react";

const highlights = [
  {
    id: 1,
    video: "https://pub-0218d5cd176b4ab3a44627e4fad3872c.r2.dev/RapAufTakt_v1mp4.mp4",
    episode: "Anti Fuchs",
  },
  {
    id: 2,
    video: "https://pub-0218d5cd176b4ab3a44627e4fad3872c.r2.dev/RapAufTakt_v2.mp4",
    episode: "Papke 030",
  },
  {
    id: 3,
    video: "https://pub-0218d5cd176b4ab3a44627e4fad3872c.r2.dev/RapAufTakt_v3.mp4",
    episode: "Funky Umhang",
  },
];

export default function Highlights() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeEpisode, setActiveEpisode] = useState<string>("");

  const closeModal = () => {
    setActiveVideo(null);
    setActiveEpisode("");
  };

  useEffect(() => {
    if (!activeVideo) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <section id="highlights" className="w-full bg-black scroll-mt-32">
      <div className="mx-auto">
        <h2
          className="mb-10 text-[20px] md:text-4xl text-orange"
          style={{ fontFamily: "var(--font-nohemi)" }}
        >
          Highlights
        </h2>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:gap-8">
          {highlights.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveVideo(item.video);
                setActiveEpisode(item.episode);
              }}
              className="group relative flex h-[400px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-[15px] bg-zinc-900 p-[15px] text-left sm:w-[31%] sm:h-auto sm:aspect-[9/16] sm:max-h-[600px] md:rounded-[25px]"
              aria-label={`Play ${item.episode}`}
            >
              <video
                src={item.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

              <div className="absolute left-4 top-4 z-10">
                <img
                  src="/logo_white.svg"
                  alt="Logo"
                  width={56}
                  height={56}
                  className="opacity-90"
                />
              </div>

              <div
                className="z-10 flex flex-col justify-between space-y-8 rounded-[20px] px-5 py-4"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <div className="flex w-full justify-end">
                  <div className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.4333 0L0 0L0 5.61831L14.4012 5.6183L0.00584208 20.0117L3.97858 23.9844L18.3817 9.5813L18.3817 24L24 24L24 8.5667L15.4333 0Z" fill="white" />
                    </svg>
                  </div>
                </div>

                <span
                  className="text-[18px] font-medium tracking-wide text-white"
                  style={{ fontFamily: "var(--font-nohemi)" }}
                >
                  {item.episode}
                </span>
              </div>

              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-4 py-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <h3
                id="video-modal-title"
                className="text-lg font-medium text-white"
                style={{ fontFamily: "var(--font-nohemi)" }}
              >
                {activeEpisode}
              </h3>

              <button
                type="button"
                onClick={closeModal}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all duration-300 hover:border-orange hover:bg-orange"
                aria-label="Close video modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="bg-black">
              <video
                key={activeVideo}
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="h-auto max-h-[80vh] w-full bg-black"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}