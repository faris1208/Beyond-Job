import Image from "next/image";
import styles from "../app/page.module.scss";
import SignUpPage from "./(pages)/sign-up/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <SignUpPage />
    </div>
  );
}
