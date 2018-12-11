import React from "react";

import UserItem from "./UserItem";

//Eventually this would go and it would be
//replaced by the express server api call
import users from "../data-source/users";
// get the userlist and prints
// calls functional component UserItem
function UserList(props) {
  const userList = users;

  return (
      <div>
      <p>User List</p>
      <ul>
    <li>
      {userList.map(user => (
        <UserItem UserItem={user} />     
      ))}
    </li>
    </ul>
    </div>
  );
}

export default UserList;
