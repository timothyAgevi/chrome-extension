import React from "react";
import styles from "./SignUp.module.css";
import { Button } from "@mui/material";

export default function SignUp() {
  return (
    <div className={`${styles["sign-up-1"]} ${styles["clip-contents"]}`}>
      <div className={styles["group-977"]}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gz7osnp14uc-376%3A2014?alt=media&token=7309aafd-10d7-4928-8c7b-1a8cfd540ade"
          alt="Not Found"
          className={styles["group-1000003011"]}
        />
        <p className={styles["welcome-to-crypsense-wa"]}>
          Welcome to Crypsense Wallet
        </p>
        <p className={styles["the-decentralized-web-a"]}>
          The decentralized web awaits
        </p>
        <div className={styles["group-018"]}>
          <p className={styles["suporting-text"]}>Email</p>
        </div>
        <div className={styles["group-1084"]}>
          <p className={styles["suporting-text-1"]}>Password</p>
        </div>
        <div className={styles["group-573"]}>
          <p className={styles["suporting-text-2"]}>Retype Password</p>
        </div>
        {/* <div className={styles["group-684"]}> */}

          {/* <p className={styles["sign-up"]}
          href="/home"
          >Sign Up</p> */}

        {/* </div> */}
       <Button
        className={styles.primaryButton}
        variant="contained"
        color="primary"
        href="/home"
      >
        Sign UP
      </Button>
      </div>
    </div>
  );
}

// import React from "react"
// // import "./styles.css"
// // import styles from "./SignIn.module.css";

// export default function SignUp() {
//   return (
//     <div className="sign-up-1 clip-contents">
//       <div className="group-977">
//         <img
//           src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/gz7osnp14uc-376%3A2014?alt=media&token=7309aafd-10d7-4928-8c7b-1a8cfd540ade"
//           alt="Not Found"
//           className="group-1000003011"
//         />
//         <p className="welcome-to-crypsense-wa">Welcome to Crypsense Wallet</p>
//         <p className="the-decentralized-web-a">The decentralized web awaits</p>
//         <div className="group-018">
//           <p className="suporting-text">Email</p>
//         </div>
//         <div className="group-1084">
//           <p className="suporting-text-1">Password</p>
//         </div>
//         <div className="group-573">
//           <p className="suporting-text-2">Retype Password</p>
//         </div>
//         <div className="group-684">
//           <p className="sign-up">Sign Up</p>
//         </div>
//         <div className="group-482">
//           <p className="sign-in-to-wallet">Sign in to Wallet</p>
//         </div>
//       </div>
//     </div>
//   )
// }
