import styles from "./TransactionHistoryItemContainer.module.css";
const TransactionHistoryItemContainer = () => {
  return (
    <div className={styles.historyListItem1}>
      <div className={styles.sentEth}>Sent ETH</div>
      <div className={styles.eth}>-0.078095 ETH</div>
      <div className={styles.div}>$30.69</div>
      <div className={styles.eth1}>
        <div className={styles.eth2}>
          <img className={styles.ovalIcon} alt="" />
          <img
            className={styles.identicon2}
            alt=""
            src="/identicon-21@2x.png"
          />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.pending}>PENDING</div>
      </div>
    </div>
  );
};

export default TransactionHistoryItemContainer;