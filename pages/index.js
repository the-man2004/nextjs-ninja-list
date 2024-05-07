import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          aliquid aspernatur voluptates. Consequatur, pariatur dolorem
          recusandae non fugit cupiditate consectetur minima expedita, in
          voluptatum dolores maiores obcaecati doloremque facilis vero!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          aliquid aspernatur voluptates. Consequatur, pariatur dolorem
          recusandae non fugit cupiditate consectetur minima expedita, in
          voluptatum dolores maiores obcaecati doloremque facilis vero!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          Sea Ninja Listing
        </Link>
      </div>
    </>
  );
}
