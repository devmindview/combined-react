import React, { useEffect, useState } from "react";
import { getAllProducts, getAllCategories } from "../services/userServices";
import Card from "../components/products-ui/Card";
import SearchBar from "../components/products-ui/SearchBar";
import { useLocation } from "react-router-dom";


function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 


  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const initialCategory = query.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    (async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getAllCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }finally {
        setLoading(false); 
      }
    })();
  }, []);

  useEffect(() => {
    const categoryFromQuery = query.get("category") || "All";
    setSelectedCategory(categoryFromQuery);
  }, [useLocation()]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchTerm(searchInput);
    }, 700); // 700ms delay

    return () => clearTimeout(delayDebounce); // cleanup
  }, [searchInput]);

  useEffect(() => {
    setSearchInput("");
  }, [selectedCategory]);


  const filteredProducts = products
    .filter((item) =>
      selectedCategory === "All"
        ? true
        : item.category?.name?.toLowerCase() === selectedCategory.toLowerCase()
    )
    .filter((item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <div className="w-full pb-16"> {/* 140px = approx header + footer */}
      {/* Sticky Filter Bar */}
      <div className="sticky top-0 max-w-7xl mx-auto bg-[#fdfbf7] z-20 px-6 py-4 ">
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="sm:w-5/12 bg-[#fdfbf7] border text-gray-900 text-sm rounded-lg p-2.5"
          >
            <option value="All">All</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          <SearchBar
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>

         {/* Loader or Products */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto px-4 py-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Card key={item.id} product={item} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      )}



    </div>
  );
}

export default Products;
