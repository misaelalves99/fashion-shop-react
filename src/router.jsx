import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import MainContainer from './components/MainContainer';
import ForgotPassword from './components/ForgotPassword';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register/>} />
          <Route path="/redefinir" element={<ForgotPassword />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default AppRouter;

