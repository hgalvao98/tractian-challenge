import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { AssetsStatistics } from '../../../components/AssetsStatistics';
import { GreetingModal } from '../../../components/GreetingModal';
import { UnitsHome } from '../../../components/UnitsHome';
import { menuItems } from '../../../utils/menuItems';
import './styles.scss';


const Home: React.FC = () => {
    const { Content, Sider } = Layout;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className='home' style={{ height: '100%' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div onClick={() => { }} className="home__sider__header">
                    <h1>The Test Company</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={menuItems}
                />
            </Sider>
            <Layout className='home__content'>
                <Content className='home__greetings' style={{ margin: '24px 16px 0' }}>
                    <GreetingModal colorBgContainer={colorBgContainer} />
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <AssetsStatistics colorBgContainer={colorBgContainer} />
                        <UnitsHome colorBgContainer={colorBgContainer} />
                    </div>
                </Content>
            </Layout>
        </Layout >
    );
};


export default Home;