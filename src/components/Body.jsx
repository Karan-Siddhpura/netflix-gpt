import React from "react";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.jsx";

const appBrowser = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
const Body = () => {
  return (
    <>
      <RouterProvider router={appBrowser} />
    </>
  );
};

export default Body;
