import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import styles from "./ERCConnetionsB.module.css";

const ERCConnectionsB = () => {
  return (
    <div className={styles.ercConnectionsB}>
      <img className={styles.ercConnectionsBChild} alt="" src="/group-40.svg" />
      <div className={styles.balanceDisplayBg}>
        <div className={styles.accountIconWrapper}>
          <div className={styles.balanceDisplayBg2} />
        </div>
      </div>
      <div className={styles.ercConnectionsBItem} />
      <div className={styles.ercConnectionsBInner} />
      <div className={styles.lineDiv} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <img className={styles.xCloseGrey} alt="" src="/x-close-grey.svg" />
      <div className={styles.balance}>
        <div className={styles.div}>{`$235.53  `}</div>
        <div className={styles.eth}>1.056 ETH</div>
      </div>
      <div className={styles.ercConnectionsBChild1} />
      <div className={styles.transferButton}>
        <div className={styles.transferButtonChild} />
        <div className={styles.transfer}>Transfer</div>
      </div>
      <div className={styles.depositButton}>
        <div className={styles.depositButtonChild} />
        <div className={styles.deposit}>Deposit</div>
      </div>
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
        <div className={styles.accountsPanelChild} />
        <div className={styles.streamrnetwork}>Streamr.network</div>
        <div className={styles.canViewAddresses}>Can view addresses</div>
        <img className={styles.accountsPanelItem} alt="" src="/group-40.svg" />
        <img
          className={styles.accConnectedIcon}
          alt=""
          src="/acc-connected.svg"
        />
        <div className={styles.rule5} />
        <div className={styles.rule4} />
        <div className={styles.rule3} />
        <div className={styles.rule2} />
        <div className={styles.rule1} />
        <div className={styles.smallToggleOn}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img className={styles.groupItem} alt="" src="/ellipse-16.svg" />
          </div>
        </div>
        <div className={styles.smallToggleOn1}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img className={styles.groupItem} alt="" src="/ellipse-16.svg" />
          </div>
        </div>
        <div className={styles.rule0} />
        <div className={styles.accountsPanelInner} />
        <div className={styles.accounts}>Accounts</div>
        <div className={styles.connections}>Connections</div>
        <div className={styles.permissionsParent}>
          <div className={styles.permissions}>Permissions</div>
          <div className={styles.thisSiteCan}>
            This site can view your account addresses
          </div>
        </div>
        <img className={styles.dataIcon} alt="" src="/data-icon.svg" />
        <div className={styles.counter}>
          <img className={styles.counterChild} alt="" src="/ellipse-36.svg" />
          <div className={styles.div1}>2</div>
        </div>
        <div className={styles.importAccount}>
          <div className={styles.importAccount1}>Import account</div>
          <img
            className={styles.importAccountChild}
            alt=""
            src="/group-40.svg"
          />
          <img
            className={styles.importAccountItem}
            alt=""
            src="/group-116.svg"
          />
        </div>
      </div>
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white11.svg"
      />
      <div className={styles.erc20Stuff}>ERC-20 Stuff</div>
      <div className={styles.x7gba0bxd}>0x7gB…a0bxD</div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected14.svg"
      />
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.connected}>Connected</div>
      <div className={styles.accountMenu}>
        <div className={styles.accountIconWrapper}>
          <div className={styles.accountIconWrapper}>
            <img className={styles.counterChild} alt="" src="/sqrcle.svg" />
            <img className={styles.idntcn1Icon} alt="" src="/idntcn-1@2x.png" />
          </div>
        </div>
      </div>
      <img
        className={styles.accConnectedIcon1}
        alt=""
        src="/acc-connected1.svg"
      />
      <img
        className={styles.accountDetailsV3}
        alt=""
        src="/account-details-v3.svg"
      />
      <div className={styles.newAccount}>New account</div>
    </div>
  );
};

export default ERCConnectionsB;