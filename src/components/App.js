// App.js
import React, { useState } from 'react';
import '../styles/App.css'; // Correct the path to your CSS file
import { dishes } from './data'; // Correct the path to your data file

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(dishes.map((dish) => dish.category))];

  const filteredDishes =
    selectedCategory === 'all'
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  return (
    <div className="App">
      <h1>Delicious Dishes</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <button key={index} onClick={() => setSelectedCategory(category)}>
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
