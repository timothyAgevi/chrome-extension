import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={`${styles["sign-in"]} ${styles["clip-contents"]}`}>
      <div className={styles["group-6810"]}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/0t9xkrs8967m-376%3A1949?alt=media&token=931603f7-96e0-4212-a967-9c399462038a"
          alt="Not Found"
          className={styles["group-1000003011"]}
        />
        <p className={styles["welcome-back-to-crypsen"]}>
          Welcome back to Crypsense Wallet
        </p>
        <p className={styles["the-decentralized-web-a"]}>
          The decentralized web awaits
        </p>
        <input
          type="text"
          placeholder="Email"
          className={styles["input-field"]}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className={styles["input-field"]}
        />
        <label htmlFor="rememberMe" className={styles["rectangle-1"]}>
          <input
            type="checkbox"
            id="rememberMe"
            style={{ display: "none" }}
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          {rememberMe && <span>&#10003;</span>}
        </label>
        <p className={styles["remember-me"]}>Remember me</p>
        <p className={styles["restore-account-from-se"]}>
          Restore Account from seed
        </p>
        <div className={styles["group-970"]}>
          <Link  to = "/home" className={styles["sign-in-to-wallet"]}>Sign in to Wallet</Link>
        </div>
      </div>
    </div>
  );
}
