export const getWork = (id: number) => {
  return {
    id,
    type: "FETCH_WORK_REQUEST",
  };
};
