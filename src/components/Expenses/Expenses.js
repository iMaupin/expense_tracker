import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
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
