import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UnitsCard } from "../../../components/UnitsCard";
import { useShallowEqualSelector } from "../../../hooks";
import { getAllAssets } from "../../../modules/store/assets/actions";
import { getAllUnits } from "../../../modules/store/units/actions";
import { getAllUsers } from "../../../modules/store/users/actions";
import { Unit } from "../../../types";
import "./styles.scss";

export const Units = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const { units, assets, users } = useShallowEqualSelector((state) => {
    return {
      assets: state.assets.allAssetsData,
      units: state.units.data,
      users: state.users.data,
    };
  });

  const onSearch = (value: string) => setSearchValue(value);

  useEffect(() => {
    dispatch(getAllAssets());
    dispatch(getAllUnits());
    dispatch(getAllUsers());
  }, []);

  const returnSearch = units.filter((search: Unit) =>
    search.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="unit">
      <div className="unit__search">
        <h1>Search:</h1>
        <Search placeholder="Units" allowClear onSearch={onSearch} />
      </div>
      <div className="units-card">
        {returnSearch?.map((unit: Unit) => {
          return (
            <UnitsCard
              key={unit.id}
              unit={unit}
              assets={assets}
              users={users}
            />
          );
        })}
      </div>
    </div>
  );
};
