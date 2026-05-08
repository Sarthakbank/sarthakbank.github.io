/** Framer Motion presets — immersive lab storytelling (restrained easing). */

export const easePremium = [0.22, 1, 0.36, 1] as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.095,
      delayChildren: 0.08,
    },
  },
};

/** Slower, more “opening chapter” cadence for case-study hero only */
export const staggerContainerOpening = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.16,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: easePremium },
  },
};

export const staggerItemOpening = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: easePremium },
  },
};

export const fadeLift = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: easePremium },
  },
};

/** Stronger section choreography — case study & flagship blocks */
export const fadeLiftBold = {
  hidden: { opacity: 0, y: 52, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.78, ease: easePremium },
  },
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.78, ease: easePremium },
  },
};

/** Slower, deeper entrance for flagship case-study media moments */
export const imageRevealCinematic = {
  hidden: { opacity: 0, scale: 0.965, y: 44 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.95, ease: easePremium },
  },
};
