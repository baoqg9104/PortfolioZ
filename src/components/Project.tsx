import { useState } from "react";
import styles from "../styles/Project.module.css";
import AllProject from "./AllProject";
import WebProject from "./WebProject";
import GameProject from "./GameProject";
import AppProject from "./AppProject";

function Project() {
  const [activeItem, setActiveItem] = useState("All");

  return (
    <>
      <div
        className={`container-fluid d-flex flex-column align-items-center ${styles.background}`}
        style={{ paddingTop: "90px" }}
      >
        <div className="row">
          <h1
            className="fw-bold text-uppercase"
            style={{
              fontSize: "50px",
              color: "white",
              // textShadow: "1.5px 1.5px 3px black",
            }}
          >
            My{" "}
            <span style={{ color: "#00b4be", filter: "brightness(1.2)" }}>
              projects
            </span>
          </h1>
        </div>
        <div className="row w-100 mt-3">
          <div className="col d-flex justify-content-center">
            <div
              className={`btn rounded-5 fw-medium fs-5 ps-4 pe-4 ${
                styles.filterItem
              } ${activeItem === "All" ? styles.active : ""}`}
              onClick={() => setActiveItem("All")}
            >
              <span>All</span>
            </div>
            <div
              className={`btn rounded-5 fw-medium fs-5 ps-4 pe-4 ${
                styles.filterItem
              } ${activeItem === "Web" ? styles.active : ""}`}
              onClick={() => setActiveItem("Web")}
            >
              <span>Web</span>
            </div>
            <div
              className={`btn rounded-5 fw-medium fs-5 ps-4 pe-4 ${
                styles.filterItem
              } ${activeItem === "Game" ? styles.active : ""}`}
              onClick={() => setActiveItem("Game")}
            >
              <span>Game</span>
            </div>
            <div
              className={`btn rounded-5 fw-medium fs-5 ps-4 pe-4 ${
                styles.filterItem
              } ${activeItem === "App" ? styles.active : ""}`}
              onClick={() => setActiveItem("App")}
            >
              <span>App</span>
            </div>
          </div>
        </div>

        {activeItem === "All" && <AllProject />}
        {activeItem === "Web" && <WebProject />}
        {activeItem === "Game" && <GameProject />}
        {activeItem === "App" && <AppProject />}
      </div>
    </>
  );
}

export default Project;
