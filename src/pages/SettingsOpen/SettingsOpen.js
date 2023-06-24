import { TextField, Button } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import NewAccountContainer from "../../components/NewAccountContainer/NewAccountContainer";
import styles from "./SettingsOpen.module.css";
const SettingsOpen = () => {
  return (
    <div className={styles.settingsOpen}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <TextField
        className={styles.primaryButton}
        color="primary"
        variant="filled"
        type="text"
        label="Transfer"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
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
        transactionId="/eth-icon.svg"
        propTop="15.5rem"
        propTop1="2.5rem"
        propLineHeight="1rem"
      />
      <div className={styles.div}>$404.18</div>
      <div className={styles.eth}>1.0285 ETH</div>
      <div className={styles.accountNameBalance}>
        <div className={styles.dailyDriver}>Daily Driver</div>
        <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      </div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected9.svg"
      />
      <img className={styles.xCloseGrey} alt="" src="/x-close-grey.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white6.svg"
      />
      <NewAccountContainer
        tokenText="Add token"
        tokenId="/account-details-v33.svg"
        propTop="25.5rem"
        propLeft="-0.06rem"
        propOpacity="0.3"
      />
      <div className={styles.homeRuleD} />
      <div className={styles.settingsSheet}>
        <img
          className={styles.listItemDividers}
          alt=""
          src="/list-item-dividers.svg"
        />
        <div className={styles.settingsSheetChild} />
        <div className={styles.crypsenseWalletV900Container}>
          <span className={styles.crypsenseWalletV900Container1}>
            <p className={styles.crypsenseWalletV900}>
              Crypsense Wallet V9.0.0
            </p>
            <p className={styles.designedAndBuilt}>Designed and built by ABC</p>
          </span>
        </div>
        <div className={styles.settingsListItem}>
          <div className={styles.helpSupportAndContainer}>
            <span className={styles.crypsenseWalletV900Container1}>
              <p className={styles.help}>Help</p>
              <p className={styles.designedAndBuilt}>
                Support and contact information
              </p>
            </span>
          </div>
        </div>
        <div className={styles.settingsListItem1}>
          <div className={styles.helpSupportAndContainer}>
            <span className={styles.crypsenseWalletV900Container1}>
              <p className={styles.help}>General</p>
              <p className={styles.designedAndBuilt}>Token display, language</p>
            </span>
          </div>
        </div>
        <div className={styles.settingsListItem2}>
          <div className={styles.helpSupportAndContainer}>
            <span className={styles.crypsenseWalletV900Container1}>
              <p className={styles.help}>{`Security & Privacy`}</p>
              <p className={styles.designedAndBuilt}>
                Privacy settings and wallet seed phrase
              </p>
            </span>
          </div>
        </div>
        <div className={styles.settingsListItem3}>
          <div className={styles.helpSupportAndContainer}>
            <span className={styles.crypsenseWalletV900Container1}>
              <p className={styles.help}>Connections</p>
              <p className={styles.designedAndBuilt}>
                Sites allowed to read your accounts
              </p>
            </span>
          </div>
        </div>
        <div className={styles.settingsListItem4}>
          <div className={styles.helpSupportAndContainer}>
            <span className={styles.crypsenseWalletV900Container1}>
              <p className={styles.help}>Networks</p>
              <p className={styles.designedAndBuilt}>
                Manage custom RPC networks
              </p>
            </span>
          </div>
        </div>
        <div className={styles.supportCenterListElement}>
          <div className={styles.supportCenter}>Support Center</div>
        </div>
        <div className={styles.emailListElement}>
          <div className={styles.supportCenter}>Email us</div>
        </div>
        <div className={styles.privacyListElement}>
          <div className={styles.supportCenter}>Privacy Policy</div>
        </div>
        <div className={styles.termsListElement}>
          <div className={styles.supportCenter}>Terms of Use</div>
        </div>
        <div className={styles.attributionsListElement}>
          <div className={styles.supportCenter}>Attributions</div>
        </div>
        <div className={styles.metamaskSiteListElement}>
          <div className={styles.supportCenter}>MetaMask website</div>
        </div>
        <img
          className={styles.settingsSheetItem}
          alt=""
          src="/group-10000030112.svg"
        />
      </div>
    </div>
  );
};

export default SettingsOpen;