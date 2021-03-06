import styled from "styled-components";

export const Foot = styled.footer`
  background-color: var(--myDark-color);
  display: flex;
  align-items: center;
  color: var(--white-color);
  text-align: center;
  justify-content: center;
  padding: 40px 0;
  margin-top: 60px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  clear: both;
  & a {
    color: var(--white-color);
    padding-left: 5px;
    text-decoration: none;
  }
`;
