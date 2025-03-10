import "./Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";
import Logo from "/Image/logo.png";
import { Link } from "react-router-dom";
import {useState,useEffect } from "react";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Overview", path: "/About-Us/Overview" },
      { name: "Mission & Vision", path: "/About-Us/Mission&Vision" },
      { name: "Core Values", path: "/About-Us/Core-Values" },
      { name: "Messages", path: "/About-Us/Message" },
      { name: "Executive Committee", path:"/About-Us/Executive-Comittee"},
    ],
  },
  {
    name: "Services",
    dropdown: [
      { name: "Pharmacy Services", path: "/Services/Pharmacy-Services" },
      { name: "Physiotherapy Services" },
      { name: "OT Services" },
    ],
  },
  { name: "Doctors", path: "/Doctors" },
  {
    name: "Department",
    dropdown: [
      { name: "Dental", path: "/Department" },
      { name: "Dermatologist" },
      { name: "Cardiology" },
    ],
  },
  { name: "Career", path: "/Career" },
  {
    name: "Media",
    dropdown: [
      { name: "Image Gallery", path: "/Media" },
      { name: "Video Gallery" },
      { name: "Blogs" },
      { name: "News" },
    ],
  },
  { name: "Our Schedules", path: "/Our-Schedules" },
  { name: "Packages", path: "/Packages" },
];

