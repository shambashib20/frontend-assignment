
import './App.css'
import AddTodo from './components/AddTodo'
import Filters from './components/Filters'
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <>
      <div className="container mt-4">
      <h2 className="text-center">📝 To-Do List</h2>
      <AddTodo />
      <Filters />
      
      <TodoList />
    </div>
    </>
  )
}

export default App
