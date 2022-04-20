import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Skills() {
  const Styles = styled.div`
    .card {
      margin-bottom: 20px;
      box-shadow: 3px 1px 10px #10002b;

      &:hover {
        box-shadow: 9px 5px 15px #03045e;
      }
    }
    .card-text {
      color: #000000;
    }
    .card-title {
      color: #03045e;
      padding: 2px;
    }
  `;
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Technical Skills
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaSript</li>
                    <li>jquery</li>
                    <li>Django</li>
                    <li>MERN Stack</li>
                    <li>PostgreSQL</li>
                    <li>Odoo 13</li>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Matplotlib</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Styles>
        </Col>

        <Col lg={6}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Soft Skills
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>Self-Learning</li>
                    <li>Flexibility</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Styles>
        </Col>
      </Row>
    </Container>
  );
}
