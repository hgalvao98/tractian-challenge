import { CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Image, Input } from "antd";
import { useEffect } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { getAsset } from "../../modules/store/assets/actions";
import { Assets } from "../../types";
import "./styles.scss";

export const AssetModal = ({ onClick, assetId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsset(assetId.id));
  }, [assetId.id]);

  const assetState = useSelector((state: Assets) => state?.assets?.assetData);

  const {
    id,
    image,
    status,
    name,
    healthscore,
    sensors,
    unitId,
    assignedUserIds,
    model,
    specifications,
  } = assetState;

  const waitAsset = assetId.id === id;

  const onFinish = (values: any) => {
    onClick();
  };

  let newUsersArray = new Array(1, 2, 3, 4);

  const availableUsersId = newUsersArray.filter(
    (val) => !assignedUserIds?.includes(val)
  );

  return (
    <div className="asset-modal">
      {waitAsset ? (
        <div>
          <button className="asset-modal__close" onClick={onClick}>
            <CloseOutlined />
          </button>
          <div className="asset-modal__image-container">
            <Image src={image} />
          </div>
          <Form
            className="asset-modal__form"
            initialValues={assetState}
            onFinish={onFinish}
          >
            <div className="asset-moda__form-column">
              <Form.Item label="Name" name="name">
                <Input placeholder={name} />
              </Form.Item>
              <Form.Item label="Status" name="status">
                <Input placeholder={status} />
              </Form.Item>
              <Form.Item label="Healthscore" name="healthscore">
                <Input type="number" placeholder={healthscore?.toString()} />
              </Form.Item>
              <Form.Item label="Sensor" name="sensors">
                <Input type="number" placeholder={sensors?.toString()} />
              </Form.Item>
              <Form.Item label="Model" name="model">
                <Input placeholder={model} />
              </Form.Item>
              <Form.Item label="Unit ID" name="unitId">
                <Input placeholder={unitId?.toString()} />
              </Form.Item>
            </div>
            <div className="asset-moda__form-column">
              <Form.Item label="Assign Users" name="assignedUserIds">
                {assignedUserIds.map((user) => {
                  return (
                    <Checkbox key={user} checked>
                      {user}
                    </Checkbox>
                  );
                })}
                {availableUsersId.map((user) => {
                  return <Checkbox key={user}>{user}</Checkbox>;
                })}
              </Form.Item>
              <h3>Specifications</h3>
              <Form.Item label="Max Temperature" name="specifications.maxTemp">
                <Input
                  disabled
                  placeholder={specifications?.maxTemp?.toString()}
                />
              </Form.Item>
              <Form.Item label="Power" name="specifications.power">
                <Input
                  disabled
                  placeholder={specifications?.power?.toString()}
                />
              </Form.Item>
              <Form.Item label="RPM" name="specifications.rpm">
                <Input disabled placeholder={specifications?.rpm?.toString()} />
              </Form.Item>
              <Button
                className="asset-modal__button"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      ) : (
        <ReactLoading type="spin" color="black" height={20} width={20} />
      )}
    </div>
  );
};
