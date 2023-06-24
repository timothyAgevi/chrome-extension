import { useMemo } from "react";
import styles from "./ImportAccountContainer.module.css";
const ImportAccountContainer = ({ propOpacity }) => {
  const importAccountStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className={styles.importAccount} style={importAccountStyle}>
      <div className={styles.accountFunctionListEntry}>
        <div className={styles.importAccount1}>Import account</div>
        <img
          className={styles.accountFunctionListEntryChild}
          alt=""
          src="/group-40.svg"
        />
      </div>
      <img className={styles.importAccountChild} alt="" src="/group-116.svg" />
    </div>
  );
};

export default ImportAccountContainer;