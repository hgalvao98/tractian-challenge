import {
  AppstoreOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    label: "Assets",
    key: "Assets",
    icon: <SettingOutlined />,
  },
  {
    label: "Units",
    key: "Units",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Workorders",
    key: "Workorders",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Users",
    key: "Users",
    icon: <UserOutlined />,
  },
];
