export const ui = {
  en: {
    nav_about: "About",
  },
  ja: {
    nav_about: "自己紹介",
  },
} as const;

export type Locale = keyof typeof ui;
