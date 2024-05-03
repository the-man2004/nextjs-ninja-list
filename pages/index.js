import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        aliquid aspernatur voluptates. Consequatur, pariatur dolorem recusandae
        non fugit cupiditate consectetur minima expedita, in voluptatum dolores
        maiores obcaecati doloremque facilis vero!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        aliquid aspernatur voluptates. Consequatur, pariatur dolorem recusandae
        non fugit cupiditate consectetur minima expedita, in voluptatum dolores
        maiores obcaecati doloremque facilis vero!
      </p>
      <Link href="/ninjas">Sea Ninja Listing</Link>
      <Footer />
    </div>
  );
}
