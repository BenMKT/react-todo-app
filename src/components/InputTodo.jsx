import { useState } from 'react';

const InputTodo = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} placeholder="Add Todo..." />
      <button>Submit</button>
    </form>
  );
};
export default InputTodo;
