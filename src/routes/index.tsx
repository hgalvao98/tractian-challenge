import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssetsPage from "../constants/pages/Assets";
import Home from "../constants/pages/Home";
import { Units } from "../constants/pages/Units";
import { Users } from "../constants/pages/Users";
import { Workorders } from "../constants/pages/Workorders";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/units" element={<Units />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workorders" element={<Workorders />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
