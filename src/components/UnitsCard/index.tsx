import { DeploymentUnitOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Asset, Unit, User } from "../../types";
import { AssetCard } from "../AssetCard";
import { UsersCard } from "../UsersCard";
import "./styles.scss";

interface UnitsCardProps {
  unit?: Unit;
  assets?: Array<any>;
  users?: Array<any>;
}

export const UnitsCard = ({ unit, assets, users }: UnitsCardProps) => {
  const getAssetsPerUnit = assets?.filter(
    (asset: Asset) => asset.unitId === unit.id
  );
  const getUsersPerUnit = users?.filter(
    (user: User) => user.unitId === unit.id
  );

  return (
    <div className="unit-card" key={unit?.id}>
      <h1 className="unit-card__name">
        <DeploymentUnitOutlined /> {unit?.name}
      </h1>
      <div className="unit-card__title">
        <h2>Assets</h2>
        <Link to={"/assets"}>
          Go to assets <RightOutlined />
        </Link>
      </div>
      <div className="unit-card__assets">
        {getAssetsPerUnit?.map((asset) => {
          return <AssetCard key={asset.id} assetData={asset} />;
        })}
      </div>
      <h2>Users</h2>
      <div className="unit-card__users">
        {getUsersPerUnit?.map((user) => {
          return <UsersCard isUnitsPage={true} key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};
