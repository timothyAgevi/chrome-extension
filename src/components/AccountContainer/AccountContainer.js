import { useMemo } from "react";
import styles from "./AccountContainer.module.css";
const AccountContainer = ({ propTop }) => {
  const newAccountStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.newAccount} style={newAccountStyle}>
      <div className={styles.accountFunctionListEntry}>
        <div className={styles.addToken}>Add token</div>
        <img
          className={styles.accountFunctionListEntryChild}
          alt=""
          src="/group-40.svg"
        />
      </div>
      <img className={styles.xCloseIcon} alt="" src="/x-close.svg" />
    </div>
  );
};

export default AccountContainer;