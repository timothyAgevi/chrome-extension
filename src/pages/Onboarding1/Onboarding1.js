import { Button } from "@mui/material";
import styles from "./Onboarding1.module.css";

const Onboarding1 = () => {
  return (
    <div className={styles.onboarding1}>
      <div className={styles.yourGatewayToContainer}>
        <span className={styles.yourGatewayToContainer1}>
          <p
            className={styles.yourGatewayTo}
          >{`Your gateway to the decentralized web. Create a new account or import from `}</p>
          <p className={styles.yourGatewayTo}>your seed phrase.</p>
        </span>
      </div>
      <div className={styles.welcomeToCrypsenseContainer}>
        <span className={styles.yourGatewayToContainer1}>
          <p className={styles.yourGatewayTo}>{`Welcome to `}</p>
          <p className={styles.yourGatewayTo}>{`Crypsense Wallet `}</p>
        </span>
      </div>
      <img className={styles.qr1Icon} alt="" src="/qr-1@2x.png" />
      <div className={styles.ethButton}>
        <div className={styles.viewOnEtherscan}>View on Etherscan</div>
      </div>
      <div className={styles.exportKeyButton}>
        <div className={styles.viewOnEtherscan}>Export private key</div>
      </div>
      <Button
        className={styles.outlineButton}
        variant="contained"
        color="primary"
        href="/sign-up"
      >
        Import
      </Button>
      <Button
        className={styles.primaryButton}
        variant="contained"
        color="primary"
        href="/name-account"
      >
        Create account
      </Button>
      <img
        className={styles.onboarding1Child}
        alt=""
        src="/group-1000003011.svg"
      />
    </div>
  );
};

export default Onboarding1;