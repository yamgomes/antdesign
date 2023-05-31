import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Breadcrumb, Row, Col } from "antd";
import TableExample from "../components/Table";
import Forms from "../components/Form";
import { Footer } from "antd/es/layout/layout";
import Forms2 from "../components/Form2";

const { Header, Sider, Content } = Layout;

const Formularios: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["3"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <a href="/">Dashboard</a>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <a href="/tabelas">Tabelas</a>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <a href="/forms">Formularios</a>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Breadcrumb
            items={[
              {
                title: <a href="/">Dashboard</a>,
              },
              {
                title: <a href="/tabelas">Tabelas</a>,
              },
            ]}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            padding: 24,
            textAlign: "center",
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col span={12}>
              <Forms />
            </Col>
            <Col span={12}>
              <Forms2 />
            </Col>
          </Row>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Formularios;
