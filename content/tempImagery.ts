/**
 * Demo still paths — re-exported from `demoMediaManifest.ts` for stable imports
 * (`tempImagery`, `TempImageryKey`) used by pages and `caseStudy.ts`.
 */

import { demoLocalImagery } from "./demoMediaManifest";

export const tempImagery = demoLocalImagery;

export type TempImageryKey = keyof typeof demoLocalImagery;
