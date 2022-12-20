import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import HomeMenu from "../components/HomeMenu";
import HeadComponent from "../components/HeadComponent";

export default function Home() {
  return (
    <div className="App" id="App">
      <HeadComponent />
      <span> BUNKER </span>
      <HomeMenu />
    </div>
  );
}
