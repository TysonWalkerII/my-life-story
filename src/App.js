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
  const [start,setStart] = useState(false);

 
  const photos = [
    {
      src: image,
      story:"I booted up resident evil on my projector. Honestly didn't play much cuz it wasn't long b4 I went into a food coma and passed out to dashie videos."
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
      story:"also I got a shit load of food on the way here... yes TWO !!! cinnabons, 1 order of chicken lo mein from lucky china star, and my go to coping combo, BBQ Chicken nachos, with a Smoky Sweet BBQ Burger <3 "

    },
    {
      src: image6,
     
    },
    {
      src: image7,
      story:"with my new found hobby of stuffing my face with junk until I'm in  excruciating pain, what better way to celebrate than to eat myself into another coma for the first time in my new house?"
    },
    {
      src: image8,
      story:"Had unloaded the truck a while ago... once I returned the uhaul, I drove around downtown detroit for one more nostalgia trip as I said goodbye to my childhood forever."
    },
    {
      src: imag9,
      story:"welp... If I don’t do this, I won’t overcome anything. time to go"
    },
    {
      src: image10,
      story:"Who would’ve thought, that I’d actually get to this point. For as long as I could remember, all I ever wanted was to get away from this place and out on my own. Just to be met with the harsh reality of my inability to do anything on my own. Having nothing more to live for, than to be taken advantage of for the rest of my life. After enduring this humiliating existence for as long as I could remember , it is finally going to end. 16yo me would be very proud. All things considered… I’m very blessed to have been born into a family as loving & caring as they are. I’m not at all ready for what’s to come & am completely uncertain as to whether I’m capable of overcoming it or not. "
    },
    {
      src: image11,
       story:"As much as I wanted to leave... Its pretty crazy how some of my happiest & most pivotal moments took place here. It was quite the journey."
    },
    {
      src: image12,
      story:"Damn... I haven't see the room like this since we moved in (2019). Felt pretty weird."
    },
    {
      src: image13,
      story:"now to sweep up this last bit..."
    },
    {
      src: image14,
      story:"<3"
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
    },
    {
      src: image20,
      story:"Took some pics before loading the truck"
    },
  ];

  const nextPic = (()=>{
    setCurrentPic(currentPic - 1)
    console.log(currentPic)
  })
const [showing,setShowing] = useState(true);
if (start){
  return ( 
     <div className="App">
    <button className="nextpic" onClick={nextPic}>nextpic</button>
    <div className="image-container">
    <img className="morgue" src={photos[currentPic].src} key={photos[currentPic].src}></img>
    </div>
    <p className="story">{photos[currentPic].story}</p>
    {/* <iframe id="embedplayer" src="http://www.bitview.net/embed?v=YLO2OPEUf4m" width="425" height="344" allowfullscreen scrolling="off" frameborder="0"></iframe> */}
    {/* <object width="425" height="305"><embed src="https://media.xf1re.com/swf/embedplayer.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="305" flashvars="videoid=20c5ce85"></embed></object> */}
    </div>)
}else{
  return(
        <div className="App">
      <div className="swag" onClick={(()=>setStart(true))}>
      <img className="swag-blood" src="https://img1.picmix.com/output/stamp/normal/7/1/6/8/1088617_79848.png"></img>
      <img  className="swag-card"src="https://img1.picmix.com/output/stamp/normal/3/4/1/9/2519143_c9fc4.png"></img>
      <img className="swag-halo" src="https://img1.picmix.com/output/stamp/normal/1/0/9/4/2064901_885c1.png"></img>
      </div>
      </div>
  )
}
  return (
    // <div className="App">

      // {start ?
      // <div className="App">
      // <button className="nextpic" onClick={nextPic}>nextpic</button>
      // <img className="morgue" src={photos[currentPic].src} key={photos[currentPic].src}></img>
      // <p className="story">{photos[currentPic].story}</p>
      // </div>
      // :
      // <div className="App">
      // <div className="swag" onClick={(()=>setStart(true))}>
      // <img className="swag-blood" src="https://img1.picmix.com/output/stamp/normal/7/1/6/8/1088617_79848.png"></img>
      // <img  className="swag-card"src="https://img1.picmix.com/output/stamp/normal/3/4/1/9/2519143_c9fc4.png"></img>
      // <img className="swag-halo" src="https://img1.picmix.com/output/stamp/normal/1/0/9/4/2064901_885c1.png"></img>
      // </div>
      // </div>
      // }
 
     

     {/* </div> */}


  
  );
}

export default App;
