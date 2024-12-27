import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    onSubmit(form.elements.search.value);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button}>
        <FiSearch />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        type="text"
      />
    </form>
  );
};

export default Form;
