import { useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DataAssetContainer from "../../components/DataAssetContainer/DataAssetContainer";
import AccountEntryContainer from "../../components/AccountEntryContainer/AccountEntryContainer";
import Footer1 from "../../components/Footer1/Footer1";
import SignOutContainer from "../../components/SignOutContainer/SignOutContainer";
import styles from "./DDHome.module.css";
const DDHome = () => {
  const [newAccountAnchorEl, setNewAccountAnchorEl] = useState(null);
  const navigate = useNavigate();
  const newAccountOpen = Boolean(newAccountAnchorEl);
  const handleNewAccountClick = (event) => {
    setNewAccountAnchorEl(event.currentTarget);
  };
  const handleNewAccountClose = () => {
    setNewAccountAnchorEl(null);
  };

  const onAccountConnectedIconClick = useCallback(() => {
    navigate("/home-connections-open");
  }, [navigate]);

  return (
    <div className={styles.ddHome}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white61.svg"
      />
      <div className={styles.ddHomeChild} />
      <div className={styles.ddHomeItem} />
      <div className={styles.ddHomeInner} />
      <div className={styles.lineDiv} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
      <div className={styles.accountNameBalance}>
        <div className={styles.dailyDriver}>Daily Driver</div>
        <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      </div>
      <div className={styles.usd}>$404.18 USD</div>
      <div className={styles.vet}>1.0285 VET</div>
      <div className={styles.ddHomeChild1} />
      <div className={styles.tokenPageHoverHotspot} />
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected81.svg"
        onClick={onAccountConnectedIconClick}
      />
      <DataAssetContainer
        dataVetText="0.95 VET"
        dataVetPriceText="$373.33"
        dataVetImageUrl="/eth-icon31.svg"
        propTop="15.5rem"
        propTop1="2.5rem"
        propLineHeight="1rem"
      />
      <DataAssetContainer
        dataVetText="616.875 DATA"
        dataVetPriceText="$30.85"
        dataVetImageUrl="/data-icon.svg"
        propTop="20.5rem"
        propTop1="2.56rem"
        propLineHeight="unset"
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
      <div className={styles.newAccount}>
        <Button
          sx={{ width: 375 }}
          id="button-Add token"
          aria-controls="menu-Add token"
          aria-haspopup="true"
          aria-expanded={newAccountOpen ? "true" : undefined}
          onClick={handleNewAccountClick}
          color="primary"
        >
          Add token
        </Button>
        <Menu
          anchorEl={newAccountAnchorEl}
          open={newAccountOpen}
          onClose={handleNewAccountClose}
        />
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
        href="/sig-request"
      >
        Transfer
      </Button>
    </div>
  );
};

export default DDHome;