import Image from "next/image";

type Size = "sm" | "md" | "lg" | "xl" | "hero";
type Variant = "red" | "tech";

const HEIGHTS: Record<Size, string> = {
  sm: "h-6 md:h-7",
  md: "h-8 md:h-10",
  lg: "h-14 md:h-20",
  xl: "h-24 md:h-32",
  hero: "h-32 sm:h-44 md:h-56 lg:h-72",
};

const TECH_HEIGHTS: Record<Size, string> = {
  sm: "h-5 md:h-6",
  md: "h-6 md:h-8",
  lg: "h-10 md:h-14",
  xl: "h-16 md:h-20",
  hero: "h-20 sm:h-28 md:h-36 lg:h-44",
};

const VARIANTS: Record<
  Variant,
  { src: string; width: number; height: number; defaultAlt: string }
> = {
  red: {
    src: "/RED_logo.png",
    width: 1536,
    height: 1024,
    defaultAlt: "RED — A House of Architecture",
  },
  tech: {
    src: "/REDTech_logo.png",
    width: 1976,
    height: 415,
    defaultAlt: "RED Tech",
  },
};

export default function Logo({
  size = "md",
  variant = "red",
  className = "",
  priority = false,
  alt,
}: {
  size?: Size;
  variant?: Variant;
  className?: string;
  priority?: boolean;
  alt?: string;
}) {
  const mark = VARIANTS[variant];
  const heights = variant === "tech" ? TECH_HEIGHTS : HEIGHTS;

  return (
    <span className={`inline-flex select-none items-center ${className}`}>
      <Image
        src={mark.src}
        alt={alt ?? mark.defaultAlt}
        width={mark.width}
        height={mark.height}
        priority={priority}
        sizes="(max-width: 768px) 60vw, 480px"
        className={`${heights[size]} w-auto object-contain`}
        draggable={false}
      />
    </span>
  );
}
