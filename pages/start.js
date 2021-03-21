import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import PrivateRoute from "@components/PrivateRoute";

export default function Start() {
  return (
    <PrivateRoute className="container">
      <div>
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header title="Welcome to my app!" />
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>

        <Footer />
      </div>
    </PrivateRoute>
  );
}
