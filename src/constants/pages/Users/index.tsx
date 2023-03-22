import { Select } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UsersCard } from "../../../components/UsersCard";
import { useShallowEqualSelector } from "../../../hooks";
import { getAllAssets } from "../../../modules/store/assets/actions";
import { getAllUnits } from "../../../modules/store/units/actions";
import { getAllUsers } from "../../../modules/store/users/actions";
import { User } from "../../../types";
import "./styles.scss";

export const Users = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const dispatch = useDispatch();

  const { units, users } = useShallowEqualSelector((state) => {
    return {
      users: state.users.data,
      units: state.units.data,
    };
  });

  const onSearch = (value: string) => setSearchValue(value);

  const returnSearch = users.filter((search: User) => {
    switch (filterBy) {
      case "unit":
        return search.unitId.toString() === searchValue;
      case "id":
        return search.id.toString() === searchValue;
      default:
        return search.name.toLowerCase().includes(searchValue.toLowerCase());
    }
  });

  const { Option } = Select;

  const handleGetOption = (e) => {
    setFilterBy(e);
  };

  const selectBefore = (
    <Select onChange={handleGetOption} defaultValue="Filter By">
      <Option value="name">Name</Option>
      <Option value="unit">Unit</Option>
      <Option value="id">Id</Option>
    </Select>
  );

  useEffect(() => {
    dispatch(getAllAssets());
    dispatch(getAllUsers());
    dispatch(getAllUnits());
  }, []);

  return (
    <div className="user">
      <div className="user__search">
        <h1>Search:</h1>
        <Search
          addonBefore={selectBefore}
          placeholder="Users"
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div className="users-card">
        {returnSearch.map((user: User) => {
          return <UsersCard key={user.id} user={user} units={units} />;
        })}
      </div>
    </div>
  );
};
