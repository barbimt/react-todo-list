module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        rotate: {
            '255': '255deg'
        },
        extend: {},
    },
    variants: {
        extend: {
            borderRadius: ['hover', 'focus'],
            backgroundColor: ['checked'],
            borderColor: ['checked']


        },
    },
    plugins: [],
}