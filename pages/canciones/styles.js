import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
  & input {
    border: none;
    padding: 10px;
    background-color: var(--white-color);
    border: 1px solid var(--brand-color);
    border-radius: 15px;
    margin-left: 25px;
    text-transform: capitalize;
    color: var(--brand-color);
    cursor: pointer;
    &::placeholder {
      color: var(--brand-color);
    }
  }

  & input[type="submit"] {
    color: var(--white-color);
    background-color: var(--brand-color);
    font-weight: 500;
  }
`;
export const Head = styled.h1`
 text-align:center;
 text-transform:uppercase;
 margin-top:80px;
 margin-bottom:60px
`;
export const Result = styled.div`
  text-align: center;
  margin-top: 80px;
  margin-bottom: 60px;
  & h2 {
    font-size: 30px;
    text-transform: capitalize;
    color: var(--brand-color);
  }
  & h3 {
    font-size: 25px;
    text-transform: capitalize;
    color: var(--second-color);
  }
  & p {
    display: block;
    text-align: center;
    line-height: 1.7;
    letter-spacing: 1.5px;
    font-size: 16px;
    font-weight: 400;
    width: 340px;
    margin: 0 auto;
    margin-top: 90px;
    color: var(--myDark-color);
  }
  
`;
export const Smaller = styled.small`
  display: block;
  text-align: center;
  line-height: 1.7;
  color: var(--second-color);
  font-size: 12px;
  font-weight: 600;
  width: 250px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const Error = styled.p`
  display: flex;
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  line-height: 1.7;
  color: var(--second-color);
  font-size: 16px;
  font-weight: 600;
  width: 250px;
  margin: 0 auto;
  margin-top: 30px;
  height: 20vh;
`;
