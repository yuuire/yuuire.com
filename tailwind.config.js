/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                wisteria: "oklch(0.820 0.100 314.384)",
            },
        },
    },
    plugins: [],
};
