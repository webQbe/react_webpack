 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    entry: './src/index.js',    // Entry point for the app
    output: {
        path: path.join(__dirname, '/dist'), // Output directory
        filename: 'index_bundle.js'          // Output bundle filename
    },
    module:{
        rules: [
            {
                test: /\.js$/,             // Process all .js files
                exclude: /node_modules/,   // Except those in node_modules  
                use: {
                    loader: 'babel-loader' // Use Babel to transpile  
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            /*  Inject the JS bundle into src/index.html and serve it from dist/. */
            template: './src/index.html'  // Use this HTML as a base
        })
    ]
 }