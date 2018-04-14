import React from 'react';


const UserList = (props) => (
  <div>
    <h4> User Component </h4>
    There are { props.users.length } users.
   
  </div>
)

export default UserList	;
/*


{ props.items.map(item => <ListItem item={item}/>)}

*/