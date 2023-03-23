import { Layout } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AssetCard } from "../../../components/AssetCard";
import { AssetModal } from "../../../components/AssetModal";
import { Searcher } from "../../../components/Searcher";
import { useShallowEqualSelector } from "../../../hooks";
import { Asset } from "../../../types";
import "./styles.scss";

const Assets = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [assetId, setAssetId] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { allAssetsData } = useShallowEqualSelector((state) => {
    return {
      allAssetsData: state.app.data.assets,
    };
  });

  const returnSearch = allAssetsData?.filter((search: Asset) =>
    search.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onSearch = (value: string) => setSearchValue(value);

  const handleModalIsOpen = (id) => {
    setAssetId(returnSearch.find((x) => x.id === id));
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setAssetId({});
  };

  return (
    <Layout className="assets__content">
      <Searcher
        onSearch={onSearch}
        className={"asset"}
        placeholder={"Asset"}
        selectBefore={null}
      />
      <div className="assets__cards">
        {returnSearch?.map((asset) => {
          return (
            <AssetCard
              onClick={() => handleModalIsOpen(asset.id)}
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
              key={asset.id}
              assetData={asset}
            />
          );
        })}
      </div>
      {modalIsOpen && (
        <AssetModal
          onClick={handleModalClose}
          setAssetId={setAssetId}
          assetId={assetId}
        />
      )}
    </Layout>
  );
};

export default Assets;
