"use client";

import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Cpu,
  LayoutGrid,
  Map,
  MousePointer2,
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
  "Gameplay UX": MousePointer2,
  "Agile Workflow": Workflow,
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
