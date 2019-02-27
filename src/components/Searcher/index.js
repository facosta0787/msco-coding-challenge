import React, { useState } from 'react';
import { func, string, bool } from 'prop-types';

import './Searcher.css';

const Searcher = ({ onSubmit, placeholder, areThereResults }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = event => {
    const {
      target: { value }
    } = event;
    setInputValue(value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  const render = (
    <form onSubmit={onSubmitHandler} className="searcher-form">
      <div>
        <i className="fas fa-search searcher-icon" />
        <input
          className="searcher-input"
          type="text"
          value={inputValue}
          onChange={onChangeHandler}
          placeholder={placeholder}
        />
      </div>
      {!areThereResults && <button type="submit">Search</button>}
    </form>
  );

  return render;
};

export default React.memo(Searcher);

Searcher.propTypes = {
  onSubmit: func.isRequired,
  placeholder: string,
  areThereResults: bool
};

Searcher.defaultProps = {
  onSubmit: () => {}
};
