import { useCallback } from "react";
import { TextField } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import NewAccountContainer from "../../components/NewAccountContainer/NewAccountContainer";
import { useNavigate } from "react-router-dom";
// import styles from "./SettingsHelp.module.css";
import styles from "./SettingsHelp.module.css";
const SettingsHelp = () => {
  const navigate = useNavigate();

  const onHelpCloseHotspotClick = useCallback(() => {
    navigate("/settings-open");
  }, [navigate]);

  return (
    <div className={styles.settingsHelp}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <div className={styles.primaryButton}>
        <div className={styles.transfer}>Transfer</div>
      </div>
      <TextField
        className={styles.outlineButton}
        color="primary"
        variant="standard"
        multiline
        label="Deposit"
        placeholder="Textarea placeholder"
        margin="none"
      />
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
        src="/account-connected8.svg"
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
      />
      <div className={styles.homeRuleD} />
      <div className={styles.settingsSheet}>
        <div className={styles.listItemRulesParent}>
          <img
            className={styles.listItemRules}
            alt=""
            src="/list-item-rules.svg"
          />
          <div className={styles.groupChild} />
          <div className={styles.connectionsSitesAllowedContainer}>
            <span className={styles.helpTxt}>
              <p className={styles.connections}>Connections</p>
              <p className={styles.sitesAllowedTo}>
                Sites allowed to read your accounts
              </p>
            </span>
          </div>
          <div className={styles.networksManageCustomContainer}>
            <span className={styles.helpTxt}>
              <p className={styles.connections}>Networks</p>
              <p className={styles.sitesAllowedTo}>
                Manage custom RPC networks
              </p>
            </span>
          </div>
        </div>
        <div className={styles.scrollBar}>
          <div className={styles.scrollBarChild} />
          <div className={styles.scrollBarItem} />
          <div className={styles.scrollBarInner} />
        </div>
        <div className={styles.crypsenseWalletV900Container}>
          <span className={styles.helpTxt}>
            <p className={styles.crypsenseWalletV900}>
              Crypsense Wallet V9.0.0
            </p>
            <p className={styles.designedAndBuilt}>Designed and built by ABC</p>
          </span>
        </div>
        <div className={styles.help}>
          <span className={styles.helpTxt}>
            <p className={styles.crypsenseWalletV900}>Help</p>
          </span>
        </div>
        <div className={styles.supportCenter}>Support Center</div>
        <div className={styles.emailUs}>Email us</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.termsOfUse}>Terms of Use</div>
        <div className={styles.attributions}>Attributions</div>
        <div
          className={styles.helpCloseHotspot}
          onClick={onHelpCloseHotspotClick}
        />
        <div className={styles.securityPrivacyContainer}>
          <span className={styles.helpTxt}>
            <p className={styles.connections}>{`Security & Privacy`}</p>
            <p className={styles.designedAndBuilt}>
              Privacy settings and wallet seed phrase
            </p>
          </span>
        </div>
        <div className={styles.generalTokenDisplayContainer}>
          <span className={styles.helpTxt}>
            <p className={styles.connections}>General</p>
            <p className={styles.designedAndBuilt}>Token display, language</p>
          </span>
        </div>
        <img
          className={styles.settingsSheetChild}
          alt=""
          src="/group-10000030112.svg"
        />
      </div>
    </div>
  );
};

export default SettingsHelp;