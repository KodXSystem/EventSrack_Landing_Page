const webpack = require('webpack');
module.exports = {
    // ...other Webpack configuration options...

    plugins: [
        // ...other plugins...
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],

    // ...other configuration options...
};
