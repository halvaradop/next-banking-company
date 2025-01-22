import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"

export default {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
                    1100: "#1E1E1E",
                },
            },
        },
    },
    plugins: [utilities],
} satisfies Config
