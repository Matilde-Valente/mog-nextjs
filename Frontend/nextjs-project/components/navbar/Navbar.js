import "antd/dist/antd.css";
import {Layout, Menu, Col, Row, Divider} from "antd";
import {
  CloudOutlined,
  FundProjectionScreenOutlined,
  InboxOutlined,
  VideoCameraOutlined,
  ForkOutlined,
  AppstoreOutlined,
  FolderOutlined,
} from "@ant-design/icons";

import products from "./ProductsList";

import styles from "./Navbar.module.css";

const {Header} = Layout;
const {SubMenu} = Menu;

function MenuTest() {
  return (
    <div style={{maxWidth: "100%"}}>
      <div style={{padding: "40px 100px"}}>
        <Row
          // justify="space-between"
          gutter={[16, 16]}
          // wrap={false}
          // className={styles.row}
        >
          {products.map((product) => {
            return (
              <Col span={6} className={styles.col}>
                <Col flex="0px" className={styles.icon}>
                  {product.icon}
                </Col>
                <Col flex="auto" className={styles.product}>
                  <div className={styles.title}>
                    <h4>{product.name}</h4>
                    <h4>{product.description}</h4>
                  </div>
                  <div className={styles.links}>
                    {product.products.map((prod) => {
                      return <a href={prod.link}>{prod.name}</a>;
                    })}
                  </div>
                </Col>
              </Col>
            );
          })}
        </Row>
      </div>
      
      <div style={{width: "100%"}}>
        <Divider style={{margin: "0"}} />
        <Row
          style={{
            margin: "20px auto",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <a href="#">Explore our catalogue</a>
        </Row>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="light" mode="horizontal">
        <Menu.Item key="solutions">Solutions</Menu.Item>
        <SubMenu key="products" title="Products">
          <MenuTest />
        </SubMenu>
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="communities">Communities</Menu.Item>
        <Menu.Item key="contact-us">Contact us</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
