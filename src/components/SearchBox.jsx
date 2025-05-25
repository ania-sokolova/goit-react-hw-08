import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}

export default SearchBox;
