import React from 'react';
import { Head, Logo, Nav, Search } from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <Head>
      <Logo>
        <Link href="/">
          <a>
            <img src="./images/chordi.png" alt="" />
          </a>
        </Link>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link href="/canciones">
              
              <a> Lyrics </a>
            </Link>
          </li>
          <li>
            <Link href="/acordes">
              <a>acordes</a>
            </Link>
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