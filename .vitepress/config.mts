import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  cleanUrls: true,
  description: "My personal web site",
  head: [
    ["link", { rel: "canonical", href: "https://johannes.plunien.com" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "8kfvM1gjxXLltasQ-2KWlncjPLP4xvyCVUyeU79OKDA",
      },
    ],
    [
      "script",
      {
        defer: "defer",
        "data-domain": "johannes.plunien.com",
        src: "https://plausible.plunien.com/js/script.js",
      },
    ],
  ],
  sitemap: {
    hostname: "https://johannes.plunien.com",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Imprint", link: "/imprint" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/plu" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/jplunien/",
      },
    ],
  },
  title: "Johannes Plunien",
});
