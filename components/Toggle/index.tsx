"use client";

import type { BaseSyntheticEvent } from "react";
import { useState } from "react";
import "./style.css";

import { motion } from "framer-motion";

const Toogle = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSwitch = (e: BaseSyntheticEvent) => setIsActive(e.target.checked);
  return (
    <div className="switch" data-active={isActive}>
      <input
        id="input-switch"
        type="checkbox"
        checked={isActive}
        onChange={toggleSwitch}
      />
      <motion.label className="handle" layout htmlFor="input-switch" />
    </div>
  );
};

export default Toogle;
