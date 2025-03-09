import gsap from "gsap";
import '../App.css';
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './Navbar';
import Footer from './Footer'
gsap.registerPlugin(ScrollTrigger)

function About() {
   const containerRef = useRef(null);
   const navRef = useRef(null);

   useGSAP(() => {
      // GSAP animation setup
      gsap.set(".section1", { opacity: 1, y: 0, x: 0 }); // Section 1 starts "in"
      gsap.set(".section2", { opacity: 0, y: 0, x: 0, scale: 2 }); // Section 2 starts on middle
      gsap.set(".section3", { opacity: 0, x: 100, y: 0 }); // Section 3 starts on right
      gsap.set(".section4", { opacity: 0, x: -100, y: 0 }); // Section 4 starts on left
      gsap.set(".section5", { opacity: 0, y: 100, x: 0 }); //Section 5 starts on top

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
         .to(".section1", { opacity: 0, scale: 0.2, duration: 1, ease: "power3.in" }) // Animate Section 1 out small
         .to(".container", { backgroundColor: "lightcoral", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section2", { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }) // Animate Section 2 in big
         .to(".section2", { opacity: 0, x: -100, duration: 1, ease: "power3.in" }) // Animate Section 2 out left
         .to(".container", { backgroundColor: "lightgreen", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section3", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }) // Animate Section 3 in left
         .to(".section3", { opacity: 0, x: 100, duration: 1, ease: "power3.in" }) // Animate Section 3 out right
         .to(".container", { backgroundColor: "#e8bcf0", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section4", { opacity: 1, x: 0, duration: 1, ease: "power3.out" }) // Animate Section 4 in right
         .to(".section4", { opacity: 0, y: -100, duration: 1, ease: "power3.in" }) // Animate Section 4 out
         .to(".container", { backgroundColor: "lightpink", duration: 1, ease: "power3.out" }) // Animate container background color
         .to(".section5", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }) // Animate Section 5 in
   }, []);

   return (
      <>
         <Navbar ref={navRef}></Navbar>
         <div className="container" ref={containerRef}>
            <section className="section section1">
               <div className="text-container">
                  <h1>hi, i'm philip.</h1><br></br>
                  <p>Welcome to my website! I'm currently a student studying computer science at the University of Michigan and an
                     incoming SWE intern at Microsoft. I'm originally from the Bay Area, California. I love soccer, food, movies, legos,
                     cereal, and going on fun adventures.  </p>
               </div>
            </section>
            <section className="section section2">
               <div className="text-container">
                  <h2>i'm a developer.</h2><br></br>
                  <div className="list-container">
                     <div className="list">
                        <p className="list-title">My favorite Languages/Frameworks</p>
                        <ul>
                           <li>JavaScript</li>
                           <li>Python</li>
                           <li>C/C++</li>
                           <li>SQL</li>
                           <li>Java</li>
                           <li>Next.js</li>
                           <li>React.js</li>
                        </ul>
                     </div>

                     <div className="list">
                        <p className="list-title">Cool courses I've taken at UMich</p>
                        <ul>
                           <li>EECS270 - logic design</li>
                           <li>EECS281 - DSA</li>
                           <li>EECS370 - comp architecture</li>
                           <li>EECS376 - cs foundations</li>
                           <li>EECS482 - operating systems</li>
                           <li>EECS485 - web systems</li>
                           <li>EECS492 - artificial intelligence</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
            <section className="section section3">
               <div className="text-container">
                  <h2>this is me</h2><br></br>
                  <p>stuff about me</p>
               </div>
            </section>
            <section className="section section4">
               <div className="text-container">
                  <h2>i like to travel</h2><br></br>
                  <p>stuff about travel</p>
               </div>
            </section>
            <section className="section section5">
               <p className="happy">thanks for stopping by :)</p>
               <Footer></Footer>
            </section>
         </div>
      </>
   );
}

export default About;

