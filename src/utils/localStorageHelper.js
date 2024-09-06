export const saveWorkout = (workout) => {
  const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
  workouts.push(workout);
  localStorage.setItem('workouts', JSON.stringify(workouts));
};

export const getWorkouts = () => {
  return JSON.parse(localStorage.getItem('workouts')) || [];
};

export const saveGoals = (goals) => {
  localStorage.setItem('goals', JSON.stringify(goals));
};

export const getGoals = () => {
  return JSON.parse(localStorage.getItem('goals')) || [];
};
