import styled from "styled-components";

 export const Head = styled.header`
   background-color: var(--myDark-color);
   display:flex;
   align-items:center
 `;
 export const Logo = styled.figure`
   width: 15%;
   & img{
   background-color: var(--second-color);
     width:100px;
     height:30px;
   }
 `;
 export const Nav = styled.nav`
   width: 60%;
   & ul {
     display: flex;
     list-style: none;
     padding: 0;
   }
   & a {
     color: var(--white-color);
     text-decoration:none;
     padding-right:30px;
     text-transform:capitalize;
   }
 `;
 export const Search = styled.div`
   width: 25%;
   display: flex;

   & input[type="text"] {
     width: 60%;
     border:none;
     text-transform:capitalize;
     padding-left:8px;
   }
   & input[type="submit"] {
     width: 10%;
     background-color: var(--brand-color);
     border:none;

   }
 `;
