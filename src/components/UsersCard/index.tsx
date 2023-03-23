import { Button, Form, Image, Input } from "antd";
import { useState } from "react";
import "../../App.scss";
import NoImg from "../../assets/NoImg.jpg";
import { User } from "../../types";
import "./styles.scss";

export const UsersCard = ({ user, units, isUnitsPage }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [editedUser, setEditedUser] = useState<User>();
  const { name, email, unitId, id } = user;

  const getUnitAssigned = units?.filter(
    (unit) => unit.id === Number(editedUser?.unitId)
  );

  const onFinish = (values: any) => {
    setEditedUser(values);
    setCanEdit(false);
  };

  return (
    <div className="user-card">
      <div className="user-card__image">
        <Image preview={false} src={NoImg} />
      </div>
      <div className="user-card__info">
        {canEdit ? (
          <Form initialValues={{ unitId: unitId }} onFinish={onFinish}>
            <Form.Item name="name" label="Name">
              <Input placeholder={name} />
            </Form.Item>
            <Form.Item name="email" label="E-mail">
              <Input placeholder={email} />
            </Form.Item>
            <Form.Item name="unitId" label="Assign Unit">
              <Input type="number" placeholder={unitId} />
            </Form.Item>
            <Button
              className="asset-modal__button"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        ) : (
          <div>
            <h3>Name</h3>
            <p>{editedUser?.name ? editedUser?.name : name}</p>
            {isUnitsPage ?? (
              <div>
                <h3>E-mail</h3>
                <p>{editedUser?.email ? editedUser?.email : email}</p>
                <h3>Unit ID</h3>
                <p>{editedUser?.unitId ? editedUser?.unitId : unitId}</p>
                {editedUser?.unitId && (
                  <div>
                    <h3>Assigned Unit</h3>
                    {getUnitAssigned.map((unit) => {
                      return <p key={unit.id}>{unit.name}</p>;
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {isUnitsPage ?? (
        <Button className="default-button" onClick={() => setCanEdit(!canEdit)}>
          {canEdit ? "Close" : "Edit"}
        </Button>
      )}
    </div>
  );
};
