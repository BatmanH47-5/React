import React from 'react'
import PropTypes from "prop-types";
export const Multitypecomponent = (props) => {
  return (
    <div>
        <p> The value is: {props.value}</p>
    </div>
  )
}

Multitypecomponent.PropTypes  ={
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number,
        PropTypes.bool
    ]).isRequired
};