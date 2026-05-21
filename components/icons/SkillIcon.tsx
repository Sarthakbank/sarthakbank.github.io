"use client";

import type { LucideIcon } from "lucide-react";
import {
  Box,
  Code2,
  Compass,
  Cpu,
  Globe2,
  LayoutGrid,
  Map,
  MousePointer2,
  Network,
  Paintbrush,
  Palette,
  Shapes,
  Swords,
  Workflow,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  "Level Design": Map,
  "Gameplay Scripting": Code2,
  Blockouts: LayoutGrid,
  "Encounter Design": Swords,
  "Environment Art Basics": Palette,
  Texturing: Paintbrush,
  Sculpting: Shapes,
  "Mechanic Prototyping": Cpu,
  "Mechanical Prototyping": Cpu,
  "Gameplay UX": MousePointer2,
  "Agile Workflow": Workflow,
  Worldbuilding: Globe2,
  Navigation: Compass,
  "Systems Thinking": Network,
  "Unity Workflow": Box,
  "Unreal Workflow": LayoutGrid,
};

export function SkillIcon({
  skill,
  className,
}: {
  skill: string;
  className?: string;
}) {
  const Icon = map[skill] ?? LayoutGrid;
  return <Icon className={className} aria-hidden strokeWidth={1.75} />;
}
