import React, { useState } from 'react';

const Searcher = ({ onSubmit, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event) => {
    const { target: { value } } = event
    setInputValue(value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    onSubmit(inputValue);
  }

  const render = (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={inputValue} onChange={onChangeHandler} placeholder={placeholder}/>
      <button type="submit">Search</button>
    </form>
  );

  return render;
};

export default React.memo(Searcher);

Searcher.defaultProps = {
  onSubmit: () => {},
}
