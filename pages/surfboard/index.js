import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import styles from "./surfboard.module.css";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
const url = "https://panditaditi07.github.io/SSRData/surfboard.json";
function Surfboard(props) {
  let surfboard = props.surfboard[0];
  return (
    <div>
      <Head>
        <title>Surfboard</title>
      </Head>
      <div className={styles["header"]}>
        <div className={styles["top-nav"]}>
          <img src={surfboard.sfLogo} className={styles["logo"]} alt="logo" />
          <div className={styles["nav-links"]}>
            <Link href="/">
              <p className={styles["link"]}>Home</p>
            </Link>
            <Link href="/raweng">
              <p className={styles["link"]}>Raw Engineering</p>
            </Link>
            <Link href="/contentstack">
              <p className={styles["link"]}>Contentstack</p>
            </Link>
          </div>
        </div>
        <div className={styles["banner"]}>
          <div className={styles["banner-content"]}>
            <p className={styles["banner-title"]}>{surfboard.title}</p>
            <p className={styles["banner-subtitle"]}>{surfboard.subtitle}</p>
          </div>
        </div>
      </div>
      <h1 className={styles["section-heading"]}>Our Portfolio Companies</h1>
      <div className={styles["portfolio"]}>
        <img src={surfboard.image} className={styles["portfolio-image"]} />
        <div>
          {surfboard.companies.map((company, i) => {
            return (
              <div key={i}>
                <p className={styles["company-name"]}>{company.company}</p>

                <p className={styles["company-description"]}>{company.intro}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className={styles["section-heading"]}>Team</h1>
        {surfboard.team.map((team, i) => {
          return (
            <div className={styles["team-container"]} key={i}>
              <img className={styles["team-image"]} src={team.image} alt="" />
              <div className={styles["team-content"]}>
                <p className={styles["team-name"]}>{team.name}</p>
                <p className={styles["team-intro"]}>{team.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <footer className={styles["footer-container"]}>
        <div className={styles["footer-content"]}>
          <img
            className={styles["company-logo"]}
            src={surfboard.sfLogo}
            alt="Logo"
          />
          <div>
            <p>Portfolio</p>
            <p>Academy</p>
            <p>Events</p>
          </div>
          <div>
            <p>Gallery</p>
            <p>e-Certificates</p>
            <p>Contact Us</p>
          </div>
          <div>
            <p>info@surfboardventures.com</p>
          </div>
          <div>
            <FaFacebookSquare size="5vh" color="grey" />
            <FaLinkedin size="5vh" color="grey" />
            <FaTwitterSquare size="5vh" color="grey" />
            <FaYoutubeSquare size="5vh" color="grey" />
            <FaInstagramSquare size="5vh" color="grey" />
          </div>
        </div>
        <p className={styles["copyright"]}>
          Copyright © 2021 Surfboard Ventures. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url);
  return {
    props: {
      surfboard: [...data],
    },
  };
};
export default Surfboard;
