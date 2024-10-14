import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const coupons = [
    { code: 'SHOPPING10', discount: 0.1 },
    { code: 'SHOPPING20', discount: 0.2 },
  ];

  const applyCoupon = () => {
    const coupon = coupons.find(c => c.code === couponCode);
    if (coupon) {
      setAppliedDiscount(coupon.discount);
      alert(`คูปองส่วนลด ${coupon.discount * 100}% ถูกใช้งานแล้ว!`);
    } else {
      alert('คูปองไม่ถูกต้อง');
    }
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = subtotal * appliedDiscount;
    return (subtotal - discountAmount).toFixed(2);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">{item.price} บาท</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 bg-gray-200 rounded-full">
                  <Minus size={16} />
                </button>
                <span className="mx-2 font-semibold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 bg-gray-200 rounded-full">
                  <Plus size={16} />
                </button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <input 
                type="text" 
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="รหัสคูปอง"
                className="border p-2 rounded flex-grow"
              />
              <button 
                onClick={applyCoupon}
                className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                ใช้คูปอง
              </button>
            </div>
            
            <div className="bg-gray-100 p-4 rounded">
              <p className="flex justify-between"><span>ส่วนลด:</span> <span>{(appliedDiscount * 100).toFixed(0)}%</span></p>
              <p className="text-xl font-bold mt-2 flex justify-between"><span>ยอดรวมทั้งหมด:</span> <span>{calculateTotal()} บาท</span></p>
            </div>
            
            <button className="w-full bg-indigo-500 text-white px-4 py-3 rounded mt-4 hover:bg-indigo-600 transition duration-300 text-lg font-semibold">
              ดำเนินการสั่งซื้อ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;