import React, { Component } from "react";
import './employees-list.css'
class PopupModal extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    {/* <h1>{this.props.text}</h1> */}
                    <div>Name:{this.props.name}</div>
                    <div>Email:{this.props.email}</div>
                    <div>Address:{this.props.address}</div>
                    <div> <button onClick={this.props.closePopup}>close me</button></div>
                </div>
            </div>
        );
    }
}

export default PopupModal;
