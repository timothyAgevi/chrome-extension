import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OSIStart from "./pages/OSIStart/OSIStart";
//create account flow
import Onboarding1 from "./pages/Onboarding1/Onboarding1";
import NameAccount from "./pages/NameAccount/NameAccount";

import SaveSeedPhrase from "./pages/SaveSeedPhrase/SaveSeedPhrase";
import ConfirmSeedPhrase from "./pages/ConfirmSeedPhrase/ConfirmSeedPhrase";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";

import HomeConnectionsOpen from "./pages/HomeConnectionsOpen/HomeConnectionsOpen";

import NoHistoryN from "./pages/NoHistoryN/NoHistoryN";
import NoAssetsN from "./pages/NoAssetsN/NoAssetsN";

import Deposit from "./pages/Deposit/Deposit";
// trasfer functionalities
import Transfer from "./pages/Transfer/Transfer";
import TransferConfirmation from "./pages/TransferConfirmation/TransferConfirmation";
import TransactionDetails from "./pages/TransactionDetails/TransactionDetails";
import PostSend1 from "./pages/PostSend1/PostSend1";

import NetworkSelectKovan from "./pages/NetworkSelectKovan/NetworkSelectKovan";
import SettingsHelp from "./pages/SettingsHelp/SettingsHelp";
import SettingsOpen from "./pages/SettingsOpen/SettingsOpen";
import SigRequest from "./pages/SigRequest/SigRequest";
import DATAToken1M from "./pages/DATAToken1M/DATAToken1M";

import ERCConnectionsB from "./pages/ERCConnectionsB/ERCConnetionsB";
import ERCConnectionsA from "./pages/ERCConnectionsA/ERCConectionsA";
import HomeSwitchToES from "./pages/HomeSwitchToES/HomeSwitchToEs";
import HomeOpenESConActive from "./pages/HomeOpenESConActive/HomeOpenESConActive";
import HomeConnectionsOpenESCon from "./pages/HomeConnectionsOpenESCon/HomeConnectionsOpenESCon";
import ESHomeConnected from "./pages/ESHomeConnected/ESHomeConnected";
import ESHome from "./pages/ESHome/ESHome";
import DDHome from "./pages/DDHome/DDHome";


import SignUp from "./pages/SignUp/SignUp";

import { useEffect } from "react";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/osstart":
        title = "";
        metaDescription = "";
        break;

        case "/":
          title = "";
          metaDescription = "";
          break; 
      // sign in
      case "/onboarding1":
        title = "";
        metaDescription = "";
        break;

      case "/name-account":
        title = "";
        metaDescription = "";
        break;

      

      case "/save-seedphrase":
        title = "";
        metaDescription = "";
        break;
      case "/confirm-seedphrase":
        title = "";
        metaDescription = "";
        break;

      case "/sign-in":
        title = "";
        metaDescription = "";
        break;

      case "/home":
        title = "";
        metaDescription = "";
        break;

//others
      case "/home-connections-open":
        title = "";
        metaDescription = "";
        break;

      case "/no-history-n":
        title = "";
        metaDescription = "";
        break;
      case "/no-assets-n":
        title = "";
        metaDescription = "";
        break;

      case "/deposit":
        title = "";
        metaDescription = "";
        break;
//trasfer functionalities
        case "/transfer":
        title = "";
        metaDescription = "";
        break;

      case "/transfer-confirmation":
        title = "";
        metaDescription = "";
        break;
      
     
      case "/transaction-details":
        title = "";
        metaDescription = "";
        break;

      case "/postsend-1":
        title = "";
        metaDescription = "";
        break;
//settings        
      case "/network-select-kovan":
        title = "";
        metaDescription = "";
        break;
      case "/settings-help":
        title = "";
        metaDescription = "";
        break;
      case "/settings-open":
        title = "";
        metaDescription = "";
        break;
      case "/sig-request":
        title = "";
        metaDescription = "";
        break;
      case "/data-token-1m":
        title = "";
        metaDescription = "";
        break;

      case "/erc-connections-b":
        title = "";
        metaDescription = "";
        break;
      case "/erc-connections-a":
        title = "";
        metaDescription = "";
        break;
      case "/home-switch-to-es":
        title = "";
        metaDescription = "";
        break;
      case "/home-open-es-con-active":
        title = "";
        metaDescription = "";
        break;
      case "/home-connections-open-es-con":
        title = "";
        metaDescription = "";
        break;
      case "/es-home-connected":
        title = "";
        metaDescription = "";
        break;
      case "/es-home":
        title = "";
        metaDescription = "";
        break;
      case "/dd-home":
        title = "";
        metaDescription = "";
        break;

      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OSIStart />} />     
      {/* //create account user journey */}
      <Route path="/osstart" element={<OSIStart />} />
      <Route path="/name-account" element={<NameAccount />} />   
      <Route path="/save-seedphrase" element={<SaveSeedPhrase />} />
      <Route path="/confirm-seedphrase" element={<ConfirmSeedPhrase />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/deposit" element={<Deposit />} />

      {/* trasfer functionality */}
      <Route path="/transfer" element={<Transfer/>} />
      <Route path="/transfer-confirmation" element={<TransferConfirmation />} />         
      <Route path="/transaction-details" element={<TransactionDetails />} />
      <Route path="/postsend-1" element={<PostSend1 />} />
{/* signup  */}
      <Route path="/sign-up" element={<SignUp />} />

{/* AOB paths */}
      <Route path="/network-select-kovan" element={<NetworkSelectKovan />} />
      <Route path="/settings-help" element={<SettingsHelp />} />
      <Route path="/settings-open" element={<SettingsOpen />} />
      <Route path="/sig-request" element={<SigRequest />} />
      <Route path="/data-token-1m" element={<DATAToken1M />} />     
      <Route path="/erc-connections-b" element={<ERCConnectionsB />} />
      <Route path="/erc-connections-a" element={<ERCConnectionsA />} />
      <Route path="/home-switch-to-es" element={<HomeSwitchToES />} />
      <Route
        path="/home-open-es-con-active"
        element={<HomeOpenESConActive />}
      />
      <Route
        path="/home-connections-open-es-con"
        element={<HomeConnectionsOpenESCon />}
      />
      <Route path="/es-home-connected" element={<ESHomeConnected />} />
      <Route path="/es-home" element={<ESHome />} />
      <Route path="/dd-home" element={<DDHome />} />
      <Route path="/home-connections-open" element={<HomeConnectionsOpen />} />
      <Route path="/no-history-n" element={<NoHistoryN />} />
      <Route path="/no-assets-n" element={<NoAssetsN />} />
    </Routes>
  );
}
export default App;
