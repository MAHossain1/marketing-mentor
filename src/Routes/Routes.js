import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog";
import Courses from "../Pages/Courses";
import Faq from "../Pages/Faq";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
