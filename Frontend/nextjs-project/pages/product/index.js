import Head from "next/head";
import Link from "next/link";
import "antd/dist/antd.css";
import styles from "../../styles/Home.module.css";
import { Card, Col, Row } from "antd";
import { useRouter } from "next/router";

const api = "http://localhost:1337";

function Home({ blogPosts }) {
  const { pathname, locale } = useRouter();
  console.log(locale)

  return (
    <div>
      <Head>
        <title>Blog Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Row>
          {blogPosts.map((post) => {
            return (
              <Link href={`${pathname}/${post.id}`} key={`blogPost_${post.id}`}>
                <a>
                  <CardItem
                    imgSrc={`${api}${post.image.url}`}
                    imgAlt={post.image.name}
                    title={post.title}
                    content={post.content}
                  ></CardItem>
                </a>
              </Link>
            );
          })}
        </Row>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  async function fetchBlogPosts() {
    const res = await fetch(`${api}/blog-posts`);
    return await res.json();
  }

  return {
    props: {
      blogPosts: await fetchBlogPosts(),
    },
  };
}

export default Home;