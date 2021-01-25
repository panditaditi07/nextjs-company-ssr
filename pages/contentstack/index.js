import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import styles from "./contentstack.module.css";
const url = "https://panditaditi07.github.io/SSRData/contentstack.json";
function Contentstack(props) {
  let contentstack = props.contentstack[0];
  return (
    <div>
      <Head>
        <title>Contenstack</title>
      </Head>
      <div className={styles["banner-section"]}>
        <div className={styles["top-nav"]}>
          <img
            src={contentstack.csLogo}
            className=""
            width="200px"
            height="100px"
            alt="csLogo"
          ></img>
          <div className={styles["nav-links"]}>
            <Link href="/">
              <p className={styles["link"]}>Home</p>
            </Link>
          </div>
        </div>
        <div className={styles["banner-content"]}>
          <h3 className={styles["title"]}>{contentstack.title}</h3>
          <p className={styles["subtitle"]}>{contentstack.subtitle}</p>
        </div>
      </div>
      <div className={styles["next-banner"]}>
        <h2>Why Choose Contentstack ?</h2>
        <div className={styles["why-card"]}>
          {contentstack.whyChoose.map((choose, i) => {
            return (
              <div key={i} className={styles["why-content"]}>
                <h3>{choose.heading}</h3>
                <p>{choose.subHeading}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className={styles["main-heading"]}>
          Recommended Content Management Resources
        </h1>
        <div className={styles["blog-card"]}>
          <img
            src={contentstack.recommendCs.blogImage}
            alt="logo"
            className={styles["blog-image"]}
          ></img>
          <div>
            <h3 style={{ color: "blue" }}>Blog</h3>
            <h3 className={styles["blog-heading"]}>
              {contentstack.recommendCs.blogHeading}
            </h3>
            <p className={styles["blog-subheading"]}>
              {contentstack.recommendCs.subheading}
            </p>
          </div>
        </div>
      </div>

      <hr />
      <footer className={styles["footer"]}>
        {contentstack.footer.map((footerLinks, i) => {
          return (
            <p key={i} className={styles["lists"]} key={i}>
              {footerLinks}
            </p>
          );
        })}
      </footer>
    </div>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url);
  return {
    props: {
      contentstack: [...data],
    },
  };
};

export default Contentstack;
