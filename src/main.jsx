import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Donate from './components/Donate';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Help from './pages/Help';
import Register from './pages/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  // {
  //   path: "/donate",
  //   element: <Donate />,
  // },

  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
  // {
  //   path: "/shortlist",
  //   element: <Shortlist />,
  // },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/right",
  //   element: <Right />,
  //   {
  //     children: [
  //       {
  //         path: "contacts/:contactId",
  //         element: <Contact />,
  //       },
  //     ],
  //   }
  // },
  {
    path: "/",
    element: <Navbar />,

    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
);
