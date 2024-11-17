import React from "react";
import HealthRoadmap from "./HealthRoadmap";
import RecommendationEngine from "./RecommendationEngine";
import HealthTips from "./HealthTips";
import UserProgress from "./UserProgress";
import './PersonalizationDashboard.css';

const PersonalizationDashboard = () => {
    return (
        <div>
            <h1>Personalization Dashboard</h1>
            <UserProgress />
            <HealthRoadmap />
            <RecommendationEngine />
            <HealthTips />
        </div>
    );
};

export default PersonalizationDashboard;
