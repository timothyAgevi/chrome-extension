import { Button } from "@mui/material";
// import ETHAssetContainer from "../components/ETHAssetContainer/";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer"
import AccountContainer from "../../components/AccountContainer/AccountContainer";
import styles from "./DATAToken1M.module.css";
const DATAToken1M = () => {
  return (
    <div className={styles.dataToken1m}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <Button
        className={styles.transferButton}
        sx={{ width: 148 }}
        variant="contained"
        color="primary"
        href="/send-01"
      >
        Transfer
      </Button>
      <Button
        className={styles.depositButton}
        sx={{ width: 149 }}
        variant="contained"
        color="primary"
        href="/deposit"
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
        transactionId="/eth-icon11.svg"
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
        src="/account-connected13.svg"
      />
      <img
        className={styles.tokenPageCloseHover}
        alt=""
        src="/token-page-close-hover.svg"
      />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white3.svg"
      />
      <AccountContainer propTop="25.5rem" />
      <div className={styles.homeRuleD} />
      <div className={styles.dataTokenView}>
        <div className={styles.dataTokenViewChild} />
        <div className={styles.dataTokenViewItem} />
        <div
          className={styles.findHiddenTokens}
        >{`Find hidden tokens in Settings > General `}</div>
        <div className={styles.hideToken}>Hide token</div>
        <div className={styles.smallToggleOff}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img className={styles.groupItem} alt="" src="/ellipse-16.svg" />
          </div>
        </div>
        <div className={styles.periodSelectorBg} />
        <div className={styles.h}>24H</div>
        <div className={styles.m}>3M</div>
        <div className={styles.m1}>1M</div>
        <img className={styles.sparklineNIcon} alt="" src="/sparkline-n.svg" />
        <div className={styles.m2}>{`+$0.012 (2.1%) 1M `}</div>
        <div className={styles.div1}>{`$0.056  `}</div>
        <Button
          className={styles.primaryButton}
          variant="contained"
          color="primary"
          href="/send-2a"
        >
          Transfer
        </Button>
        <button className={styles.outlineButton}>
          <div className={styles.deposit}>Deposit</div>
        </button>
        <div className={styles.dataTokenViewInner} />
        <div className={styles.lineDiv} />
        <img className={styles.groupIcon} alt="" src="/group-123.svg" />
        <div className={styles.data}>616.875 DATA</div>
        <div className={styles.div2}>$30.85</div>
      </div>
    </div>
  );
};

export default DATAToken1M;