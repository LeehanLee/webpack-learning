import React, { Component } from 'react';

class PrimaryItem extends Component {
    render(){
        const { text , link, handleClick } = this.props;
        return (
            <a className="main-item" href={link} onClick={handleClick}>{text}</a>
        );
    }
}

export default PrimaryItem;