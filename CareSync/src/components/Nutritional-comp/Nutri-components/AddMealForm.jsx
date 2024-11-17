// src/components/AddMealForm.js
import React, { useState } from 'react';
import '../Nutri-styles/AddMealForm.css';
import { FaDumbbell, FaHeartbeat, FaAppleAlt } from 'react-icons/fa'; // Import icons

function AddMealForm({ onAddMeal, onGoalChange }) { // Accept onGoalChange as a prop
  const [meal, setMeal] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    servings: '',
    type: 'Breakfast',
  });

  const [goal, setGoal] = useState('fit'); // Default goal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal({
      ...meal,
      [name]: name === 'name' || name === 'type' ? value : value === '' ? '' : parseFloat(value),
    });
  };

  const handleGoalChange = (goal) => {
    setGoal(goal);
    onGoalChange(goal); // Pass the goal to the parent component
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMeal(meal);
    setMeal({
      name: '',
      calories: '',
      protein: '',
      carbs: '',
      fat: '',
      servings: '',
      type: 'Breakfast',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-meal-form">
      {/* Meal input fields */}
      <input type="text" name="name" placeholder="Food Name" value={meal.name} onChange={handleChange} />
      <input type="number" name="calories" placeholder="Calories" value={meal.calories} onChange={handleChange} />
      <input type="number" name="protein" placeholder="Protein" value={meal.protein} onChange={handleChange} />
      <input type="number" name="carbs" placeholder="Carbohydrates" value={meal.carbs} onChange={handleChange} />
      <input type="number" name="fat" placeholder="Fat" value={meal.fat} onChange={handleChange} />
      <input type="number" name="servings" placeholder="Servings" value={meal.servings} onChange={handleChange} />
      
      {/* Meal type selection */}
      <select name="type" value={meal.type} onChange={handleChange}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>

      {/* Fitness goal selection */}
      <div className="goal-selection">
        <h4>Select Your Goal</h4>
        <button type="button" className={`goal-button ${goal === 'fat-loss' ? 'active' : ''}`} onClick={() => handleGoalChange('fat-loss')}>
          <FaAppleAlt /> Fat Loss
        </button>
        <button type="button" className={`goal-button ${goal === 'fit' ? 'active' : ''}`} onClick={() => handleGoalChange('fit')}>
          <FaHeartbeat /> Fit
        </button>
        <button type="button" className={`goal-button ${goal === 'muscular' ? 'active' : ''}`} onClick={() => handleGoalChange('muscular')}>
          <FaDumbbell /> Muscular
        </button>
      </div>

      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddMealForm;