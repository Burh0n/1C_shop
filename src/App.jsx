import React from 'react';
import Abubakr from './container/Abubakr';
import Burhon from './container/Burhon'
import Fayzulloh from './container/Fayzulloh';
const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Abubakr/>
    

    
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="w-full bg-blue-50 p-8 rounded-lg">
          <h1 className="text-2xl font-medium text-blue-800">С нами удобнее</h1>
        </div>
        <Burhon/>
      </div>
      <Fayzulloh/>
    </div>
  );
};

export default App;