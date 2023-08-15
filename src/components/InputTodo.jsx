import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setError('');
    } else {
      setError('Error: Please add an item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Add Todo..."
        />
        <button>Submit</button>
      </form>
      <span>{error}</span>
    </>
  );
};
export default InputTodo;
