import logo from './logo.svg';
import { motion } from "motion/react"
import './App.css';
import image from './pics/Walker0784/000007840001.jpg'
import image2 from './pics/Walker0784/000007840002.jpg'
import image3 from './pics/Walker0784/000007840003.jpg'
import image4 from './pics/Walker0784/000007840004.jpg'
import image5 from './pics/Walker0784/000007840005.jpg'
import image6 from './pics/Walker0784/000007840006.jpg'
import image7 from './pics/Walker0784/000007840007.jpg'
import image8 from './pics/Walker0784/000007840008.jpg'
import imag9 from './pics/Walker0784/000007840009.jpg'
import image10 from './pics/Walker0784/000007840010.jpg'
import image11 from './pics/Walker0784/000007840011.jpg'
import image12 from './pics/Walker0784/000007840012.jpg'
import image13 from './pics/Walker0784/000007840013.jpg'
import image14 from './pics/Walker0784/000007840014.jpg'
import image15 from './pics/Walker0784/000007840015.jpg'
import image16 from './pics/Walker0784/000007840016.jpg'
import image17 from './pics/Walker0784/000007840017.jpg'
import image18 from './pics/Walker0784/000007840018.jpg'
import image19 from './pics/Walker0784/000007840019.jpg'
import image20 from './pics/Walker0784/000007840020.jpg'

import {useEffect, useState } from 'react';

function App() {
  const [currentPic,setCurrentPic] = useState(19);

 
  const photos = [
    {
      src: image,
      story:"here"
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
    {
      src: image4,
    },
    {
      src: image5,
    },
    {
      src: image6,
    },
    {
      src: image7,
    },
    {
      src: image8,
    },
    {
      src: imag9,
    },
    {
      src: image10,
    },
    {
      src: image11,
    },
    {
      src: image12,
    },
    {
      src: image13,
    },
    {
      src: image14,
      story:"test"
    },
    {
      src: image15,
    },
    {
      src: image16,
    },
    {
      src: image17,
    },
    {
      src: image18,
    },
    {
      src: image19,
       story:"Took a pic to get a before before I clean the room out"
    },
    {
      src: image20,
      story:"Took a pic to get a before before I clean the room out"
    },
  ];
  const nextPic = (()=>{
    setCurrentPic(currentPic - 1)
    console.log(currentPic)
  })

  return (
    <div className="App">
      <button className="nextpic" onClick={nextPic}>nextpic</button>
      <img className="morgue" src={photos[currentPic].src} key={photos[currentPic].src}></img>
      <p className="story">{photos[currentPic].story}</p>
      
     </div>


  
  );
}

export default App;
