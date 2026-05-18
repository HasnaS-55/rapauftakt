"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Highlights", href: "#highlights", id: "highlights" },
  { label: "References", href: "#references", id: "references" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    const contactSection = document.getElementById("contact");
    if (contactSection) sections.push(contactSection);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -45% 0px",
        threshold: [0.25, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getNavClass = (id: string) =>
    activeSection === id ? "text-orange font-medium" : "text-white font-light";

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black">
      <div className="mx-auto flex w-[80%] items-center justify-between py-8">
        {/* Logo */}
        <a href="#home">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="h-12 w-12 rounded-full md:h-16 md:w-16 lg:h-[100px] lg:w-[100px]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[30px] transition-all duration-200 hover:text-orange ${getNavClass(link.id)}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className={`rounded-full bg-orange px-6 py-3 text-[30px] transition-colors duration-200 hover:bg-orange/80 ${
              activeSection === "contact"
                ? "font-bold text-white"
                : "font-light text-white"
            }`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-[60] flex h-10 w-10 items-center justify-center text-white lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>

          <span
            className={`absolute h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed w-full inset-0 z-50 bg-black lg:hidden">
          <div className="flex h-dvh flex-col justify-between w-[80%] py-8 mx-auto">
            {/* Top row */}
            <div className="flex items-start justify-between">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-12 w-12 rounded-full md:h-16 md:w-16 lg:h-[100px] lg:w-[100px]"
                />
              </a>

              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-white"
                aria-label="Close menu"
              >
                
              </button>
            </div>

            {/* Nav */}
            <nav className="mt-55 flex flex-col">
              {[
                ...navLinks
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between border-b border-white py-6 text-[28px] leading-none transition-all duration-300 ${
                    activeSection === link.id
                      ? "font-medium text-orange"
                      : "font-light text-white hover:text-orange"
                  }`}
                >
                  <span>{link.label}</span>

                  <span className="flex items-center justify-center">
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-current transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange"
                    >
                      <line
                        x1="11.25"
                        y1="11.75"
                        x2="0.75"
                        y2="11.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="11.25"
                        y1="11.75"
                        x2="11.25"
                        y2="0.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="10.9396"
                        y1="11.4624"
                        x2="0.977114"
                        y2="1.06043"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="mt-auto flex items-center gap-5 pt-12">
              <a
                href="https://www.instagram.com/rapauftakt/"
                aria-label="Instagram"
                className="text-white transition-colors hover:text-orange"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.773 1.153 4.92 4.92 0 0 1 1.153 1.773c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.153 1.773 4.92 4.92 0 0 1-1.773 1.153c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.773-1.153A4.92 4.92 0 0 1 1.6 19.43c-.163-.46-.35-1.26-.403-2.43C1.14 15.734 1.128 15.354 1.128 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.153-1.773A4.92 4.92 0 0 1 4.527 1.6c.46-.163 1.26-.35 2.43-.403C8.222 1.14 8.602 1.128 12 1.128zm0 3.1A5.737 5.737 0 1 0 17.737 11 5.744 5.744 0 0 0 12 5.263zm0 9.474A3.737 3.737 0 1 1 15.737 11 3.742 3.742 0 0 1 12 14.737zm6.276-10.845a1.34 1.34 0 1 0 1.34 1.34 1.34 1.34 0 0 0-1.34-1.34z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@rapauftakt"
                aria-label="TikTok"
                className="text-white transition-colors hover:text-orange"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@RapAufTakt/featured"
                aria-label="YouTube"
                className="text-white transition-colors hover:text-orange"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
