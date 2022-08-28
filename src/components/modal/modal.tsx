import React, { FC, ReactNode, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

import styles from "./modla.module.css";
import { useHistory } from "react-router-dom";

interface IModal {
  title?: string;
  onClose?: () => void;
  children: ReactNode;
}

const modalRoot = document.getElementById("modal");

const Modal: FC<IModal> = ({ title, onClose, children }) => {
  const history = useHistory();

  const handleClose = useCallback(() => {
    return onClose ? onClose() : history.goBack();
  }, [onClose, history]);

  useEffect(() => {
    const handleEscapeClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, [handleClose]);
  return ReactDOM.createPortal(
    <>
      <div className={cn(styles.modal, "pt-10 pr-10 pl-10 pb-10")}>
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
    modalRoot as Element
  );
};

export default Modal;
