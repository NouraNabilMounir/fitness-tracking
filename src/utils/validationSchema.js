import * as Yup from 'yup';

export const workoutValidationSchema = Yup.object().shape({
  exerciseType: Yup.string().required('Exercise type is required'),
  duration: Yup.number().required('Duration is required').positive().integer(),
  calories: Yup.number().required('Calories burned is required').positive(),
});
