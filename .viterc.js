export default {
    rollup: {
        plugins: [
            require('rollup-plugin-prettier')({
                singleQuote: true,
                parser: 'babel'
            })
        ]
    }
}