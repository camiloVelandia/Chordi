import React from 'react';
import { Head, Logo, Nav, Search } from "./styles";

const Header = () => {
  return (
    <Head>
      <Logo>
        <img src="" alt="" />
      </Logo>
      <Nav>
        <ul>
          <li>
            <a href="">canciones</a>
          </li>
          <li>
            <a href="">acordes</a>
          </li>
        </ul>
      </Nav>
      <Search>
        <input type="text" placeholder="buscar" />
        <input type="submit" value="" />
      </Search>
    </Head>
  );
};

export default Header;