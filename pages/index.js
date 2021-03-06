import Head from "next/head";
import styles from "../styles/Home.module.css";
import { signIn, getSession } from "next-auth/client";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Next-Okta poc. This is the home page.
        </h1>
        {/* Specifying okta for signIn removes intermediate page */}
        <button onClick={() => signIn("okta")}>Click to login</button>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { res } = context;

  if (session) {
    //redirect to content page when user is already logged in
    res.setHeader("location", "/content");
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
}
