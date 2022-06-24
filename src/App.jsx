import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Banner from './components/Banner';
import Basket from './views/Basket';
import Profile from './views/Profile';

import { useSelector } from 'react-redux';

function App() {
  const {darkMode} = useSelector((state) => state.ui)

  return (
    <BrowserRouter>
      <div  className={darkMode ? 'dark-mode' : ''}>
        <Banner />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
