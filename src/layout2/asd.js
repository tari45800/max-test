import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [text, setText] = useState('Hello, World!');

  const handleTextChange = () => {
    setText('Hi!');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleTextChange();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="wrapper">
      <h1 className="text" style={{ transition: 'font-size 0.5s' }}>
        {text}
      </h1>
      <button onClick={handleTextChange}>Change Text</button>
    </div>
  );
};

export default MyComponent;