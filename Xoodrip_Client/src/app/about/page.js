import styles from "../../../styles/about.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>About Xoodrip</h2>
          <p>
            At Xoodrip, we merge creativity and technology to craft digital
            experiences that stand out. Our mission is to help brands connect
            meaningfully with audiences through design, innovation, and
            strategy.
          </p>
          <p>
            From web design to brand identity, every project we undertake is
            driven by a passion for aesthetics, usability, and performance.
            We believe great design is more than visuals—it’s about creating
            lasting impressions.
          </p>
        </div>

        <div className={styles.placeholderBox}>
          
          <div className={styles.placeholder}>
            <p>Image Area</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
