import styles from "./HistoryItemContainer.module.css";
const HistoryItemContainer = () => {
  return (
    <div className={styles.historyListItem1}>
      <div className={styles.sentEth}>Sent ETH</div>
      <div className={styles.eth}>-0.078095 ETH</div>
      <div className={styles.div}>$30.69</div>
      <div className={styles.eth1}>
        <div className={styles.metamaskSecondPass}>
          <div className={styles.metamaskSecondPass}>
            <div className={styles.metamaskSecondPass}>
              <img className={styles.ovalIcon} alt="" src="/icon-bg-32px.svg" />
              <img
                className={styles.identicon2}
                alt=""
                src="/identicon-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.pending}>PENDING</div>
      </div>
    </div>
  );
};

export default HistoryItemContainer;