import React from "react";
import PropTypes from "prop-types";

import styles from "./modal-overlay.module.css";

const ModalOverlay = ({ onClose }) => {
  return <div onClick={onClose} className={styles.modalOverlay} />;
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
