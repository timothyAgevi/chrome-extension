import { TextField } from "@mui/material";
import ETHAssetContainer from "../../components/ETHAssetContainer/ETHAssetContainer";
import styles from "./Deposit.module.css";
const Deposit = () => {
  return (
    <div className={styles.deposit}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <div className={styles.transferButton}>
        <div className={styles.transferButtonChild} />
        <div className={styles.transfer}>Transfer</div>
      </div>
      <TextField
        className={styles.depositButton}
        sx={{ width: 149 }}
        color="primary"
        variant="filled"
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
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected1.svg"
      />
      <img className={styles.xCloseGrey} alt="" src="/x-close-grey.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white.svg"
      />
      <div className={styles.depositSheet}>
        <div className={styles.depositSheetChild} />
        <div className={styles.depositSheetItem} />
        <div className={styles.depositSheetInner} />
        <div className={styles.lineDiv} />
        <div className={styles.depositVechainToContainer}>
          <span className={styles.depositVechainToContainer1}>
            <p className={styles.depositVechain}>Deposit VeChain</p>
            <p
              className={styles.toUseDecentralised}
            >{`To use decentralised applications with MetaMask, `}</p>
            <p className={styles.toUseDecentralised}>
              you will need some VET in your wallet.
            </p>
          </span>
        </div>
        <div className={styles.directDepositIfContainer}>
          <span className={styles.depositVechainToContainer1}>
            <p className={styles.directDeposit}>Direct deposit</p>
            <p
              className={styles.toUseDecentralised}
            >{`If you already have some VET, the quickest way `}</p>
            <p className={styles.toUseDecentralised}>
              is to send it to your selected MetaMask account.
            </p>
          </span>
        </div>
        <div className={styles.buyVechainWithContainer}>
          <span className={styles.depositVechainToContainer1}>
            <p className={styles.depositVechain}>Buy VeChain with Wyre</p>
            <p className={styles.toUseDecentralised}>
              Wyre lets you use a debit card to deposit VET
            </p>
            <p className={styles.toUseDecentralised}>
              directly to your MetaMask account.
            </p>
          </span>
        </div>
        <div className={styles.buyEthOnContainer}>
          <span className={styles.depositVechainToContainer1}>
            <p className={styles.directDeposit}>Buy ETH on Coinswitch</p>
            <p className={styles.toUseDecentralised}>
              Coinswitch is a somewhat obscure exchange where
            </p>
            <p className={styles.toUseDecentralised}>
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
            <img className={styles.accountIcon} alt="" src="/sqrcle.svg" />
            <img
              className={styles.idntcn1Icon}
              alt=""
              src="/idntcn-12@2x.png"
            />
          </div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.copyAddress}>Copy address</div>
        <img className={styles.mmQr1Icon} alt="" src="/mm-qr-1.svg" />
        <img className={styles.groupIcon} alt="" src="/group-104.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.coinswitchIcon} alt="" src="/coinswitch.svg" />
        </div>
        <div className={styles.visitWyre}>Visit Wyre</div>
        <div className={styles.visitCoinswitch}>Visit Coinswitch</div>
      </div>
    </div>
  );
};

export default Deposit;