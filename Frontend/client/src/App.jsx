import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/LandingHome';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';
import GroundDetails from './pages/GroundDetails';
import Bookings from './pages/Bookings';
import Grounds from './pages/Grounds';
import HomePage from './components/HomePage';
import Layout from './Layout'; // Import the Layout component
import LandingHome from './pages/LandingHome';
function App() {

  return (
    <>
      <Provider store={store}>
        <Toaster />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/userlogin" element={<Login />} />
              <Route path="/ground/:id" element={<GroundDetails />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/grounds" element={<Grounds />} />
              <Route path="/userhome" element={<LandingHome/>} />
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
