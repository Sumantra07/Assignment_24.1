import React from "react";


// Functional component , determines how the data needs to be for every line.
function UserItem(props) {
  return (
    <li>
      Name-{props.UserItem.name} - Age- {props.UserItem.Age}    
    </li>
  );
}

export default UserItem;
