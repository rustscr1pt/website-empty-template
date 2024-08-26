const path = require("path");
const TerserPlugin = require('terser-webpack-plugin'); // For minifying and removing comments

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false
                    }
                }
            })
        ]
    },
    entry: {
        example1: [
            // "./src/js/scripts/main/preloader/preloader.js",
            // "./src/js/scripts/main/visiual_init/visual_activator.js"
            // Place routes to .js files which should be optimized
        ],
        example2: [
            // "./src/js/scripts/main/preloader/preloader.js",
            // "./src/js/scripts/legal/gsap_legal_animation.js"
            // Place routes to .js files which should be optimized
        ]
    },
    output: {
        filename: 'bundled_[name].js',
        path: path.resolve(__dirname, 'dist/js/scripts'),
    }
};
// In the end we get two files : "bundled_example1.js and bundled_example2.js" in the dist/js/scripts
// npx webpack to run