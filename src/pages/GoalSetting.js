import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { saveGoals, getGoals } from '../utils/localStorageHelper';
import * as Yup from 'yup';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const goalValidationSchema = Yup.object().shape({
  goal: Yup.string().required('Goal is required'),
});

const GoalSetting = () => {
  const [goals, setGoals] = useState(getGoals());

  const handleSubmit = (values, { resetForm }) => {
    const newGoals = [...goals, values.goal];
    saveGoals(newGoals);
    setGoals(newGoals);
    resetForm();
  };

  const handleDelete = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
    saveGoals(updatedGoals);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Set Your Goals</h1>
      <Formik
        initialValues={{ goal: '' }}
        validationSchema={goalValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Your Goal</label>
              <Field
                type="text"
                id="goal"
                name="goal"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Run a marathon"
              />
              <ErrorMessage name="goal" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
            >
              Set Goal
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Your Goals</h2>
        <ul className="space-y-2">
          {goals.length > 0 ? (
            goals.map((goal, index) => (
              <li key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-50 transition">
                <span>{goal}</span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    <PencilSquareIcon className="w-6 h-6" />
                  </button>
                  <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-800 transition">
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-700">No goals set yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GoalSetting;
