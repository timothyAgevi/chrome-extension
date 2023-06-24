import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./OSIStart.module.css";
const OSIStart = () => {
  const navigate = useNavigate();

  const onOutlineButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.oSiStart}>
      <img className={styles.qr1Icon} alt="" src="/qr-11@2x.png" />
      <div className={styles.ethButton}>
        <div className={styles.viewOnEtherscan}>View on Etherscan</div>
      </div>
      <div className={styles.exportKeyButton}>
        <div className={styles.viewOnEtherscan}>Export private key</div>
      </div>
      <div className={styles.crypsenseWallet}>
        <span className={styles.crypsenseWalletTxtContainer}>
          <p className={styles.crypsense}>{`Crypsense `}</p>
          <p className={styles.crypsense}>Wallet</p>
        </span>
      </div>
      <Button
        className={styles.outlineButton}
        variant="contained"
        color="primary"
        href="/sign-in"
      >
        Sign in
      </Button>
      <Button
        className={styles.outlineButton1}
        variant="contained"
        color="primary"
        // href="/onboarding-1"
        href="/name-account"
        onClick={onOutlineButton1Click}
      >
        Create account
      </Button>
      <img
        className={styles.oSiStartChild}
        alt=""
        src="/group-10000030111.svg"
      />
    </div>
  );
};

export default OSIStart;