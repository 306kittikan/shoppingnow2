import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  { id: 1, name: 'เสื้อยืด', price: 250, image: 'https://i.pinimg.com/236x/6d/53/ac/6d53acc61e6e0ad8d496a801f2312739.jpg', category: 'เสื้อผ้า' },
  { id: 3, name: 'รองเท้าผ้าใบ', price: 1590, image: 'https://i.pinimg.com/236x/ec/76/15/ec7615cdd0ad2098bfe35f43f8e0e12c.jpg', category: 'รองเท้า' },
  { id: 5, name: 'กระเป๋าสะพาย', price: 890, image: 'https://i.pinimg.com/236x/8c/04/94/8c04945026cff3d6949027c802454980.jpg', category: 'กระเป๋า' },
  { id: 6, name: 'นาฬิกาข้อมือ', price: 990, image: 'https://i.pinimg.com/236x/94/bd/aa/94bdaa972183c52213d817e07f889467.jpg', category: 'เครื่องประดับ' },
];

const HomePage = () => {
  return (
    <div>

        
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">ยินดีต้อนรับสู่ออนไลน์แฟชั่น</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">สินค้าแนะนำ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price} บาท</p>
                <p className="text-sm text-indigo-500 mb-4">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/products" className="bg-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-600 transition duration-300">
          ดูสินค้าทั้งหมด
        </Link>
      </div>
    </div>
    
  );
};

export default HomePage;