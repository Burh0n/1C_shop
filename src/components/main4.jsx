const FeatureSection = () => {
    const features = [
      {
        title: "Получайте рекомендации по улучшению обслуживания",
        description: "Система анализирует данные о работе заведения и предлагает способы повышения эффективности и качества обслуживания."
      },
      {
        title: "Производите заказ о продуктах онлайн",
        description: "Автоматизированная система заказа продуктов с учетом остатков и прогнозируемого спроса."
      },
      {
        title: "Получайте аналитику без задержек",
        description: "Моментальный доступ к ключевым показателям эффективности и аналитическим отчетам в режиме реального времени."
      },
      {
        title: "Контролируйте финансы и показатели продаж",
        description: "Полный контроль над финансовыми потоками и детальная статистика по продажам с различными срезами данных."
      }
    ];
  
    // Feature Item render function
    const renderFeatureItem = (feature, index) => {
      return (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
          <p className="text-base text-gray-600">{feature.description}</p>
        </div>
      );
    };
  
    return (
      <div className="my-16">
        <h2 className="text-2xl font-medium mb-10">Для ресторанов, магазинов и ресторанов</h2>
        <div className="flex flex-col md:flex-row gap-16 mb-16">
          <div className="w-full md:w-1/2">
            <div className="rounded-lg p-8 h-96 flex items-center justify-center">
              <img src="/2.svg" alt="Restaurant illustration" className="max-w-full" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {features.slice(0, 2).map((feature, index) => renderFeatureItem(feature, index))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            {features.slice(2, 4).map((feature, index) => renderFeatureItem(feature, index + 2))}
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className=" rounded-lg p-8 h-96 flex items-center justify-center">
              <img src="/4.svg" alt="Retail illustration" className="max-w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeatureSection;