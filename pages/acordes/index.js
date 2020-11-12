import React, {useState,useEffect} from 'react';

const Acordes = () => {
  useEffect(()=>{
      
  const API_KEY = "AIzaSyD-tT6sIqfOzIDjcTaC2elgXOwmCzkss1A";
    const ID = "QBLbXgeXMU8"; ;
//www.googleapis.com/youtube/v3/search?title=mr bean&key=AIzaSyD-tT6sIqfOzIDjcTaC2elgXOwmCzkss1A&part=snippet,contentDetails,statistics,status
 const url = ` https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`;
    window
      .fetch(url, {
        method: "GET",
        data: { part: "snippet" },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });



    }
  )
  return (
    <div>
      acordes
    </div>
  );
};

export default Acordes;