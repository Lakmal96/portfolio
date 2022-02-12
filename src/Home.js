import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import styled from "styled-components";
import self from "./assets/self.JPG";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  const Styles = styled.div`
    .photo {
      border-radius: 50%;
      width: 350px;
      height: 350px;
      box-shadow: 12px 4px 25px #10002b;

      &:hover {
        box-shadow: 12px 4px 25px #03045e;
      }
    }
  `;
  const Wrapper = styled.section`
    padding: 2.5em;
  `;

  const Title = styled.h1`
    color: #03045e;
    padding: 1rem;
    text-align: left;
    font-size: 3.2rem;
    font-family: Arial;
    font-weight: bold;
    margin-left: 1.2rem;
  `;

  const Text = styled.h5`
    text-align: left;
    color: #03045e;
    padding: 0.4rem;
    margin-left: 1.8rem;
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
    margin-left: 2rem;

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
        <Col lg={4}>
          <Styles>
            {" "}
            <Image src={self} className="photo" alt="Tharindu Lakmal" />
          </Styles>
        </Col>
        <Col lg={8}>
          <Wrapper>
            <Title className="text">Hello, I'm Tharindu Lakmal!</Title>
            <a href="https://github.com/Lakmal96">
              <FaGithub
                size="1.6em"
                color="#3e4c59"
                style={{ marginLeft: "2rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/tharindu-liyanage">
              <FaLinkedin
                size="1.6em"
                color="#3e4c59"
                style={{ marginLeft: "0.5rem" }}
              />
            </a>
            <a href="mailto:tharindu96221@gmail.com">
              <SiGmail
                size="1.6em"
                color="#3e4c59"
                style={{ marginLeft: "0.5rem" }}
              />
            </a>
            <hr
              style={{ border: "1px solid #03045e", marginLeft: "2rem" }}
            ></hr>
            <Text className="text">
              Bsc. in Management and Information Technology (Univrersity of
              Kelniya)
            </Text>

            <Button
              as="a"
              href="cv.pdf"
              download="Tharindu Lakmal.pdf"
              style={{ "text-decoration": "none" }}
            >
              Download CV
            </Button>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
}
