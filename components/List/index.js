import React, {useState, useEffect} from 'react';
import { Item, Title } from "./styles";
import Link from 'next/link'
import Spinner from '@components/Spinner';

const List = () => {
  const[listItem, setListItem]=  useState([]);
  const[artist, setArtist]=  useState('artist');
  const[loading, setLoading]=  useState(false);
  const API = "http://www.songsterr.com/a/ra/songs/byartists.json?";

  useEffect(()=>{
    
  
    setLoading(true)
    window
      .fetch(`${API}artists=mana`)
      .then((response) => response.json())
      .then(data=>{
        
        setListItem(data);
        data.length ? setArtist(data[0].artist.name) : ''
        setLoading(false)
      });
  },[])




  if(loading)return <Spinner/>

  return (
    <div>
    <Title>lo mejor de {artist}</Title>
      {listItem.map((song)=>{
        return (
          <Item key={song.id}>
            <p href="">{song.title}</p>
            <Link href=""> escuchar</Link>
            <Link href={`/letra/${artist}/${song.title}`}> letra</Link>
            <a href={`http://www.songsterr.com/a/wa/song?id=${song.id}`} target='blank'>
              
              acordes
            </a>
          </Item>
        );
      })}
    </div>
  );
};

export default List;