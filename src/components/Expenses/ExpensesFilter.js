import React from 'react'

import './ExpensesFilter.css'

const ExpensesFilter = ({ onFilterYear, selected }) => {
  const filterValueHandler = (event) => {
    onFilterYear(event.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={filterValueHandler} value={selected}>
          <option>None</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
