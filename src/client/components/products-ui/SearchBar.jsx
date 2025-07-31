import React from 'react';

function SearchBar({ value, onChange }) {

  return (
    <div className="w-full  mx-auto px-1">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent transition duration-300"
      />
    </div>
  );
}

export default SearchBar;
