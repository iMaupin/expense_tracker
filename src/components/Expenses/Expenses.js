import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filtered, setFiltered] = useState(false)
  const [filteredYear, setFilteredYear] = useState('None')
  const storeFilteredYear = (year) => {
    setFilteredYear(year)
    year !== 'None' ? setFiltered(true) : setFiltered(false)
  }

  const filteredExpenses = expenses.filter(expense => (expense.date.getFullYear().toString() === filteredYear))
  const items = filtered ? filteredExpenses : expenses

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterYear={storeFilteredYear} selected={filteredYear} />
      <ExpensesList items={items} />
    </Card>

  )
}

export default Expenses
