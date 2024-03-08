import React, { useEffect } from 'react';
import './Rain.css'

const Rain: React.FC = () => {
   
    useEffect(() => {
        const rain = () => {
          const amount = 400;
          let i = 0;
    
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
            i++;
          }
        };
    
        rain();
      }, []);

    

    return (null );
};

export default Rain;