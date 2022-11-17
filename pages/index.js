import Head from "next/head";
import Image from "next/image";
import { Header } from "../component";
import { HomePage } from "../section/home";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}
