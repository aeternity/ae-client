import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <button className="btn btn-primary">test button</button>
      </div>
      {[...Array(100).keys()].map((i: number) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
