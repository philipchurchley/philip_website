import gsap from "gsap";
import '../styles/App.css';
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './Navbar';
import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger)

function Projects() {
   const containerRef = useRef(null);
   const navRef = useRef(null);

   useGSAP(() => {
      // GSAP animation setup
      gsap.set(".section1", { opacity: 1, y: 0, x: 0 }); // Section 1 starts "in"
      gsap.set(".section2", { opacity: 0, y: 0, x: 0, scale: 2 }); // Section 2 starts on middle
      gsap.set(".section3", { opacity: 0, x: 100, y: 0 }); // Section 3 starts on right
      gsap.set(".section4", { opacity: 0, x: -100, y: 0 }); // Section 4 starts on left
      gsap.set(".section5", { opacity: 0, y: 0, x: 0, scale: 0.2 }); //Section 5 starts on middle
      gsap.set(".section6", { opacity: 0, y: 100, x: 0 }); //Section 6 starts on top

      gsap.set(".container", { backgroundColor: "lightblue" })

      const totalSections = 6; // Number of sections
      const sectionHeight = window.innerHeight; // Full viewport height per section

      // Timeline for animating the sections and background color
      const timeline = gsap.timeline({
         scrollTrigger: {
            trigger: ".container", // The element that will trigger the scroll
            start: "top top", // When the top of the container reaches the top of the viewport
            end: `+=${totalSections * sectionHeight}`, // Stretch the scroll area to 6 sections (100vh * 6)
            scrub: 1, // Sync the animation to the scroll position
            pin: true, // Keeps the container pinned while the animation plays
            snap: {
               snapTo: (progress) => {
                  const segment = 1 / (totalSections - 1); // Define snapping points

                  // Find the nearest section that aligns with a section being fully visible
                  return Math.round(progress / segment) * segment;
               },
               duration: 0.5,
               delay: 0,
               ease: "power2.out",
            }
         },
      });

      // Section 1 enters, then section 1 exits and section 2 enters, etc.
      timeline
         .to(".section1", { opacity: 0, scale: 0.2, duration: 1, ease: "power3.in" }) // Animate Section 1 out small
         .to(".container", { backgroundColor: "#e5f6df", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section2", { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }) // Animate Section 2 in big
         .to(".section2", { opacity: 0, x: -100, duration: 1, ease: "power3.in" }) // Animate Section 2 out left
         .to(".container", { backgroundColor: "#FFFFC5", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section3", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }) // Animate Section 3 in left
         .to(".section3", { opacity: 0, x: 100, duration: 1, ease: "power3.in" }) // Animate Section 3 out right
         .to(".container", { backgroundColor: "#e8bcf0", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section4", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }) // Animate Section 4 in right
         .to(".section4", { opacity: 0, scale: 2, duration: 1, ease: "power3.in" }) // Animate Section 4 out
         .to(".container", { backgroundColor: "lightcoral", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section5", { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }) // Animate Section 5 in
         .to(".section5", { opacity: 0, y: -100, duration: 1, ease: "power3.in" }) // Animate Section 5 out
         .to(".container", { backgroundColor: "lightpink", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section6", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }) // Animate Section 6 in
   }, []);

   return (
      <>
         <Navbar ref={navRef}></Navbar>
         <div className="container" ref={containerRef}>
            <section className="section section1">
               <div className="text-container">
                  <h1>check it out!</h1><br></br>
                  <p>Here you can learn about some of my favorite projects that i've worked on.
                     Hopefully you find them cool.</p>
               </div>
            </section>
            <section className="section section2">
               <div className="text-container">
                  <h2>chinese checkers simulator</h2><br></br>
                  <p>Welcome to my website! I'm currently a student studying computer science at the University of Michigan and an
                     incoming SWE intern at Microsoft. I'm originally from the Bay Area, California. I love soccer, food, movies, legos,
                     cereal, and going on fun adventures.  </p>
               </div>
            </section>
            <section className="section section3">
               <div className="text-container">
                  <h2>open course</h2><br></br>
                  <p>Welcome to my website! I'm currently a student studying computer science at the University of Michigan and an
                     incoming SWE intern at Microsoft. I'm originally from the Bay Area, California. I love soccer, food, movies, legos,
                     cereal, and going on fun adventures.  </p>
               </div>
            </section>
            <section className="section section4">
               <div className="text-container">
                  <h2>cereal corner</h2><br></br>
                  <p>Welcome to my website! I'm currently a student studying computer science at the University of Michigan and an
                     incoming SWE intern at Microsoft. I'm originally from the Bay Area, California. I love soccer, food, movies, legos,
                     cereal, and going on fun adventures.  </p>
               </div>
            </section>
            <section className="section section5">
               <div className="text-container">
                  <h2>wolverine sports analytics</h2><br></br>
                  <p>Welcome to my website! I'm currently a student studying computer science at the University of Michigan and an
                     incoming SWE intern at Microsoft. I'm originally from the Bay Area, California. I love soccer, food, movies, legos,
                     cereal, and going on fun adventures.  </p>
               </div>
            </section>
            <section className="section section6 footer-section">
               <p className="happy">and more to come... :)</p>
               <Footer></Footer>
            </section>
         </div>
      </>
   );
}

export default Projects;

