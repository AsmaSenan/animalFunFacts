import { animals } from './animals';
import React from 'react';
import {createRoot} from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container);
function displayFact(e){
  const selectedAnimal = e.target.alt;
const optionIndex = Math.floor(Math.random() * animals[selectedAnimal].facts.length);
  // console.log(optionIndex);
  const funFact = animals[selectedAnimal].facts[optionIndex];
    console.log(optionIndex);
  console.log(funFact);

  document.getElementById('fact').innerHTML = funFact;
}
const background = (
  <img  
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);
const title = "";
let images = [];
for(const animal in animals){
  images.push(<img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact}
  />)
}
const showBackground = false;
const animalFacts = (
  <div>
    <p id="fact"> </p>
    {!showBackground && background}
    <div className="animals">
      {images}
    </div>
    <h1>{title===""? "Click an animal for a fun fact!": ""}</h1>

  </div>
);

root.render(animalFacts);

