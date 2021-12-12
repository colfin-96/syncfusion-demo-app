module.exports = {
    // mode: 'jit',
    purge: ['./src/**/*.{html,ts}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        fontFamily: {
            'opensans': 'Open Sans'
        },
        extend: {
            boxShadow: {
                'shadow': '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)'
            },
            colors: {
                primary: {
                    'normal': 'rgba(0, 130, 187, 1)',
                    'hover': 'rgba(0, 130, 187, 0.92)',
                    'focus': 'rgba(0, 130, 187, 0.76)',
                    'active': 'rgba(0, 130, 187, 0.76)'
                },
                gray: {
                    '500': '#e0e0e0'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
