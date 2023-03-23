import { useState } from "react";
import { Searcher } from "../../../components/Searcher";
import { UnitsCard } from "../../../components/UnitsCard";
import { useShallowEqualSelector } from "../../../hooks";
import { Unit } from "../../../types";
import "./styles.scss";

export const Units = () => {
  const [searchValue, setSearchValue] = useState("");

  const { units, assets, users } = useShallowEqualSelector((state) => {
    return {
      assets: state.app.data.assets,
      units: state.app.data.units,
      users: state.app.data.users,
    };
  });

  const onSearch = (value: string) => setSearchValue(value);

  const returnSearch = units?.filter((search: Unit) =>
    search.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="unit">
      <Searcher
        onSearch={onSearch}
        className={"unit"}
        placeholder={"Units"}
        selectBefore={null}
      />
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
