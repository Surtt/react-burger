import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modla.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import cn from "classnames";

const Modal = ({ title, onClose, children }) => {
  const modalRoot = document.getElementById("modal");
  useEffect(() => {
    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, [onClose]);
  return ReactDOM.createPortal(
    <>
      <div className={cn(styles.modal, "pt-10 pr-10 pb-15 pl-10")}>
        <div className={styles.modalHeader}>
          <p className="text text_type_main-large">{title}</p>
          <div className={styles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className="mt-4">{children}</div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

export default Modal;
