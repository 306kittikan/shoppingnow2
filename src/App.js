import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ProductList from './ProductList';
import Cart from './Cart';
import { ShoppingCart } from 'lucide-react';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => prevCart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <Router>
      <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
        <nav className="bg-indigo-600 p-4 mb-8 rounded-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">ออนไลน์แฟชั่น</Link>
            <div>
              <Link to="/" className="text-white mr-4 hover:text-indigo-200">หน้าหลัก</Link>
              <Link to="/products" className="text-white mr-4 hover:text-indigo-200">สินค้า</Link>
              <Link to="/cart" className="text-white hover:text-indigo-200 flex items-center">
                <ShoppingCart size={20} className="mr-1" />
                ตะกร้าสินค้า ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;