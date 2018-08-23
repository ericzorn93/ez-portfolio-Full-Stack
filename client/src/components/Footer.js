import React, { Component } from 'react';

// Custom CSS
import '../Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">Daniel Kitchen Gaming &copy; By Eric Zorn</span>
                    </div>
                </footer>
            </div>
        )
    }
};