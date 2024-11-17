import React, { useState } from "react";

const UserProgress = () => {
    const [progress, setProgress] = useState({
        steps: 5000,
        goalSteps: 10000,
        mood: "Happy",
    });

    return (
        <div>
            <h2>User Progress</h2>
            <p>Steps Today: {progress.steps} / {progress.goalSteps}</p>
            <p>Current Mood: {progress.mood}</p>
            {progress.steps < progress.goalSteps && (
                <p>Keep going! You're almost halfway to your goal!</p>
            )}
        </div>
    );
};

export default UserProgress;
