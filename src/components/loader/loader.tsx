import React, { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "./loader.module.css";

const override = {
  display: "block",
  margin: "auto",
};

interface ILoader {
  loading: boolean;
}

const Loader: FC<ILoader> = ({ loading }) => {
  return (
    <div className={styles.loaderWrapper}>
      <ClipLoader color="#ffffff" loading={loading} css={override} size={100} />
    </div>
  );
};

export default Loader;
