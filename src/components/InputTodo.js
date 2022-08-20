/* eslint-disable */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  /**  handleSubmit = (event) => {
    event.preventDefault();

    const {onSearch} = this.props
    const {value} = this.query
    onSearch(value)

    event.target.blur();
} */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    /* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
      <button type="button" className="input-submit">click</button>
    </form>
  );
};

export default InputTodo;
