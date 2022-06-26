import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import cn from "classnames";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

import styles from "./modla.module.css";
import { useHistory } from "react-router-dom";

const Modal = ({ title, onClose, children }) => {
  const history = useHistory();
  const modalRoot = document.getElementById("modal");

  const handleClose = useCallback(() => {
    return onClose ? onClose() : history.goBack();
  }, [onClose, history]);

  useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, [handleClose]);
  return ReactDOM.createPortal(
    <>
      <div className={cn(styles.modal, "pt-10 pr-10 pl-10")}>
        <div className={styles.modalHeader}>
          <p className="text text_type_main-large">{title}</p>
          <div className={styles.close} onClick={handleClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className="mt-4">{children}</div>
      </div>
      <ModalOverlay onClose={handleClose} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;
