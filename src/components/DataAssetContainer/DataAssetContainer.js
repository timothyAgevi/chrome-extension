import { useMemo } from "react";
import styles from "./DataAssetContainer.module.css";
const DataAssetContainer = ({
  dataVetText,
  dataVetPriceText,
  dataVetImageUrl,
  propTop,
  propTop1,
  propLineHeight,
}) => {
  const dATAAssetStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const div1Style = useMemo(() => {
    return {
      top: propTop1,
      lineHeight: propLineHeight,
    };
  }, [propTop1, propLineHeight]);

  return (
    <div className={styles.dataAsset} style={dATAAssetStyle}>
      <div className={styles.dataListEntry}>
        <div className={styles.data}>{dataVetText}</div>
        <div className={styles.div} style={div1Style}>
          {dataVetPriceText}
        </div>
        <img className={styles.iconBg32px} alt="" src="/icon-bg-32px.svg" />
      </div>
      <img className={styles.dataIcon} alt="" src={dataVetImageUrl} />
    </div>
  );
};

export default DataAssetContainer;