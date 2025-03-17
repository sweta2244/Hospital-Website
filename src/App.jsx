import "./App.css";
import TopMessage from "./Components/Home Page/NavBar/TopMessage.jsx";
import Navigation from "./Components/Home Page/NavBar/Navigation.jsx";
import Header from "./Components/Home Page/Body/Header.jsx";
import HeroSection from "./Components/Home Page/Body/HeroSection.jsx";
import Service from "./Components/Home Page/Body/Service.jsx";
import Add from "./Components/Home Page/Body/Add.jsx";
import OurChief from "./Components/Home Page/Body/OurChief.jsx";
import Departments from "./Components/Home Page/Body/Departments.jsx";
import Capacity from "./Components/Home Page/Body/Capacity.jsx";
import News from "./Components/News/News.jsx";
import Faq from "./Components/Home Page/Body/Faq.jsx";
import Say from "./Components/Home Page/Footer/Say.jsx";
import Contact from "./Components/Home Page/Footer/Contact.jsx";
import Overview from "./Components/About Us/Overview.jsx";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import PharmacyServices from "./Components/Services/PharmacyServices.jsx";
import Departments1 from "./Components/Department/Departments1.jsx";
import Departments2 from "./Components/Department/Departments2.jsx";
import Departments3 from "./Components/Department/Departments3.jsx";
import Doctors from "./Components/Doctors/Doctors.jsx";
import Career from "./Components/Career/Career.jsx";
import Schedules from "./Components/Schedules/Schedules.jsx";
import Packages from "./Components/Packages/Packages.jsx";
import MissionVision from "./Components/About Us/MissionVision.jsx";
import CoreValues from "./Components/About Us/CoreValues.jsx";
import Message from "./Components/About Us/Message.jsx";
import { useState } from "react";
import Appointment from "./Components/Appointment/Appointment.jsx";
import ContactUs from "./Components/Contact Us/ContactUs.jsx";
import Why from "./Components/Home Page/Body/Why.jsx";
import Map from "./Components/Map/Map.jsx";
import Executive from "./Components/About Us/Executive.jsx";
import Department from "./Components/Department/Department.jsx";
import SubCareer from "./Components/Career/SubCareer.jsx";
import ImageGallery from "./Components/Media/ImageGallery.jsx";
import VideoGallery from "./Components/Media/VideoGallery.jsx";
import ScrollTop from "./Components/ScrollTop.jsx";
import Say1 from "./Components/Home Page/Footer/Say1.jsx";


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
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Homepage handle={handleAppointment} />} />
          <Route path="About-Us/Overview" element={<Overview />} />
          <Route path="About-Us/Mission&Vision" element={<MissionVision />} />
          <Route path="About-Us/Core-Values" element={<CoreValues />} />
          <Route path="About-Us/Message" element={<Message />} />
          <Route path="About-Us/Executive-Comittee" element={<Executive />} />

          <Route path="Department" element={<Department />} />

          <Route
            path="Services/Pharmacy-Services"
            element={<PharmacyServices />}
          />
          <Route
            path="Services/Physiotheraphy-Services"
            element={<PharmacyServices />}
          />
          <Route
            path="Services/Ot-Services"
            element={<PharmacyServices />}
          />
          
          <Route path="Doctors" element={<Doctors />} />

          <Route path="Department/Dental" element={<Departments1 />} />
          <Route path="Department/Drmatologist" element={<Departments2 handle={handleAppointment}/>} />
          <Route path="Department/Cardiology" element={<Departments3 />} />

          <Route path="News" element={<News />} />

          <Route path="Career" element={<Career />} />
          <Route path="SubCareer" element={<SubCareer />} />


          <Route path="Media/Image-Gallery" element={<ImageGallery />} />
          <Route path="Media/Video-Gallery" element={<VideoGallery />} />
          <Route path="Media/Blogs" element={<Homepage />} />

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
      <Say1/>
    </div>
  );
}
