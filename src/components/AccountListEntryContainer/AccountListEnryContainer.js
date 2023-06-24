import { useMemo } from "react";
import styles from "./AccountListEnryContainer.module.css";

const AccountListEntryContainer = ({
  driverName,
  dailyDriverAmount,
  dailyDriverId,
  dailyDriverIds,
  propTop,
}) => {
  const accountListEntryStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.accountListEntry} style={accountListEntryStyle}>
      <div className={styles.dailyDriver}>{driverName}</div>
      <div className={styles.div}>{dailyDriverAmount}</div>
      <div className={styles.accountMenu}>
        <div className={styles.accountIconWrapper}>
          <div className={styles.accountIconWrapper}>
            <img className={styles.sqrcleIcon} alt="" src="/sqrcle.svg" />
            <img className={styles.idntcn1Icon} alt="" src={dailyDriverId} />
          </div>
        </div>
      </div>
      <img className={styles.accConnectedIcon} alt="" src={dailyDriverIds} />
    </div>
  );
};

export default AccountListEntryContainer;