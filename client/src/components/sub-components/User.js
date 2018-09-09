import React from 'react';
import Moment from 'react-moment';
import '../../assets/css/admin/user.css';

const User = ({ users }) => {
  return (
     <div className={"user-container"}>
         {users.length >= 1 ? users.map(user => {
           const stringPhone = `${user.phone}`;
           const newPhone = `(${stringPhone.slice(0,3)})-${stringPhone.slice(3,6)}-${stringPhone.slice(6)}`;
           return(
                 <div className="user container" key={user._id}>
                     <h4><strong><i className="fas fa-user-circle"></i> Name:</strong> {user.name}</h4>
                     <h4><strong><i className="fas fa-at"></i> Email:</strong> <a href={`mailto: ${user.email}`} className={"user-link"}> {user.email}</a></h4>
                     <h4><strong><i className="fas fa-phone-square"></i> Phone:</strong><a href={`tel:${user.phone}`} className={"user-link"}> {newPhone}</a></h4>
                     <h4><strong><i className="fas fa-envelope"></i> Message:</strong> {user.message}</h4>
                     <h4>
                         <i className="fas fa-calendar-alt"></i>
                         <strong> Created At:</strong> <Moment to={user.date}></Moment>
                     </h4>
                 </div>
             )
         }) : (
             <div className="container">
                 <h1 className={"text-center text-danger"}><strong>No User Entries</strong></h1>
             </div>
         )}
     </div>
  )
};

export default User;
