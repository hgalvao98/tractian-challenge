import { Progress } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useShallowEqualSelector } from "../../hooks";
import { getAllAssets } from "../../modules/store/assets/actions";

export const AssetsStatistics = ({ colorBgContainer }) => {
  const dispatch = useDispatch();

  const { assets } = useShallowEqualSelector((state) => {
    return {
      assets: state.assets.allAssetsData,
    };
  });

  const assetsInOperation =
    assets && assets.filter((item) => item.status === "inOperation");
  const assetsInDowntime =
    assets && assets.filter((item) => item.status === "inDowntime");
  const assetsInAlert =
    assets && assets.filter((item) => item.status === "inAlert");

  useEffect(() => {
    dispatch(getAllAssets());
  }, []);

  return (
    <div className="home__statistics">
      <h1>Assets' Statistics</h1>
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
