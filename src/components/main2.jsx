const ComparisonTable = () => {
    const regularFeatures = [
      "Рядовая книга складирования или продажных",
      "Получаем прогнозные итоги, крайне медленно и без интереса, и сотни пояснительного функционирования",
      "Получаем прогнозные итоги, крайне медленно и без интереса, и сотни пояснительного функционирования",
      "Рядовая книга складирования или продажных",
      "Получаем прогнозные итоги, крайне медленно и без интереса, и сотни пояснительного функционирования",
    ];
  
    const enhancedFeatures = [
      "Организованная система хранения",
      "Получаем итоги мгновенно, если возможно, что лаконично подмечается источником обязательного мышления",
      "Получаем итоги мгновенно, если возможно, что лаконично подмечается источником обязательного мышления",
      "Организованная система хранения",
      "Получаем итоги мгновенно, если возможно, что лаконично подмечается источником обязательного мышления",
    ];
  
    return (
      <div className="w-full flex flex-col md:flex-row gap-8 my-12">
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-8 text-center">Без 1С-Фирмы</h2>
          <ul className="space-y-6">
            {regularFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="min-w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-red-500 font-bold">✕</span>
                </div>
                <span className="text-base text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="w-full md:w-1/2 bg-green-50 p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-8 text-center">Вместе с 1С-Фирмы</h2>
          <ul className="space-y-6">
            {enhancedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="min-w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-500 font-bold">✓</span>
                </div>
                <span className="text-base text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ComparisonTable;