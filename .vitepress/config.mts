import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Johannes Plunien",
  description: "My personal web site",
  base: "/",
  head: [["link", { rel: "canonical", href: "https://johannes.plunien.com" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/plu" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/jplunien/",
      },
    ],
  },
});
