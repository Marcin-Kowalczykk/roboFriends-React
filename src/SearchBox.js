import React from "react";

const SearchBox = ({ changeSearchInput }) => {
  return (
    <section className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue shadow-5 br3"
        type="search"
        placeholder="put text"
        onChange={changeSearchInput}
      />
      <button className = "pa3 ma2 b--green bg-blue br3">Clear</button>
    </section>
  );
};

export default SearchBox;