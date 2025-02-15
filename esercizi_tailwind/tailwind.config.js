/**@type {import {'tailwindcss'}.Config} */

module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            spacing: {
                '12': '3rem',
                '16': '4rem',
            }
        },
    },
    plugins:[],
}