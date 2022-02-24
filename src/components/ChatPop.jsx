import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import ChatPopBar from "../components/ChatPopBar";
import { animateScroll } from "react-scroll";

class ChatPop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = () => {
    this.scrollToBottom();
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({
      duration: 500,
      containerId: "ContainerElementID",
    });
  }
  render() {
    return (
      <Row className="ChatPop-Main">
        <div className="msgs-container" id="ContainerElementID">
          {this.props.msgs &&
            this.props.msgs.map((msg, index) => (
              <>
                {msg.from === this.props.username && (
                  <div key={index} className="msg-bubble-sender">
                    {msg.text}
                  </div>
                )}
                {msg.from !== this.props.username &&
                  msg.from === this.props.sender && (
                    <div key={index} className="msg-bubble">
                      {msg.text}
                    </div>
                  )}
              </>
            ))}
        </div>
        <ChatPopBar
          closeChat={this.props.closeChat}
          myFunc={this.props.myFunc}
          sendMessage={this.props.sendMessage}
        />
      </Row>
    );
  }
}

export default ChatPop;
