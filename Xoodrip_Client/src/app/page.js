import Image from "next/image";
import styles from "../../styles/page.module.css";
import Image1 from "./images/Image1";
import Image2 from "./images/Image2";
import Logo1 from "./images/logo1";
import Logo2 from "./images/Logo2";
import Logo3 from "./images/Logo3";
import Logo4 from "./images/Logo4";
import Logo5 from "./images/Logo5";
import Logo6 from "./images/Logo6";
import Logo7 from "./images/Logo7";
import Logo8 from "./images/Logo8";
import Logo9 from "./images/Logo9";
import Logo10 from "./images/Logo10";
import Logo11 from "./images/Logo11";
import Logo12 from "./images/Logo12";
import Logo13 from "./images/Logo13";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.heading}>
          Innovating Today, Implementing Tomorrow
          <br />
          Crafting Digital Brilliance
        </h1>

        <button className={styles.button}>Start your Project</button>

        <h2 className={styles.subheading}>
          Trusted by founders and entrepreneurs from all over the world
        </h2>

        <div className={styles.avatarContainer}>
          <div className={styles.avatarGroup}>
            <Image1></Image1>
            <Image2></Image2>
            <img src="https://i.pravatar.cc/100?img=2" alt="avatar2" />
            <img src="https://i.pravatar.cc/100?img=3" alt="avatar3" />
            <img src="https://i.pravatar.cc/100?img=4" alt="avatar4" />
            <img src="https://i.pravatar.cc/100?img=5" alt="avatar5" />
            <img src="https://i.pravatar.cc/100?img=6" alt="avatar6" />
            <img src="https://i.pravatar.cc/100?img=7" alt="avatar7" />
            <img src="https://i.pravatar.cc/100?img=8" alt="avatar8" />
          </div>
        </div>

       <div className={styles.logos}>
        <Logo1></Logo1>
        <Logo2></Logo2>
        <Logo3></Logo3>
        <Logo4></Logo4>
        <Logo5></Logo5>
        <Logo6></Logo6>
        <Logo7></Logo7>
        <Logo8></Logo8>
        <Logo9></Logo9>
        <Logo10></Logo10>
        <Logo11></Logo11>
        <Logo12></Logo12>
        <Logo13></Logo13>

       </div>
      </main>
    </div>
  );
}
