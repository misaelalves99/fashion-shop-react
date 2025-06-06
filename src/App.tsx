// src/App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartProvider';
import { FavoritesProvider } from './context/FavoritesProvider';
import './index.css';

import HomePage from './pages/Home';
import ProductsPage from './pages/products/index';
import ProductDetailPage from './pages/products/[id]';
import ContactPage from './pages/Contact';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <FavoritesProvider>
          <div className="bg-white text-gray-900 min-h-screen flex flex-col">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
