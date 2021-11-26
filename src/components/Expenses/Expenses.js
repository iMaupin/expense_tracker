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

  const filteredExpenses = expenses.filter(expense => (expense.date.getFullYear().toString() === filteredYear))
  const items = filtered ? filteredExpenses : expenses
  let expensesContent = <p>No Expenses Found</p>
  if (items.length > 0) {
    expensesContent = items.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ))
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterYear={storeFilteredYear} selected={filteredYear} />
      {expensesContent}
    </Card>

  )
}

export default Expenses
