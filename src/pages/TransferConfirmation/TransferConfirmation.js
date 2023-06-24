import { Button } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import styles from "./TransferConfirmation.module.css";

const TransferConfirmation= () => {
  return (
    <div className={styles.send3}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <Button
        className={styles.transferButton}
        sx={{ width: 148 }}
        variant="contained"
        color="primary"
      >
        Transfer
      </Button>
      <Button
        className={styles.depositButton}
        sx={{ width: 149 }}
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
        transactionId="/eth-icon1.svg"
        propTop="15.5rem"
        propTop1="2.5rem"
        propLineHeight="1rem"
      />
      <div className={styles.usd}>$404.18 USD</div>
      <div className={styles.eth}>1.0285 ETH</div>
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected2.svg"
      />
      <img className={styles.hamburgerIcon} alt="" src="/hamburger2.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white1.svg"
      />
      <div className={styles.depositSheet}>
        <div className={styles.depositSheetChild} />
        <div className={styles.depositSheetItem} />
        <div className={styles.depositSheetInner} />
        <div className={styles.lineDiv} />
        <div className={styles.depositEthToContainer}>
          <span className={styles.depositEthToContainer1}>
            <p className={styles.depositEth}>Deposit ETH</p>
            <p
              className={styles.toUseDecentralized}
            >{`To use decentralized applications with MetaMask, `}</p>
            <p className={styles.toUseDecentralized}>
              you will need some ETH in your wallet.
            </p>
          </span>
        </div>
        <div className={styles.directDepositIfContainer}>
          <span className={styles.depositEthToContainer1}>
            <p className={styles.depositEth}>Direct deposit</p>
            <p
              className={styles.toUseDecentralized}
            >{`If you already have some ETH, the quickest way `}</p>
            <p className={styles.toUseDecentralized}>
              is to send it to your selected MetaMask account.
            </p>
          </span>
        </div>
        <div className={styles.buyEthWithContainer}>
          <span className={styles.depositEthToContainer1}>
            <p className={styles.depositEth}>Buy ETH with Wyre</p>
            <p
              className={styles.toUseDecentralized}
            >{`Wyre lets you use a debit card to deposit ETH `}</p>
            <p className={styles.toUseDecentralized}>
              directly to your MetaMask account.
            </p>
          </span>
        </div>
        <div className={styles.buyEthOnContainer}>
          <span className={styles.depositEthToContainer1}>
            <p className={styles.depositEth}>Buy ETH on Coinswitch</p>
            <p className={styles.toUseDecentralized}>
              Coinswitch is a somewhat obscure exchange where
            </p>
            <p className={styles.toUseDecentralized}>
              you could choose to buy ETH if you wanted to.
            </p>
          </span>
        </div>
        <div className={styles.accountNameBalanceParent}>
          <div className={styles.accountNameBalance}>
            <div className={styles.dailyDriver1}>Daily Driver</div>
            <div className={styles.x3cdbf32x1}>0x3Cd…bF32x</div>
          </div>
          <div className={styles.accountIcon}>
            <img className={styles.accountIcon} alt="" />
            <img
              className={styles.idntcn1Icon}
              alt=""
              src="/idntcn-121@2x.png"
            />
          </div>
        </div>
        <div className={styles.exportKeyButton}>
          <div className={styles.copyAddress}>Copy address</div>
        </div>
        <img className={styles.mmQr1Icon} alt="" />
        <img className={styles.groupIcon} alt="" />
        <img className={styles.frameIcon} alt="" />
        <div className={styles.visitWyre}>Visit Wyre</div>
        <div className={styles.visitCoinswitch}>Visit Coinswitch</div>
      </div>
      <div className={styles.sendFlow3}>
        <div className={styles.sendFlow3Child} />
        <div className={styles.x84bccb49}>0x84b...ccb49</div>
        <div className={styles.div}>$39.29</div>
        <div className={styles.mainVeechainNetwork}>Main VeeChain Network</div>
        <div className={styles.vet}>0.100 VET</div>
        <div className={styles.div1}>$0.40</div>
        <div className={styles.vet1}>0.001017 VET</div>
        <div className={styles.div2}>{`$30.69 `}</div>
        <div className={styles.vet2}>0.078095 VET</div>
        <div className={styles.gasFee}>Gas fee</div>
        <div className={styles.edit}>Edit</div>
        <div className={styles.total}>Total</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.network}>Network</div>
        <div className={styles.eth1}>
          <img className={styles.ovalIcon} alt="" src="/icon-bg-32px.svg" />
          <img className={styles.identicon2} alt="" src="/identicon-2@2x.png" />
        </div>
        <div className={styles.sendFlow3Item} />
        <div className={styles.sendFlow3Inner} />
        <div className={styles.sendFlow3Child1} />
        <div className={styles.sendFlow3Child2} />
        <div className={styles.confirmSendTo}>Confirm send to</div>
        <Button
          className={styles.outlineButton}
          variant="contained"
          color="primary"
        >
          Reject
        </Button>
        <Button
          className={styles.primaryButton}
          variant="contained"
          color="primary"
          href="/transaction-details"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default TransferConfirmation;