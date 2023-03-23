import { Checkbox, Switch } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import "./styles.scss";

export const WorkorderCard = ({ workorder, users }) => {
  const [taskCompleted, setTaskCompleted] = useState(false);
  const { title, description, assignedUserIds, status, priority, checklist } =
    workorder;
  const [workorderCompletd, setWorkorderCompletd] = useState(status);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setTaskCompleted(!taskCompleted);
  };

  const handleToggleSwitch = (checked: boolean) => {
    checked
      ? setWorkorderCompletd("completed")
      : setWorkorderCompletd("in progress");
  };

  const checkList = checklist.map((item) => {
    return (
      <Checkbox
        key={item.task}
        defaultChecked={item.completed}
        onChange={handleCheckboxChange}
      >
        {item.task}
      </Checkbox>
    );
  });

  return (
    <div className="workorder-card">
      <Switch
        defaultChecked={status === "completed"}
        onChange={handleToggleSwitch}
      />
      <h1>{title}</h1>
      <h3>Description</h3>
      <p>{description}</p>
      <h3>Assigned Users</h3>
      <p>{assignedUserIds.join(", ")}</p>
      <h3>Status</h3>
      <p>{workorderCompletd}</p>
      <h3>Priority</h3>
      <p>{priority}</p>
      <div className="workorder-card__checklist">
        <h3>CheckList</h3>
        {checkList}
      </div>
    </div>
  );
};
