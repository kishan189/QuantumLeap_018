export const fetchPersonalizationData = () => ({
    user: {
      name: "John Doe",
      age: 30,
      healthGoals: ["Weight Loss", "Improved Sleep", "Stress Management"],
    },
    roadmap: [
      { id: 1, step: "Start with 10-min Meditation", completed: false },
      { id: 2, step: "Adopt a Balanced Diet", completed: false },
      { id: 3, step: "Daily 30-min Walk", completed: false },
    ],
    recommendations: {
      workouts: ["Yoga for Beginners", "Cardio Circuit", "Pilates"],
      meals: ["Avocado Salad", "Protein Smoothie", "Grilled Chicken"],
      wellness: ["Deep Breathing Exercises", "Journaling", "Nature Walk"],
    },
  });
  