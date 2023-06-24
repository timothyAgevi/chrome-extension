import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NameAccount.module.css";
import { Link } from "react-router-dom";

const NameAccount = () => {
  const navigate = useNavigate();
  const [accountName, setAccountName] = useState("");

  const onTextSelectedClick = useCallback(() => {
    navigate("/name-account2");
  }, [navigate]);

  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
  };

  return (
    <div className={styles.onboarding5}>
      <div className={styles.beforeYouStart}>
        Before you start, you can name your default Crypsense Wallet account.
        This is optional, but might help you keep track of what the account is
        for.
      </div>
      <div className={styles.nameYourAccount}>Name your account</div>
      <img className={styles.qr1Icon} alt="" src="/qr-11@2x.png" />
      <div className={styles.ethButton}>
        <div className={styles.ethButtonChild} />
        <div className={styles.viewOnEtherscan}>View on Etherscan</div>
      </div>
      <div className={styles.exportKeyButton}>
        <div className={styles.ethButtonChild} />
        <div className={styles.viewOnEtherscan}>Export private key</div>
      </div>
      <Link  to= "/" className={styles.outlineButton}>
        <div className={styles.back}>Back</div>
      </Link>
      <Link to="/save-seedphrase" className={styles.primaryButton}>
        <div className={styles.getStarted}>Get started</div>
      </Link>
      <div className={styles.spBg} />
      <div className={styles.onboarding5Inner}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.accountName}>Account name</div>
      <input
        className={styles.accountInput}
        type="text"
        value={accountName}
        onChange={handleAccountNameChange}
      />
      <div className={styles.textSelected} onClick={onTextSelectedClick} />
      <div className={styles.onboarding5Child} />
    </div>
  );
};

export default NameAccount;
