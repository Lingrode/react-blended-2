import style from './Filter.module.css';

const Filter = ({ filter, onFilter }) => {
  return (
    <form className={style.form}>
      {/* <button className={style.button}>
        <FiSearch />
      </button> */}

      <input
        className={style.input}
        placeholder="Filter todos"
        name="filter"
        type="text"
        value={filter}
        onChange={event => onFilter(event.target.value)}
      />
    </form>
  );
};

export default Filter;
