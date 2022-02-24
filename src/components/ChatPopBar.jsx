import React, { Component } from "react";
import { Row } from "react-bootstrap";

export class ChatPopBar extends Component {
  emptyInput = () => {
    let msginput = document.querySelector("#msg-input");
    msginput.value = "";
  };
  updateMsg = (e) => {
    this.props.myFunc(e.currentTarget.value);
  };

  render() {
    return (
      <>
        <div className="ChatPopBar-wrapper-row">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-emoji-smile"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="happyface"
          >
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fill-rule="evenodd"
              d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"
            />
            <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>

          <input
            placeholder="Enter message here"
            onChange={this.updateMsg}
            id="msg-input"
          />
        </div>
        <div
          className="SendBtn"
          onClick={() => {
            this.props.sendMessage();
            this.emptyInput();
          }}
        >
          <img src="/send.svg" width="30px" />
        </div>
        <div className="exitbtn" onClick={this.props.closeChat}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-x"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
            />
          </svg>
        </div>
      </>
    );
  }
}

export default ChatPopBar;
