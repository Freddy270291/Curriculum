import React from 'react';
import HeroImg from '../assets/images/HeroImg.jpg';
import Ptext from './Ptext';

export default function HeroSection() {
  return (
    <div>
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, I am</span>
          <span>Federico Giovannini</span>
        </h1>
        <div className="hero__image">
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero__info">
          <Ptext>Prova</Ptext>
        </div>
      </div>
    </div>
  );
}
