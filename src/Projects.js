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

  const Button = styled.button`
    box-shadow: 0px 1px 0px 0px #fff6af;
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
    background-color: #ffec64;
    border-radius: 20px;
    border: 2px solid #ffaa22;
    display: inline-block;
    cursor: pointer;
    color: #333333;
    font-family: Arial;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 8px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffee66;
    margin-right: 5px;

    &:hover {
      background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
      background-color: #ffab23;
    }
    &:active {
      position: relative;
      top: 1px;
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
                  Web-based System for Kolamba Kade - 2021
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  Kolamba Kade is a Fashion store situated in Baddegama. I
                  developed a web-based system for this store using{" "}
                  <b>
                    <mark>Django, Bootstrap and PostgreSQL. </mark>
                  </b>
                  This was an individual project and I developed it as my 3rd
                  year project.
                </Card.Text>

                <Button
                  as="a"
                  href="https://github.com/Lakmal96/Django-ecommerce-project"
                  style={{ "text-decoration": "none" }}
                >
                  Visit Github Code
                </Button>

                <Button
                  as="a"
                  href="https://drive.google.com/drive/folders/1mnkjiRIIyViAr3Zc2MjOV3gRDvUkRhlh"
                  style={{ "text-decoration": "none" }}
                >
                  View Documentation
                </Button>
              </Card.Body>
            </Card>
          </Styles>
        </Col>

        <Col lg={6}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Web Scraping Projct - 2022
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  From the Rotten Tomatoes website, I was able to get the list
                  of top 100 movies of all time. For this, I have used{" "}
                  <b>
                    <mark>Beautiful Soup, requests and Pandas</mark>
                  </b>
                  Python libraries.
                </Card.Text>

                <Button
                  as="a"
                  href="https://github.com/Lakmal96/Web-Scraping"
                  style={{ "text-decoration": "none" }}
                >
                  Visit Github Code
                </Button>
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
                  Power BI Dashbords - 2022
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  This was done as an assignment for Udemy Power BI course.
                  <b>
                    <mark>
                      Creating Data Model, Adding calculated fields with DAX and
                      Measures are covered.{" "}
                    </mark>
                  </b>
                </Card.Text>

                <Button
                  as="a"
                  href="https://drive.google.com/drive/folders/1WFOAog5YpyjPPQDxtigjYYi3Xy4lsXHU"
                  style={{ "text-decoration": "none" }}
                >
                  View Documentation
                </Button>
              </Card.Body>
            </Card>
          </Styles>
        </Col>

        <Col lg={6}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Portfolio Website - 2022
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  This website developed using,
                  <b>
                    <mark>React, React-Bootstrap and Styled Components.</mark>
                  </b>
                </Card.Text>

                <Button as="a" href="#" style={{ "text-decoration": "none" }}>
                  Visit Github Code
                </Button>
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
                  Multi Vendor E-Commerce Website for MYND Innovation -
                  2021-2022
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  This is being developed as an original product for MYND
                  Innovation (Internship project). Technologies that are using
                  for this project are
                  <b>
                    <mark>
                      React, Mongo DB, Express JS, Node JS and Redux.{" "}
                    </mark>
                  </b>
                  This is a group project and now it's in the final stage of the
                  development.
                </Card.Text>

                <Button
                  as="a"
                  href="https://drive.google.com/drive/folders/1GxuIh6sIELzo1pCxeEapIkQARVvgBPuV"
                  style={{ "text-decoration": "none" }}
                >
                  View Documentation
                </Button>
              </Card.Body>
            </Card>
          </Styles>
        </Col>

        <Col lg={6}>
          <Styles>
            <Card>
              <Card.Body>
                <Card.Title as="h3">
                  Inventory Management System for Agrovet Animal Health (Pvt.)
                  Ltd. - 2020
                  <hr style={{ border: "1px solid #03045e" }}></hr>
                </Card.Title>
                <Card.Text>
                  This is a group project developed as an assignment for a
                  course module. Technologies used are{" "}
                  <b>
                    <mark>Java, NetBeans IDE and MySQL.</mark>
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Styles>
        </Col>
      </Row>
    </Container>
  );
}
