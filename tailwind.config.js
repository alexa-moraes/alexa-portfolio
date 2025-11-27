module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],

    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'da-ink': '#0B0B0B',
                'da-paper': '#EFE6DC',
                'da-velvet': '#2F1B17',
                'da-bronze': '#B47A4B',
                'da-accent': '#8F6B55'
            },

            fontFamily: {
                serif: ['Merriweather', 'serif'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui']
            }
        }
    },

    plugins: []
}