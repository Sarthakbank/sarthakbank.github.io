/**
 * Generic, content-driven media model — the single source of truth for any
 * gallery/section that mixes images, looping clips, YouTube, and placeholders.
 *
 * A `MediaItem` is a discriminated union on `kind`; <MediaSlot> renders the right
 * element for each. Swapping a `placeholder` for a real `image`/`video`/`youtube`
 * with the same `ratio` requires no layout change.
 */

export type MediaRatio = "16/9" | "4/3" | "1/1" | "3/4" | "9/16" | "21/9";

export type MediaItem =
  | { kind: "image"; src: string; alt: string; ratio?: MediaRatio; caption?: string }
  | {
      kind: "video";
      src: string;
      webm?: string;
      poster: string;
      alt: string;
      ratio?: MediaRatio;
      caption?: string;
    }
  | { kind: "youtube"; id: string; poster: string; title: string; ratio?: MediaRatio; caption?: string }
  | {
      kind: "placeholder";
      title: string;
      placeholderKind?: "image" | "video" | "gif";
      ratio?: MediaRatio;
      caption?: string;
    };

export type MediaLayout = "grid" | "reel";

export type MediaGroup = {
  eyebrow?: string;
  /** Gradient lead phrase for SectionHeading. */
  lead?: string;
  title: string;
  body?: string;
  /** grid = landscape/screens, reel = horizontal 9:16 rail. */
  layout?: MediaLayout;
  items: MediaItem[];
};

/** Tailwind aspect-ratio class per ratio (arbitrary values are scanned via lib/** + components/**). */
export const ratioClass: Record<MediaRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "9/16": "aspect-[9/16]",
  "21/9": "aspect-[21/9]",
};

/** A stable key for an item (used for React keys + lightbox identity). */
export function mediaKey(item: MediaItem, index: number): string {
  switch (item.kind) {
    case "image":
    case "video":
      return `${item.kind}:${item.src}:${index}`;
    case "youtube":
      return `youtube:${item.id}:${index}`;
    case "placeholder":
      return `placeholder:${item.title}:${index}`;
  }
}

/** Short human label for accessibility (button aria-label / dialog title). */
export function mediaLabel(item: MediaItem): string {
  switch (item.kind) {
    case "image":
      return item.alt;
    case "video":
      return item.alt;
    case "youtube":
      return item.title;
    case "placeholder":
      return item.title;
  }
}

/** Whether an item can be opened in the lightbox (placeholders cannot). */
export function isOpenable(item: MediaItem): boolean {
  return item.kind !== "placeholder";
}
