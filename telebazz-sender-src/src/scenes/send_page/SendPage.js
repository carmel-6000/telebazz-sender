import React, { Component } from 'react';
import { NavBar } from '../message_page/NavBar.js';

export class SendPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                Send Page
            </div>
        );
    }
}

export default SendPage;