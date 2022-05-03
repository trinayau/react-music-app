const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //use htmlwebpackplugin - way of automatically filling in html config

const config = {
    entry: path.resolve(__dirname, "../src/index.js"), //entrypoint is source folder/index.js, can change to other file name e.g. /extra.js - place to start building dependencies
    output: {
        path: path.resolve(ROOT_DIRECTORY, 'dist'), //says where we want to put it - dist folder
        filename: 'bundle.js', //rename to bundle.js from main.js
        publicPath: "/",
        clean: true //clean up everything in folder as we go such as old versions, if u version bundles, they pile up
    },
    plugins: [ //automatically generate html template, which lives in public/index.html
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'), //based on this template, put html file in dist folder and connect to bundle. we need a public folder
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader' //if there is a js file matching test -.js, other than node modules, then load it through babel-loader, another plugin that  , we need extra config for babel - .babelrc
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],//if js file asks for css file,  run it thru these things that make it valid and can be imported by js. 
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/, //if in js we refer to png, gif etc, run it thru file-loader so we can import it. when webpack bundles, i want it to be able to bundle pngs. what is spat out at the end is a js bundle, but bc of config, the js bundle has links to css and images. will add images to dist folder, dist folder is portable. needs all of resources we will share and every file in there needs to know where all the files have been moved to or cut out
                use: ['file-loader'],
            }
        ]
    },
    mode: "none"
};

module.exports = config;
