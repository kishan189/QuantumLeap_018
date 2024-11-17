const users = {
    1: {
      name: "John Doe",
      healthGoals: "Weight Loss",
      reminders: ["Drink water", "Take a 10-minute walk"],
      progress: ["Step 1: Consultation", "Step 2: Set Goals"],
    },
  };
  
  const recommendations = {
    workouts: ["Yoga", "Cardio", "Strength Training"],
    meals: ["Salads", "Low-Carb Recipes", "Protein Shakes"],
    wellness: ["Meditation", "Reading", "Sleep Therapy"],
  };
  
  export const fetchUserData = async (userId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users[userId]), 1000);
    });
  };
  
  export const fetchRecommendations = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(recommendations), 1000);
    });
  };
  