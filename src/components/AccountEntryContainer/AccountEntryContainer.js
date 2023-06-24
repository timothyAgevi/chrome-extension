import { useMemo } from "react";
import styles from "./AccountEntryContainer.module.css"

const AccountEntryContainer = ({
  dailyDriverText,
  dailyDriverPrice,
  dailyDriverImageUrl,
  dailyDriverImageId,
  dailyDriverImageId2,
  propTop,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
}) => {
  const accountListEntry1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const dailyDriverStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const div2Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const accountMenuStyle = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const accConnectedIconStyle = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  return (
    <div className={styles.accountListEntry} style={accountListEntry1Style}>
      <div className={styles.dailyDriver} style={dailyDriverStyle}>
        {dailyDriverText}
      </div>
      <div className={styles.div} style={div2Style}>
        {dailyDriverPrice}
      </div>
      <div className={styles.accountMenu} style={accountMenuStyle}>
        <div className={styles.accountIconWrapper}>
          <div className={styles.accountIconWrapper}>
            <img
              className={styles.sqrcleIcon}
              alt=""
              src={dailyDriverImageUrl}
            />
            <img
              className={styles.idntcn1Icon}
              alt=""
              src={dailyDriverImageId}
            />
          </div>
        </div>
      </div>
      <img
        className={styles.accConnectedIcon}
        alt=""
        src={dailyDriverImageId2}
        style={accConnectedIconStyle}
      />
    </div>
  );
};

export default AccountEntryContainer;