import React from "react";
import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ onClose }) => {
  return <div onClick={onClose} className={styles.modalOverlay} />;
};

export default ModalOverlay;
