import "../styles/globals.css";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
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
        </Menu>
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer style={{ position: "absolute", bottom: 0, width: "100%" }}>
        This is the Footer
      </Footer>
    </Layout>
  );
}

export default MyApp;
