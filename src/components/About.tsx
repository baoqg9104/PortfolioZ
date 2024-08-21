import styles from "../styles/About.module.css"
import aboutMe from "../assets/about-me.png"
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {

  const [isHoverGmail, setIsHoverGmail] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("baoqg9104@gmail.com");
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 1000);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/PortfolioZ/'); 
  }

  return (
    <>
      <div className={`container-fluid ${styles.backgroundAboutMe}`}>
        <div className="row h-100">
          <div className="col-5 d-flex flex-column justify-content-center align-items-center mt-3">
            <div className="mb-2">
              <h1 className="fw-bold" style={{ fontSize: "60px" }}>
                About <span style={{ color: "#03c7d1" }}>me</span>
              </h1>
            </div>
            <div className="fs-5">
              <p>
                Full name: <span>Quach Gia Bao</span>
              </p>
              <p>
                Date of birth: <span>09/01/2004</span>
              </p>
              <p>
                Education: <span>FPT University</span>
              </p>
              <p>
                Phone: <span>0967 508 274</span>
              </p>
              <p>
                Email: <span>baoqg9104@gmail.com</span>
              </p>
            </div>
            <div className="w-100" style={{ paddingLeft: "170px" }}>
              <button
                className={`text-center text-light btn rounded rounded-5 ps-4 pe-4 p-2 ${styles.aboutMe}`}
                style={{ backgroundColor: "#00adb5", fontSize: "18px" }}
                onClick={handleNavigate}
              >
                Home
              </button>
            </div>
          </div>

          <div className="col-6 d-flex flex-column align-items-center">
            <div className="">
              <img src={aboutMe} alt="" />
            </div>
          </div>
          <div className="col-1 d-flex flex-column justify-content-center align-items-center">
            <a
              className={`${styles.brandIcon} mb-4`}
              href="https://www.facebook.com/gbao307"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#ffffff", fontSize: "23px" }}
              />
            </a>
            <div
              className={`${styles.brandIcon} mb-4 ${styles.gmailIcon}`}
              onMouseEnter={() => setIsHoverGmail(true)}
              onMouseLeave={() => setIsHoverGmail(false)}
              onClick={handleCopy}
            >
              {!isHoverGmail ? (
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ffffff", fontSize: "23px" }}
                />
              ) : (
                <div>
                  {!isCopy && (
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{
                        color: "#ffffff",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                    />
                  )}

                  {isCopy ? <>Copied!</> : <>baoqg9104@gmail.com</>}
                </div>
              )}
            </div>

            <a
              className={`${styles.brandIcon} mb-4`}
              href="https://github.com/baoqg9104"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#ffffff", fontSize: "27px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;