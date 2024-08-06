import css from './SearchBox.module.css';
import { useId } from 'react';

export default function SearchBox({ value, onFilter }) {
    const finedId = useId();
    return (
      <div className={css.filter}>
        <label htmlFor={finedId}>Find contacts by name</label>
        <input
          className={css.filterInput}
          id={finedId}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
      </div>
    );
  }