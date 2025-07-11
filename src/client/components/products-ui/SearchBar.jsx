import React from 'react';

function SearchBar({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full  mx-auto px-1">
      <input
        type="text"
        placeholder="Search products... "
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent transition duration-300"
      />
    </div>
  );
}

export default SearchBar;
