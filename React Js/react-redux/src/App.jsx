import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductListing />,
    },
    {
      path: "/product/:productId",
      element: <ProductDetail />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
