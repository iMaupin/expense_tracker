import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <div className='expenses'>
      {expenses.map(expense => {
        return (
          <div key={expense.id}>
            <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
          </div>
        )
      })}
    </div>
  )
}

export default Expenses
