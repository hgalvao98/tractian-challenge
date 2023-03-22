import { DeploymentUnitOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useShallowEqualSelector } from "../../hooks";
import { getAllUnits } from "../../modules/store/units/actions";
import { Unit } from "../../types";

export const UnitsHome = ({ colorBgContainer }) => {
  const dispatch = useDispatch();

  const { units } = useShallowEqualSelector((state) => {
    return {
      units: state.units.data,
    };
  });

  useEffect(() => {
    dispatch(getAllUnits());
  }, []);

  return (
    <div className="home__units">
      <h1>Units</h1>
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
