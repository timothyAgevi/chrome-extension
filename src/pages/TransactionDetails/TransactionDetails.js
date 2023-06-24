import TransactionItemContainer from "../../components/TransactionItemContainer/TransactionItemContainer";
import HistoryItemContainer from "../../components/HistoryItemContainer/HistoryItemContainer";
import HistoryItem2Container from "../../components/HistoryItem2Container/HistoryItem2Container";
import styles from "./TransactionDetails.module.css";
const TransactionDetails = () => {
  return (
    <div className={styles.transactionDetails}>
      <div className={styles.balanceDisplayBg}>
        <div className={styles.balanceDisplayBg1} />
      </div>
      <div className={styles.transferButton}>
        <div className={styles.transferButtonChild} />
        <div className={styles.transfer}>Transfer</div>
      </div>
      <div className={styles.depositButton}>
        <div className={styles.depositButtonChild} />
        <div className={styles.deposit}>Deposit</div>
      </div>
      <div className={styles.homeRuleC} />
      <div className={styles.tabSelectIndicator} />
      <div className={styles.assets}>Assets</div>
      <div className={styles.history}>History</div>
      <div className={styles.div}>$373.49</div>
      <div className={styles.eth}>0.9504 ETH</div>
      <div className={styles.accountNameBalance}>
        <div className={styles.dailyDriver}>Daily Driver</div>
        <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
      </div>
      <img
        className={styles.accountConnectedIcon}
        alt=""
        src="/account-connected5.svg"
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
          <div className={styles.accountNameBalance1}>
            <div className={styles.dailyDriver1}>Daily Driver</div>
            <div className={styles.x3cdbf32x1}>0x3Cd…bF32x</div>
          </div>
          <div className={styles.accountMenu}>
            <div className={styles.accountMenu}>
              <div className={styles.accountMenu}>
                <img className={styles.accountMenu} alt="" />
                <img
                  className={styles.idntcn1Icon}
                  alt=""
                  src="/idntcn-121@2x.png"
                />
              </div>
            </div>
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
          <img className={styles.qrScanIcon} alt="" />
        </div>
        <div className={styles.cancelButton}>
          <div className={styles.depositButtonChild} />
          <div className={styles.deposit}>Cancel</div>
        </div>
        <div className={styles.sendFlow1Child} />
        <div className={styles.nextButton}>
          <div className={styles.transferButtonChild} />
          <div className={styles.transfer}>Next</div>
        </div>
      </div>
      <TransactionItemContainer />
      <HistoryItemContainer />
      <div className={styles.transactionDetailSheet}>
        <HistoryItem2Container />
        <div className={styles.transactionDetailSheetChild} />
        <div className={styles.transactionDetailSheetItem} />
        <div className={styles.transactionAddresses}>
          <div className={styles.from0xc5261b045dToContainer}>
            <span className={styles.depositEthToContainer1}>
              <span>
                <span className={styles.from}>From</span>
              </span>
              <span className={styles.xc5261b045d}>
                <span>{`   `}</span>
                <span>{`0xC526...1B045d        `}</span>
              </span>
              <span>
                <span className={styles.from}>{` `}</span>
              </span>
              <span className={styles.from}>
                <span>To</span>
              </span>
              <span className={styles.xc5261b045d}> 0x83c9...e4503f</span>
            </span>
          </div>
        </div>
        <div className={styles.activity}>Activity</div>
        <div className={styles.details}>Details</div>
        <div className={styles.created1120532020Container}>
          <p className={styles.blankLine}>
            Created 11:20, 5/3/2020. Value 0.132566 VET
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.confirmed1121532020Container}>
          <p className={styles.blankLine}>Confirmed 11:21, 5/3/2020</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.transactionDetailSheetInner} />
        <div className={styles.transactionDetailSheetChild1} />
        <div className={styles.transactionDetailSheetChild2} />
        <div className={styles.transactionDetailSheetChild3} />
        <div className={styles.transactionDetailSheetChild4} />
        <div className={styles.transactionDetailSheetChild5} />
        <div className={styles.transactionDetailSheetChild6} />
        <div className={styles.transactionListItem}>
          <div className={styles.amount}>Amount</div>
          <div className={styles.gwei}>0.132566 VET</div>
        </div>
        <div className={styles.transactionListItem1}>
          <div className={styles.amount}>Gas used / limit</div>
          <div className={styles.gwei}>21000 / 45015</div>
        </div>
        <div className={styles.transactionListItem2}>
          <div className={styles.amount}>Gas price</div>
          <div className={styles.gwei}>9.1 KES</div>
        </div>
        <div className={styles.transactionListItem3}>
          <div className={styles.amount}>Total</div>
          <div className={styles.eth5230}>0.132568 VET / $52.30</div>
        </div>
        <div className={styles.submitted1121532020Container}>
          <p
            className={styles.blankLine}
          >{`Submitted 11:21, 5/3/2020. Gas fee 409636.5 KES `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <img
          className={styles.externalLinkIcon}
          alt=""
          src="/external-link.svg"
        />
      </div>
    </div>
  );
};

export default TransactionDetails;