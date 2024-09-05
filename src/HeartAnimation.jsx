import React, { useEffect, useRef } from 'react';

const colors = ["#e03776", "#8f3e98", "#4687bf", "#3bab6f", "#f9c25e", "#f47274"];
const SVG_NS = 'http://www.w3.org/2000/svg';
const SVG_XLINK = "http://www.w3.org/1999/xlink";

const HeartAnimation = () => {
    const heartsRef = useRef(null);
    let heartsRy = [];

    // Function to create a heart SVG element
    const useTheHeart = (n) => {
        const use = document.createElementNS(SVG_NS, 'use');
        use.n = n;
        use.setAttributeNS(SVG_XLINK, 'xlink:href', '#heart');
        use.setAttributeNS(null, 'transform', `scale(${use.n})`);
        use.setAttributeNS(null, 'fill', colors[n % colors.length]);
        use.setAttributeNS(null, 'x', -69);
        use.setAttributeNS(null, 'y', -69);
        use.setAttributeNS(null, 'width', 138);
        use.setAttributeNS(null, 'height', 138);

        heartsRy.push(use);
        if (heartsRef.current) {
            heartsRef.current.appendChild(use);
        }
    };

    // Animation frame handler
    const Frame = () => {
        window.requestAnimationFrame(Frame);
        for (let i = 0; i < heartsRy.length; i++) {
            if (heartsRy[i].n < 18) {
                heartsRy[i].n += 0.01;
            } else {
                heartsRy[i].n = 0;
                heartsRef.current.appendChild(heartsRy[i]);
            }
            heartsRy[i].setAttributeNS(null, 'transform', `scale(${heartsRy[i].n})`);
        }
    };

    useEffect(() => {
        for (let n = 18; n >= 0; n--) {
            useTheHeart(n);
        }
        Frame();
    }, []);

    return (
        <svg id="hearts" className='heart-animation-background' ref={heartsRef} viewBox="-600 -400 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
                <symbol id="heart" viewBox="-69 -16 138 138">
                    <path d="M0,12 C 50,-30 110,50  0,120 C-110,50 -50,-30 0,12z" />
                </symbol>
            </defs>
        </svg>
    );
};

export default HeartAnimation;
