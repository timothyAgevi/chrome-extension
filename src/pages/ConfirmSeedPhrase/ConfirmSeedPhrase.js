import styles from "./ConfirmSeedPhrase.module.css";
import { Link } from "react-router-dom";

const ConfirmSeedPhrase = () => {
  return (
    <div className={styles.onboarding3a}>
      <div className={styles.confirmYourSeed}>Confirm your seed phrase</div>
      <img className={styles.qr1Icon} alt="" src="/qr-11@2x.png" />
      <div className={styles.ethButton}>
        <div className={styles.ethButtonChild} />
        <div className={styles.viewOnEtherscan}>View on Etherscan</div>
      </div>
      <div className={styles.exportKeyButton}>
        <div className={styles.ethButtonChild} />
        <div className={styles.viewOnEtherscan}>Export private key</div>
      </div>
      <Link to="/save-seedphrase" className={styles.outlineButton}>
        <div className={styles.back}>Back</div>
      </Link>
      <Link to ="/sign-in" className={styles.primaryButton}>
        <div className={styles.confirm}>Confirm</div>
      </Link>
      
      <div className={styles.spBg} />
      <div className={styles.seedPhrase}>Seed phrase</div>
      <div className={styles.pleaseEnterYourContainer}>
        <span className={styles.pleaseEnterYourContainer1}>
          <p className={styles.pleaseEnterYour}>
            Please enter your the missing words to make
          </p>
          <p
            className={styles.pleaseEnterYour}
          >{`sure you’ve stored your seed phrase correctly. `}</p>
          <p className={styles.pleaseEnterYour}>
            You cannot recover your account without it.
          </p>
        </span>
      </div>
      <div className={styles.seedWord}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>1</div>
        </div>
        <div className={styles.big}>big</div>
      </div>
      <div className={styles.seedWord1}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>4</div>
        </div>
        <div className={styles.big}>face</div>
      </div>
      <div className={styles.seedWord2}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.inner} alt="" src="/ellipse-181.svg" />
          <div className={styles.div1}>7</div>
        </div>
        <div className={styles.text} />
      </div>
      <div className={styles.seedWord3}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>10</div>
        </div>
        <div className={styles.big}>story</div>
      </div>
      <div className={styles.seedWord4}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>11</div>
        </div>
        <div className={styles.big}>bean</div>
      </div>
      <div className={styles.seedWord5}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>12</div>
        </div>
        <div className={styles.big} />
      </div>
      <div className={styles.seedWord6}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>8</div>
        </div>
        <div className={styles.big}>execute</div>
      </div>
      <div className={styles.onboarding3aChild} />
      <div className={styles.seedWord7}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>9</div>
        </div>
        <div className={styles.big}>feel</div>
      </div>
      <div className={styles.onboarding3aItem} />
      <div className={styles.seedWord8}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>5</div>
        </div>
        <div className={styles.big}>grace</div>
      </div>
      <div className={styles.seedWord9}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>6</div>
        </div>
        <div className={styles.big}>only</div>
      </div>
      <div className={styles.seedWord10}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>2</div>
        </div>
        <div className={styles.big}>hobby</div>
      </div>
      <div className={styles.onboarding3aInner} />
      <div className={styles.seedWord11}>
        <div className={styles.seedWordChild} />
        <div className={styles.div}>
          <img className={styles.child} alt="" src="/ellipse-18.svg" />
          <div className={styles.div1}>3</div>
        </div>
        <div className={styles.big}>regular</div>
      </div>
    </div>
  );
};

export default ConfirmSeedPhrase;