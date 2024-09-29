import React from 'react'
import PropTypes from "prop-types";
export const Functionsample = (props) => {
    const { handleClick } = props;
  return (
    <div>
        <p> This is a function component.</p>
        <button onClick={handleClick}> Click me!</button>
    </div>
  );
};

Functionsample.propTypes = {
    handleClick: PropTypes.func.isRequired,
};