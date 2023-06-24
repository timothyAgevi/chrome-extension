import { useCallback } from "react";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import ImportAccountContainer from "../../components/ImportAccountContainer/ImportAccountContainer";
import Footer from "../../components/Footer/Footer";
import SignOutContainer from "../../components/SignOutContainer/SignOutContainer";
import NewAccountContainer from "../../components/NewAccountContainer/NewAccountContainer";

import { useNavigate } from "react-router-dom";
import styles from "./HomeConnectionsOpenESCon.module.css";
const HomeConnectionsOpenESCon = () => {
  const navigate = useNavigate();

  const onHotspotCloseClick = useCallback(() => {
    navigate("/dd-home");
  }, [navigate]);

  return (
    <div className={styles.homeConnectionsOpenEsCon}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1}>
          <div className={styles.balanceDisplayBg2} />
        </div>
      </div>
      <div className={styles.homeConnectionsOpenEsConChild} />
      <div className={styles.homeConnectionsOpenEsConItem} />
      <div className={styles.homeConnectionsOpenEsConInner} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.xCloseGrey} alt="" src="/x-close-grey.svg" />
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      <div className={styles.usd}>$404.18 USD</div>
      <div className={styles.eth}>1.0285 ETH</div>
      <div className={styles.lineDiv} />
      <div className={styles.transferButton}>
        <div className={styles.transferButtonChild} />
        <div className={styles.transfer}>Transfer</div>
      </div>
      <div className={styles.depositButton}>
        <div className={styles.depositButtonChild} />
        <div className={styles.deposit}>Deposit</div>
      </div>
      <div className={styles.brevetHover}>
        <div className={styles.brevetHoverChild} />
        <img className={styles.pathIcon} alt="" src="/path11.svg" />
      </div>
      <div className={styles.connectAccountHotspot} />
      <div className={styles.signTransactionHotspot} />
      <div className={styles.tokenPageHoverHotspot} />
      <img
        className={styles.accountNotConnected}
        alt=""
        src="/account-not-connected1.svg"
      />
      <ETHAssetContainer
        cryptoAmount="0.80 ETH"
        fiatAmount="$165.91"
        transactionId="/eth-icon11.svg"
        propTop="15.5rem"
        propTop1="2.5rem"
        propLineHeight="1rem"
      />
      <ETHAssetContainer
        cryptoAmount="616.875 DATA"
        fiatAmount="$49.35"
        transactionId="/data-icon.svg"
        propTop="20.5rem"
        propTop1="2.56rem"
        propLineHeight="unset"
      />
      <div className={styles.accountsPanel}>
        <div className={styles.rule5} />
        <div className={styles.rule4} />
        <div className={styles.rule3} />
        <div className={styles.rule2} />
        <div className={styles.rule1} />
        <img
          className={styles.selectedTickIcon}
          alt=""
          src="/selected-tick.svg"
        />
        <div className={styles.accountsPanelChild} />
        <div className={styles.rule0} />
        <div className={styles.accountsPanelItem} />
        <div className={styles.accounts}>Accounts</div>
        <div className={styles.connections}>Connections</div>
        <div className={styles.streamrnetwork}>Streamr.network</div>
        <div className={styles.canViewAddresses}>Can view addresses</div>
        <img className={styles.accountsPanelInner} alt="" src="/group-40.svg" />
        <img className={styles.dataIcon} alt="" src="/data-icon.svg" />
        <ImportAccountContainer propOpacity="unset" />
        <Footer productId="/group-55.svg" propOpacity="unset" />
        <SignOutContainer
          imageIds="/group-40.svg"
          imageIds2="/group-57.svg"
          propTop="32rem"
          propTop1="34.06rem"
        />
        <div className={styles.counter}>
          <img className={styles.counterChild} alt="" src="/ellipse-36.svg" />
          <div className={styles.div}>2</div>
        </div>
        <NewAccountContainer
          tokenText="New account"
          tokenId="/account-details-v31.svg"
          propTop="17rem"
          propLeft="0rem"
          propOpacity="unset"
        />
        <img
          className={styles.accountNotConnected1}
          alt=""
          src="/account-not-connected2.svg"
        />
        <img
          className={styles.accountConnectedIcon}
          alt=""
          src="/account-connected51.svg"
        />
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white21.svg"
      />
      <div className={styles.hotspotClose} onClick={onHotspotCloseClick} />
    </div>
  );
};

export default HomeConnectionsOpenESCon;