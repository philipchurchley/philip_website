import '../styles/App.css';
import '../styles/Collage.css';
import React, { useState, useEffect, useRef } from 'react';


const Collage = ({ imgs, parent }) => {
   const collageRef = useRef(null);
   const [opacity, setOpacity] = useState(0);  // Start with opacity 0

   useEffect(() => {
      const container = document.querySelector(parent);

      // Create a MutationObserver to watch for changes to the style attribute
      const observer = new MutationObserver((mutationsList) => {
         for (let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
               const currentOpacity = window.getComputedStyle(container).opacity;
               setOpacity(parseFloat(currentOpacity)); // Update opacity state
            }
         }
      });

      // Observe the container for changes to the style attribute
      observer.observe(container, { attributes: true });

      // Cleanup the observer on component unmount
      return () => {
         observer.disconnect();
      };
   }, [parent]);

   useEffect(() => {
      console.log('here')
      // when it comes into view
      if (opacity > 0) {
         Array.from(collageRef.current.children).forEach((child) => {
            child.style.zIndex = 20;
            child.style.pointerEvents = 'auto';
         });
      }
      // when it's invisible
      else if (opacity === 0) {
         Array.from(collageRef.current.children).forEach((child) => {
            child.style.zIndex = 0;
            child.style.pointerEvents = 'none';
         });
      }
   }, [opacity]);  // Trigger when opacity changes

   return (
      <div className="collage-container" ref={collageRef}>
         {imgs.map((img, index) => (
            <div className="collage-item" key={index}>
               <img src={img.src} alt={img.desc} className="collage-img"></img>
               <div className="description">{img.desc}</div>
            </div>
         ))}
      </div>
   );
}

export default Collage;
