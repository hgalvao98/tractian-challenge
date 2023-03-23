import { Select } from "antd";
import { useState } from "react";
import { Searcher } from "../../../components/Searcher";
import { UsersCard } from "../../../components/UsersCard";
import { useShallowEqualSelector } from "../../../hooks";
import { User } from "../../../types";
import "./styles.scss";

export const Users = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const { units, users } = useShallowEqualSelector((state) => {
    return {
      users: state.app.data.users,
      units: state.app.data.units,
    };
  });

  const onSearch = (value: string) => setSearchValue(value);

  const returnSearch = users?.filter((search: User) => {
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

  return (
    <div className="user">
      <Searcher
        onSearch={onSearch}
        className={"user"}
        placeholder={"Users"}
        selectBefore={selectBefore}
      />
      <div className="users-card">
        {returnSearch?.map((user: User) => {
          return <UsersCard key={user.id} user={user} units={units} />;
        })}
      </div>
    </div>
  );
};
