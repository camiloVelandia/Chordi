import React, {useState, useEffect} from 'react';
import { Item, Title } from "./styles";
import Link from 'next/link'

const List = () => {
  const[listItem, setListItem]=  useState([]);
  const[artist, setArtist]=  useState('artist');
  const API = "http://www.songsterr.com/a/ra/songs/byartists.json?";

  useEffect(()=>{
    window
      .fetch(`${API}artists=mana`)
      .then((response) => response.json())
      .then(data=>{
        
        setListItem(data);
        data.length ? setArtist(data[0].artist.name) : ''
      });
  },[])

  return (
    <div>
    <Title>lo mejor de {artist}</Title>
      {listItem.map((song)=>{
        console.log(song.tabTypes[0]);
        return (
          <Item key={song.id}>
            <p href="">{song.title}</p>
            <Link href=""> escuchar</Link>
            <Link href={`/letra/${artist}/${song.title}`}> letra</Link>
            <Link href={`/acordes/${song.id}`}> acordes</Link>
          </Item>
        );
      })}
    </div>
  );
};

export default List;