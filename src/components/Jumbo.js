import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";
import background from "../assets/background.jpg";

export default function Jumbo() {
  const Styles = styled.div`
    .jumbo {
      background: url(${background}) no-repeat fixed bottom;
      background-size: cover;
      color: #ffffff;
      height: 200px;
      position: relative;
    }
  `;

  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <Container>
          <h1>Hello, I am Tharindu</h1>
          <p>Welcome to my Portfolio website!</p>
        </Container>
      </Jumbotron>
    </Styles>
  );
}
