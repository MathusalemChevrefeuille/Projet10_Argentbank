import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../assets/style.css';
import React from 'react'
import Homepage from './homepage/homepage'
import Login from './login/login'
import Header from './layout/header'
import Footer from './layout/footer'
import Accountpage from './account/accountpage'
import PrivateRoute from './login/privateroute';

function App() {
  return (
    <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                        <Route path="/accountpage" element={<Accountpage />} />
                    </Route>
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
