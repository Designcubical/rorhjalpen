import Head from "next/head";
import Link from "next/link";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rörhjälpen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          <Link href="/start">
            <Button>Starta</Button>
          </Link>
        </p>
      </main>
    </div>
  );
}
