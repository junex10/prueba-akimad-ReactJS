import React, { Component } from 'react';

import Modal from 'react-modal';

import { basicCustomStylesModal } from './../../../helpers/modal';

import './../../../css/modal.css';

class FormModal extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.body = props.children;

        this.state = {
            isOpen: props.isOpen
        }
        this.customStyles = basicCustomStylesModal();
    }
    closeModal = () => this.setState({ isOpen: (this.state.isOpen) ? false : true })
    render() {
        return (
            <Modal
                isOpen={this.state.isOpen}
                style={this.customStyles}
            >
                <div onClick={this.closeModal} className='closeModal'>
                    <i className="fas fa-times"></i>
                </div>
                <h4 className="headingModal mt-2 mb-4">{this.title}</h4>
                <hr className='divisorModal mb-4' />
                <div className="bodyModal">
                    {this.body}
                </div>
            </Modal>
        );
    }
}

export default FormModal;