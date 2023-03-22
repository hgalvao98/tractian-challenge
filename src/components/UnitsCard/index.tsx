import { DeploymentUnitOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AssetCard } from "../AssetCard";
import "./styles.scss";

export const UnitsCard = ({ unit, assets }) => {
  const getAssetsPerUnit = assets.filter((asset) => asset.unitId === unit.id);

  return (
    <div className="unit-card" key={unit?.id}>
      <h1 className="unit-card__name">
        <DeploymentUnitOutlined /> {unit?.name}
      </h1>
      <div className="unit-card__title">
        <h2>Assets</h2>
        <Link to={"/assets"}>Go to assets ></Link>
      </div>
      <div className="unit-card__assets">
        {getAssetsPerUnit.map((asset) => {
          return <AssetCard assetData={asset} />;
        })}
      </div>
      <h2>Users</h2>

      {/* //Icon - Unit Name
            Assets in 'unitname'
            show asset cards

            Users in 'unitname'
            show users card  (soon)
            // */}
    </div>
  );
};
