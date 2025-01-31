import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./Components/Layout.jsx";
import AdminLayout from './Components/admin/AdminLayout';
import EventsManager from './Components/admin/EventsManager';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Event from "./Pages/Event";
import EventDetails from "./Components/eventDetails/eventDetails";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "events",
        element: <Event />
      },
      {
        path: "/eventdetails",
        element: <EventDetails />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <div className="p-8">Welcome to Admin Dashboard</div>
      },
      {
        path: "events",
        element: <EventsManager />
      }
    ]
  },
  {
    path: "/*",
    element: <NotFound />
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
