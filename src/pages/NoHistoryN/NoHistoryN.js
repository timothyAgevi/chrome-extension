import { Button } from "@mui/material";
import styles from "./NoHistoryN.module.css";
const NoHistoryN = () => {
  return (
    <div className={styles.noHistoryN}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <div className={styles.homeRuleC} />
      <Button
        className={styles.outlineButton}
        variant="contained"
        color="primary"
        href="/deposit"
      >
        Deposit
      </Button>
      <Button
        className={styles.primaryButton}
        variant="contained"
        color="primary"
        href="/send-01"
      >
        Transfer
      </Button>
      <div className={styles.tabSelectIndicator} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <div className={styles.div}>$0.00</div>
      <div className={styles.vet}>0.0000 VET</div>
      <div className={styles.accountNameBalance}>
        <div className={styles.dailyDriver}>Daily Driver</div>
        <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      </div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected10.svg"
      />
      <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white8.svg"
      />
      <div className={styles.emptyStateWarning}>
        <img
          className={styles.emptyState1}
          alt=""
          src="/empty-state-1@2x.png"
        />
        <div className={styles.emptyStateText}>
          <div className={styles.noTransactionsYet}>No transactions yet</div>
          <div className={styles.onceYouveMadeContainer}>
            <span className={styles.onceYouveMadeContainer1}>
              <p
                className={styles.onceYouveMade}
              >{`Once you've made some transactions, `}</p>
              <p className={styles.onceYouveMade}>they will appear here.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoHistoryN;