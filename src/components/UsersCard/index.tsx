import { Button, Form, Image, Input } from "antd";
import { useState } from "react";
import NoImg from "../../assets/NoImg.jpg";
import { User } from "../../types";
import "./styles.scss";

export const UsersCard = ({ user, units }) => {
  const [canEdit, setCanEdit] = useState(false);
  const [editedUser, setEditedUser] = useState<User>();
  const { name, email, unitId, id } = user;

  const getUnitAssigned = units?.filter(
    (unit) => unit.id === Number(editedUser?.unitId)
  );

  const onFinish = (values: any) => {
    console.log(values);
    setEditedUser(values);
    setCanEdit(false);
  };

  return (
    <div className="user-card" key={id}>
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
            <h1>Name</h1>
            <p>{editedUser?.name ? editedUser?.name : name}</p>
            <h1>E-mail</h1>
            <p>{editedUser?.email ? editedUser?.email : email}</p>
            <h1>Unit ID</h1>
            <p>{editedUser?.unitId ? editedUser?.unitId : unitId}</p>
            {editedUser?.unitId && (
              <div>
                <h1>Assigned Unit</h1>
                {getUnitAssigned.map((unit) => {
                  return <p key={unit.id}>{unit.name}</p>;
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <Button onClick={() => setCanEdit(!canEdit)}>Edit</Button>
    </div>
  );
};
