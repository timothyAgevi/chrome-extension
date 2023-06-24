import { useMemo } from "react";
import styles from "./NetworkContainer.module.css";
const NetworkContainer = ({ networkId, networkName, networkId1, propTop }) => {
  const networkListElementStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.networkListElement} style={networkListElementStyle}>
      <img className={styles.networkListElementChild} alt="" src={networkId} />
      <div className={styles.ropstenTestNetwork}>{networkName}</div>
      <img className={styles.tickIcon} alt="" src={networkId1} />
    </div>
  );
};

export default NetworkContainer;