import React, {Component} from 'react';
import Navigation from '../sub-components/Navigation';
import User from '../sub-components/User';
import '../../assets/css/admin/users.css';
import axios from 'axios';

class Users extends Component {

    state = {
        users: [],
    };


    componentDidMount() {
        axios.post('/mail/api/all-users')
            .then(res => {
                console.log(res.data);
                this.setState({ users: [...res.data] })
            })
            .catch(error => console.error(error));
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <Navigation profileImgMarginLeft={5}/>
                <div className="container">
                    <h1 className={"user-title"}>All Users</h1>
                    <User users={this.state.users}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Users;
