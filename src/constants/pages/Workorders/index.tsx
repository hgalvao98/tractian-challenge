import { Select } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { WorkorderCard } from "../../../components/WorkorderCard";
import { useShallowEqualSelector } from "../../../hooks";
import { getAllUsers } from "../../../modules/store/users/actions";
import { getAllWork } from "../../../modules/store/workorders/actions";
import { Workorder } from "../../../types";
import "./styles.scss";

export const Workorders = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const dispatch = useDispatch();

  const { workorders, users } = useShallowEqualSelector((state) => {
    return {
      workorders: state.workorders.data,
      users: state.users.data,
    };
  });

  const onSearch = (value: string) => setSearchValue(value);

  const { Option } = Select;

  const handleGetOption = (e) => {
    setFilterBy(e);
  };

  const returnSearch = workorders.filter((search: Workorder) => {
    switch (filterBy) {
      case "priority":
        return search.priority
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      case "status":
        return search.status.toLowerCase().includes(searchValue.toLowerCase());
      default:
        return search.title.toLowerCase().includes(searchValue.toLowerCase());
    }
  });

  const selectBefore = (
    <Select onChange={handleGetOption} defaultValue="Filter By">
      <Option value="title">Title</Option>
      <Option value="priority">Priority</Option>
      <Option value="status">Status</Option>
    </Select>
  );

  useEffect(() => {
    dispatch(getAllWork());
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="workorder">
      <div className="workorder__search">
        <h1>Search:</h1>
        <Search
          addonBefore={selectBefore}
          placeholder="Workorders"
          allowClear
          onSearch={onSearch}
        />
      </div>
      <div className="workorders-card">
        {returnSearch.map((workorder: Workorder) => {
          return (
            <WorkorderCard
              key={workorder.title}
              workorder={workorder}
              users={users}
            />
          );
        })}
      </div>
    </div>
  );
};
