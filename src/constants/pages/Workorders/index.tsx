import { Select } from "antd";
import { useState } from "react";
import { Searcher } from "../../../components/Searcher";
import { WorkorderCard } from "../../../components/WorkorderCard";
import { useShallowEqualSelector } from "../../../hooks";
import { Workorder } from "../../../types";
import "./styles.scss";

export const Workorders = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filterBy, setFilterBy] = useState("");

  const { workorders, users } = useShallowEqualSelector((state) => {
    return {
      workorders: state.app.data.workorders,
      users: state.app.data.users,
    };
  });

  const onSearch = (value: string) => setSearchValue(value);

  const { Option } = Select;

  const handleGetOption = (e) => {
    setFilterBy(e);
  };

  const returnSearch = workorders?.filter((search: Workorder) => {
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

  return (
    <div className="workorder">
      <Searcher
        onSearch={onSearch}
        className={"workorder"}
        placeholder={"Workorders"}
        selectBefore={selectBefore}
      />
      <div className="workorders-card">
        {returnSearch?.map((workorder: Workorder) => {
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
