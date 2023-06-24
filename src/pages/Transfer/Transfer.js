import { Button, TextField, InputAdornment, Icon } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import styles from "./Transfer.module.css";

const Transfer = () => {
  return (
    <div className={styles.send2a}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <Button
        className={styles.transferButton}
        sx={{ width: 148 }}
        variant="contained"
        color="primary"
        href="/send-3"
      >
        Transfer
      </Button>
      <Button
        className={styles.depositButton}
        sx={{ width: 149 }}
        variant="contained"
        color="primary"
        href="/send-01a"
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
        src="/account-connected3.svg"
      />
      <img className={styles.hamburgerIcon} alt="" src="/hamburger2.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white2.svg"
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
          <div className={styles.exportKeyButtonChild} />
          <div className={styles.copyAddress}>Copy address</div>
        </div>
        <img className={styles.mmQr1Icon} alt="" />
        <img className={styles.groupIcon} alt="" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.coinswitchIcon} alt="" />
        </div>
        <div className={styles.visitWyre}>Visit Wyre</div>
        <div className={styles.visitCoinswitch}>Visit Coinswitch</div>
      </div>
      <form className={styles.sendFlow2}>
        <div className={styles.sendFlow2Child} />
        <div className={styles.vetAvailable}>0.95 VET available</div>
        <div className={styles.asset}>Asset</div>
        <TextField
          className={styles.address}
          sx={{ width: 312 }}
          color="primary"
          variant="standard"
          type="text"
          label="0x84b2...ccbbf49"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
        <div className={styles.sendTo}>Send to</div>
        <div className={styles.change}>Change</div>
        <div className={styles.veechainMainNetwork}>VeeChain Main Network</div>
        <div className={styles.amountInput} />
        <div className={styles.amountInput1} />
        <div className={styles.div}>{`0.100 `}</div>
        <div className={styles.vet}>VET</div>
        <div className={styles.usd1}>USD</div>
        <div className={styles.div1}>39.29</div>
        <div className={styles.amount}>Amount</div>
        <div className={styles.sendMaximum}>Send maximum</div>
        <div className={styles.transactionFee}>Transaction fee</div>
        <div className={styles.sendFlow2Item} />
        <div className={styles.div2}>$0.40</div>
        <div className={styles.div3}>$0.37</div>
        <div className={styles.div4}>$0.56</div>
        <div className={styles.slow}>Slow</div>
        <div className={styles.standard}>Standard</div>
        <div className={styles.fast}>Fast</div>
        <div className={styles.selectedLine} />
        <div className={styles.unselectedLine} />
        <img className={styles.slMarkerIcon} alt="" src="/sl-marker.svg" />
        <img className={styles.stdMarkerIcon} alt="" src="/std-marker.svg" />
        <img className={styles.fastMarkerIcon} alt="" src="/std-marker.svg" />
        <img className={styles.sendFlow2Inner} alt="" src="/ellipse-4.svg" />
        <img className={styles.stdMarkerIcon} alt="" src="/ellipse-5.svg" />
        <div className={styles.brevetHover}>
          <div className={styles.brevetHoverChild} />
          <img className={styles.pathIcon} alt="" src="/path1.svg" />
        </div>
        <div className={styles.sendFlow2Child1} />
        <div className={styles.slowHotspot} />
        <div className={styles.fastHotspot} />
        <Button
          className={styles.outlineButton}
          variant="contained"
          color="primary"
          href="/send-01"
        >
          Back
        </Button>
        <Button
          className={styles.primaryButton}
          variant="contained"
          color="primary"
          href="/transfer-confirmation"
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default Transfer;