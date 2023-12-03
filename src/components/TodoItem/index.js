// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, onDeleteTodo} = props
  const {title, id} = details

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
