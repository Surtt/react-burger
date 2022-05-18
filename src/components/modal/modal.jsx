import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modla.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import cn from "classnames";

const modalRoot = document.getElementById("modal");

const Modal = ({ title, onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <div className={cn(styles.modal, "pt-10 pr-10 pb-10 pl-10")}>
        <div className={styles.modalHeader}>
          <p className="text text_type_main-large">{title}</p>
          <div className={styles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        <div className="mt-4">{children}</div>
      </div>
      <ModalOverlay />
    </>,
    modalRoot
  );
};

export default Modal;
