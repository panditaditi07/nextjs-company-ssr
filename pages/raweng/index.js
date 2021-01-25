import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./raweng.module.css";
const url = "https://panditaditi07.github.io/SSRData/raweng.json";
function RawEngineering(props) {
  let raweng = props.raweng[0];
  return (
    <div>
      <div className={styles["header"]}>
        <div className={styles["top-nav"]}>
          <img src={raweng.reLogo} className={styles["logo"]} alt="logo" />
          <div className={styles["nav-links"]}>
            <Link href="/">
              <p className={styles["link"]}>HOME</p>
            </Link>
            <Link href="/surfboard">
              <p className={styles["link"]}>SURFBOARD</p>
            </Link>
            <Link href="/contentstack">
              <p className={styles["link"]}>CONTENTSTACK</p>
            </Link>
          </div>
        </div>

        <div className={styles["banner"]}>
          <div className={styles["banner-content"]}>
            <h1 className={styles["banner-title"]}>{raweng.title}</h1>
            <h3 className={styles["banner-subtitle"]}>{raweng.subtitle}</h3>
          </div>
          <div className={styles["banner-image"]}>
            <img src={raweng.bannerImage} alt="Banner" />
          </div>
        </div>
      </div>
      <p className={styles["intro-text"]}>{raweng.intro}</p>
      <h3 className={styles["section-heading"]}>WHAT WE DO</h3>
      {raweng.whatWedo.map((card, i) => {
        return (
          <div key={i} className={styles["section-card"]}>
            <img
              className={styles["section-card-image"]}
              src={card.image}
              alt="What we do"
            />
            <div className={styles["section-card-text"]}>
              <p className={styles["section-card-heading"]}>{card.heading}</p>
              <p className={styles["section-card-subheading"]}>
                {card.subHeading}
              </p>
            </div>
          </div>
        );
      })}

      <h3 className={styles["section-heading"]}>TESTIMONIALS</h3>
      <div className={styles["testimonial"]}>
        {raweng.testimonials.map((testimony, i) => {
          return (
            <div key={i}>
              <img
                className={styles["testimonail-image"]}
                src={testimony.image}
                alt="Testimony"
              />
              <div className={styles["testimonial-text"]}>
                <p>{testimony.name}</p>
                <p>{testimony.company}</p>
                <p>"{testimony.intro}"</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles["footer"]}>
        <h2 className={styles["footer-heading-1"]}>
          Ready to get started on your next project?
        </h2>
        <div className={styles["footer-space"]}></div>
        <div className={styles["section"]}>
          <div className={styles["section-1"]}>
            <div className={styles["privacy"]}>Privacy</div>

            <div className={styles["terms"]}>Backend Terms of Use</div>
          </div>

          <div className={styles["icons"]}>
            <FaFacebook size="5vh" color="white" />

            <FaLinkedin size="5vh" color="white" />

            <FaTwitter size="5vh" color="white" />

            <FaInstagram size="5vh" color="white" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <p className={styles["copyright"]}>
          Copyright &copy; 2020 Raw Engineering LLC. All Rights Reserved.
        </p>
        <div className={styles["endlogo"]}>
          <img
            src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100"
            alt="footer-logo"
          />
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url);
  return {
    props: {
      raweng: [...data],
    },
  };
};
export default RawEngineering;
