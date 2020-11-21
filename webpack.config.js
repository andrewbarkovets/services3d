// eslint-disable-next-line no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist'
    }
};
