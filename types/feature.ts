export type FeatureTone = "brand" | "dark" | "light" | "accent";

export type FeatureIconName =
  | "arrow-path"
  | "cog-8-tooth"
  | "chart-pie"
  | "arrow-trending-up"
  | "link"
  | "link-solid"
  | "cube-16-solid";

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  eyebrow: string;
  icon: FeatureIconName;
  tone: FeatureTone;
  stats: [string, string];
  cta: string;
};
