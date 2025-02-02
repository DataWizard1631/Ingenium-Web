import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import AdminLayout from "./Components/admin/AdminLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Event from "./Pages/Event";
import EventDetails from "./Components/eventDetails/eventDetails";
import AdminLogin from "./Pages/AdminLogin.jsx";
import Timeline from "./Components/timeline/TimeLineComp";
import AdminProtectedWrapper from "./Components/AdminProtectedWrapper.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Event />} />
          <Route path="eventdetails/:id" element={<EventDetails />} />
          <Route
            path="admin-login"
            element={
              <AdminProtectedWrapper>
                <AdminLogin />
              </AdminProtectedWrapper>
            }
          />
        </Route>
        <Route
          path="/admin"
          element={
            <AdminProtectedWrapper>
              <AdminLayout />
            </AdminProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
