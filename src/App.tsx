import { HeatMapOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import './constants/pages/Home/styles.scss';
import RootRoutes from "./routes";
import { menuItems } from "./utils/menuItems";

export default function App() {

  const [menuItemActive, setMenuItemActive] = useState('')
  const { Sider } = Layout;

  const handleMenuChange = (e) => {
    setMenuItemActive(e.key);
    let url
    if (e.key) {
      url = e?.key?.toLowerCase();
      window.location.replace(url)
    } else {
      window.location.replace('/')
    }
  };

  return (
    <Layout className='home' style={{ height: '100%' }}>
      <Sider
        className='sider'
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div onClick={() => handleMenuChange('')} className="home__sider__header">
          <HeatMapOutlined />
          <h3>The Test Company</h3>
        </div>
        <Menu
          onClick={handleMenuChange}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={menuItems}
        />
      </Sider>
      <RootRoutes />
    </Layout >
  );
}