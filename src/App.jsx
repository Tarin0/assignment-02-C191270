import './App.css'
import AddExpense from './Components/AddExpense'
import IncomeExpenseList from './Components/IncomeExpenseList'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <AddExpense></AddExpense>
      <IncomeExpenseList></IncomeExpenseList>
    </>
  )
}

export default App
