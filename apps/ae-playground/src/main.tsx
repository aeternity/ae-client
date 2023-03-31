import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { FATEdecoder } from "./pages/FATEdecoder";
import { TransactionPage } from "./pages/TransactionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/CallData-decoder",
        element: <FATEdecoder decoder={"ByteArrDecoder"} />,
      },
      {
        path: "/ContractBytecode-decoder",
        element: <FATEdecoder decoder={"ContractDecoder"} />,
      },
      { path: "/transactions/", element: <TransactionPage /> },
      { path: "/transactions/:th", element: <TransactionPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
