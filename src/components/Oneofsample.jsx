import React from 'react'
import PropTypes from "prop-types";
export const Oneofsample = (props) => {
  const {color} = props;
  return (
    <div style={{backgroundColor: color,padding:"20px",color:"white"}}>
      <p> This component has a background color of {color}</p>
    </div>
  );
};

Oneofsample.prototype ={
  color:PropTypes.oneOf(["red","green","blue"]).isRequired
};
