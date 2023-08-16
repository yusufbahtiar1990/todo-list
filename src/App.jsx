import React, {useState, createContext} from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'ini adalah todo list pertama',
      completed: false,
    },
    {
      id: 2,
      title: 'ini adalah todo list kedua',
      completed: false,
    },
    {
      id: 3,
      title: 'ini adalah todo list ketiga',
      completed: false,
    },
  ])

  console.log(todos)

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
    <div style={styles.container}>
      <h1 style={styles.title}>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} 
      />
    </div>
    </TodoContext.Provider>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App