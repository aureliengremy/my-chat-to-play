import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Chat from "@/components/Chat";
import InputChat from "@/components/InputChat";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My personal Chat</title>
        <meta name="description" content="My personal Chat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-800">
        <Header />
        <main className="container m-auto h-screen">
          <div className="flex h-full items-center content-center">
            <div className="w-full
            p-6 bg-white border border-gray-200 rounded-lg shadow">
              <Chat />
              {/* <InputChat /> */}
            </div>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
