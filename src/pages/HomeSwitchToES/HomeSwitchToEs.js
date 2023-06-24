import { useCallback } from "react";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import AccountEntryContainer from "../../components/AccountEntryContainer/AccountEntryContainer";
import SignOutContainer from "../../components/SignOutContainer/SignOutContainer";
import { useNavigate } from "react-router-dom";
// import styles from "./HomeSwitchToES.module.css";
import styles from "./HomeSwitchToEs.module.css";
const HomeSwitchToES = () => {
  const navigate = useNavigate();

  const onHotspotCloseClick = useCallback(() => {
    navigate("/dd-home");
  }, [navigate]);

  const onHotspotClose1Click = useCallback(() => {
    navigate("/es-home");
  }, [navigate]);

  return (
    <div className={styles.homeSwitchToEs}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.accountIconWrapper}>
          <div className={styles.balanceDisplayBg2} />
        </div>
      </div>
      <div className={styles.homeSwitchToEsChild} />
      <div className={styles.homeSwitchToEsItem} />
      <div className={styles.homeSwitchToEsInner} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.xCloseGrey} alt="" src="/x-close-grey.svg" />
      <div className={styles.amisiKevin}>Amisi Kevin</div>
      <div className={styles.x7gba0bxd}>0x7gB…a0bxD</div>
      <div className={styles.usd}>$6115.63 USD</div>
      <div className={styles.eth}>15.5621 ETH</div>
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
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected21.svg"
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
        <AccountEntryContainer
          dailyDriverText="Daily Driver"
          dailyDriverPrice="$404.18"
          dailyDriverImageUrl="/sqrcle.svg"
          dailyDriverImageId="/idntcn-1@2x.png"
          dailyDriverImageId2="/acc-connected3.svg"
        />
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
        <SignOutContainer
          imageIds="/group-40.svg"
          imageIds2="/group-57.svg"
          propTop="32rem"
          propTop1="34.06rem"
        />
        <div className={styles.counter}>
          <img className={styles.counterChild} alt="" src="/ellipse-36.svg" />
          <div className={styles.div}>1</div>
        </div>
        <img
          className={styles.accountConnectedIcon1}
          alt=""
          src="/account-connected31.svg"
        />
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white12.svg"
      />
      <div className={styles.hotspotClose} onClick={onHotspotCloseClick} />
      <div className={styles.hotspotClose} onClick={onHotspotClose1Click} />
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.div1}>$404.18</div>
      <div className={styles.accountMenu}>
        <div className={styles.accountIconWrapper}>
          <div className={styles.accountIconWrapper}>
            <img className={styles.counterChild} alt="" src="/sqrcle.svg" />
            <img className={styles.idntcn1Icon} alt="" src="/idntcn-1@2x.png" />
          </div>
        </div>
      </div>
      <img
        className={styles.accConnectedIcon}
        alt=""
        src="/acc-connected3.svg"
      />
      <div className={styles.amisiKevin1}>Amisi Kevin</div>
      <div className={styles.div2}>$6115.63</div>
      <div className={styles.newAccount}>New account</div>
      <img className={styles.groupIcon} alt="" src="/group-40.svg" />
      <img
        className={styles.accountDetailsV3}
        alt=""
        src="/account-details-v32.svg"
      />
      <div className={styles.importAccount}>Import account</div>
      <img className={styles.homeSwitchToEsChild1} alt="" src="/group-40.svg" />
      <img
        className={styles.homeSwitchToEsChild2}
        alt=""
        src="/group-116.svg"
      />
      <div className={styles.connectHardwareWallet}>
        Connect hardware wallet
      </div>
      <img className={styles.homeSwitchToEsChild3} alt="" src="/group-40.svg" />
      <img className={styles.homeSwitchToEsChild4} alt="" src="/group-55.svg" />
    </div>
  );
};

export default HomeSwitchToES;