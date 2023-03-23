import { Layout } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./constants/pages/Home/styles.scss";
import { dataFetchAll } from "./modules/store/app/actions";
import RootRoutes from "./routes";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetchAll());
  }, []);

  return (
    <Layout className="home" style={{ height: "100%" }}>
      <RootRoutes />
    </Layout>
  );
}
