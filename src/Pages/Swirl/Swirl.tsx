import React, { useRef, useEffect } from 'react';
// import './App.css';

const Swirl: React.FC = () => {
    const swirlRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            if (swirlRef.current) {
                const rotationSpeed = -0.01; // Adjust the rotation speed
                const scrollDelta = (e as WheelEvent).deltaY;

                swirlRef.current.style.transform = `rotate(${swirlRef.current.style.transform
                        ? parseFloat(swirlRef.current.style.transform.slice(7, -4)) + rotationSpeed * scrollDelta
                        : 0
                    }deg)`;
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    const renderCircles = () => {

        const workspaceWidth = window.innerWidth;
        const workspaceHeight = window.innerHeight;
        const maxRadius = Math.min(workspaceWidth, workspaceHeight);

        const numCircles = 500; // Adjust the number of circles

        const circles = [];

        for (let i = 0; i < numCircles; i++) {
            const currentRadius = (i / numCircles) * maxRadius;

            const angle = (i / numCircles) * Math.PI * 16;

            const x = Math.cos(angle) * currentRadius;
            const y = Math.sin(angle) * currentRadius;

            circles.push(
                <div
                    key={i}
                    className="circle"
                    style={{ left: x, top: y }}
                ></div>
            );
        }

        return circles;
    };

    return (
        <div className="workspace">
            <div className="swirl" ref={swirlRef}>
                {renderCircles()}
            </div>
        </div>
    );
};

export default Swirl;