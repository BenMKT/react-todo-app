/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prop-types
const TodosList = ({ todosProps, setTodos, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

export default TodosList;
