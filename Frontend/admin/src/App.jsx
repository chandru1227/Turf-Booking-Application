import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';
import SidePanel from './components/SidePanel';
import Grounds from './pages/Grounds';
import CreateGround from './pages/CreateGround';
import GroundDetails from './pages/GroundDetails';
import UpdateGround from './pages/UpdateGround';
import Bookings from './pages/Bookings';

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <Router>
        <Main />
      </Router>
    </Provider>
  );
}

const Main = () => {
  const location = useLocation();

  // Check if the current path is the login page
  const isLoginPage = location.pathname === '/adminlogin' || location.pathname === '/';

  return (
    <div className='flex'>
      {!isLoginPage && <SidePanel />}
      <div className={`flex-1 ${!isLoginPage ? 'ml-64' : ''}`}>
        <Routes>
          <Route path="/adminlogin" element={<Login />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/grounds" element={<Grounds />} />
          <Route path="/create-ground" element={<CreateGround />} />
          <Route path="/ground/:id" element={<GroundDetails />} />
          <Route path="/update/:id" element={<UpdateGround />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
