import React from "react";

const ConsultationForm = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center text-white w-full max-w-5xl mx-auto mt-10 shadow-lg">
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">Хотите бесплатную консультацию?</h2>
        <h3 className="text-xl font-semibold mb-4">Оставляйте заявку</h3>
        <p className="text-sm">
          Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время
        </p>
      </div>

      <form className="bg-white rounded-xl p-6 w-full md:w-1/2 text-black space-y-4 shadow-md">
        <input
          type="text"
          placeholder="Ваше имя"
          defaultValue="Сергей"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="tel"
          placeholder="Ваш телефон"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Ваш e-mail"
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">
            Нажимая кнопку вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности
          </p>
          <button
            type="submit"
            className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
