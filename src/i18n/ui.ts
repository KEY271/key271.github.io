export const ui = {
  en: {
    nav_about: "About",
    nav_cv: "CV",
  },
  ja: {
    nav_about: "自己紹介",
    nav_cv: "経歴",
  },
} as const;

export type Locale = keyof typeof ui;
