import React, { Component } from 'react';

class HeaderComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='navbar navbar-expand-md navbar-dark bg-dark'>
                <a href='http://www.google.com' className='navbar-brand'>rathena-online</a>
            </div>
        );
    }
}

export default HeaderComponent;