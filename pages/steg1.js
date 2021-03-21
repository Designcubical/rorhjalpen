import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";
import { Button, Steps } from "antd";

export default function Steg1() {
  const { Step } = Steps;

  return (
    <div className="container">
      <Head>
        <title>Steg 1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Steps current={0} percent={0}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>

        <div className="steps-content">sdfsd sdf df</div>
        <div className="steps-action">
          <Link href="/steg2">
            <Button type="primary">Next</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
