import { Button } from "@mui/material";
import TransactionHistoryItemContainer from "../../components/TransactionHistoryItemContainer/TransactionHistoryItemContainer";
import styles from "./PostSend1.module.css";
const PostSend1 = () => {
  return (
    <div className={styles.postsend1}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
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
        href="/transaction-details"
      >
        Transfer
      </Button>
      <div className={styles.homeRuleC} />
      <div className={styles.tabSelectIndicator} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <div className={styles.div}>$404.18</div>
      <div className={styles.vet}>1.0285 VET</div>
      <div className={styles.dailyDriver}>Daily Driver</div>
      <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected6.svg"
      />
      <img className={styles.hamburgerIcon} alt="" src="/hamburger1.svg" />
      <img
        className={styles.networkSelectWhite}
        alt=""
        src="/network-select-white4.svg"
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
      <div className={styles.sendFlow1}>
        <div className={styles.addRecipient}>Add Recipient</div>
        <div className={styles.search}>
          <div className={styles.searchChild} />
          <div className={styles.contactsPublicAddresses}>
            Contacts, public addresses or ENS
          </div>
          <div className={styles.searchItem} />
          <img className={styles.qrCodeScan} alt="" />
        </div>
        <div className={styles.cancelButton}>
          <div className={styles.cancelButtonChild} />
          <div className={styles.cancel}>Cancel</div>
        </div>
        <div className={styles.sendFlow1Child} />
        <div className={styles.nextButton}>
          <div className={styles.nextButtonChild} />
          <div className={styles.next}>Next</div>
        </div>
      </div>
      <div className={styles.contractInteraction}>Contract interaction</div>
      <div className={styles.vet1}>-0.132566 VET</div>
      <div className={styles.div1}>$52.09</div>
      <div className={styles.eth1}>
        <div className={styles.eth}>
          <img className={styles.ovalIcon} alt="" src="/icon-bg-32px.svg" />
          <img className={styles.identicon2} alt="" src="/identicon-2@2x.png" />
        </div>
      </div>
      <Button
        className={styles.postsend1Child}
        sx={{ width: 70 }}
        variant="contained"
        color="primary"
      >
        CONFIRMED
      </Button>
      <div className={styles.homeRuleB} />
      <div className={styles.homeRuleA} />
      <TransactionHistoryItemContainer/>
    </div>
  );
};

export default PostSend1;