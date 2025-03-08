import gsap from "gsap";
import './App.css';
// import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


function App() {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(0);  // Start with opacity 0
  const [played, setPlayed] = useState(false);  // Start with opacity 0

  useGSAP(() => {
    // GSAP animation setup
    gsap.set(".section", { opacity: 0, y: 100 }); // Set initial state for all sections
    gsap.set(".section1", { opacity: 1, y: 0 }); // Section 1 starts "in"
    gsap.set(".container", { backgroundColor: "lightblue" })


    // Timeline for animating the sections and background color
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".container", // The element that will trigger the scroll
        start: "top top", // When the top of the container reaches the top of the viewport
        end: "+=500%", // Stretch the scroll area to 5 sections (100vh * 5)
        scrub: 1, // Sync the animation to the scroll position
        pin: true, // Keeps the container pinned while the animation plays
        snap: {
          snapTo: (progress) => Math.round(progress * (5 - 1)) / (5 - 1),
          duration: 1,
          delay: 0,
          ease: "power2.out",
        }
      },
    });

    // Section 1 enters, then section 1 exits and section 2 enters, etc.
    timeline
      .to(".section1", { opacity: 0, y: -100, duration: 1, ease: "power3.in" }) // Animate Section 1 out
      .to(".container", { backgroundColor: "lightcoral", duration: 1, ease: "power3.out" }) // Animate container background color
      .to(".section2", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }) // Animate Section 2 in
      .to(".section2", { opacity: 0, y: -100, duration: 1, ease: "power3.in" }) // Animate Section 2 out
      .to(".container", { backgroundColor: "lightgreen", duration: 1, ease: "power3.out" }) // Animate container background color
      .to(".section3", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }) // Animate Section 3 in
      .to(".section3", { opacity: 0, y: -100, duration: 1, ease: "power3.in" }) // Animate Section 3 out
      .to(".container", { backgroundColor: "black", duration: 1, ease: "power3.out" }) // Animate container background color
      .to(".section4", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }) // Animate Section 4 in
      .to(".section4", { opacity: 0, y: -100, duration: 1, ease: "power3.in" }) // Animate Section 4 out
      .to(".container", { backgroundColor: "lightpink", duration: 1, ease: "power3.out" }) // Animate container background color
      .to(".section5", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }) // Animate Section 5 in
  }, []);

  useEffect(() => {
    const container = videoContainerRef.current;

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
  }, []);

  useEffect(() => {
    // Play video when opacity becomes 1
    if (opacity === 1) {
      if (videoRef.current && played) {
        videoRef.current.play();
      }
    }
    // Pause video when opacity becomes 0
    else if (opacity === 0) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [opacity, played]);  // Trigger when opacity changes

  return (
    <div className="container" ref={containerRef}>
      <section className="section section1"><h1>hi, i'm philip</h1></section>
      <section className="section section2"><h2>i'm a developer</h2></section>
      <section className="section section3"><h2>check this out<br></br>&darr;</h2></section>
      <section className="section section4" ref={videoContainerRef}>
        <video width="70%" ref={videoRef}>
          <source src="/goproph1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button id="play" onClick={() => {
          console.log("playing");
          videoRef.current.play();
          setPlayed(true);
          document.getElementById('play').style.display = "none";
        }}>play</button>
      </section>
      <section className="section section5"><p>feel free to explore my site :)</p></section>
    </div>
  );
}

export default App;
