import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountEntryContainer from "../../components/AccountEntryContainer/AccountEntryContainer";
import Footer1 from "../../components/Footer1/Footer1";
import SignOutContainer from "../../components/SignOutContainer/SignOutContainer";
import styles from "./ESHome.module.css";
const ESHome = () => {
  const navigate = useNavigate();

  const onAccountConnectedIconClick = useCallback(() => {
    navigate("/home-switch-to-es");
  }, [navigate]);

  return (
    <div className={styles.esHome}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white51.svg"
      />
      <div className={styles.esHomeChild} />
      <div className={styles.esHomeItem} />
      <div className={styles.esHomeInner} />
      <div className={styles.lineDiv} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
      <div className={styles.amisiKevin}>Amisi Kevin</div>
      <div className={styles.x7gba0bxd}>0x7gB…a0bxD</div>
      <div className={styles.usd}>$6115.63 USD</div>
      <div className={styles.vet}>15.5621 VET</div>
      <div className={styles.esHomeChild1} />
      <div className={styles.brevetHover}>
        <div className={styles.brevetHoverChild} />
        <img className={styles.pathIcon} alt="" src="/path.svg" />
      </div>
      <div className={styles.connectAccountHotspot} />
      <div className={styles.signTransactionHotspot} />
      <div className={styles.tokenPageHoverHotspot} />
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected71.svg"
        onClick={onAccountConnectedIconClick}
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
        <Footer1
          accountActionText="Import account"
          propTop="17rem"
          propLeft="2.63rem"
          propWidth="0.71rem"
        />
        <Footer1
          accountActionText="Connect hardware wallet"
          propTop="22rem"
          propLeft="2.5rem"
          propWidth="1rem"
        />
        <SignOutContainer propTop="27rem" propTop1="2.06rem" />
      </div>
      <Button
        className={styles.outlineButton}
        variant="contained"
        color="primary"
        href="/deposit"
      >
        Deposit
      </Button>
      <Button
        className={styles.primaryButton}
        variant="contained"
        color="primary"
        href="/postsend-1"
      >
        Transfer
      </Button>
      <div className={styles.vet1}>0.0135 VET</div>
      <div className={styles.div}>$5.30</div>
      <img className={styles.iconBg32px} alt="" src="/icon-bg-32px.svg" />
      <div className={styles.vetThor}>0.0135 VET Thor</div>
      <div className={styles.div1}>$5.30</div>
      <img className={styles.iconBg32px1} alt="" src="/icon-bg-32px.svg" />
      <div className={styles.llp}>0.0135 LLP</div>
      <div className={styles.div2}>$5.30</div>
      <img className={styles.iconBg32px2} alt="" src="/icon-bg-32px.svg" />
      <img className={styles.layer3Icon} alt="" src="/layer-31.svg" />
      <img className={styles.layer4Icon} alt="" src="/layer-31.svg" />
      <img className={styles.layer5Icon} alt="" src="/layer-31.svg" />
    </div>
  );
};

export default ESHome;