import React from 'react';
import logo from '../assets/1.png'; // Eslatma: header.jsx -> assets uchun yo'l: ../assets/...

export default function HeroBanner() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

     
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Управление запасами розничного магазина
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200">
            Заказать демонстрацию
          </button>
        </div>

      
        <div className="w-full md:w-1/2 relative">
          <div className="bg-green-50 rounded-full w-full h-full absolute -z-10"></div>
          <div className="relative z-10 flex justify-center">
            <img 
              src={logo} 
              alt="Сравнение магазина с 1С-Товары и без"
              className="max-w-full h-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
