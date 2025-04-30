import React from 'react';
import { Settings, ShoppingCart, BarChart2, TrendingUp, Package, ShoppingBag, Gift } from 'lucide-react';

export default function ServiceCards() {
  const services = [
    {
      id: 1,
      title: 'Управление запасами',
      icon: <Settings className="text-amber-400" />,
      description: 'Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.',
      layout: 'wide'
    },
    {
      id: 2,
      title: 'Автозаказ товаров',
      icon: <ShoppingCart className="text-purple-400" />,
      description: 'Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполненные расчеты.',
      layout: 'wide'
    },
    {
      id: 3,
      title: 'Анализ магазина',
      icon: <BarChart2 className="text-cyan-400" />,
      description: 'Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек – это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.',
      layout: 'normal'
    },
    {
      id: 4,
      title: 'Прогнозирование спроса',
      icon: <TrendingUp className="text-red-400" />,
      description: 'Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполненные расчеты.',
      layout: 'normal'
    },
    {
      id: 5,
      title: 'Управление поставками',
      icon: <Package className="text-blue-400" />,
      description: 'Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполненные расчеты.',
      layout: 'normal'
    },
    {
      id: 6,
      title: 'Управление ассортиментом',
      icon: <Settings className="text-green-300" />,
      description: 'Сервис 1С-Товары позволяет определить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а наличие каких увеличить на полках магазина. Сервис позволяет узнать необходимую информацию: динамику продаж и остаток, периоды дефицита, размер оптимального остатка.',
      layout: 'wide'
    },
    {
      id: 7,
      title: 'Управление продажами',
      icon: <ShoppingBag className="text-yellow-400" />,
      description: 'Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек – это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.',
      layout: 'wide'
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(0, 2).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.slice(2, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {services.slice(5, 7).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-8 bg-white rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Gift className="text-green-500 mr-3" size={24} />
            <p className="text-green-600">Подключи любой продукт на 1 месяц бесплатно и оцени наши преимущества</p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200">
            Подключить сейчас
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-start mb-4">
        <div className="bg-white rounded-lg p-2 mr-3">
          {service.icon}
        </div>
        <h3 className="text-lg font-semibold">{service.title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
      <button className="text-green-600 hover:text-green-700 text-sm font-medium border border-green-500 rounded-full px-6 py-2 hover:bg-green-50 transition-colors duration-200">
        Подробнее
      </button>
    </div>
  );
}