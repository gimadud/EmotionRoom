import { Routes, Route, Outlet } from 'react-router-dom';
import './css/App.css';
import MainPage from './pages/MainPage/MainPage';
import Radio from './pages/Radio/Radio';
import RecommendationPage from './pages/Radio/RecommendationPage';
import Cassettebox from './pages/Cassettebox/CassetteBoxFooter';
import Calendar from './pages/Calendar/Calendar';

const Layout = () => (
  <div className="app-container">
    <Outlet />
  </div>
);

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="selection" element={<Radio />} />
            <Route path="recommendation" element={<RecommendationPage />} />
            <Route path="cassettebox" element={<Cassettebox />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;