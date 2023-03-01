import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  // Get the dispatch function to send actions to the store
  const dispatch = useDispatch();

  // Function to handle clicking the "Check Status" button
  const handleCheckStatus = () => {
    // Dispatch the checkStatus action
    dispatch(checkStatus());
  };

  // Render the component
  return (
    <div>
      <button type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
