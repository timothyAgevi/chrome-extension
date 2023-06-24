import styles from "./SaveSeedPhrase.module.css";
import { Link } from "react-router-dom";

const SaveSeedPhrase = () => {
  const copyToClipboard = () => {
    const seedPhrase = document.querySelector(`.${styles.seedPhrase}`);
    const seedWords = document.querySelectorAll(`.${styles.seedWord} .${styles.big}`);
    const seedPhraseText = Array.from(seedWords).map((word) => word.textContent).join(" ");
    
    navigator.clipboard.writeText(seedPhraseText)
      .then(() => {
        console.log("Seed phrase copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy seed phrase to clipboard:", error);
      });
  };

  return (
    <div className={styles.onboarding7}>
      <div className={styles.thisSeedPhrase}>
        This seed phrase allows you to recover your account. Write down the
        twelve word phrase below and keep it in a safe place.
      </div>
      
      <div className={styles.saveYourSeed}>Save your seed phrase</div>
      <img className={styles.qr1Icon} alt="" src="/qr-11@2x.png" />
      <div className={styles.ethButton}>
        <div className={styles.ethButtonChild} />
        <div className={styles.viewOnEtherscan}>View on Etherscan</div>
      </div>
      <div className={styles.exportKeyButton}>
        <div className={styles.ethButtonChild} />
        <div className={styles.viewOnEtherscan}>Export private key</div>
      </div>
      <div className={styles.spBg} />
      <div className={styles.seedPhrase}>Seed phrase</div>
      <div className={styles.seedWord}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>1</div>
        </div>
        <div className={styles.big}>big</div>
      </div>
      {/* ...remaining seed word divs... */}
      <div className={styles.column} />

      <Link to ="/confirm-seedphrase" className={styles.primaryButton}>
        <div className={styles.next}>Next</div>
      </Link>

      <Link to="/name-account"  className={styles.outlineButton}>
        <div className={styles.back}>Back</div>
      </Link>

      <button className={styles.copySeedPhrase1} onClick={copyToClipboard}>
        Copy seed phrase to clipboard
      </button>
    </div>
  );
};

export default SaveSeedPhrase;
