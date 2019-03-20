import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

export default class Modals extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  render () {
    return (
        <>
        <Button className={this.props.buttonclass} id={this.props.id} onClick={this.handleShow}>
          {this.props.html}
        </Button>
        <Modal size={this.props.size} show={this.state.show} onHide={this.handleClose}
               aria-labelledby="contained-modal-title-vcenter" 
               dialogClassName={this.props.mclass}
               centered
        >
          {this.props.children}
        </Modal>
      </>
    )
  }
}
