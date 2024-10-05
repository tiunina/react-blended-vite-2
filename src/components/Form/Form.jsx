import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const Form = ({ onSubmit }) => {
  const [info, setInfo] = useState('');

  const handleChange = event => {
    setInfo(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const newToDo = {
      text: info,
      id: nanoid(),
    };
    onSubmit(newToDo);
    setInfo('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={info}
        onChange={handleChange}
      />
    </form>
  );
};
