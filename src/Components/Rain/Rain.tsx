import React, { useEffect } from 'react';
import './Rain.css'

interface RainProps {
  switchAnimation: boolean;
}

const Rain: React.FC<RainProps> = ({ switchAnimation }) => {

  useEffect(() => {
    const rain = () => {
      const amount = 400;
      let i = 0;
      const drops: HTMLElement[] = [];

      while (i < amount) {
        const drop = document.createElement('i');

        const size = Math.random() * 5;
        const posX = Math.floor(Math.random() * window.innerWidth);
        const delay = Math.random() * -20;
        const duration = Math.random() * 5;

        drop.style.width = 0.5 + size + 'px';
        drop.style.left = posX * 3 + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';

        document.body.appendChild(drop);
        drops.push(drop);
        i++;
      }

      return drops; // Return the drops for cleanup
    };

    let rainDrops: HTMLElement[] = [];

    if (switchAnimation) {
      rainDrops = rain();
    }

    return () => {
      // Cleanup function to remove drops when animation stops or component unmounts
      rainDrops.forEach(drop => {
        if (drop.parentNode === document.body) {
          document.body.removeChild(drop);
        }
      });
    };
  }, [switchAnimation]);

  return (null);
};

export default Rain;
