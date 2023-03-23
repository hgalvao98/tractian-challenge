export const getAsset = (id: number) => {
  return {
    id,
    type: "FETCH_ASSET_REQUEST",
  };
};
