import "../styles/globals.css";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
          <Menu.Item key="0">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link href="/kanye">
              <a>Kanye</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/stories">
              <a>Top stories</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer className="footer">
        This is the Footer
      </Footer>
    </Layout>
  );
}

export default MyApp;
