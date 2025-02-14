import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Event from "./Pages/Event";
import Contact from "./Pages/Contact";
import EventDetails from "./Components/eventDetails/eventDetails";
import Timeline from "./Components/timeline/TimeLineComp";
import ScrollToTop from "./Components/ScrollToTop";

function App() {

  useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'GTM-PM3H6V8JY1'
    };
    TagManager.initialize(tagManagerArgs);
}, []);

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Event />} />
          <Route path="contact" element={<Contact />} />
          <Route path="eventdetails/:id" element={<EventDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
