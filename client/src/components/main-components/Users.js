import React, {Component} from 'react';
import Navigation from '../sub-components/Navigation';
import User from '../sub-components/User';
import '../../assets/css/admin/users.css';
import axios from 'axios';

class Users extends Component {

    state = {
        users: [
            { id: 1, name: "Eric Zorn", email: "test@test.com", phone: "2016252453", message: "This is a test Message", date: "2018-09-09T16:21:51.231Z" },
            { id: 2, name: "Keith Zorn", email: "second@email.com", phone: "2222222222", message: "This is a another Message", date: "2017-09-09T16:21:51.231Z" }
        ]
    };

    componentDidMount = () => {

    };

    render() {
        return (
            <React.Fragment>
                <Navigation/>
                <div className="container">
                    <h1 className={"user-title"}>All Users</h1>
                    <User users={this.state.users}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Users;
