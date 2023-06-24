import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import DataAssetContainer from "../../components/DataAssetContainer/DataAssetContainer";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home (){
  const [newAccountAnchorEl, setNewAccountAnchorEl] = useState(null);
  const newAccountOpen = Boolean(newAccountAnchorEl);
  const handleNewAccountClick = (event) => {
    setNewAccountAnchorEl(event.currentTarget);
  };
  const handleNewAccountClose = () => {
    setNewAccountAnchorEl(null);
  };

  return (
    <div className={styles.home}>
      <div className={styles.signingTokensHome}>
        <div className={styles.balanceDisplayBg}>
          <div className={styles.balanceDisplayBg1} />
        </div>
        <Button
          className={styles.transferButton}
          sx={{ width: 148 }}
          variant="contained"
          color="primary"
          href="/deposit"
          component={Link}
          to="/deposit"
        >
          Transfer
        </Button>
        <Button
          className={styles.depositButton}
          sx={{ width: 149 }}
          variant="contained"
          color="primary"
          // href="/deposit"
          component={Link}
          to="/deposit"
        >
          Deposit
        </Button>

        <div className={styles.tabSelectIndicator} />
        <div className={styles.assets}>Assets</div>
        <div className={styles.history}>History</div>

        <DataAssetContainer
          dataVetText="616.875 DATA"
          dataVetPriceText="$30.85"
          dataVetImageUrl="/data-icon.svg"
        />
        
        <div className={styles.ethAsset}>
          <div className={styles.tokenListEntry}>
            <div className={styles.eth}>0.95 ETH</div>
            <div className={styles.div}>$373.33</div>
            <img className={styles.iconBg32px} alt="" src="/icon-bg-32px.svg" />
          </div>
          <img className={styles.ethIcon} alt="" />
        </div>
        <b className={styles.b}>$404.18</b>
        <div className={styles.eth1}>1.0285 VET</div>
        <div className={styles.accountNameBalance}>
          <div className={styles.dailyDriver}>Daily Driver</div>
          <div className={styles.x3cdbf32x}>0x3Cd…bF32x</div>
        </div>
        <img
          className={styles.accountConnectedIcon}
          alt=""
          src="/account-connected.svg"
        />
        <img className={styles.hamburgerIcon} alt="" src="/hamburger1.svg" /> //humbergor icon
        <img
          className={styles.networkSelectWhite}
          alt=""
          src="/network-select-white7.svg"
        />
        <div className={styles.newAccount}>
          <Button
            sx={{ width: 375 }}
            id="button-Add token"
            aria-controls="menu-Add token"
            aria-haspopup="true"
            aria-expanded={newAccountOpen ? "true" : undefined}
            onClick={handleNewAccountClick}
            color="primary"
          >
            Add token
          </Button>
          <Menu
            anchorEl={newAccountAnchorEl}
            open={newAccountOpen}
            onClose={handleNewAccountClose}
          />
        </div>
        <div className={styles.requestSignature}>
          <div className={styles.yourSignatureIs}>
            Your signature is being requested by
          </div>
          <div className={styles.approveButton}>
            <div className={styles.approveButtonChild} />
            <div className={styles.sign}>Sign</div>
          </div>
          <div className={styles.denyButton}>
            <div className={styles.denyButtonChild} />
            <div className={styles.cancel}>Cancel</div>
          </div>
          <div className={styles.whiteBg} />
          <div className={styles.why}>Why ?</div>
          <div className={styles.thisIsAContainer}>
            <p
              className={styles.thisIsA}
            >{`This is a challenge created by Streamr `}</p>
            <p
              className={styles.thisIsA}
            >{`to prove private key ownership by signing `}</p>
            <p className={styles.thisIsA}>the following random data.</p>
            <p className={styles.blankLine}>&nbsp;</p>
          </div>
          <div className={styles.requestSignatureChild} />
          <div className={styles.groupParent}>
            <div className={styles.transactionBgParent}>
              <div className={styles.transactionBg} />
              <div className={styles.ecxoogvinjeoxkrw2fl0uahtidx}>
                307ECXOoGvInJeOxKRw2fl0UahTIDX
              </div>
            </div>
            <div className={styles.randomDataTo}>Random data to sign</div>
          </div>
          <div className={styles.streamrCoreParent}>
            <div className={styles.streamrCore}>Streamr Core</div>
            <img className={styles.ethIcon} alt="" />
            <div className={styles.streamrnetworkcore}>
              streamr.network/core
            </div>
          </div>
        </div>
        <div className={styles.sigRequestHotspot} />
        <div className={styles.dataTokenView}>
          <div className={styles.dataTokenViewChild} />
          <div className={styles.dataTokenViewItem} />
          <div
            className={styles.findHiddenTokens}
          >{`Find hidden tokens in Settings > General `}</div>
          <div className={styles.hideToken}>Hide token</div>
          <div className={styles.smallToggleOff}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img className={styles.groupItem} alt="" />
            </div>
          </div>
          <div className={styles.periodSelectorBg} />
          <div className={styles.h}>24H</div>
          <div className={styles.m}>3M</div>
          <div className={styles.m1}>1M</div>
          <img className={styles.dataTokenViewInner} alt="" />
          <div className={styles.hParent}>
            <div className={styles.h1}>{`+$0.012 (15.5%) 24H `}</div>
            <div className={styles.div1}>{`$0.056  `}</div>
          </div>
          <div className={styles.transferButton1}>
            <div className={styles.approveButtonChild} />
            <div className={styles.sign}>Transfer</div>
          </div>
          <div className={styles.depositButton1}>
            <div className={styles.denyButtonChild} />
            <div className={styles.cancel}>Deposit</div>
          </div>
          <div className={styles.data}>616.875 DATA</div>
          <div className={styles.h2}>
            <span className={styles.hTxt}>
              <span>{`$30.85 `}</span>
              <span className={styles.h3}>+$2.64 24H</span>
            </span>
          </div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.homeRuleD} />
        <div className={styles.homeRuleC} />
        <div className={styles.homeRuleB} />
        <div className={styles.homeRuleA} />
      </div>
      <div className={styles.vet}>0.95 VET</div>
      <div className={styles.div2}>$373.33</div>
      <img className={styles.iconBg32px1} alt="" src="/icon-bg-32px1.svg" />
      <img className={styles.layer3Icon} alt="" src="/layer-3.svg" />
    </div>
  );
};

