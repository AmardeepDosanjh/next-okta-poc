import styles from "../styles/Home.module.css";
import { getSession, signOut } from "next-auth/client";
import Link from "next/link";

export default function Content() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>A protected content page</h1>
        <button onClick={signOut}>Click to logout</button>
        {/* Link works with SSR pages */}
        <Link href="/contentTwo">Second page</Link>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { res } = context;

  if (!session) {
    //redirect to home page when the user is not logged in
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
  }

  // call Contentful and get data then return as props to the page

  return { props: {} };
}
