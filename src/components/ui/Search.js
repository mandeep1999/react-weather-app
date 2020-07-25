import React, { useState } from 'react';

const Search = ({ onQuery }) => {
  const [text, changeText] = useState('');
  const onChange = (e) => {
    changeText(e);
    onQuery(e);
  };
  return (
    <section className="search">
      <input
        value={text}
        type="text"
        placeholder="Enter Location"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </section>
  );
};

export default Search;
