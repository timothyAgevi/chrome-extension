import styles from "./HistoryItem2Container.module.css";
const HistoryItem2Container = () => {
  return (
    <div className={styles.historyListItem2}>
      <div className={styles.contractInteraction}>Contract interaction</div>
      <div className={styles.vet}>-0.132566 VET</div>
      <div className={styles.div}>$52.09</div>
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
        <div className={styles.confirmed}>CONFIRMED</div>
      </div>
      <div className={styles.historyListItem2Child} />
    </div>
  );
};

export default HistoryItem2Container;