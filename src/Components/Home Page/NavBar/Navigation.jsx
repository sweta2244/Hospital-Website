import "./Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";
import Logo from "/Image/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Overview", path: "/About-Us/Overview" },
      { name: "Mission & Vision", path: "/About-Us/Mission&Vision" },
      { name: "Core Values", path: "/About-Us/Core-Values" },
      { name: "Messages", path: "/About-Us/Message" },
      { name: "Executive Committee", path: "/About-Us/Executive-Comittee" },
    ],
  },
  {
    name: "Services",
    dropdown: [
      { name: "Pharmacy Services", path: "/Services/Pharmacy-Services" },
      {
        name: "Physiotherapy Services",
        path: "/Services/Physiotheraphy-Services",
      },
      { name: "OT Services", path: "/Services/Ot-Services" },
    ],
  },
  { name: "Doctors", path: "/Doctors" },
  {
    name: "Department",
    dropdown: [
      { name: "Dental", path: "/Department/Dental" },
      { name: "Drmatologist", path: "/Department/Drmatologist" },
      { name: "Cardiology", path: "/Department/Cardiology" },
    ],
  },
  { name: "Career", path: "/Career" },
  {
    name: "Media",
    dropdown: [
      { name: "Image Gallery", path: "/Media/Image-Gallery" },
      { name: "Video Gallery", path: "/Media/Video-Gallery" },
      { name: "Blogs",path:"Media/Blogs" },
      { name: "News", path: "/News" },
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
  }, [slideVisible]);

  return (
    <div>
      <button
        className="menu-bar-icon"
        onClick={toggleMenu}
        style={{
          float: "right",
          marginTop: "15px",
          borderStyle: "none",
          marginRight: "10px",
        }}
      >
        <GiHamburgerMenu />
      </button>
      <NavBarLarge />
      <div>
        {slideVisible && (
          <div
            style={{
              position: "fixed",
              inset: "0px" /* top:0 bottom:0 right:0 left:0 */,
              background: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              className="visibilityFrame"
              style={{
                backgroundColor: "white",
                position: "absolute",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "20px",
                  paddingTop: "10px",
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
                    borderRadius: "50%",
                  }}
                >
                  <RiCloseLargeFill />
                </button>
              </div>
              <div className="three-lines" style={{ overflowY: "auto" }}>
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
                <Link
                  to="/Contact-Us"
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
              className="nav-link-flex "
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
      <Link
        to="/Contact-Us"
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
          <li className="dropdown-menu-list" key={index}>
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
