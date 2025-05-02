const ProductSection = () => {
    const products = [
      {
        title: "1С-Товары 500",
        tags: ["Популярное"],
        description: "Базовое решение для малого бизнеса с ограниченным набором функций и поддержкой до 500 товарных позиций."
      },
      {
        title: "1С-Товары 10000",
        tags: ["Популярное"],
        description: "Расширенное решение для среднего бизнеса с полным набором функций и поддержкой до 10000 товарных позиций."
      },
      {
        title: "1С-Товары",
        tags: [],
        description: "Полнофункциональное решение для крупного бизнеса с неограниченным количеством товарных позиций и расширенной аналитикой."
      }
    ];
  
    const renderProductCard = (product, index) => {
      return (
        <div key={index} className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
          <h3 className="text-xl font-medium mb-3">{product.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-base text-gray-600 mb-6 flex-grow">{product.description}</p>
          <button className="text-gray-500 border-b border-gray-300 self-start hover:text-gray-700">
            Подробнее
          </button>
        </div>
      );
    };
  
    return (
      <div className="my-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-medium">Популярные продукты</h2>
          <button className="bg-green-500 text-white px-6 py-3 rounded-md text-base hover:bg-green-600 transition-colors">
            Все продукты
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => renderProductCard(product, index))}
        </div>
      </div>
    );
  };
  
  export default ProductSection;