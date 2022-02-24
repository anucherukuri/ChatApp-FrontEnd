import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        username: "",
        name: "",
      },
    };
  }
  catchChange = (e) => {
    let userInfo = this.state.userInfo;
    let id = e.currentTarget.id;
    userInfo[id] = e.currentTarget.value;
    this.setState({ userInfo });
  };

  Login = async () => {
    let addUser = await fetch("http://localhost:3007/users", {
      method: "POST",
      body: JSON.stringify(this.state.userInfo),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    });
    if (addUser.ok) {
      this.props.history.push("/chat/" + this.state.userInfo.username);
    }
  };
  render() {
    return (
      <Container>
        <Row className="homePage-row">
          <Col md={5} className="homepage-class">
            <Row className="addUser-class">
              <div className="addUser-icon">
                {" "}
                <img src="interaction.svg" width="150px" />
              </div>
            </Row>
            <Row className="justify-content-center mt-5">
              <div className="input-homepage">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
                <input
                  id="username"
                  onChange={this.catchChange}
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-homepage mt-5">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-check-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                <input
                  id="name"
                  onChange={this.catchChange}
                  placeholder="Enter Name"
                />
              </div>
              <div className="input-homepage mt-5">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-lock-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
                  <path
                    fill-rule="evenodd"
                    d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                  />
                </svg>
                <input id="password" placeholder="Enter Password" />
              </div>
            </Row>
            <Row className="d-flex justify-content-center">
              {" "}
              <Button className="login-btn" onClick={() => this.Login}>
                Login
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(HomePage);
