import React, { useState, useEffect } from 'react';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch categories from the fakestoreapi.com
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(['All', ...data]))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    // Fetch products from the fakestoreapi.com based on the selected category
    let apiUrl = 'https://fakestoreapi.com/products';
    if (selectedCategory !== 'All') {
      apiUrl += `/category/${selectedCategory}`;
    }
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1>Fake Store Shopping</h1>
      <div className="filter">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
