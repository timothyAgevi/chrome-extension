import { useMemo } from "react";
import styles from "./NewAccountContainer.module.css";
const NewAccountContainer = ({
  tokenText,
  tokenId,
  propTop,
  propLeft,
  propOpacity,
}) => {
  const newAccount1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      opacity: propOpacity,
    };
  }, [propTop, propLeft, propOpacity]);

  return (
    <div className={styles.newAccount} style={newAccount1Style}>
      <div className={styles.accountFunctionListEntry}>
        <div className={styles.addToken}>{tokenText}</div>
        <img
          className={styles.accountFunctionListEntryChild}
          alt=""
          src="/group-40.svg"
        />
      </div>
      <img className={styles.accountDetailsV3} alt="" src={tokenId} />
    </div>
  );
};

export default NewAccountContainer;