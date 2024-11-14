// src/components/NutritionChart.js
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import '../Nutri-styles/NutritionChart.css';

function NutritionChart({ totals, goal }) {
  const [targets, setTargets] = useState({ calories: 2005, protein: 122, carbs: 267, fat: 57 });

  useEffect(() => {
    // Adjust targets based on the selected goal
    if (goal === 'fat-loss') {
      setTargets({ calories: 1500, protein: 100, carbs: 200, fat: 50 });
    } else if (goal === 'fit') {
      setTargets({ calories: 2005, protein: 122, carbs: 267, fat: 57 });
    } else if (goal === 'muscular') {
      setTargets({ calories: 2500, protein: 150, carbs: 300, fat: 70 });
    }
  }, [goal]);

  const data = [
    { name: 'Protein', value: totals.protein },
    { name: 'Carbohydrates', value: totals.carbs },
    { name: 'Fat', value: totals.fat },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

  return (
    <div className="nutrition-chart">
      <h3>Total Daily Macronutrients</h3>
      <div className="calories-info">
        <p>Calories: {totals.calories} / {targets.calories}</p>
        <p>Protein: {totals.protein} / {targets.protein}</p>
        <p>Carbs: {totals.carbs} / {targets.carbs}</p>
        <p>Fat: {totals.fat} / {targets.fat}</p>
      </div>
      <PieChart width={300} height={200}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default NutritionChart;
