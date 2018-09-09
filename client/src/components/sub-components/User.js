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
                 <h4><strong><i className="fas fa-user-circle"></i> Name:</strong>{user.name}</h4>
                 <h4><strong><i className="fas fa-at"></i> Email:</strong> <a href={`mailto: ${user.email}`} className={"user-link"}> {user.email}</a></h4>
                 <h4><strong><i className="fas fa-phone-square"></i> Phone:</strong><a href={`tel:${user.phone}`} className={"user-link"}> {newPhone}</a></h4>
                 <h4><strong><i className="fas fa-envelope"></i> Message:</strong> {user.message}</h4>
                 <h4>
                     <i className="fas fa-calendar-alt"></i>
                     <strong> Created At:</strong> <Moment to={user.date}></Moment>
                 </h4>
               </div>
           )
         })}
     </div>
  )
};

export default User;
