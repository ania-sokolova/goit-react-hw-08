import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filtersSlice';
import { selectFilter } from '../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name or number:
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;