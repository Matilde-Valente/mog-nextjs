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

import styles from "./Navbar.module.css";

const {Header} = Layout;
const {SubMenu} = Menu;

function MenuTest() {
  return (
    <div style={{width: "100%"}}>
      <div style={{padding: "40px 100px"}}>
        <Row
          justify="space-between"
          gutter={[16, 16]}
          wrap={false}
          style={{
            maxHeight: "200px",
            columnGap: "5px",
          }}
        >
          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Col flex="0px" className={styles.icon}>
              <CloudOutlined />
            </Col>
            <Col
              flex="auto"
              style={{lineHeight: "1em"}}
              className={styles.product}
            >
              <div className={styles.title}>
                <h4>MAM4PRO</h4>
                <h4>Cloud Media Production</h4>
              </div>
              <div className={styles.links}>
                <a>Virtual Media Operations</a>
                <a>Production Management</a>
                <a>Deploy Options</a>
              </div>
            </Col>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Col flex="0px">
              <FundProjectionScreenOutlined />
            </Col>
            <Col
              flex="auto"
              style={{lineHeight: "1em"}}
              className={styles.product}
            >
              <div className={styles.title}>
                <h4>Vizzi</h4>
                <h4>OTT-TV Platform</h4>
              </div>
              <div className={styles.links}>
                <a>Media Acquisition</a>
                <a>Media Preparation</a>
                <a>Media management</a>
                <a>Distribution & Security</a>
                <a>Media Engagement</a>
              </div>
            </Col>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Col flex="0px">
              <InboxOutlined />
            </Col>
            <Col flex="auto" className={styles.product}>
              <div className={styles.title}>
                <h4>mDeck</h4>
                <h4>Professional Media Decks</h4>
              </div>
              <div className={styles.links}>
                <a>Grand Series 4K</a>
                <a>Standard Series HD</a>
                <a>Densu Series HD Compact</a>
              </div>
            </Col>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
            }}
          >
            <Col flex="0px">
              <VideoCameraOutlined />
            </Col>
            <Col
              flex="auto"
              style={{lineHeight: "1em"}}
              className={styles.product}
            >
              <div className={styles.title}>
                <h4>mxfSPEEDRAIL</h4>
                <h4>Professional Media Gateways</h4>
              </div>
              <div className={styles.links}>
                <a>File Ingest & Transcoding</a>
                <a>Video Recorder</a>
                <a>Playback</a>
                <a>Encoder / Decoder</a>
                <a>Card Ingest</a>
                <a>Social Media Gateway</a>
                <a>Stream Server</a>
              </div>
            </Col>
          </Col>
        </Row>

        <Row
          justify="start"
          gutter={[16, 16]}
          wrap={false}
          style={{
            maxHeight: "200px",
            columnGap: "5px",
          }}
        >
          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Col flex="0px">
              <ForkOutlined />
            </Col>
            <Col
              flex="auto"
              style={{lineHeight: "1em"}}
              className={styles.product}
            >
              <div className={styles.title}>
                <h4>Xpress</h4>
                <h4>High-Density IT Servers</h4>
              </div>
              <div className={styles.links}>
                <a>2U Series</a>
                <a>1D Series</a>
              </div>
            </Col>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Col flex="0px">
              <FolderOutlined />
            </Col>
            <Col
              flex="auto"
              style={{lineHeight: "1em"}}
              className={styles.product}
            >
              <div className={styles.title}>
                <h4>mediaLIBS</h4>
                <h4>Professional Media Libraries</h4>
              </div>
              <div className={styles.links}>
                <a>IMF</a>
                <a>MXF</a>
                <a>GXF</a>
              </div>
            </Col>
          </Col>

          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Col flex="0px">
              <AppstoreOutlined />
            </Col>
            <Col
              flex="auto"
              style={{lineHeight: "1em"}}
              className={styles.product}
            >
              <div className={styles.title}>
                <h4>StorEDIT</h4>
                <h4>Compact NAS</h4>
              </div>
              <div className={styles.links}>
                <a>SSD Storage</a>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
      <div style={{width: "100%"}}>
        <Divider style={{margin: "0"}} />
        <Row style={{margin: "20px auto", textAlign: "center"}}>
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
