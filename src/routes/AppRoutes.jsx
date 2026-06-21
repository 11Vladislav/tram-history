import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';
import RoutesPage from '../pages/RoutesPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path='/routes' element={<RoutesPage/>} />
        </Routes>
    );
}   
export default AppRoutes;