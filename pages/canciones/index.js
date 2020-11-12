import React,{useState, useEffect} from 'react';
import { Form, Head, Result, Smaller, Error } from "./styles";
import Spinner from "@components/Spinner";

const Canciones = () => {
  
  const [letras, setLetras] = useState({})
  const [formArtist, setFormArtist] = useState("juanes");
  const [formSong, setFormSong] = useState("la paga");
  const [loading, setLoading] = useState(false);
  const API = `https://api.lyrics.ovh/v1/${formArtist}/${formSong}`;

    useEffect(() => {
      setLoading(true)
      traerLetra()
      setLoading(false);
    }, []);

    const traerLetra=()=>{
      window
        .fetch(`${API}`)
        .then((response) => response.json())
        .then((data) => {
          setLetras(data);
          console.log(data);
        });
    }

  const handlesubmit=(e)=>{
    e.preventDefault();
    traerLetra()
    return(
      <div>hola</div>
    )
  }

  const handleChange=(e)=>{
    setFormArtist(e.target.value)
  }
  const handleChange2=(e)=>{
    setFormSong(e.target.value)
  }
  
  
  
  return (
    <div>
      <Head>busca con el nombre de tu artista y el nombre de la cancion</Head>
      <Form onSubmit={handlesubmit}>
        <input type="text" placeholder="artista" onChange={handleChange} />
        <input type="text" placeholder="cancion" onChange={handleChange2} />
        <input type="submit" value="buscar" />
      </Form>
      <Result>
        <h2>resultados para: {formSong}</h2>
        <h3>{formArtist}</h3>

      <div>{ loading ? <Spinner /> : ''}</div>
      <div>{letras.lyrics ? letras.lyrics : <Error>no se ha encontrado letra :( </Error>}  </div>
      </Result>
      <Smaller>Letra powered by Lyrics.ovh</Smaller>
    </div>
  );
}

export default Canciones;