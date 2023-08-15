import { useState } from 'react';

// eslint-disable-next-line react/prop-types
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
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          value={title}
          className="input-text"
          onChange={handleChange}
          placeholder="Add Todo..."
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{error}</span>
    </>
  );
};
export default InputTodo;
