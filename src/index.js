import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"; // Import root App component

// Render <App /> into #app element in index.html
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);