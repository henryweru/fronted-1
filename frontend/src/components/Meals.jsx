import React, { useEffect, useState } from 'react';

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [breakfast, setBreakfast] = useState(null);
  const [lunch, setLunch] = useState(null);
  const [dinner, setDinner] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9292/meals')
      .then(response => response.json())
      .then(data => setMeals(data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectMeal = (mealId, mealType) => {
    const selectedMeal = meals.find(meal => meal.id === mealId);

    switch (mealType) {
      case 'breakfast':
        setBreakfast(selectedMeal);
        break;
      case 'lunch':
        setLunch(selectedMeal);
        break;
      case 'dinner':
        setDinner(selectedMeal);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Meals</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.id}>
            {meal.name}
            <button onClick={() => handleSelectMeal(meal.id, 'breakfast')}>Select for Breakfast</button>
            <button onClick={() => handleSelectMeal(meal.id, 'lunch')}>Select for Lunch</button>
            <button onClick={() => handleSelectMeal(meal.id, 'dinner')}>Select for Dinner</button>
          </li>
        ))}
      </ul>

      <h3>Selected Meals</h3>
      <p>Breakfast: {breakfast ? breakfast.name : 'No meal selected'}</p>
      <p>Lunch: {lunch ? lunch.name : 'No meal selected'}</p>
      <p>Dinner: {dinner ? dinner.name : 'No meal selected'}</p>
    </div>
  );
};

export default MealList;
