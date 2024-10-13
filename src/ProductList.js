import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

// เพิ่มคะแนนเริ่มต้นให้กับสินค้า
const products = [
  { id: 1, name: 'เสื้อยืด', price: 250, image: 'https://i.pinimg.com/236x/6d/53/ac/6d53acc61e6e0ad8d496a801f2312739.jpg', category: 'เสื้อผ้า', rating: 4.5, ratingCount: 10 },
  { id: 2, name: 'กางเกงยีนส์', price: 990, image: 'https://i.pinimg.com/236x/38/ee/3a/38ee3a120a26729d3bcf68a34d6a4159.jpg', category: 'เสื้อผ้า', rating: 4.2, ratingCount: 8 },
  { id: 3, name: 'รองเท้าผ้าใบ', price: 1590, image: 'https://i.pinimg.com/236x/ec/76/15/ec7615cdd0ad2098bfe35f43f8e0e12c.jpg', category: 'รองเท้า', rating: 4.8, ratingCount: 15 },
  { id: 4, name: 'หมวกแก๊ป', price: 350, image: 'https://i.pinimg.com/236x/a1/74/1d/a1741dd5bec48348d0855c14e85ea4d4.jpg', category: 'เครื่องประดับ', rating: 4.0, ratingCount: 5 },
  { id: 5, name: 'กระเป๋าสะพาย', price: 890, image: 'https://i.pinimg.com/236x/8c/04/94/8c04945026cff3d6949027c802454980.jpg', category: 'กระเป๋า', rating: 4.6, ratingCount: 17 },
  { id: 6, name: 'นาฬิกาข้อมือ', price: 2990, image: 'https://i.pinimg.com/236x/94/bd/aa/94bdaa972183c52213d817e07f889467.jpg', category: 'เครื่องประดับ', rating: 4, ratingCount: 14  },
  { id: 7, name: 'แว่นตากันแดด', price: 590, image: 'https://i.pinimg.com/236x/dc/7b/40/dc7b401eb5979717b124acfa494d14ba.jpg', category: 'เครื่องประดับ', rating: 4.7, ratingCount: 10  },
  { id: 8, name: 'เข็มขัดหนัง', price: 450, image: 'https://i.pinimg.com/236x/87/99/ab/8799abe807df0e8ba6d2502b880d6e45.jpg', category: 'เครื่องประดับ', rating: 4.6, ratingCount: 7  },
  { id: 9, name: 'ต่างหู', price: 290, image: 'https://i.pinimg.com/236x/76/ee/0a/76ee0a8b347c732a2b5911fcb838013c.jpg', category: 'เครื่องประดับ', rating: 4.3, ratingCount: 9 },
  { id: 10, name: 'สร้อยคอ', price: 790, image: 'https://i.pinimg.com/236x/4b/4e/9d/4b4e9d3474c6b7f4e502a2cdaa7123a1.jpg', category: 'เครื่องประดับ', rating: 4.5, ratingCount: 8 },
  { id: 11, name: 'เสื้อยืด', price: 350, image: 'https://i.pinimg.com/736x/11/a6/1a/11a61a7da620591d23c66d5517313efc.jpg', category: 'เสื้อผ้า', rating: 4.5, ratingCount: 10 },
  { id: 12, name: 'กางเกงยีนส์', price: 1290, image: 'https://i.pinimg.com/564x/29/b0/ee/29b0ee943247929ce92fb4ba31ea8786.jpg', category: 'เสื้อผ้า', rating: 4.2, ratingCount: 8 },
  { id: 13, name: 'รองเท้าผ้าใบ', price: 2590, image: 'https://i.pinimg.com/control/564x/64/0c/61/640c61433d40e689da5ab4b28e043b35.jpg', category: 'รองเท้า', rating: 4.8, ratingCount: 15 },
  { id: 14, name: 'หมวกแก๊ป', price: 450, image: 'https://i.pinimg.com/control/564x/33/64/ff/3364ff443e83a733545be0cd5c6fc4c8.jpg', category: 'เครื่องประดับ', rating: 4.0, ratingCount: 5 },
  { id: 15, name: 'กระเป๋าสะพาย', price: 1890, image: 'https://i.pinimg.com/564x/ee/88/90/ee8890ad5c60870e4f6252acb5cca136.jpg', category: 'กระเป๋า', rating: 4.6, ratingCount: 17 },
  { id: 16, name: 'นาฬิกาข้อมือ', price: 1390, image: 'https://i.pinimg.com/236x/03/90/ba/0390ba7a43eaaa36feaf3503c9c3487e.jpg', category: 'เครื่องประดับ', rating: 4, ratingCount: 14  },
  { id: 17, name: 'แว่นตากันแดด', price: 290, image: 'https://i.pinimg.com/736x/66/f5/f3/66f5f3b7746e31623764754eb11bb674.jpg', category: 'เครื่องประดับ', rating: 4.7, ratingCount: 10  },
  { id: 18, name: 'เข็มขัดหนัง', price: 250, image: 'https://i.pinimg.com/564x/ba/5c/5f/ba5c5f2277fb523b6dd4fbeed1c3723f.jpg', category: 'เครื่องประดับ', rating: 4.6, ratingCount: 7  },
  { id: 19, name: 'ต่างหู', price: 190, image: 'https://i.pinimg.com/564x/07/f3/6d/07f36d916925ac215a90a67e714ae4e6.jpg', category: 'เครื่องประดับ', rating: 4.3, ratingCount: 9 },
  { id: 20, name: 'สร้อยคอ', price: 290, image: 'https://i.pinimg.com/564x/0e/93/84/0e9384a2a5e3f2b98530d42d4ea9cad6.jpg', category: 'เครื่องประดับ', rating: 4.5, ratingCount: 8 },
];

const ProductList = ({ addToCart, onRate }) => {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const categories = ['ทั้งหมด', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'ทั้งหมด'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleRate = (productId, newRating) => {
    onRate(productId, newRating);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">สินค้าของเรา</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">หมวดหมู่:</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-indigo-500 text-white'
                  : 'bg-white text-indigo-500 hover:bg-indigo-100'
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.price} บาท</p>
              <p className="text-sm text-indigo-500 mb-2">{product.category}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 mr-1">{product.rating.toFixed(1)}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill={star <= Math.round(product.rating) ? "gold" : "none"}
                      stroke="gold"
                      className="cursor-pointer"
                      onClick={() => handleRate(product.id, star)}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.ratingCount})</span>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                เพิ่มลงตะกร้า
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;