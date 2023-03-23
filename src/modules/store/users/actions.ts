export const getUser = (id: number) => {
  return {
    id,
    type: "FETCH_USER_REQUEST",
  };
};
