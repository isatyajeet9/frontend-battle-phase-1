import Image from "next/image";

import type { FeatureIconName } from "@/types/feature";

type ExtendedIconName =
  | FeatureIconName
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "x-mark"
  | "search"
  | "link"
  | "link-solid"
  | "cube"
  | "cube-16-solid";

type IconProps = {
  name: ExtendedIconName;
  alt: string;
  className?: string;
  priority?: boolean;
};

const iconMap: Record<ExtendedIconName, string> = {
  "arrow-path": "/assets/icons/arrow-path.svg",
  "arrow-trending-up": "/assets/icons/arrow-trending-up.svg",
  "chart-pie": "/assets/icons/chart-pie.svg",
  "cog-8-tooth": "/assets/icons/cog-8-tooth.svg",
  "chevron-down": "/assets/icons/chevron-down.svg",
  "chevron-up": "/assets/icons/chevron-up.svg",
  "chevron-left": "/assets/icons/chevron-left.svg",
  "chevron-right": "/assets/icons/chevron-right.svg",
  "x-mark": "/assets/icons/x-mark.svg",
  search: "/assets/icons/search.svg",
  link: "/assets/icons/link.svg",
  "link-solid": "/assets/icons/link-solid.svg",
  cube: "/assets/icons/cube-16-solid.svg",
  "cube-16-solid": "/assets/icons/cube-16-solid.svg"
};

export function Icon({ name, alt, className, priority = false }: IconProps) {
  return (
    <Image
      src={iconMap[name]}
      alt={alt}
      width={24}
      height={24}
      className={className}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
    />
  );
}
