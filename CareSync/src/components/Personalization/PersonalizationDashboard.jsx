import React, { useState } from "react";
import { fetchPersonalizationData } from "./PersonalizationData";
import "./Personalization.css";

const PersonalizationDashboard = () => {
  const { user, roadmap, recommendations } = fetchPersonalizationData();
  const [roadmapSteps, setRoadmapSteps] = useState(roadmap);

  const markStepCompleted = (id) => {
    setRoadmapSteps((prevSteps) =>
      prevSteps.map((step) =>
        step.id === id ? { ...step, completed: true } : step
      )
    );
  };

  return (
    <div className="personalization-container">
      <section className="user-intro">
        <h1>Welcome, {user.name}!</h1>
        <p>Your Health Goals:</p>
        <ul>
          {user.healthGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </section>

      <section className="health-roadmap">
        <h2>Your Health Roadmap</h2>
        <ul>
          {roadmapSteps.map((step) => (
            <li key={step.id} className={step.completed ? "completed" : ""}>
              <span>{step.step}</span>
              {!step.completed && (
                <button onClick={() => markStepCompleted(step.id)}>
                  Mark as Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="recommendations">
        <h2>Personalized Recommendations</h2>
        <div className="recommendation-category">
          <h3>Workouts</h3>
          <ul>
            {recommendations.workouts.map((workout, index) => (
              <li key={index}>{workout}</li>
            ))}
          </ul>
        </div>
        <div className="recommendation-category">
          <h3>Meals</h3>
          <ul>
            {recommendations.meals.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </div>
        <div className="recommendation-category">
          <h3>Wellness</h3>
          <ul>
            {recommendations.wellness.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PersonalizationDashboard;
