import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import utilities from "@halvaradop/tailwindcss-utilities"

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@halvaradop/ui-*/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: {
                    DEFAULT: "#FFF",
                    100: "#FCFCFD",
                    200: "#F7F7F8",
                    300: "#F1F1F3",
                    400: "#E4E4E7",
                },
                green: {
                    DEFAULT: "#FEFFFA",
                    100: "#FBFFF0",
                    200: "#F8FFE5",
                    300: "#F2FFCC",
                    400: "#E5FF99",
                    500: "#D8FF66",
                    600: "#D1FF4C",
                    700: "#CAFF33",
                },
                grey: {
                    100: "#BFBFBF",
                    200: "#B3B3B3",
                    300: "#98989A",
                    400: "#656567",
                    500: "#59595A",
                    600: "#4C4C4D",
                    700: "#333333",
                    800: "#262626",
                    900: "#1C1C1C",
                    1000: "#191919",
                },
            },
            fontSize: {
                "2xs": "0.625rem",
                "3xs": "0.5rem",
            },
        },
        nth: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
        },
    },
    plugins: [
        utilities,
        plugin(({ matchVariant, theme }) => {
            matchVariant("nth", (value) => `&:nth-child(${value})`, { values: theme("nth") })
            matchVariant("nth-last", (value) => `&:nth-last-child(${value})`, { values: theme("nth") })
        }),
    ],
} satisfies Config
