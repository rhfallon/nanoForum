import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../index.css";
import Comments from "./comments"



import { Layout, Menu, Icon } from "antd";

class ThreadOne extends Component {

  state={
    loginId:""
  }

  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;

    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <h2 style={{ color: "white", textAlign: "center" }}>Nano Forum</h2>
        </Header>
        <Content
          style={{ padding: "0 50px", margin: "30px 0", height: "80vh" }}
        >
          <Layout
            style={{ padding: "24px 0", background: "#fff", height: "80vh" }}
          >
            <Sider width={300} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "70vh", padding: "20px" }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      Hello {this.state.loginId}
                    </span>
                  }
                >
       
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
         

                  <Comments></Comments>

         
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default ThreadOne;
