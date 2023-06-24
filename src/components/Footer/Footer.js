import { useMemo } from "react";
import styles from "./Footer.module.css";
const Footer = ({ productId, propOpacity }) => {
  const connectWalletStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className={styles.connectWallet} style={connectWalletStyle}>
      <div className={styles.accountFunctionListEntry}>
        <div className={styles.connectHardwareWallet}>
          Connect hardware wallet
        </div>
        <img
          className={styles.accountFunctionListEntryChild}
          alt=""
          src="/group-40.svg"
        />
      </div>
      <img className={styles.connectWalletChild} alt="" src={productId} />
    </div>
  );
};

export default Footer;