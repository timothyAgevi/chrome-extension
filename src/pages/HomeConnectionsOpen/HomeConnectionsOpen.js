import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import AccountListEntryContainer from "../../components/AccountListEntryContainer/AccountListEnryContainer";
import SignOutContainer from "../../components/SignOutContainer/SignOutContainer";
import styles from "./HomeConnectionsOpen.module.css";
const HomeConnectionsOpen = () => {
  const [importAccountAnchorEl, setImportAccountAnchorEl] = useState(null);
  const importAccountOpen = Boolean(importAccountAnchorEl);
  const handleImportAccountClick = (event) => {
    setImportAccountAnchorEl(event.currentTarget);
  };
  const handleImportAccountClose = () => {
    setImportAccountAnchorEl(null);
  };

  return (
    <div className={styles.homeConnectionsOpen}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1}>
          <div className={styles.balanceDisplayBg2} />
        </div>
      </div>
      <div className={styles.homeConnectionsOpenChild} />
      <div className={styles.homeConnectionsOpenItem} />
      <div className={styles.homeConnectionsOpenInner} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.xCloseGrey} alt="" src="/x-close-grey.svg" />
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      <div className={styles.usd}>$404.18 USD</div>
      <div className={styles.eth}>1.0285 ETH</div>
      <div className={styles.lineDiv} />
      <Button
        className={styles.transferButton}
        sx={{ width: 148 }}
        variant="contained"
        color="primary"
      >
        Transfer
      </Button>
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
        src="/account-not-connected3.svg"
      />
      <ETHAssetContainer
        cryptoAmount="0.80 ETH"
        fiatAmount="$165.91"
        transactionId="/eth-icon2.svg"
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
        <AccountListEntryContainer
          driverName="Daily Driver"
          dailyDriverAmount="$404.18"
          dailyDriverId="/idntcn-1@2x.png"
          dailyDriverIds="/acc-connected3.svg"
        />
        <img
          className={styles.selectedTickIcon}
          alt=""
          src="/selected-tick1.svg"
        />
        <AccountListEntryContainer
          driverName="Amisi Kevin"
          dailyDriverAmount="$6115.63"
          dailyDriverId="/idntcn-11@2x.png"
          dailyDriverIds="/acc-connected4.svg"
          propTop="12rem"
        />
        <div className={styles.accountsPanelChild} />
        <div className={styles.rule0} />
        <div className={styles.accountsPanelItem} />
        <div className={styles.accounts}>Accounts</div>
        <div className={styles.connections}>Connections</div>
        <div className={styles.veechainnetwork}>VeeChain.network</div>
        <div className={styles.canViewAddresses}>Can view addresses</div>
        <img className={styles.accountsPanelInner} alt="" src="/group-40.svg" />
        <img className={styles.dataIcon} alt="" src="/data-icon.svg" />
        <div className={styles.importAccount}>
          <Button
            sx={{ width: 375 }}
            id="button-Import account"
            aria-controls="menu-Import account"
            aria-haspopup="true"
            aria-expanded={importAccountOpen ? "true" : undefined}
            onClick={handleImportAccountClick}
            color="primary"
          >
            Import account
          </Button>
          <Menu
            anchorEl={importAccountAnchorEl}
            open={importAccountOpen}
            onClose={handleImportAccountClose}
          />
        </div>
        <div className={styles.connectWallet}>
          <div className={styles.accountFunctionListEntry}>
            <div className={styles.connectHardwareWallet}>
              Connect hardware wallet
            </div>
            <img
              className={styles.accountsPanelInner}
              alt=""
              src="/group-40.svg"
            />
          </div>
          <img
            className={styles.connectWalletChild}
            alt=""
            src="/group-552.svg"
          />
        </div>
        <SignOutContainer imageIds="/group-40.svg" imageIds2="/group-57.svg" />
        <div className={styles.counter}>
          <img className={styles.counterChild} alt="" src="/ellipse-36.svg" />
          <div className={styles.div}>1</div>
        </div>
        <div className={styles.newAccount}>
          <div className={styles.accountFunctionListEntry}>
            <div className={styles.connectHardwareWallet}>New account</div>
            <img
              className={styles.accountsPanelInner}
              alt=""
              src="/group-40.svg"
            />
          </div>
          <img
            className={styles.accountDetailsV3}
            alt=""
            src="/account-details-v33.svg"
          />
        </div>
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white3.svg"
      />
      <div className={styles.hotspotClose} />
    </div>
  );
};

export default HomeConnectionsOpen;