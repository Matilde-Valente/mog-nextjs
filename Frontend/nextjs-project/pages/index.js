import Head from "next/head";
import "antd/dist/antd.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>HomePage</h1>
    </div>
  );
}
