import { Image, Progress, Tooltip } from "antd";
import { parseStatus } from "../../utils/parseStatus";
import "./styles.scss";

export const AssetCard = (props) => {
  const { name, status, image, healthscore, sensors } = props.assetData;

  const { onClick } = props;

  return (
    <div onClick={onClick} className="asset-card">
      <div className="asset-card__image-container">
        <Image preview={false} className="asset-card__image" src={image} />
      </div>
      <div className="asset-card__info">
        <h1>{name}</h1>
        <h3 className={`asset-card__status--${status}`}>
          {parseStatus(status)}
        </h3>
        <h3 className={"asset-card__sensor"}>Sensor: {sensors}</h3>
        <div className="asset-card__health">
          <h3>Health Score</h3>
          <Tooltip title="Health Score">
            <Progress
              steps={10}
              percent={healthscore}
              format={(number) => `${number}`}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
