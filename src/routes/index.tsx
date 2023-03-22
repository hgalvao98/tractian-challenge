import { BrowserRouter, Route, Routes } from "react-router-dom";
import Assets from "../constants/pages/Assets";
import Home from "../constants/pages/Home";
import { Units } from "../constants/pages/Units";
import { Users } from "../constants/pages/Users";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/units" element={<Units />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
