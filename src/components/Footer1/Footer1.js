import { useMemo } from "react";
import styles from "./Footer1.module.css";
const Footer1 = ({ accountActionText, propTop, propLeft, propWidth }) => {
  const importAccount1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupIcon1Style = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  return (
    <div className={styles.importAccount} style={importAccount1Style}>
      <div className={styles.accountFunctionListEntry}>
        <div className={styles.importAccount1}>{accountActionText}</div>
        <img className={styles.accountFunctionListEntryChild} alt="" />
      </div>
      <img
        className={styles.importAccountChild}
        alt=""
        style={groupIcon1Style}
      />
    </div>
  );
};

export default Footer1;