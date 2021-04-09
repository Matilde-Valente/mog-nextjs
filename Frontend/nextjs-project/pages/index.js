import Head from "next/head";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import { PageHeader, Row, Col, Carousel } from "antd";
import { useState } from "react";
import getkanyeRest from "./api/kanye-rest"

export default function Home() {
  const [data, setData] = useState([]);

  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  async function getKanyeTweets(){
    let kanye = await getkanyeRest.getkanyeRest()

    setData(kanye.quote)

    console.log(kanye.quote)
  }

  return (
    <div>
      <Head>
        <title>NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader className={styles.pageheader}>NextJS App</PageHeader>
      <div>
        <Carousel beforeChange={getKanyeTweets} autoplay>
          <div>
            <h3 style={contentStyle}>{data}</h3>
          </div>
          <div>
            <h3 style={contentStyle}>{data}</h3>
          </div>
          <div>
            <h3 style={contentStyle}>{data}</h3>
          </div>
          <div>
            <h3 style={contentStyle}>{data}</h3>
          </div>
        </Carousel>
      </div>
      
    </div>
  );
}
