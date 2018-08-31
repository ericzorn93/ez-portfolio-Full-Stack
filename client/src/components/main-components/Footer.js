import React, { Component } from 'react';

// Custom CSS
import '../../css/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <span style={{color: "white"}}>Daniel Kitchen Gaming &copy; By Eric Zorn</span>
                    </div>
                </footer>
            </div>
        )
    }
};