import styles from "./NoAssetsN.module.css";

const NoAssetsN = () => {
  return (
    <div className={styles.noAssetsN}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <div className={styles.outlineButton}>
        <div className={styles.deposit}>Deposit</div>
      </div>
      <div className={styles.primaryButton}>
        <div className={styles.transfer}>Transfer</div>
      </div>
      <div className={styles.homeRuleC} />
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
        src="/account-connected11.svg"
      />
      <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white9.svg"
      />
      <div className={styles.emptyStateWarning}>
        <img
          className={styles.emptyState1}
          alt=""
          src="/empty-state-1@2x.png"
        />
        <div className={styles.emptyStateText}>
          <div className={styles.noAssetsYet}>No assets yet</div>
          <div className={styles.getStartedByContainer}>
            <span className={styles.getStartedByContainer1}>
              <p
                className={styles.getStartedBy}
              >{`Get started by sending some VET to your `}</p>
              <p
                className={styles.getStartedBy}
              >{`Crypsense Wallet account. You can also buy VET `}</p>
              <p className={styles.getStartedBy}>
                and other assets by clicking Deposit below.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAssetsN;