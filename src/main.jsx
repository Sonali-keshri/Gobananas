import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ProductPage from "./pages/ProductPage";
import Details from "./components/Details";
import Blog from "./pages/Blog";
import About from "./pages/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <ProductPage />,
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "product/:id",
        element: <Details />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
