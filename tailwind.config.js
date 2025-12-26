/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-gold': '#C5A059',      // Dourado
                'brand-dark': '#1A1A1A',      // Preto suave
                'brand-light': '#F9F9F7',     // Fundo Creme
                'brand-nude': '#E8DCCA',      // Nude
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}