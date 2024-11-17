import React, { useEffect, useState } from "react";

const tips = [
    "Drink 8 glasses of water daily!",
    "Take a 10-minute walk after every meal.",
    "Try a 5-minute meditation today.",
];

const HealthTips = () => {
    const [currentTip, setCurrentTip] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const randomTip = tips[Math.floor(Math.random() * tips.length)];
            setCurrentTip(randomTip);
        }, 5000); // Change tip every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Health Tip</h2>
            <p>{currentTip}</p>
        </div>
    );
};

export default HealthTips;
