import { defineConfig } from "windicss-webpack-plugin";

export default defineConfig({
    attributify: true,
    extract: {
        include: ['**/*.{jsx,tsx,css}', './app/component/**/*.{jsx,js,ts,tsx'],
        exclude: ['node_modules', '.git', '.next'],
    },
    darkMode: "class", //false , class, media
    alias: {},
    theme: {
        extend: {
            colors: {

                "pri-100": "var(--pri-100)",
                "neutral-100": "var(--neutral-100)",
                "neutral-110": "var(--neutral-110)",
                "neutral-120": "var(--neutral-120)",
                "neutral-130": "var(--neutral-140)",
                "neutral-140": "var(--neutral-140)",
                "neutral-150": "var(--neutral-150)",
                "neutral-160": "var(--neutral-160)",
            },

            fontFamily: {
                sans: ["Josefine Sans", "sans-serif"]
            }

        },
        backgroundImage: (theme) => ({
            "dark-mobile": "url('/images/bg-mobile-dark.jpg')",
            "light-mobile": "url('/images/bg-mobile-light.jpg')",
            "dark-desktop": "url('/images/bg-desktop-dark.jpg')",
            "light-desktop": "url('/images/bg-desktop-light.jpg')",
            "pri-110": "var(--pri-110)",
        }),
        plugins: []
    }
})