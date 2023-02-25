import { ReactElement } from "react";
import styles from "../styles/MainTemplate.module.css";
import Link from "next/link";

interface Props {
  children: ReactElement;
}

export default function MainTemplate({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blooming">Blooming Icon</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
