import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/style.css';
import React from 'react';
import HomePage from './homePage/homePage';
import Login from './login/login';
import Header from './layout/header';
import Footer from './layout/footer';
import AccountPage from './account/accountPage';
import PrivateRoute from './login/privateroute';

function App() {
  return (
    <Router>
        <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                        <Route path="/accountPage" element={<AccountPage />} />
                    </Route>
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
