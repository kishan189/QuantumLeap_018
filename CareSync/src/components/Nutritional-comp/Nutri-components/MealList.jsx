import React from 'react';
import '../Nutri-styles/MealList.css';
import { FaTrash } from 'react-icons/fa';

function MealList({ meals, onDeleteMeal, onSave, onReset }) {
  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  return (
    <div className="meal-list">
      {mealTypes.map((type) => (
        <div key={type} className="meal-category">
          <h2>{type}</h2>
          <ul>
            {meals
              .filter((meal) => meal.type === type)
              .map((meal) => (
                <li key={meal.id}>
                  {meal.name} - {meal.servings} || {meal.calories} calories
                  
                  <button
                    className="delete-button"
                    onClick={() => onDeleteMeal(meal.id)}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
      {/* Save and Reset Buttons */}
      <div className="meal-actions">
        <button onClick={onSave}>Save</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default MealList;
