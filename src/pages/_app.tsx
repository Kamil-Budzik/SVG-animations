import "@/styles/globals.css";
import MainTemplate from "@/templates/MainTemplate";
import type { AppProps } from "next/app";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <div className={styles.main}>
        <MainTemplate>
          <Component {...pageProps} />
        </MainTemplate>
      </div>
    </div>
  );
}
