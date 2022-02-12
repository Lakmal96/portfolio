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
                    <li>
                      Python
                      <ul>
                        <li>Pandas</li>
                        <ProgressBar animated now={75} />
                        <li>Numpy</li>
                        <ProgressBar animated now={65} />
                        <li>Matplotlib</li>
                        <ProgressBar animated now={72} />
                        <li>Scikit Learn</li>
                        <ProgressBar animated now={35} />
                        {/* <li>Plotly</li>
                        <ProgressBar animated now={38} /> */}
                      </ul>
                    </li>
                    <li>R</li>
                    <ProgressBar animated now={25} />
                    <li>Power BI</li>
                    <ProgressBar animated now={65} />
                    <li>Excel</li>
                    <ProgressBar animated now={60} />
                    <li>PostgreSQL</li>
                    <ProgressBar animated now={70} />
                    <li>Odoo 13</li>
                    <ProgressBar animated now={50} />
                    <li>Django</li>
                    <ProgressBar animated now={60} />
                    <li>MERN Stack</li>
                    <ProgressBar animated now={55} />
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
                    <ProgressBar animated now={90} />
                    <li>Flexibility</li>
                    <ProgressBar animated now={80} />
                    <li>Communication</li>
                    <ProgressBar animated now={65} />
                    <li>Teamwork</li>
                    <ProgressBar animated now={70} />
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
