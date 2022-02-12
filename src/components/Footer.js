import React from "react";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";

export default function Footer() {
  const Styles = styled.div`
    background: #14213d;
    height: 70px;
    text-align: center;
    padding: 20px;
  `;

  return (
    <Styles>
      <p>
        <FaRegCopyright style={{ marginRight: "0.2rem" }} />
        Tharindu Lakmal |{" "}
        <a href="https://github.com/Lakmal96">
          <FaGithub color="#ffffff" style={{ marginLeft: "0.2rem" }} />
        </a>
        <a href="https://www.linkedin.com/in/tharindu-liyanage">
          <FaLinkedin color="#ffffff" style={{ marginLeft: "0.2rem" }} />
        </a>
        <a href="mailto:tharindu96221@gmail.com">
          <SiGmail color="#ffffff" style={{ marginLeft: "0.2rem" }} />
        </a>
      </p>
    </Styles>
  );
}
