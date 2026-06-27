import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import HistoryPage from '../pages/HistoryPage';
import RoutesPage from '../pages/RoutesPage';
import HorseTramPage from '../pages/history/HorsePage';
// import SteamTramPage from "../pages/history/SteamTramPage";
// import PetrolTramPage from "../pages/history/PetrolTramPage";
// import ElectricTramPage from "../pages/history/ElectricTramPage";
// import HighSpeedTramPage from "../pages/history/HighSpeedTramPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />}/>
                <Route path="/history/horse" element={<HorseTramPage />} />
                {/* <Route path="/history/steam" element={<SteamTramPage />} />
                <Route path="/history/petrol" element={<PetrolTramPage />} />
                <Route path="/history/electric" element={<ElectricTramPage />} />
                <Route path="/history/speed" element={<HighSpeedTramPage />} /> */}
            <Route path='/routes' element={<RoutesPage/>} />
        </Routes>
    );
}   
export default AppRoutes;