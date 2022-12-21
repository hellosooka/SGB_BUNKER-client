import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import HomeMenu from "../components/HomeMenu";
import HeadComponent from "../components/HeadComponent";

export default function Home() {
  return (
    <div className="App" id="App">
      <div className={styles.bg}></div>

      <HeadComponent />
      <div className={styles.menu_container}>
        <span className={styles.title}> BUNKER </span>
        <HomeMenu />
      </div>
    </div>
  );
}
