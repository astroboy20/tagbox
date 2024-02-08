import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/Header";
import { Why } from "@/container/Home/Why";
import { MainFeature } from "@/container/Home/MainFeature";
import { Choose } from "@/container/Home/Choose";
import { UpcomingEvents } from "@/container/Home/UpcomingEvents";
import { FAQ } from "@/container/Home/FAQ";
import { Testimonial } from "@/container/Home/Testimonial";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tag-Box</title>
        <meta name="description" content="TagBox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <Why />
        <MainFeature />
        <Choose />
        <UpcomingEvents />
        <FAQ />
        <Testimonial />
        <Footer/>
      </>
    </>
  );
}
