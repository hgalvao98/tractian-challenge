import { HeatMapOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AssetsPage from "../constants/pages/Assets";
import Home from "../constants/pages/Home";
import { Units } from "../constants/pages/Units";
import { Users } from "../constants/pages/Users";
import { Workorders } from "../constants/pages/Workorders";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Sider className="sider" breakpoint="lg" collapsedWidth="0">
        <Link to={"/"}>
          <div className="home__sider__header">
            <HeatMapOutlined />
            <h3>The Test Company</h3>
          </div>
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
          <Menu.Item>
            <Link to={"/assets"}>Assets</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/units"}>Units</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/users"}>Users</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={"/workorders"}>Workorders</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/units" element={<Units />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workorders" element={<Workorders />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
