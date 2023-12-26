// App.js
import React, { useState } from 'react';
import '../styles/App.css'; // Adjust the path to your CSS file
import { dishes } from './data'; // Adjust the path to your data file

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(dishes.map((dish) => dish.category))];

  const filteredDishes =
    selectedCategory === 'all'
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App" data-test-id="main"> {/* Added data-test-id */}
      <h1 data-test-id="page-title">Delicious Dishes</h1> {/* Added data-test-id */}
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            data-test-id={`menu-item-${category.toLowerCase()}`} // Added data-test-id
          >
            {category}
          </button>
        ))}
      </div>
      <div className="dishes">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish" data-test-id={`menu-item-${dish.title.toLowerCase()}`}>
            <img src={dish.img} alt={dish.title} />
            <h2>{dish.title}</h2>
            <p>{dish.desc}</p>
            <p>Price: ${dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
