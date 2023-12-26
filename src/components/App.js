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
    <div className="App" id="main"> {/* Added ID #main */}
      <h1>Delicious Dishes</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            id={`filter-btn-${index + 1}`} // Dynamic ID for buttons #filter-btn-1, #filter-btn-2, etc.
          >
            {category}
          </button>
        ))}
      </div>
      <div className="dishes">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="dish">
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
