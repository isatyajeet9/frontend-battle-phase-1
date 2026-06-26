import type { FeatureItem } from "@/types/feature";

export const featureItems: FeatureItem[] = [
  {
    id: "signal-orchestration",
    title: "Signal-first orchestration",
    description:
      "Unify ingestion, enrichment, and routing into one control surface so teams act on fresh data without waiting on manual handoffs.",
    eyebrow: "Pipeline OS",
    icon: "arrow-path",
    tone: "brand",
    stats: ["84% fewer manual sync tasks", "2.3x faster issue recovery"],
    cta: "See orchestration logic"
  },
  {
    id: "decision-intelligence",
    title: "Turn events into decisions",
    description:
      "Built-in scoring, anomaly detection, and explainable triggers help operators prioritize the next best action in real time.",
    eyebrow: "Decision Engine",
    icon: "chart-pie",
    tone: "light",
    stats: ["Context-rich alerts", "Analyst-ready narratives"],
    cta: "Explore decision surfaces"
  },
  {
    id: "growth-velocity",
    title: "Accelerate team velocity",
    description:
      "Ship playbooks for finance, ops, and customer teams without rebuilding workflows each quarter or reformatting every dataset.",
    eyebrow: "Execution Layer",
    icon: "arrow-trending-up",
    tone: "accent",
    stats: ["Reusable workflow templates", "Fewer brittle handoffs"],
    cta: "Launch automation programs"
  }
];
