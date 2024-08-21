import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Navbar.module.css";
import {
  faBars,
  faBriefcase,
  faComment,
  faEnvelope,
  faHouse,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  // State to manage whether the navbar is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function
  const toggleNavbar = () => {
    setIsExpanded((prevState) => !prevState);
  };

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth >= 992) {
      // Assuming 992px is your breakpoint for larger screens
      setIsExpanded(false);
    }
  };

  // Set up the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100">
        <div className="container">
          <div className={`col-6 fw-bold ${styles.brand}`}>
            Portfolio<span>Z</span>
          </div>

          <div
            className={`navbar-toggler ${styles.navbarToggle}`}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon
              icon={isExpanded ? faXmark : faBars} // Conditionally render icon
              style={{ color: "#ffffff", fontSize: "25px", padding: "2px" }}
            />
          </div>

          <div
            className={`collapse navbar-collapse fs-5 ${
              isExpanded && styles.navbarCollapse
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <div>
                {isExpanded && (
                  <FontAwesomeIcon
                    icon={faHouse}
                    style={{
                      color: "#ffffff",
                      display: "inline-block",
                      marginBottom: "2px",
                    }}
                  />
                )}
                {/* <a
                  className={`nav-link me-5 d-inline ms-3 ${
                    isExpanded ? styles.navLinkExpanded : styles.navLink
                  } ${activePage === "Home" && styles.active}`}
                  aria-current="page"
                  href="/Home"
                  onClick={() => setActivePage("Home")}
                >
                  Home
                </a>{" "} */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link me-5 d-inline ms-3 ${
                      isExpanded ? styles.navLinkExpanded : styles.navLink
                    } ${isActive ? styles.active : ""}`
                  }
                >
                  Home
                </NavLink>
              </div>
              <hr className="text-light" />
              <div>
                {isExpanded && (
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{
                      color: "#ffffff",
                      display: "inline-block",
                    }}
                  />
                )}
                {/* <a
                  className={`nav-link me-5 d-inline ms-3 ${
                    isExpanded ? styles.navLinkExpanded : styles.navLink
                  } ${activePage === "Project" && styles.active}`}
                  href="/Project"
                  onClick={() => setActivePage("Project")}
                >
                  Project
                </a>{" "} */}
                <NavLink
                  to="/Project"
                  className={({ isActive }) =>
                    `nav-link me-5 d-inline ms-3 ${
                      isExpanded ? styles.navLinkExpanded : styles.navLink
                    } ${isActive ? styles.active : ""}`
                  }
                >
                  Project
                </NavLink>
              </div>
              <hr className="text-light" />

              <div>
                {isExpanded && (
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{
                      color: "#ffffff",
                      display: "inline-block",
                    }}
                  />
                )}
                {/* <a
                  className={`nav-link me-5 d-inline ms-3 ${
                    isExpanded ? styles.navLinkExpanded : styles.navLink
                  } ${activePage === "Blog" && styles.active}`}
                  href="/Blog"
                  onClick={() => setActivePage("Blog")}
                >
                  Blog
                </a>{" "} */}
                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    `nav-link me-5 d-inline ms-3 ${
                      isExpanded ? styles.navLinkExpanded : styles.navLink
                    } ${isActive ? styles.active : ""}`
                  }
                >
                  Blog
                </NavLink>
              </div>
              <hr className="text-light" />

              <div>
                {isExpanded && (
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      color: "#ffffff",
                      display: "inline-block",
                    }}
                  />
                )}

                {/* <a
                  className={`nav-link me-5 d-inline ms-3 ${
                    isExpanded ? styles.navLinkExpanded : styles.navLink
                  } ${activePage === "Contact" && styles.active}`}
                  href="/Contact"
                  onClick={() => setActivePage("Contact")}
                >
                  Contact
                </a> */}
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `nav-link me-5 d-inline ms-3 ${
                      isExpanded ? styles.navLinkExpanded : styles.navLink
                    } ${isActive ? styles.active : ""}`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
