import React, { useState } from "react";

const mealDatabase = [
    { name: "Grilled Chicken Salad", tags: ["high-protein", "low-carb"] },
    { name: "Quinoa Bowl", tags: ["vegetarian", "gluten-free"] },
    { name: "Tofu Stir Fry", tags: ["vegan", "high-protein"] },
];

const RecommendationEngine = () => {
    const [userPreferences, setUserPreferences] = useState({
        dietaryRestrictions: ["vegetarian"],
    });
    const [recommendations, setRecommendations] = useState([]);

    const handleGetRecommendations = () => {
        const filteredMeals = mealDatabase.filter((meal) =>
            userPreferences.dietaryRestrictions.every((restriction) =>
                meal.tags.includes(restriction)
            )
        );
        setRecommendations(filteredMeals);
    };

    return (
        <div>
            <h2>Meal Recommendations</h2>
            <button onClick={handleGetRecommendations}>
                Get Recommendations
            </button>
            <ul>
                {recommendations.map((meal, index) => (
                    <li key={index}>{meal.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationEngine;
