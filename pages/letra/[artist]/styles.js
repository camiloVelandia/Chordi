import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: var(--brand-color);
  margin: 40px 0 10px;
`;
export const Small = styled.small`
display:block;
  text-align: center;
  text-transform: capitalize;
  color: var(--brand-color);
  font-size:14px;
  font-weight:600;
  
`;
export const Letter = styled.p`
  color: var(--brand-color);
display:block;
  text-align: center;
  line-height:1.7;
  letter-spacing:1.5px;
  font-size:16px;
  font-weight:400;
  width:340px;
  margin:0 auto;
  margin-top: 90px;
  
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
  align-items:center;
  text-transform:uppercase;
  line-height: 1.7;
  color: var(--second-color);
  font-size: 16px;
  font-weight: 600;
  width: 250px;
  margin: 0 auto;
  margin-top: 30px;
  height:60vh;
`;
