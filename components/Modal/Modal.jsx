import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css"
import ReactDOM from "react-dom"
const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const handleClose = (e) => {
    e.preventDefault();
    onClose()
  };
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const modalContent = show ? <>
  <div className={styles.overlay} >
    <div className={styles.modal}>
        <div className={styles.header}>
            <span onClick={handleClose} style={{color:"white"}} >x</span>
        </div>
        <div className={styles.body}>{children}</div>
    </div>
  </div>
  </> : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  }
};

export { Modal };
