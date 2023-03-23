import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { AssetsGraph } from "../../../components/AssetsGraph";
import { AssetsStatistics } from "../../../components/AssetsStatistics";
import { GreetingModal } from "../../../components/GreetingModal";
import { UnitsHome } from "../../../components/UnitsHome";
import "./styles.scss";

const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="home__content">
      <h1 className="home__mobile__header">The Test Company</h1>
      <Content className="home__greetings">
        <GreetingModal colorBgContainer={colorBgContainer} />
        <div className="home__secondStep">
          <AssetsStatistics colorBgContainer={colorBgContainer} />
          <UnitsHome />
        </div>
        <AssetsGraph />
      </Content>
    </Layout>
  );
};

export default Home;
