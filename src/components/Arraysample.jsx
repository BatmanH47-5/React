import React from 'react'

export const Arraysample = (props) => {
    const {items} =props;
  return (
    <div>
        <h2> Items List </h2>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  );
};

Arraysample.prototypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
        })
    ).isRequired,
};

