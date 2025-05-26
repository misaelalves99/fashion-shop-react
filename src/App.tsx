// src/App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartProvider';
import './index.css';

// Importar as páginas
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ContactPage from './pages/Contact';
import CartPage from './pages/Cart';
import LoginPage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="bg-white text-gray-900 min-h-screen flex flex-col">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
