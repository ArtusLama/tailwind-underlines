import { defineConfig } from "vitepress"
import Tailwind from "@tailwindcss/vite"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Tailwind Underlines",
    titleTemplate: "Tailwind Underlines",
    description:
        "A TailwindCSS plugin for beautiful animated underlines. Documentation and live demo of the tailwind-underlines plugin",
    base: "/",
    cleanUrls: true,
    lang: "en-US",
    appearance: "dark",
    lastUpdated: true,

    head: [["link", { rel: "icon", href: "/favicon.ico" }]],

    themeConfig: {
        logo: "/logo.svg",
        editLink: {
            pattern: "https://github.com/ArtusLama/tailwind-underlines/edit/main/docs/:path",
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/examples/overview" },
            { text: "Documentation", link: "/docs/getting-started" },
        ],

        search: {
            provider: "local",
            options: {
                detailedView: true,
            },
        },

        footer: {
            message: "Released under the MIT License.",
        },

        sidebar: [
            {
                text: "Examples",
                items: [{ text: "Overview", link: "/examples/overview" }],
            },
            {
                text: "Documentation",
                items: [{ text: "Getting Started", link: "/docs/getting-started" }],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/ArtusLama/tailwind-underlines" }],
    },

    vite: {
        plugins: [Tailwind()],
    },
})
