import AccountEntryContainer from "../../components/AccountEntryContainer/AccountEntryContainer";
import Footer1 from "../../components/Footer1/Footer1";
import SignOutContainer from "../../components/SignOutContainer/SignOutContainer";
import styles from "./ESHomeConnected.module.css";
const ESHomeConnected = () => {
  return (
    <div className={styles.esHomeConnected}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white41.svg"
      />
      <div className={styles.esHomeConnectedChild} />
      <div className={styles.esHomeConnectedItem} />
      <div className={styles.esHomeConnectedInner} />
      <div className={styles.lineDiv} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
      <div className={styles.erc20Stuff}>ERC-20 Stuff</div>
      <div className={styles.x7gba0bxd}>0x7gB…a0bxD</div>
      <div className={styles.usd}>$6115.63 USD</div>
      <div className={styles.vet}>15.5621 VET</div>
      <div className={styles.brevetHover}>
        <div className={styles.brevetHoverChild} />
        <img className={styles.pathIcon} alt="" src="/path.svg" />
      </div>
      <div className={styles.tokenPageHoverHotspot} />
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected61.svg"
      />
      <div className={styles.accountsPanel}>
        <div className={styles.accountsPanelChild} />
        <div className={styles.accountsPanelItem} />
        <div className={styles.accountsPanelInner} />
        <div className={styles.accountsPanelChild1} />
        <div className={styles.accountsPanelChild2} />
        <AccountEntryContainer
          dailyDriverText="Daily Driver"
          dailyDriverPrice="$235.53 "
          dailyDriverImageId="/idntcn-121@2x.png"
          propTop="7rem"
          propDisplay="flex"
          propDisplay1="flex"
          propDisplay2="unset"
          propDisplay3="unset"
        />
        <img className={styles.selectedTickIcon} alt="" />
        <AccountEntryContainer
          dailyDriverText="ERC-20 Stuff"
          dailyDriverPrice="$27.32 "
          dailyDriverImageId="/idntcn-121@2x.png"
          propTop="12.06rem"
          propDisplay="flex"
          propDisplay1="flex"
          propDisplay2="unset"
          propDisplay3="unset"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.accountsPanelChild3} />
        <div className={styles.accounts}>Accounts</div>
        <div className={styles.connections}>Connections</div>
        <div className={styles.streamrnetwork}>Streamr.network</div>
        <div className={styles.accountConnected}>1 account connected</div>
        <img className={styles.ellipseIcon} alt="" />
        <img className={styles.dataIcon} alt="" />
        <img className={styles.accConnectedIcon} alt="" />
        <Footer1 accountActionText="Import account" />
        <Footer1
          accountActionText="Connect hardware wallet"
          propTop="22rem"
          propLeft="2.5rem"
          propWidth="1rem"
        />
        <SignOutContainer propTop="27rem" propTop1="2.06rem" />
      </div>
      <div className={styles.outlineButton}>
        <div className={styles.deposit}>Deposit</div>
      </div>
      <div className={styles.primaryButton}>
        <div className={styles.transfer}>Transfer</div>
      </div>
      <div className={styles.zrx}>12 000 ZRX</div>
      <div className={styles.div}>$4820.4</div>
      <img className={styles.data2Icon} alt="" src="/data-2.svg" />
    </div>
  );
};

export default ESHomeConnected;