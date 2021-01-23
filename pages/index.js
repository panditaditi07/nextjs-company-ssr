import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import axios from "axios";
const url = "https://panditaditi07.github.io/SSRData/home.json";
function Home(props) {
  let foo = null;
  if (typeof window !== "undefined") {
    foo = window.localStorage.getItem("foo");
  }
  let home = props.home[0];
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles["banner"]}>
        <h1 className={styles["title"]}>Welcome!!!</h1>

        <div className={styles["company-cards"]}>
          {home.surfboard.map((details, i) => {
            return (
              <>
                <Link href="/surfboard">
                  <div className={styles["card"]}>
                    <Link href="/surfboard">
                      <img
                        className={styles["logo"]}
                        src={details.logo}
                        alt=""
                      />
                    </Link>

                    <div className={styles["content"]}>
                      <h2 className={styles["heading"]}>{details.company}</h2>
                      <p className={styles["intro"]}>{details.intro}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
          {home.raweng.map((details, i) => {
            return (
              <>
                {" "}
                <Link href="/raweng" className={styles["link"]}>
                  <div className={styles["card"]}>
                    <Link href="/raweng">
                      <img
                        className={styles["relogo"]}
                        src={details.logo}
                        alt=""
                      />
                    </Link>

                    <div className={styles["content"]}>
                      <h2 className={styles["heading"]}>{details.company}</h2>
                      <p className={styles["intro"]}>{details.intro}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
          {home.cs.map((details, i) => {
            return (
              <>
                <Link href="/contentstack">
                  <div className={styles["card"]}>
                    <Link href="/contentstack">
                      <img
                        className={styles["logo"]}
                        src={details.logo}
                        alt=""
                      />
                    </Link>

                    <div className={styles["content"]}>
                      <h2 className={styles["heading"]}>{details.company}</h2>
                      <p className={styles["intro"]}>{details.intro}</p>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  let { data } = await axios.get(url);
  return {
    props: {
      home: [...data],
    },
  };
};

export default Home;
