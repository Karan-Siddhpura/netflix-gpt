import React, { useEffect } from "react";

import Login from "./Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse.jsx";

const Body = () => {
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

  return (
    <>
      <RouterProvider router={appBrowser} />
    </>
  );
};

export default Body;
