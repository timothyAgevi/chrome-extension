import { useMemo } from "react";
import styles from "./ETHAssetContainer.module.css";
const ETHAssetContainer = ({
  cryptoAmount,
  fiatAmount,
  transactionId,
  propTop,
  propTop1,
  propLineHeight,
}) => {
  const eTHAssetStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const divStyle = useMemo(() => {
    return {
      top: propTop1,
      lineHeight: propLineHeight,
    };
  }, [propTop1, propLineHeight]);

  return (
    <div className={styles.ethAsset} style={eTHAssetStyle}>
      <div className={styles.tokenListEntry}>
        <div className={styles.eth}>{cryptoAmount}</div>
        <div className={styles.div} style={divStyle}>
          {fiatAmount}
        </div>
        <img className={styles.iconBg32px} alt="" src="/icon-bg-32px.svg" />
      </div>
      <img className={styles.ethIcon} alt="" src={transactionId} />
    </div>
  );
};

export default ETHAssetContainer;