import React from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import { Outlet } from "react-router-dom";
import { adminSidebarPaths } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = adminSidebarPaths;
// [
//   {
//     key: "Dashboard",
//     label: <NavLink to={"/admin/dashboard"}> Dashboard </NavLink>,
//   },
//   {
//     key: "user management",
//     label: "User Management",
//     children: [
//       {
//         key: "createAdmin",
//         label: <NavLink to={"/admin/create-admin"}> Create Admin </NavLink>,
//       },
//       {
//         key: "createFaculty",
//         label: <NavLink to={"/admin/create-faculty"}> Create Faculty </NavLink>,
//       },
//       {
//         key: "createStudent",
//         label: <NavLink to={"/admin/create-student"}> Create Student </NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          <h2>PH UNI</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
