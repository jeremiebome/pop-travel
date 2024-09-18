import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Destination from "./pages/Destination";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/destination",
    element: <Destination/>
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
