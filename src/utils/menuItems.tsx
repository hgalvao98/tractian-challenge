import { AppstoreOutlined, SettingOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
    {
        label: 'Assets',
        icon: <SettingOutlined />,
        onClick: () => { },
    },
    {
        label: 'Units',
        icon: <AppstoreOutlined />,
        onClick: () => { }
    },
    {
        label: 'Workorders',
        icon: <UnorderedListOutlined />,
        onClick: () => { }
    },
    {
        label: 'Users',
        icon: <UserOutlined />,
        onClick: () => { }
    }
]