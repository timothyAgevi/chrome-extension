import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import Footer from "../../components/Footer/Footer";
import styles from "./HomeOpenESConActive.module.css";
const HomeOpenESConActive = () => {
  return (
    <div className={styles.homeOpenEsConActive}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1}>
          <div className={styles.balanceDisplayBg2} />
        </div>
      </div>
      <div className={styles.homeOpenEsConActiveChild} />
      <div className={styles.homeOpenEsConActiveItem} />
      <div className={styles.homeOpenEsConActiveInner} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.xCloseGrey} alt="" src="/x-close-grey.svg" />
      <div className={styles.erc20Stuff}>ERC-20 Stuff</div>
      <div className={styles.x7gba0bxd}>0x7gB…a0bxD</div>
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
        <img className={styles.pathIcon} alt="" src="/path.svg" />
      </div>
      <div className={styles.connectAccountHotspot} />
      <div className={styles.signTransactionHotspot} />
      <div className={styles.tokenPageHoverHotspot} />
      <img
        className={styles.accountNotConnected}
        alt=""
        src="/account-not-connected.svg"
      />
      <ETHAssetContainer
        cryptoAmount="0.80 ETH"
        fiatAmount="$165.91"
        transactionId="/eth-icon4.svg"
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
        <div className={styles.importAccount}>Import account</div>
        <img className={styles.accountsPanelChild} alt="" src="/group-40.svg" />
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
        <div className={styles.accountsPanelItem} />
        <div className={styles.rule0} />
        <div className={styles.accountsPanelInner} />
        <div className={styles.accounts}>Accounts</div>
        <div className={styles.connections}>Connections</div>
        <div className={styles.streamrnetwork}>Streamr.network</div>
        <div className={styles.canViewAddresses}>Can view addresses</div>
        <img className={styles.ellipseIcon} alt="" src="/group-40.svg" />
        <img className={styles.dataIcon} alt="" src="/data-icon.svg" />
        <img className={styles.importAccountIcon} alt="" src="/group-116.svg" />
        <Footer productId="/group-551.svg" propOpacity="unset" />
        <div className={styles.counter}>
          <img className={styles.counterChild} alt="" src="/ellipse-36.svg" />
          <div className={styles.div}>2</div>
        </div>
        <img
          className={styles.accountConnectedIcon}
          alt=""
          src="/account-connected41.svg"
        />
        <img className={styles.groupIcon} alt="" src="/group-1000003013.svg" />
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white21.svg"
      />
      <div className={styles.accountDetailsV3}>
        <div className={styles.newAccount}>New account</div>
        <img
          className={styles.accountDetailsV3Child}
          alt=""
          src="/group-40.svg"
        />
        <img className={styles.xCloseIcon} alt="" src="/x-close1.svg" />
      </div>
    </div>
  );
};

export default HomeOpenESConActive;