import { useAppDispatch, useAppSelector } from '../Hooks/redux';
import { setFilter, FilterType } from '../store/filtersSlice';
import '../styles/TodoFilters.css';

const TodoFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.filters.status);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="todo-filters">
      {filters.map(filter => (
        <button
          key={filter.value}
          className={`filter-button ${currentFilter === filter.value ? 'active' : ''}`}
          onClick={() => dispatch(setFilter(filter.value))}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilters;