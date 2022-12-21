import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomeMenu() {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.menu_button}>
        <Link href="/room"> Играть </Link>
      </button>
      <button className={styles.menu_button}>
        <Link href="/settings"> Настройки </Link>
      </button>
      <button className={styles.menu_button}>Выход</button>
    </div>
  );
}
