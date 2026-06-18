import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Rap Auf Takt",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="space-y-10 md:space-y-14">
        {/* 4 - Logo - 4 */}
        <div className="flex items-center justify-center gap-1 md:gap-2">
          {/* First 4 */}
          <span className="text-[100px] font-medium leading-none tracking-tighter text-orange md:text-[180px]">
            4
          </span>

          {/* Logo replacing 0 */}
          <Image
            src="/logo.svg"
            alt="0"
            width={120}
            height={120}
            priority
            className="-mr-2 h-20 w-20 md:h-32 md:w-32 lg:h-[120px] lg:w-[120px]"
          />

          {/* Second 4 */}
          <span className="text-[100px] font-medium leading-none tracking-tighter text-orange md:text-[180px]">
            4
          </span>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-[24px] font-medium uppercase tracking-tight md:text-[40px]">
            Page Not Found
          </h2>
          <p className="mx-auto max-w-md text-[16px] font-light leading-[22px] text-white/70 md:text-[20px] md:leading-[32px]">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block rounded-[12px] bg-orange px-8 py-4 text-[16px] font-medium uppercase tracking-tight text-white transition-opacity duration-200 hover:opacity-90 md:px-12 md:py-5 md:text-[18px]"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}