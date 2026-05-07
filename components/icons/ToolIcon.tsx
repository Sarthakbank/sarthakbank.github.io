"use client";

import type { IconType } from "react-icons";
import {
  SiAutodeskmaya,
  SiBlender,
  SiFigma,
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";
import {
  Clapperboard,
  ImageIcon,
  Layers,
  Paintbrush,
  Sparkles,
  TreePine,
  Wrench,
} from "lucide-react";

const si: Partial<Record<string, IconType>> = {
  Maya: SiAutodeskmaya,
  Blender: SiBlender,
  "Unreal Engine": SiUnrealengine,
  Unity: SiUnity,
  Figma: SiFigma,
};

export function ToolIcon({
  tool,
  className,
}: {
  tool: string;
  className?: string;
}) {
  if (tool === "Adobe Suite") {
    return <ImageIcon className={className} aria-hidden strokeWidth={1.75} />;
  }
  if (tool === "ZBrush") {
    return <Sparkles className={className} aria-hidden strokeWidth={1.75} />;
  }
  if (tool === "Substance Painter") {
    return <Paintbrush className={className} aria-hidden strokeWidth={1.75} />;
  }
  if (tool === "SpeedTree") {
    return <TreePine className={className} aria-hidden strokeWidth={1.75} />;
  }
  if (tool === "After Effects") {
    return <Clapperboard className={className} aria-hidden strokeWidth={1.75} />;
  }
  if (tool === "Miro") {
    return <Layers className={className} aria-hidden strokeWidth={1.75} />;
  }

  const Icon = si[tool];
  if (Icon) {
    return <Icon className={className} aria-hidden />;
  }

  return <Wrench className={className} aria-hidden strokeWidth={1.75} />;
}
