import { Progress } from "antd";
import { Link } from "react-router-dom";
import { useShallowEqualSelector } from "../../hooks";

export const AssetsStatistics = ({ colorBgContainer }) => {
  const { assets } = useShallowEqualSelector((state) => {
    return {
      assets: state.app.data.assets,
    };
  });

  const assetsInOperation =
    assets && assets.filter((item) => item.status === "inOperation");
  const assetsInDowntime =
    assets && assets.filter((item) => item.status === "inDowntime");
  const assetsInAlert =
    assets && assets.filter((item) => item.status === "inAlert");

  return (
    <div className="home__statistics">
      <div className="home__statistics__title">
        <h1>Assets' Statistics</h1>
        <Link to={'/assets'}>Go to assets ></Link>
      </div>
      <div className="home__statistics__cards">
        <div className="home__statistics__card">
          <Progress
            size={100}
            strokeColor="#52C41A"
            type="circle"
            percent={(
              (assetsInOperation?.length / assets?.length) *
              100
            ).toFixed()}
          />
          <p>In Operation</p>
        </div>
        <div className="home__statistics__card">
          <Progress
            size={100}
            strokeColor="#F7C800"
            type="circle"
            percent={(
              (assetsInDowntime?.length / assets?.length) *
              100
            ).toFixed()}
          />
          <p>In Downtime</p>
        </div>
        <div className="home__statistics__card">
          <Progress
            size={100}
            strokeColor="#FF4D4F"
            type="circle"
            percent={((assetsInAlert?.length / assets?.length) * 100).toFixed()}
          />
          <p>In Alert</p>
        </div>
      </div>
    </div>
  );
};
