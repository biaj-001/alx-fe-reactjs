import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          GitHub User Search
        </h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
