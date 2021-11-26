import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const storeFilteredYear = (year) => {
    setFilteredYear(year)
    console.log(year)
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterYear={storeFilteredYear} selected={filteredYear} />
      {expenses.map(expense => {
        return (
          <div key={expense.id}>
            <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
          </div>
        )
      })}
    </Card>

  )
}

export default Expenses
