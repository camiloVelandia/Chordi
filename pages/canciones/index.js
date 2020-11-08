import React,{useState, useEffect} from 'react';

const Canciones = () => {
  const artist='juanes'
  const cancion='la paga'
  const API = `https://api.lyrics.ovh/v1/${artist}/${cancion}`;
  const [letras, setLetras] = useState({})

    useEffect(() => {
      window
        .fetch(`${API}`)
        .then((response) => response.json())
        .then((data) => {
          // setLetras(data);
          
        });
    }, []);
  return (
    <div>
      <h1>busca con el nombre de tu artista y el nombre de la cancion</h1>
      <form>
        <input type='text' placeholder='artista' />
        <input type='text' placeholder='cancion' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Canciones;