/**
 * Project registry — add a featured project by importing its data file and
 * registering it here. `/case-study` renders the default featured project;
 * `/projects/[slug]` resolves any registered project by slug.
 */

import type { Project } from "./types";
import { escapeProtocol } from "./escapeProtocol";

export const projects: readonly Project[] = [escapeProtocol];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
);

/** Slug rendered at the legacy `/case-study` route. */
export const FEATURED_PROJECT_SLUG = escapeProtocol.slug;

export function getProject(slug: string): Project | undefined {
  return projectsBySlug[slug];
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export { escapeProtocol };
export type { Project } from "./types";
