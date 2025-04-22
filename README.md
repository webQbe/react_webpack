# Create React App with Webpack

- Creating React App from scratch with Webpack
- Creating a script to run a dev server using Webpack Dev Server with Hot Reload
- Creating Build Scripts to quickly build our app for deployment
- Doing all useful things that CLI gives us from scratch
- We use Webpack to all compile and bundle all of our React code into one JavaScript file. 
- Using **Babel** to transpile React's ES6 classes down to browser-friendly code



## Getting Started

1. Open project folder in VSCode terminal:
2. Create `package.json` file: `npm init -y`
3. Install dependencies:
    ```
    npm i react react-dom
    ```
4. Install dev dependencies:
    ```
    npm i -D webpack webpack-dev-server webpack-cli babel-core babel-loader @babel/preset-env @babel/preset-react html-webpack-plugin
    ```
5. Modify `scripts` in `package.json` file:
    ```
    "scripts": {
        "start": "webpack-dev-server --mode development --open --hot",
        "build": "webpack --mode production"
    }
    ```
    - `npm start`: Starts a dev server with hot reloading.
    - `npm run build`: Builds a production-ready bundle into the `dist/` folder.
    
6. Run webpack dev server: `npm start`

## Build & Compile
- To build & compile the app run: `npm run build`
- This will create `dist/index_bundle.js` 
- Even if we create 10 components, they will all be compiled into this one file.
- Also `dist/index.html` file is created by `HtmlWebpackPlugin` which has included `<script defer="defer" src="index_bundle.js"></script>` to our `src/index.html` template.
- Open `dist/index.html` in the browser to see the same output.
- You can upload these files in `dist/` folder to any web server
