import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Breadcrumb } from "antd";
import TableExample from "../components/Table";

const { Header, Sider, Content } = Layout;

const Tabelas: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
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
      <Layout>
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
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <TableExample />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Tabelas;
