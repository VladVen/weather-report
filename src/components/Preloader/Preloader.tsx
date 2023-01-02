import React from "react";
import { CircularProgress } from "@mui/material";
import styles from "./preloader.module.css";
export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <CircularProgress />
    </div>
  );
};
