import React,{useState, useEffect} from 'react';
import { useRouter } from "next/router";
import {Title, Small, Letter} from './styles'

const Lyric = () => {
  const router = useRouter();

  const [letra, setLetra] = useState('')
  const API = `https://api.lyrics.ovh/v1/${router.query.artist}/${router.query.name}`;
  
  useEffect(() => {
    window
      .fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        setLetra(data);
        // data.length ? setArtist(data[0].artist.name) : ''
      });
  }, []);



  return (
    <section>
      <Title>{router.query.name}</Title>
      <Small>{router.query.artist}</Small>
      <Letter>{letra.lyrics}</Letter>
    </section>
  );
};

export default Lyric;