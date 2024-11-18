import React, { useState, useRef } from "react";
import styles from "../styles/ProjectTag.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  _backgroundImage: string;
  name: string;
  technology: string;
  link: string;
  github: string;
  reference: string[];
}

function ProjectTag({
  _backgroundImage,
  name,
  technology,
  link,
  github,
  reference,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = event;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setDirection(getDirection(x, y));
    setIsHovered(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = event;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setDirection(getDirection(x, y));
    setIsHovered(false);
  };

  const getDirection = (x: number, y: number) => {
    if (y > 1 - x && y > x) return "bottom";
    if (y > 1 - x && y <= x) return "right";
    if (y <= 1 - x && y > x) return "left";
    return "top";
  };

  const variants = {
    enter: (direction: string) => {
      switch (direction) {
        case "left":
          return { x: "-100%", y: 0 };
        case "right":
          return { x: "100%", y: 0 };
        case "top":
          return { x: 0, y: "-100%" };
        case "bottom":
          return { x: 0, y: "100%" };
        default:
          return { x: 0, y: "-100%" };
      }
    },
    center: {
      x: 0,
      y: 0,
    },
    exit: (direction: string) => {
      switch (direction) {
        case "left":
          return { x: "-100%", y: 0 };
        case "right":
          return { x: "100%", y: 0 };
        case "top":
          return { x: 0, y: "-100%" };
        case "bottom":
          return { x: 0, y: "100%" };
        default:
          return { x: 0, y: "-100%" };
      }
    },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      ref={ref}
      className={styles.projectContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={openModal}
    >
      <div
        className={`${styles.project}`}
        style={{ backgroundImage: `url(${_backgroundImage})` }}
      />
      <motion.div
        className={styles.overlay}
        initial="enter"
        animate={isHovered ? "center" : "exit"}
        variants={variants}
        custom={direction}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
      >
        <span
          className="fs-2 fw-semibold text-center"
          style={{ textShadow: "2px 2px 5px black" }}
        >
          {name}
        </span>
      </motion.div>

      {isModalOpen && (
        <div className={styles.customModalOverlay} onClick={closeModal}>
          <div
            className={styles.customModal}
            onClick={(e) => e.stopPropagation()}
            style={{
              // backgroundImage: `url(${_backgroundImage})`,
              // backgroundSize: "80%",
              // backgroundRepeat: "no-repeat",
              // backgroundPositionX: "center",
              // backgroundPositionY: "15%",
              paddingTop: "10px",
            }}
          >
            <div className="row d-flex justify-content-center m-0">
              <a href={link} target="_blank" className="d-flex justify-content-center">
              <img
                src={_backgroundImage}
                style={{ width: "80%", marginTop: "15px"}}
                alt=""
              />
              </a>
            </div>

            <div className="row mt-3 text-center">
              <p style={{ color: "#adadad" }}>
                Project: <span style={{ color: "white" }}>{name}</span>
              </p>
              <p style={{ color: "#adadad" }}>
                Link:{" "}
                <a
                  className={styles.link}
                  target="_blank"
                  style={{ textDecoration: "none", color: "#02cdd6" }}
                  href={link}
                >
                  {link}
                </a>
              </p>
              <p style={{ color: "#adadad" }}>
                Technologies:{" "}
                <span style={{ color: "white" }}>{technology}</span>
              </p>

              <p style={{ color: "#adadad" }}>
                Github:{" "}
                <a
                  className={styles.link}
                  href={github}
                  target="_blank"
                  style={{ textDecoration: "none", color: "#02cdd6" }}
                >
                  {github}
                </a>
              </p>
              <p style={{ color: "#adadad" }}>
                References: &nbsp;&nbsp;&nbsp;
                {reference.map((item, index) => (
                  <a
                    className={styles.link}
                    key={index}
                    href={item}
                    target="_blank"
                    style={{ textDecoration: "none", color: "#02cdd6" }}
                  >
                    <span style={{ color: "white" }}>({index + 1})</span> {item}
                    {index < reference.length - 1 && ", "}
                    &nbsp;&nbsp;&nbsp;
                  </a>
                ))}
              </p>
            </div>

            <button onClick={closeModal} className={styles.closeButton}>
              <FontAwesomeIcon
                icon={faXmark} // Conditionally render icon
                style={{ color: "#ffffff", fontSize: "35px", padding: "2px" }}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectTag;
