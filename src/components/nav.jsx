import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  
  const navItems = [
    { id: 'how', label: 'Как это работает' },
    { id: 'instructions', label: 'Инструкции' },
    { id: 'products', label: 'Продукты' },
    { id: 'knowledge', label: 'База знаний' },
    { id: 'about', label: 'О нас' },
  ];

  return (
    <div className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
  
        <div className="flex items-center">
          <div className="bg-green-500 rounded-full p-2 mr-2">
            <ShoppingCart className="text-white" size={20} />
          </div>
          <span className="text-lg font-bold">1С-Товары</span>
        </div>
        
     
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-gray-600 hover:text-green-500 transition-colors duration-200 relative py-2 ${
                activeItem === item.id ? 'text-green-500' : ''
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              {item.label}
              {activeItem === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"></span>
              )}
            </a>
          ))}
        </div>
        
       
        <div>
          <button className="text-gray shadow-sm w-full  hover:bg-green-600  px-6 py-2 rounded-full transition-colors duration-200 bg-green-500">
            Вход
          </button>
        </div>
      </div>
    </div>
  );
}