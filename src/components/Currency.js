import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const currencyObj = {
  '$': 'Dollar',
  '£': 'Pound',
  '€': 'Euro',
  '₹': 'Ruppee',

}
const Currency = () => {
  const {dispatch, currency} = useContext(AppContext);
  const handleCurrency = (value) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: value,
    });
  }
  return (
    <div className='alert alert-secondary'>
      <div className="dropdown">
        <button className="btn btn-success dropdown-toggle currency-dropdown" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
          Currency({currency} {currencyObj[currency]})
        </button>
        <ul className="dropdown-menu currency-dropdown-options">
          {Object.entries(currencyObj).map(([key, value]) => <li className={"px-3"}
            onClick={() => handleCurrency(key)}>{key} {value}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default Currency;
