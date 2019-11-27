import React from "react";
import { Modal, Button } from "semantic-ui-react";
import "./CommentEditModal.style.scss";
class ModalModalExample extends React.Component {
  constructor() {
    super();
    this.state = { modalOpen: true, title: "", answer: "" };
  }
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };
  close = () => this.setState({ open: false });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { closeOnDimmerClick } = this.state;
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={(this.handleClose, this.close)}
        //basic
        size="tiny"
        closeOnDimmerClick={closeOnDimmerClick}
      >
        <Modal.Header>{this.props.headline}</Modal.Header>
        <Modal.Content>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <input
              placeholder={this.props.title}
              style={{ color: "#222", border: "2px solid rgb(199, 194, 194)" }}
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              type="text"
            />

            <input
              placeholder={this.props.answer}
              style={{
                color: "#222",
                border: "2px solid rgb(199, 194, 194)",
                display: "block"
              }}
              onChange={e => {
                this.setState({ answer: e.target.value });
              }}
            ></input>
            <Button
              style={{ margin: "0 auto" }}
              color="black"
              onClick={
                (this.handleClose,
                () => {
                  this.props.returnInfo(this.state.title, this.state.answer);
                })
              }
            >
              Finished
            </Button>
          </form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalModalExample;
