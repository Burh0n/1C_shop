import React from 'react';
import Nav from './components/nav';
import Header from './components/header'
import Main from './components/main'
import Main2 from './components/main2'
import Main3 from './components/main3'
import Main4 from './components/main4'
const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Nav/>
      <Header/>
      <Main/>
    

    
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="w-full bg-blue-50 p-8 rounded-lg">
          <h1 className="text-2xl font-medium text-blue-800">С нами удобнее</h1>
        </div>
        <Main2/>
        <Main3/>
        <Main4/>
      </div>
    </div>
  );
};

export default App;