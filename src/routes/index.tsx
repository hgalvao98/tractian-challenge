import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Assets from "../constants/pages/Assets";
import Home from "../constants/pages/Home";

const RootRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assets" element={<Assets />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootRoutes;
