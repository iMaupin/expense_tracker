import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filtered, setFiltered] = useState(false)
  const [filteredYear, setFilteredYear] = useState('None')
  const storeFilteredYear = (year) => {
    setFilteredYear(year)
    year !== 'None' ? setFiltered(true) : setFiltered(false)
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterYear={storeFilteredYear} selected={filteredYear} />
      {!filtered
        ? expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
          ))
        : expenses.filter(expense => (expense.date.getFullYear().toString() === filteredYear)).map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
    </Card>

  )
}

export default Expenses
