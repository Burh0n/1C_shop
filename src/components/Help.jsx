import React from "react";
import img1 from '/Rectangle1.png'
import img2 from '/Rectangle2.png'
import img3 from '/Rectangle3.png'

const HelpPage = () => {
  return (
    <div className="bg-[#f8f9fa] text-gray-800">

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Ответы на вопросы</h2>
        <div className="space-y-4">
          <details className="bg-white rounded-lg shadow p-5">
            <summary className="font-semibold cursor-pointer">С чего начать работу с ХС-Товары?</summary>
            <p className="mt-2 text-sm text-gray-600">Для начала работы вам необходимо зарегистрироваться...</p>
          </details>
          <details className="bg-white rounded-lg shadow p-5">
            <summary className="font-semibold cursor-pointer">Как подключить ХС-Личный кабинет?</summary>
            <p className="mt-2 text-sm text-gray-600">Подключение личного кабинета производится через ...</p>
          </details>
          <details className="bg-white rounded-lg shadow p-5">
            <summary className="font-semibold cursor-pointer">Создание отложенного спроса по ХС-Товары</summary>
            <p className="mt-2 text-sm text-gray-600">Создание отложенного спроса позволяет ...</p>
          </details>
          <details className="bg-white rounded-lg shadow p-5">
            <summary className="font-semibold cursor-pointer">Методы и формы развития товарной линейки</summary>
            <p className="mt-2 text-sm text-gray-600">Для развития товарной линейки используйте ...</p>
          </details>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">База знаний</h2>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition">Все статьи</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl overflow-hidden shadow">
            <img src={img1} alt="img1" className="w-full" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Методы и формы развития товарной линейки</h3>
              <a href="#" className="text-green-500 text-sm font-medium">Читать статью</a>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow">
            <img src={img2} alt="img2" className="w-full" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Ассортимент продуктового ассортимента</h3>
              <a href="#" className="text-green-500 text-sm font-medium">Читать статью</a>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow">
            <img src={img3} alt="img3" className="w-full" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Что такое сложность продаж</h3>
              <a href="#" className="text-green-500 text-sm font-medium">Читать статью</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#18191C] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2 text-green-400">ХС-Товары</h3>
            <p className="text-sm">+7 (495) 111-00-10</p>
            <p className="text-sm">info@xstovari.info</p>
            <button className="mt-2 px-4 py-2 bg-green-500 rounded-full text-sm hover:bg-green-600">Заказать звонок</button>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Информация</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#">О компании</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Поддержка</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Продукты</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#">ХС-Товары</a></li>
              <li><a href="#">ХС-Личный кабинет</a></li>
              <li><a href="#">ХС-Аналитика</a></li>
              <li><a href="#">ХС-Логистика</a></li>
            </ul>
          </div>

          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            © ХС-Товары, 2025
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HelpPage;
