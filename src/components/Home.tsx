import styles from "../styles/Home.module.css";
import avatar from "../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isHoverGmail, setIsHoverGmail] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("baoqg9104@gmail.com");
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 1000);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/PortfolioZ/about");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "SE180449_QUACHGIABAO.pdf"; 
    link.download = "QuachGiaBao_CV.pdf"; 
    link.click();
  };


  return (
    <>
      <div className={`${styles.background} container-fluid`}>
        <div className={`row h-100`}>
          <div
            className={`col-5 d-flex flex-column justify-content-center align-items-center mb-5 ${styles.mainText}`}
            // style={{ paddingLeft: "200px" }}
          >
            <div className="w-100">
              <h2 className="fw-light" style={{ textAlign: "start" }}>
                Hello, I'm
              </h2>
            </div>
            <div className="w-100">
              <h1 style={{ fontSize: "55px" }}>Quach Gia Bao</h1>
            </div>
            <div className="d-flex w-100 mt-3">
              <button
                className={`text-center text-light btn rounded rounded-5 ps-3 pe-4 p-2 ${styles.aboutMe}`}
                style={{ backgroundColor: "#00adb5", fontSize: "18px" }}
                onClick={handleNavigate}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#ffffff", marginRight: "8px" }}
                />
                <span
                  style={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "550",
                  }}
                >
                  About me
                </span>
                {/* About me */}
              </button>
              <button
                onClick={handleDownload}
                className={`text-center ms-5 text-light btn rounded rounded-5 ps-4 pe-4 p-2 ${styles.downloadCV}`}
                style={{ backgroundColor: "#343840", fontSize: "18px" }}
              >
                Download CV{" "}
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ color: "#ffffff" }}
                />
              </button>
            </div>
          </div>
          <div
            className={`col-6 flex-column justify-content-center align-items-center ${styles.avatarContainer}`}
          >
            <div className={`${styles.avatar}`}>
              <img src={avatar} alt="" width={"450px"} />
            </div>
          </div>
          <div
            className={`col-1 d-flex justify-content-center align-items-center ${styles.brandList}`}
          >
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

export default Home;
