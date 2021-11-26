import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData)
    setIsEditing(false)
  }
  const newExpenseHandler = () => {
    setIsEditing(true)
  }
  const cancelEditing = () => {
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={newExpenseHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditing} />}
    </div>
  )
}

export default NewExpense
