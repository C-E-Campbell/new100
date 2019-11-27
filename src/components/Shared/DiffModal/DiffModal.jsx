import React, { Component } from "react";
import "./DiffModal.style.scss";
import { Button, Modal } from "semantic-ui-react";

export default class ModalExampleControlled extends Component {
  state = { modalOpen: true };

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Content>
          <h1>Choose A Difficulty.</h1>
          <h3>Easy: You have 1 year to complete the challenge</h3>
          <h3>MurderMe: Only 100 days...</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.handleClose}
            onClick={() => this.props.myModalFunc("Easy")}
            inverted
          >
            Easy
          </Button>
          <Button
            color="red"
            id="murderme"
            onClick={this.handleClose}
            onClick={() => this.props.myModalFunc("MurderMe")}
            inverted
          >
            MurderME
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
