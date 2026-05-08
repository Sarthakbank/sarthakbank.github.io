/**
 * Presentation grouping for profile tools — every entry matches `profileTools` exactly once.
 */
import type { ProfileTool } from "./profile";

export type ToolGroup = {
  title: string;
  subtitle: string;
  tools: readonly ProfileTool[];
};

export const profileToolGroups: ToolGroup[] = [
  {
    title: "Engines & realtime",
    subtitle: "Authoring gameplay spaces and iteration loops.",
    tools: ["Unreal Engine", "Unity"],
  },
  {
    title: "3D, sculpt & surfaces",
    subtitle: "Models, environments, and production-ready assets.",
    tools: ["Maya", "Blender", "ZBrush", "Substance Painter", "SpeedTree"],
  },
  {
    title: "Design, picture & collaboration",
    subtitle: "Look-dev support, motion, and studio workflows.",
    tools: ["Adobe Suite", "After Effects", "Figma", "Miro"],
  },
];
