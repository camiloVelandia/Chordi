import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: var(--brand-color);
  margin:40px 0;
`;
export const Item = styled.div`
  background-color: var(--second-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 15px auto;
  padding: 10px 20px;
  border-radius: 25px;
  
  & p {
    text-decoration: none;
    color: var(--white-color);
    margin:0;
    width:40%;
    text-transform:uppercase;
  }
  & a {
    color: var(--white-color);
    margin:0;
    width:20%
  }
`;
