import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'

const Chord= () => {
  const router = useRouter()
  const [acordes, setAcordes] = useState([])
  const API = `http://www.songsterr.com/a/ra/songs.json?id=${router.query.id}`;

  useEffect(() => {
     window
      .fetch(`${API}`)
      .then((response) => response.json())
      .then(data=>{
        console.log(data)
        setAcordes(data)
        // data.length ? setArtist(data[0].artist.name) : ''
      });
  }, [])

  return (
    <>
      {router.query.id}
    </>
  )
};

export default  Chord;