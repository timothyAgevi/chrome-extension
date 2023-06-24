import { useMemo } from "react";
import styles from "./SignOutContainer.module.css";
const SignOutContainer = ({ imageIds, imageIds2, propTop, propTop1 }) => {
  const signOutStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const groupIconStyle = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  return (
    <div className={styles.signOut} style={signOutStyle}>
      <div className={styles.accountFunctionListEntry}>
        <div className={styles.signOut1}>Sign out</div>
        <img
          className={styles.accountFunctionListEntryChild}
          alt=""
          src={imageIds}
        />
      </div>
      <img
        className={styles.signOutChild}
        alt=""
        src={imageIds2}
        style={groupIconStyle}
      />
    </div>
  );
};

export default SignOutContainer;