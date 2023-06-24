import { Button } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import AccountContainer from "../../components/AccountContainer/AccountContainer";
import NetworkContainer from "../../components/NetworkContainer/NetworkContainer";
import styles from "./NetworkSelectKovan.module.css";
const NetworkSelectKovan = () => {
  return (
    <div className={styles.networkSelectKovan}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <Button
        className={styles.primaryButton}
        variant="contained"
        color="primary"
      >
        Transfer
      </Button>
      <Button
        className={styles.outlineButton}
        variant="contained"
        color="primary"
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
        cryptoAmount="33.013 ETH"
        fiatAmount="$373.33"
        transactionId="/eth-icon.svg"
        propTop="15.5rem"
        propTop1="2.5rem"
        propLineHeight="1rem"
      />
      <div className={styles.div}>$12973.44</div>
      <div className={styles.eth}>33.013 ETH</div>
      <div className={styles.accountNameBalance}>
        <div className={styles.dailyDriver}>Daily Driver</div>
        <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      </div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected7.svg"
      />
      <img className={styles.hamburgerIcon} alt="" src="/hamburger3.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white5.svg"
      />
      <AccountContainer />
      <div className={styles.networkSelect}>
        <NetworkContainer
          networkId="/ellipse-1.svg"
          networkName="Ropsten Test Network"
          networkId1="/tick.svg"
        />
        <div className={styles.networkListElement}>
          <img
            className={styles.networkListElementChild}
            alt=""
            src="/ellipse-36.svg"
          />
          <div className={styles.mainVeechainNetworkContainer}>
            <p className={styles.mainVeechainNetwork}>Main VeeChain Network</p>
          </div>
          <img className={styles.tickIcon} alt="" src="/tick.svg" />
        </div>
        <NetworkContainer
          networkId="/ellipse-11.svg"
          networkName="Kovan Test Network"
          networkId1="/tick.svg"
          propTop="8rem"
        />
        <NetworkContainer
          networkId="/ellipse-12.svg"
          networkName="Rinkeby Test Network"
          networkId1="/tick1.svg"
          propTop="12rem"
        />
        <NetworkContainer
          networkId="/ellipse-13.svg"
          networkName="Goerli Test Network"
          networkId1="/tick1.svg"
          propTop="16rem"
        />
        <NetworkContainer
          networkId="/ellipse-14.svg"
          networkName="Localhost 8545"
          networkId1="/tick1.svg"
          propTop="20rem"
        />
        <NetworkContainer
          networkId="/ellipse-15.svg"
          networkName="Create Custom"
          networkId1="/tick1.svg"
          propTop="24rem"
        />
        <img className={styles.rulesIcon} alt="" src="/rules.svg" />
      </div>
    </div>
  );
};

export default NetworkSelectKovan;