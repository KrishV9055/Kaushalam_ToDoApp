import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'

function App() {
  return (
    <>
      <h1 className="app-heading">To Do App</h1>
      <AddTodo />
      <div className="app-todo-div">
        <Todos />    
      </div>
    </>
  )
}

export default App
