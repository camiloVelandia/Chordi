import React,{useState, useEffect} from 'react';
import { useRouter } from "next/router";
import {Title, Small, Letter, Smaller, Error} from './styles'
import Spinner from '@components/Spinner';

const Lyric = () => {
  const router = useRouter();

  const [letra, setLetra] = useState('')
  const [loading, setLoading] = useState(false)
  const API = `https://api.lyrics.ovh/v1/${router.query.artist}/${router.query.name}`;
  
  useEffect(() => {
    setLoading(true)
    window
      .fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => {
        setLetra(data);
        setLoading(false)
        // data.length ? setArtist(data[0].artist.name) : ''
      });
  }, []);

  if (loading) return <Spinner />;
  if (letra.lyrics=='') return <Error>no se ha encontrado letra :(</Error>;


  return (
    <section>
      <Title>{router.query.name}</Title>
      <Small>{router.query.artist}</Small>
      <Letter>{letra.lyrics}</Letter>
      <Smaller>Letra powered by Lyrics.ovh</Smaller>
    </section>
  );
};

export default Lyric;