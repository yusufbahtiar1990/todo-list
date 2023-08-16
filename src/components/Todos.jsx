import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {/* data pindahan dari App.jsx */}
      {todos.map((todo) => {
        //data pindahkan ke TodoItem.jsx
        // return <p key={todo.id}>{todo.title}</p>
        return <TodoItem key={todo.id} todo={todo} />
      })} 

    </div>
  )
}

const styles = {
    container: {
      width: '40%',
      margin: '0 auto',
    },
  }
  
export default Todos