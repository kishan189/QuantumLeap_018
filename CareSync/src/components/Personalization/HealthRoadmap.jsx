import React, { useState } from "react";
import './HealthRoadmap.css';

const TreeNode = ({ node }) => {
    return (
        <div style={{ marginLeft: "20px" }}>
            <div>{node.data}</div>
            <div>
                {node.children.map((child, index) => (
                    <TreeNode key={index} node={child} />
                ))}
            </div>
        </div>
    );
};

const HealthRoadmap = () => {
    const [roadmap] = useState(() => {
        const root = { data: "Start", children: [] };
        const milestone1 = { data: "Lose 5kg", children: [] };
        const milestone2 = { data: "Build Stamina", children: [] };
        const finalGoal = { data: "Maintain Healthy Weight", children: [] };

        root.children.push(milestone1);
        milestone1.children.push(milestone2);
        milestone2.children.push(finalGoal);

        return root;
    });

    return (
        <div>
            <h2>Health Roadmap</h2>
            <TreeNode node={roadmap} />
        </div>
    );
};

export default HealthRoadmap;
