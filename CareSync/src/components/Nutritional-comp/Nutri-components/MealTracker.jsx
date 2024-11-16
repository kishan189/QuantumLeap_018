import React, { useState, useEffect } from 'react';
import MealList from './MealList';
import NutritionChart from './NutritionChart';
import AddMealForm from './AddMealForm';
import '../Nutri-styles/MealTracker.css';

// Function to safely load from localStorage with error handling
const loadState = (key, defaultValue) => {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return data !== null ? data : defaultValue;
    } catch (e) {
        console.error(`Error loading ${key} from localStorage`, e);
        return defaultValue;
    }
};

function MealTracker() {
    const [meals, setMeals] = useState(loadState('meals', []));
    const [totals, setTotals] = useState(loadState('totals', { calories: 0, protein: 0, carbs: 0, fat: 0 }));
    const [goal, setGoal] = useState(loadState('goal', 'fit'));
    const [savedData, setSavedData] = useState(loadState('savedMealsData', {}));
    const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
    const [saveDate, setSaveDate] = useState('');

    // Save state to localStorage whenever meals, totals, or goal changes
    useEffect(() => {
        localStorage.setItem('meals', JSON.stringify(meals));
    }, [meals]);

    useEffect(() => {
        localStorage.setItem('totals', JSON.stringify(totals));
    }, [totals]);

    useEffect(() => {
        localStorage.setItem('goal', JSON.stringify(goal));
    }, [goal]);

    useEffect(() => {
        localStorage.setItem('savedMealsData', JSON.stringify(savedData));
    }, [savedData]);

    const calculateTotals = (meals) => {
        const totalCalories = meals.reduce((acc, meal) => acc + (meal.calories || 0), 0);
        const totalProtein = meals.reduce((acc, meal) => acc + (meal.protein || 0), 0);
        const totalCarbs = meals.reduce((acc, meal) => acc + (meal.carbs || 0), 0);
        const totalFat = meals.reduce((acc, meal) => acc + (meal.fat || 0), 0);

        setTotals({
            calories: totalCalories,
            protein: totalProtein,
            carbs: totalCarbs,
            fat: totalFat,
        });
    };

    useEffect(() => {
        calculateTotals(meals);
    }, [meals]);

    const addMeal = (meal) => {
        const updatedMeals = [...meals, { id: meals.length + 1, ...meal }];
        setMeals(updatedMeals);
    };

    const onDeleteMeal = (mealId) => {
        const updatedMeals = meals.filter((meal) => meal.id !== mealId);
        setMeals(updatedMeals);
    };

    const handleGoalChange = (selectedGoal) => {
        setGoal(selectedGoal);
    };

    const handleSave = () => {
        if (saveDate) {
            const newSavedData = { ...savedData, [saveDate]: { meals, totals } };
            setSavedData(newSavedData);
            setIsSaveModalOpen(false);
            setSaveDate('');
        } else {
            alert("Please select or enter a date.");
        }
    };

    const handleReset = () => {
        setMeals([]);
        setTotals({ calories: 0, protein: 0, carbs: 0, fat: 0 });
        localStorage.removeItem('meals'); // Clear meals from localStorage
        localStorage.removeItem('totals'); // Clear totals from localStorage
    };

    const handleEdit = (date) => {
        setMeals(savedData[date].meals);
        setTotals(savedData[date].totals);
    };

    const handleDelete = (date) => {
        const newSavedData = { ...savedData };
        delete newSavedData[date];
        setSavedData(newSavedData);
    };

    return (
        <div className="meal-tracker">
            <div className="tracker-content">
                <MealList meals={meals} onDeleteMeal={onDeleteMeal} onSave={() => setIsSaveModalOpen(true)} onReset={handleReset} />
                <NutritionChart totals={totals} goal={goal} />
                <AddMealForm onAddMeal={addMeal} onGoalChange={handleGoalChange} />
            </div>

            {/* Save Modal positioned above Saved Data */}
            {isSaveModalOpen && (
                <div className="save-modal">
                    <div className="save-modal-content">
                        <h3>Save Your Data</h3>
                        <label>
                            Select or Enter Date:
                            <input
                                type="date"
                                value={saveDate}
                                onChange={(e) => setSaveDate(e.target.value)}
                            />
                        </label>
                        <div className="modal-actions">
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setIsSaveModalOpen(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="saved-data">
                <h3>Saved Data</h3>
                <div className="saved-data-list">
                    {Object.keys(savedData).map((date) => (
                        <div key={date} className="saved-data-entry">
                            <div className="saved-data-text">
                                <strong>{date}</strong>
                                <span>Calories: {savedData[date].totals.calories}</span>
                                <span>Protein: {savedData[date].totals.protein}</span>
                                <span>Carbs: {savedData[date].totals.carbs}</span>
                                <span>Fat: {savedData[date].totals.fat}</span>
                            </div>
                            <div className="saved-data-actions">
                                <div className="saved-data-actions">
                                    <button
                                        style={{ backgroundColor: 'yellow', color: 'black', cursor: 'pointer', borderRadius: '8px' }}
                                        onClick={() => handleEdit(date)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        style={{ backgroundColor: 'red', color: 'white',cursor: 'pointer', borderRadius: '8px' }}
                                        onClick={() => handleDelete(date)}
                                    >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MealTracker;