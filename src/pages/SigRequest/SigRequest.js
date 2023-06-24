import { Button } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import NewAccountContainer from "../../components/NewAccountContainer/NewAccountContainer";
import styles from "./SigRequest.module.css";
const SigRequest = () => {
  return (
    <div className={styles.sigRequest}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <Button
        className={styles.transferButton}
        sx={{ width: 148 }}
        variant="contained"
        color="primary"
      >
        Transfer
      </Button>
      <Button
        className={styles.depositButton}
        sx={{ width: 149 }}
        variant="contained"
        color="primary"
        href="/transaction-details"
      >
        Deposit
      </Button>
      <div className={styles.homeRuleC} />
      <div className={styles.homeRuleB} />
      <div className={styles.homeRuleA} />
      <div className={styles.tabSelectIndicator} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <ETHAssetContainer
        cryptoAmount="616.875 DATA"
        fiatAmount="$30.85"
        transactionId="/data-icon.svg"
        propTop="20.5rem"
        propTop1="2.56rem"
        propLineHeight="unset"
      />
      <ETHAssetContainer
        cryptoAmount="0.95 ETH"
        fiatAmount="$373.33"
        transactionId="/eth-icon3.svg"
        propTop="15.5rem"
        propTop1="2.5rem"
        propLineHeight="1rem"
      />
      <div className={styles.div}>$404.18</div>
      <div className={styles.eth}>1.0285 ETH</div>
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected12.svg"
      />
      <img className={styles.hamburgerIcon} alt="" src="/hamburger3.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white10.svg"
      />
      <NewAccountContainer
        tokenText="Add token"
        tokenId="/account-details-v33.svg"
        propTop="25.5rem"
        propLeft="-0.06rem"
        propOpacity="0.3"
      />
      <div className={styles.homeRuleD} />
      <div className={styles.requestSignature}>
        <div className={styles.yourSignatureIs}>
          Your signature is being requested by
        </div>
        <div className={styles.whiteBg} />
        <Button
          className={styles.primaryButton}
          variant="contained"
          color="primary"
        >
          Sign
        </Button>
        <Button
          className={styles.outlineButton}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
        <div className={styles.why}>Why ?</div>
        <div className={styles.thisIsAContainer}>
          <p
            className={styles.thisIsA}
          >{`This is a challenge created by Streamr `}</p>
          <p
            className={styles.thisIsA}
          >{`to prove private key ownership by signing `}</p>
          <p className={styles.thisIsA}>the following random data.</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.requestSignatureChild} />
        <div className={styles.requestSignatureItem} />
        <Button
          className={styles.requestSignatureInner}
          sx={{ width: 240 }}
          variant="contained"
          color="primary"
        >
          307ECXOoGvInJeOxKRw2fl0UahTIDX
        </Button>
        <div className={styles.randomDataTo}>Random data to sign</div>
        <div className={styles.streamrCoreParent}>
          <div className={styles.streamrCore}>Streamr Core</div>
          <img className={styles.dataLogoIcon} alt="" src="/data-logo.svg" />
          <div className={styles.streamrnetworkcore}>streamr.network/core</div>
        </div>
      </div>
    </div>
  );
};

export default SigRequest;