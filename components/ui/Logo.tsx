import Image from "next/image";

type Size = "sm" | "md" | "lg" | "xl" | "hero";

const HEIGHTS: Record<Size, string> = {
  sm: "h-6 md:h-7",
  md: "h-8 md:h-10",
  lg: "h-14 md:h-20",
  xl: "h-24 md:h-32",
  hero: "h-32 sm:h-44 md:h-56 lg:h-72",
};

export default function Logo({
  size = "md",
  className = "",
  priority = false,
  alt = "RED — A House of Architecture",
}: {
  size?: Size;
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <span className={`inline-flex select-none items-center ${className}`}>
      <Image
        src="/RED_logo.png"
        alt={alt}
        width={1024}
        height={420}
        priority={priority}
        sizes="(max-width: 768px) 60vw, 480px"
        className={`${HEIGHTS[size]} w-auto object-contain`}
        draggable={false}
      />
    </span>
  );
}
