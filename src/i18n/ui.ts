export const ui = {
  en: {
    nav_about: "About",
    nav_cv: "CV",
    nav_works: "Works",
  },
  ja: {
    nav_about: "自己紹介",
    nav_cv: "経歴",
    nav_works: "研究",
  },
} as const;

export type Locale = keyof typeof ui;
