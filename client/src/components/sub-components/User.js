import React from 'react';
import Moment from 'react-moment';
import '../../assets/css/admin/user.css';

const User = ({ users }) => {
  return (
     <div className={"user-container"}>
         {users && users.map(user => {
           const newPhone = `(${user.phone.slice(0,3)})-${user.phone.slice(3,6)}-${user.phone.slice(6)}`;
           return(
               <div className="user container" key={user.id}>
                 <h4><strong>Name:</strong> {user.name}</h4>
                 <h4><strong>Email:</strong> {user.email}</h4>
                 <h4><strong>Phone:</strong> {newPhone}</h4>
                 <h4><strong>Message:</strong> {user.message}</h4>
                 <h4>
                     <strong>Created At:</strong> <Moment to={user.date}></Moment>
                 </h4>
               </div>
           )
         })}
     </div>
  )
};

export default User;
