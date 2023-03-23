import { DeploymentUnitOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useShallowEqualSelector } from "../../hooks";
import { Unit } from "../../types";

export const UnitsHome = () => {
  const { units } = useShallowEqualSelector((state) => {
    return {
      units: state.app.data.units,
    };
  });

  return (
    <div className="home__units">
      <div className="home__statistics__title">
        <h1>Units</h1>
        <Link to={"/units"}>
          Go to units <RightOutlined />
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {units?.map((unit: Unit) => {
          return (
            <div key={unit.id} className="home__units__card">
              <h3>
                <DeploymentUnitOutlined /> {unit?.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