export default function Navigation() {
  const [slideVisible, setslideVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setslideVisible(!slideVisible);
  };

  const Active = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScrollLock = () => {
      document.body.style.overflow = slideVisible ? "hidden" : "visible";
    };

    handleScrollLock();

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [slideVisible]);

  return (
    <div>
      <button
        className="menu-bar-icon"
        onClick={toggleMenu}
        style={{ float: "right", marginTop: "15px",borderStyle:"none",marginRight:"10px"}}
      >
        <GiHamburgerMenu />
      </button>
      <NavBarLarge />
      <div>
        {slideVisible && (
          <div
            style={{
              inset: "0px",
              position: "fixed",
              background: "rgba(0, 0, 0, 0.5)"
            }}
          >
            <div
              className="visibilityFrame"
              style={{
                backgroundColor: "white",
                width: "fit-content",
                height: "100%",
                position: "absolute",
                top: "0px",
                opacity: "1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "20px",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              >
                <img src={Logo} alt="logo" />
                <div>
                  <span
                    style={{
                      color: "#234CBB",
                      fontWeight: "bold",
                      fontSize: "14.65px",
                    }}
                  >
                    SCH Hospital Pvt. Ltd.
                  </span>
                  <p style={{ color: "#00A0AA" }}>Birjung-15, Nepal</p>
                </div>
                <button
                  onClick={toggleMenu}
                  style={{
                    marginLeft: "20%",
                    width: "20%",
                    height: "30px",
                    borderRadius: "20px",
                  }}
                >
                <RiCloseLargeFill/>
                </button>
              </div>
              <div
                className="three-lines"
                style={{overflowY: "auto" }}
              >
                <ul className="lines-list">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: "10px" }}
                      onClick={() => Active(index)}
                    >
                      <Link to={item.path || "#"}>
                        {item.name}
                        {item.dropdown && <IoMdArrowDropdown size={15} />}
                      </Link>
                      {item.dropdown && activeIndex === index && (
                        <Dropdown1 items={item.dropdown} />
                      )}
                    </li>
                  ))}
                </ul>
                <Link to="/Contact-Us"
                  style={{
                    borderStyle: "none",
                    borderRadius: "2rem",
                    padding: "0.8rem",
                    marginTop: "20px",
                    backgroundColor: "#234CBB",
                    color: "white",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NavBarLarge() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  return (
    <div className="navbar">
      <Link className="link1 nav-link-flex" to="/">
        <div className="logo-section">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <span
              style={{
                color: "#234CBB",
                fontWeight: "bold",
                fontSize: "14.65px",
              }}
            >
              SCH Hospital Pvt. Ltd.
            </span>
            <p style={{ color: "#00A0AA" }}>Birjung-15, Nepal</p>
          </div>
        </div>
      </Link>
      <div className="navbar-right">
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="nav-link-flex"
              onMouseOver={() => setActiveDropdown(item.name)}
              onMouseOut={() => setActiveDropdown(null)}
            >
              <Link to={item.path || "#"}>
                {item.name} {item.dropdown && <IoMdArrowDropdown size={15} />}
              </Link>
              {item.dropdown && activeDropdown === item.name && (
                <Dropdown items={item.dropdown} />
              )}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/Contact-Us"
        className="contact-button"
        style={{
          borderStyle: "none",
          borderRadius: "2rem",
          padding: "0.8rem",
          backgroundColor: "#234CBB",
          color: "white",
        }}
      >
        Contact Us
      </Link>
    </div>
  );
}

function Dropdown({ items }) {
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-menu-li">
        {items.map((subItem, index) => (
          <li key={index}>
            {subItem.path ? (
              <Link to={subItem.path}>{subItem.name}</Link>
            ) : (
              subItem.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Dropdown1({ items }) {
  return (
    <>
      <ul style={{ listStyleType: "none", padding: "10px" }}>
        {items.map((subItem, index) => (
          <li key={index}>
            {subItem.path ? (
              <Link to={subItem.path}>{subItem.name}</Link>
            ) : (
              subItem.name
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

// import "./Navigation.css";
// import { RiMenu3Fill } from "react-icons/ri";
// import { IoMdArrowDropdown } from "react-icons/io";
// import Logo from "/Image/logo.png";
// import {Link} from "react-router-dom";
// import { useState } from "react";
// export default function Navigation() {
//   const [value1,setValue1]=useState(false);
//   const [value2,setValue2]=useState(false);
//   const [value3,setValue3]=useState(false);
//   const [value4,setValue4]=useState(false);
//   function HoverFunction1(){
//       setValue1(true);
//   }
//   function HoverFunction2(){
//       setValue2(true);
//   }
//   function HoverFunction3(){
//       setValue3(true);
//   }
//   function HoverFunction4(){
//       setValue4(true);
//   }

//   return (
//     <div className="navbar">
//       <Link className="link1 nav-link-flex" to="/">
//         <div className="logo-section">
//           <div>
//             <img src={Logo} alt="logo" />
//           </div>
//           <div>
//             <span
//               style={{
//                 color: "#234CBB",
//                 fontWeight: "bold",
//                 fontSize: "14.65px",
//               }}
//             >
//               SCH HospitalPvt.Ltd.
//             </span>
//             <p style={{ color: "#00A0AA" }}>Birjung-15, Nepal</p>
//           </div>
//         </div>
//       </Link>
//       <div className="navbar-right">
//         <ul>
//           <Link className="nav-link-flex" to="/">Home</Link>
//           <Link className="nav-link-flex" onMouseOver={HoverFunction1} onMouseOut={()=>setValue1(false)}>About Us <IoMdArrowDropdown size={15}/> {value1&&<Dropdown1/>} </Link>
//           <Link className="nav-link-flex" onMouseOver={HoverFunction2} onMouseOut={()=>setValue2(false)}>Services <IoMdArrowDropdown size={15}/> {value2&&<Dropdown2/>}</Link>
//           <Link className="nav-link-flex" to="/Doctors">Doctors</Link>
//           <Link className="nav-link-flex" onMouseOver={HoverFunction3} onMouseOut={()=>setValue3(false)}>Department <IoMdArrowDropdown size={15}/> {value3&&<Dropdown3/>}</Link>
//           <Link className="nav-link-flex" to="/Career">Career</Link>
//           <Link className="nav-link-flex" onMouseOver={HoverFunction4} onMouseOut={()=>setValue4(false)}>Media <IoMdArrowDropdown size={15}/> {value4&&<Dropdown4/>}</Link>
//           <Link className="nav-link-flex" to="/Our-Schedules">Our Schedules</Link>
//           <Link className="nav-link-flex" to="/Packages">Packages</Link>
//         </ul>
//       </div>
//       <button
//         style={{
//           borderStyle: "none",
//           borderRadius: "2rem",
//           padding: "0.8rem",
//           backgroundColor: "#234CBB",
//           color: "white",
//         }}
//       >
//         Contact Us
//       </button>
//       <RiMenu3Fill className="menu-bar-icon"/>
//     </div>
//   );
// }

// function Dropdown1() {
//   return (
//     <div style={{position:"absolute",top:"103px",left:"380px",backgroundColor:"white",paddingLeft:"20px",paddingTop:"23px",paddingRight:"20px",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//         <ul style={{listStyleType:"none",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//             <Link to="/About-Us/Overview">Overview</Link>
//             <Link to="/About-Us/Mission&Vision">Mission & Vision</Link>
//             <Link to="/About-Us/Core-Values">Core Values</Link>
//             <Link>Messages</Link>
//             <Link>Executive Committee</Link>
//         </ul>
//     </div>
//   )
// }

// function Dropdown2() {
//   return (
//     <div style={{position:"absolute",top:"103px",left:"480px",backgroundColor:"white",paddingLeft:"20px",paddingTop:"23px",paddingRight:"20px",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//         <ul style={{listStyleType:"none",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//             <Link to="/Services/Pharmacy-Services">Pharmacy Services</Link>
//             <Link>Physiotherapy Services</Link>
//             <Link>Ot Services</Link>
//         </ul>
//     </div>
//   )
// }

// function Dropdown3() {
//   return (
//     <div style={{position:"absolute",top:"103px",left:"670px",backgroundColor:"white",paddingLeft:"20px",paddingTop:"23px",paddingRight:"20px",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//         <ul style={{listStyleType:"none",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//             <Link to="/Department">Dental</Link>
//             <Link>Drmatologist</Link>
//             <Link>Cardiology</Link>
//         </ul>
//     </div>
//   )
// }

// function Dropdown4() {
//   return (
//     <div style={{position:"absolute",top:"103px",left:"860px",backgroundColor:"white",paddingLeft:"20px",paddingTop:"23px",paddingRight:"20px",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//         <ul style={{listStyleType:"none",display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>
//             <Link to="/Media">Image Gallery</Link>
//             <Link>Video Gallery</Link>
//             <Link>Blogs</Link>
//             <Link>News</Link>
//         </ul>
//     </div>
//   )
// }
