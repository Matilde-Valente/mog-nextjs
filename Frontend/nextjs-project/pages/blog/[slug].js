import Head from "next/head";
import "antd/dist/antd.css";
import styles from "../../styles/Home.module.css";
import { Image } from "antd";

const api = "http://localhost:1337";

function blogPostDisplay({ blogPost }) {
  return (
    <div>
      <Head>
        <title>Blog Post - {blogPost.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>{blogPost.title}</h1>
        </div>
        <Image width={500} src={`${api}${blogPost.image.url}`} />
        <p>{blogPost.content}</p>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const blogPostId = context.params.slug;

  async function fetchBlogPostData() {
    const res = await fetch(`${api}/blog-posts/${blogPostId}`);
    return await res.json();
  }

  return {
    props: {
      blogPost: await fetchBlogPostData(),
    },
  };
}

export default blogPostDisplay;
