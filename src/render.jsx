import React, {useState} from "react";
import {
	HashRouter,
	Route,
	Link
} from "react-router-dom";
import { Layout, Menu } from "antd";
import {
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.less";

import {Home} from "./coms/home/index";

const { Header, Sider, Content } = Layout;

const About = () => (
	<div>
		<h2>About</h2>
	</div>
);

const Render = () => {
	const [collapsed, setCollapsed] = useState(false);
	const toggle = () => {
		setCollapsed(!collapsed);
	};
	return (
		<HashRouter>
			<Layout style={{height: "100vh"}} >
				<Sider collapsible collapsed={collapsed} onCollapse={toggle} >
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							<Link to="/about">About</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ paddingLeft: 10,
						color: "#fff", 
						display: "flex", 
						justifyContent: "space-between"
					}}>
						<h1 style={{color: "#fff", fontSize: "25px"}} >
              react-whole-cli
						</h1>
						<p>
              对于新手友好
						</p>
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
						}}
					>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
					</Content>
				</Layout>
			</Layout>

		</HashRouter>
	);
};

export default Render;