import "./App.css";
import TopMessage from "./Components/Home Page/NavBar/TopMessage";
import Navigation from "./Components/Home Page/NavBar/Navigation";
import Header from "./Components/Home Page/Body/Header";
import HeroSection from "./Components/Home Page/Body/HeroSection";
import Service from "./Components/Home Page/Body/Service";
import Add from "./Components/Home Page/Body/Add";
import OurChief from "./Components/Home Page/Body/OurChief";
import Departments from "./Components/Home Page/Body/Departments";
import Capacity from "./Components/Home Page/Body/Capacity";
import News from "./Components/Home Page/Body/News";
import Faq from "./Components/Home Page/Body/Faq";
import Say from "./Components/Home Page/Footer/Say";
import Contact from "./Components/Home Page/Footer/Contact";
import Overview from "./Components/About Us/Overview";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PharmacyServices from "./Components/Services/PharmacyServices";
import Departments1 from "./Components/Department/Departments1";
import Doctors from "./Components/Doctors/Doctors";
import Career from "./Components/Career/Career";
import Schedules from "./Components/Schedules/Schedules";
import Packages from "./Components/Packages/Packages";
import MissionVision from "./Components/About Us/MissionVision";
import CoreValues from "./Components/About Us/CoreValues";
import Message from "./Components/About Us/Message";
import { useState } from "react";
import Appointment from "./Components/Appointment/Appointment";
import ContactUs from "./Components/Contact Us/ContactUs";
import Why from "./Components/Home Page/Body/Why";
import Map from "./Components/Map/Map";


export default function App() {
  const [showAppointment, setShowAppointment] = useState(false);
  function handleAppointment() {
    setShowAppointment(!showAppointment);
  }
  return (
    <div style={{ overflow: "hidden" }}>
      <BrowserRouter>
        <TopMessage
          handle={handleAppointment}
        />

        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage handle={handleAppointment} />} />
          <Route path="About-Us/Overview" element={<Overview />} />
          <Route path="About-Us/Mission&Vision" element={<MissionVision />} />
          <Route path="About-Us/Core-Values" element={<CoreValues />} />
          <Route path="About-Us/Message" element={<Message />} />
          <Route
            path="Services/Pharmacy-Services"
            element={<PharmacyServices />}
          />
          <Route path="Doctors" element={<Doctors />} />
          <Route path="Department" element={<Departments1 />} />
          <Route path="Career" element={<Career />} />
          <Route path="Media" element={<Homepage />} />
          <Route path="Our-Schedules" element={<Schedules />} />
          <Route path="Packages" element={<Packages />} />
          <Route path="Contact-Us" element={<ContactUs />} />
          <Route path="Map" element={<Map/>}/>
        </Routes>
        <Contact />
        <Appointment
          showAppointment={showAppointment}
          handle={handleAppointment}
        />
      </BrowserRouter>
    </div>
  );
}

function Homepage({ handle }) {
  return (
    <div>
      <HeroSection handle={handle} />
      <div style={{ padding: "0 40px" }}>
        <Header />
        <Service />
      </div>
      <Add handle={handle} />
      <Why />
      <OurChief />
      <Departments />
      <Capacity />
      <News />
      <Faq />
      <Say />
    </div>
  );
}
