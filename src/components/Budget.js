import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
  const {budget, dispatch, totalExpenses, currency} = useContext(AppContext);
  const handleBudget = (event) => {
    const value = event.target.value;
    if (value > 20000) {
      alert(`You cannot increase the budget value higher than ${currency}20,000`);
    } else if (value < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    } else {
      dispatch({
        type: 'SET_BUDGET',
        payload: value,
      });
    }
  }
  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency} <input onChange={handleBudget} type={"number"} step={10} max={20000} value={budget}/></span>
    </div>
  );
};
export default Budget;
