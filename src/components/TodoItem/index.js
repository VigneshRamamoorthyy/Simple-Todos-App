import './index.css'

const TodoItem = props => {
  const {todos, deleteTodo} = props
  const {title, id} = todos

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <div className="todo-container">
        <p className="todo">{title}</p>
      </div>

      <button className="delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
