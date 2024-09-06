import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { workoutValidationSchema } from '../utils/validationSchema';
import { saveWorkout } from '../utils/localStorageHelper';

const WorkoutLogging = () => {
  const handleSubmit = (values, { resetForm }) => {
    saveWorkout(values);
    resetForm();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Log Your Workout</h1>
      <Formik
        initialValues={{ exerciseType: '', duration: '', calories: '' }}
        validationSchema={workoutValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="exerciseType" className="block text-sm font-medium text-gray-700">Exercise Type</label>
              <Field
                type="text"
                id="exerciseType"
                name="exerciseType"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Running, Cycling"
              />
              <ErrorMessage name="exerciseType" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
              <Field
                type="number"
                id="duration"
                name="duration"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., 30"
              />
              <ErrorMessage name="duration" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="calories" className="block text-sm font-medium text-gray-700">Calories Burned</label>
              <Field
                type="number"
                id="calories"
                name="calories"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., 250"
              />
              <ErrorMessage name="calories" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
            >
              Log Workout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkoutLogging;
