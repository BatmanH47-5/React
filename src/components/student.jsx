import React from 'react'
import Proptypes from "prop-types";
export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
            <tr>
                <th> Name: </th>
                <td> {props.name} </td>
            </tr>
            <tr>
                <th> Age: </th>
                <td>{props.age} </td>
            </tr>
            <tr>
                <th> ismarried: </th>
                <td> {props.ismarried ? "Yes": "No"}</td>
            </tr>
            </tbody>
        </table>
    </div>
  );
};

Student.Proptypes = {
    name: Proptypes.name,
    age:Proptypes.number,
    ismarried:Proptypes.bool,
}
Student.defaultProps = {
    name: "No Name",
    age: 0,
    ismarried:false,
}
