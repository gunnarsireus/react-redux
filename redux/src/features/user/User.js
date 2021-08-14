import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setIsIdentified,
  toggleIsIdentified,
  toggleIsIdentifiedAsync,
  setIsIdentifiedAsync,
  clearIsIdentifiedIfTrue ,
  selectUserIsIdentified,
} from './userSlice';
import styles from './User.module.css';

export function User() {
  const identified = useSelector(selectUserIsIdentified);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="set isIdentified true"
          onClick={() => dispatch(setIsIdentified(true))}
        >
          true
        </button>
        <span className={styles.isIdentified}>{identified ? ('True'):('False')}</span>
        <button
          className={styles.button}
          aria-label="set isIdentified false"
          onClick={() => dispatch(setIsIdentified(false))}
        >
          false
        </button>
        <button
          className={styles.button}
          aria-label="toggle is identified"
          onClick={() => dispatch(toggleIsIdentified())}
        >
          toggle is identified
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="set isIdentified true Async"
          onClick={() => dispatch(setIsIdentifiedAsync(true))}
        >
          true 
        </button>
        <button
          className={styles.button}
          aria-label="set isIdentified false async"
          onClick={() => dispatch(setIsIdentifiedAsync(false))}
        >
          false
        </button>
        <button
          className={styles.button}
          aria-label="toggle is identified async"
          onClick={() => dispatch(toggleIsIdentifiedAsync())}
        >
          toggle is identified async
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(clearIsIdentifiedIfTrue())}
        >
          Clear identifed if identified
        </button>
      </div>
    </div>
  );
}
