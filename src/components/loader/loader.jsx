import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "./loader.module.css";

const override = {
  display: "block",
  margin: "auto",
};

const Loader = ({ loading }) => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader
        color={"#ffffff"}
        loading={loading}
        css={override}
        size={100}
      />
    </div>
  );
};

export default Loader;
