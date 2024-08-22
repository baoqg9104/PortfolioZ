import React, { useState, useRef } from "react";
import styles from "../styles/ProjectTag.module.css";
import { motion } from "framer-motion";

interface Props {
  _backgroundImage: string;
  name: string
}

function ProjectTag({ _backgroundImage, name }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<string>('');
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
    if (y > 1 - x && y > x) return 'bottom';
    if (y > 1 - x && y <= x) return 'right';
    if (y <= 1 - x && y > x) return 'left';
    return 'top';
  };

  const variants = {
    enter: (direction: string) => {
      switch (direction) {
        case 'left':
          return { x: '-100%', y: 0 };
        case 'right':
          return { x: '100%', y: 0 };
        case 'top':
          return { x: 0, y: '-100%' };
        case 'bottom':
          return { x: 0, y: '100%' };
        default:
          return { x: 0, y: '-100%' };
      }
    },
    center: {
      x: 0,
      y: 0,
    },
    exit: (direction: string) => {
      switch (direction) {
        case 'left':
          return { x: '-100%', y: 0 };
        case 'right':
          return { x: '100%', y: 0 };
        case 'top':
          return { x: 0, y: '-100%' };
        case 'bottom':
          return { x: 0, y: '100%' };
        default:
          return { x: 0, y: '-100%' };
      }
    },
  };

  return (
    <div
      ref={ref}
      className={styles.projectContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <span className="fs-2 fw-semibold text-center">{name}</span>
      </motion.div>
    </div>
  );
}

export default ProjectTag;
