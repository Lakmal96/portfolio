import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Projects() {
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
        <Col lg={12}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Profile<hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  A hardworking, a motivated and an enthusiastic individual with
                  a great passion for the Data Analytics field and wants to
                  develop insights from raw data.
                </Card.Text>
              </Card.Body>
            </Card>
          </Styles>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Academic Qualifications
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  <b>
                    B.Sc. in Management and Information Technology
                    (2019-Present)
                  </b>
                  <br></br>
                  Department of IndustrialManagement,<br></br> Faculty of
                  Science,<br></br>University of Kelaniya.
                  <br></br>
                  <br></br>
                  <b>G.C.E. A/L and G.C.E. O/L Examinations</b> <br></br>
                  Mahinda College, Galle<br></br> G.C.E. A/L – 1A pass and 2B
                  passes (2017)<br></br> G.C.E. O/L – 8A passes and 1B pass
                  (2012)
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
                  Professional Qualifications
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  <b>Intern - (2021- Sep. to 2022 Feb.)</b>
                  <br></br>
                  MYND Innovation<br></br>
                  Maharagama<br></br>
                  <b>Java Programming Advanced Course (2019)</b> <br></br>
                  University of Kelaniya<br></br>
                  <b>Certificate Course in Graphic Designing (2018)</b>{" "}
                  <br></br>Oslo Computer College<br></br>{" "}
                  <b>Certificate Course in English Language (2018)</b>
                  <br></br>
                  Excellent English Educational Center
                </Card.Text>
              </Card.Body>
            </Card>
          </Styles>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Online Certifications
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  <h4>Udemy: Online Courses (Data Analytics)</h4>
                  <ul>
                    <li>
                      The Data Analyst Course: Complete Data Analyst Bootcamp
                      2022 (2022-01)
                    </li>
                    <li>SQL Masterclass: SQL for Data Analytics (2022-02)</li>
                    <li>
                      Microsoft Power BI - Up & Running With Power BI
                      Desktop(2021-11)
                    </li>
                    <li>
                      Python Data Analysis & Visualization Masterclass (2021-12)
                    </li>
                  </ul>

                  <h4>Udemy: Online Courses (Web Development)</h4>
                  <ul>
                    <li>Learn Python from Basic to Production (2021-01)</li>
                    <li>Python and Django Framework for Beginners (2021-02)</li>
                    <li>Bootstrap for Beginners (2021-01)</li>
                    <li>
                      React, NodeJS, Express & MongoDB - The MERN Fullstack
                      Guide (2021-10)
                    </li>
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
                  Experience
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  <b>Intern - (2021- Sep. to 2022 Feb.)</b>
                  <br></br>
                  MYND Innovation<br></br>
                  Maharagama<br></br>
                  <ul>
                    <li>
                      Developing E-Commerce website as an original product for
                      the company using MERN Stack.
                    </li>
                    <li>
                      Working with Odoo 13 ERP
                      <ul>
                        <li>Installation of Odoo ERP.</li>
                        <li>
                          Assisting in training and user education on how to use
                          the Odoo ERP system.
                        </li>
                      </ul>
                    </li>
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
