import gsap from "gsap";
import '../styles/App.css';
import React, { useRef, useEffect } from 'react';
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

   useEffect(() => {
      const handleScroll = () => {
         const links = document.querySelectorAll(".project a")
         links.forEach((link) => {
            const opacity = getComputedStyle(link.closest(".section")).opacity;
            if (opacity > 0) {
               link.style.pointerEvents = "auto";
            }
            // when it's invisible
            else if (opacity === 0) {
               link.style.pointerEvents = "none";
            }
            //console.log(opacity, getComputedStyle(link).pointerEvents)
         });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   //https://open-course-test.vercel.app/
   return (
      <>
         <Navbar ref={navRef}></Navbar>
         <div className="container" ref={containerRef}>
            <section className="section section1">
               <div className="text-container">
                  <h1>check it out!</h1><br></br>
                  <p>Here you can learn about some of my favorite projects that i've worked on.
                     Hopefully you find them cool. If you're curious, this app uses client-side dynamic pages
                     using React.js. Animations were built using GSAP.</p>
               </div>
            </section>
            <section className="section section2">
               <div className="text-container project">
                  <h2>chinese checkers simulator</h2>
                  <div className="img-center"><img src="/checkers.png" alt="chinese checkers simulator screenshot"></img></div>
                  <p>Last year, I frequently played "Chinese checkers" using various online simulators. I found these simulators'
                     bots too easy to beat, so I challenged myself to write a more efficient algorithm. I programmed an A-star search
                     algorithm for an AI bot that outperforms both myself and other online bots. My app allows for browser play for up to 6 players or bots.
                     Inspired to delve deeper into AI algorithms, I later implemented AlphaZero for Othello, utilizing machine learning and a monte carlo
                     tree search. <a href="https://philipchurchley.github.io/chinese_checkers/" target="_blank" rel="noreferrer">Check it out!</a></p><br></br>
                  <p>Technologies used: javascript, react.js, css, html</p>
               </div>
            </section>
            <section className="section section3">
               <div className="text-container project">
                  <h2>open course</h2>
                  <div className="img-center"><img src="/opencourse.jpg" alt="open coures screenshot"></img></div>
                  <p>I'm working with VOID Tech to build a student platform that
                     allows students to post and join study groups and resources for popular courses using an AWS-hosted PostgreSQL database.
                     The original iteration of this project mostly utilized python flask, jinja2 html templates, and react.js.
                     We are currently reworking the frontend with Next.js and integrating Supabase for a more seamless experience.
                     This project has been a great experience in agile development, cross-functional teamwork, and full-stack engineering,
                     and I'm excited to see it come to life soon. <a href="https://void-tech-um.github.io/" target="_blank" rel="noreferrer">Check it out!</a></p><br></br>
                  <p>Technologies used: python flask, sql, react.js, next.js, supabase, amazon aws, jinja2</p>
               </div>
            </section>
            <section className="section section4">
               <div className="text-container project">
                  <h2>cereal corner</h2>
                  <div className="img-center"><img src="/corner.jpg" alt="open course screenshot"></img></div>
                  <p>The Cereal Corner website was created using html, css, and javascript. The "Create your own Cereal Order" generator
                     operates using ratings of 21 cereals based on the personal experience of 20 years eating cereal almost every day.
                     Each recommendation is generated using a greedy algorithm that selects cereals with the best value given the user's input.
                     When the "conserve my money" option is selected, the recommendations are generated using dynamic programming. The
                     algorithm used is similar to that of the 0-1 knapsack problem, with "weights" determined by each cereal's approximate
                     price per ounce. <a href="https://philipchurchley.github.io/cereal_corner/index.html" target="_blank" rel="noreferrer">Check it out!</a></p><br></br>
                  <p>Technologies used: html, css, javascript</p>
               </div>
            </section>
            <section className="section section5">
               <div className="text-container project">
                  <h2>wolverine sports analytics</h2>
                  <div className="img-center"><img src="/wsa.jpg" alt="graph of clubs' transfer reliance"></img></div>
                  <p>I worked with WSA to develop a model to analyze the impact of soccer transfers on Premier League teams using data from the past
                     five seasons. First we collected player statistics from fbref.com and transfermarkt.com using
                     BeautifulSoup, storing the data in MySQL. Then we computed player scores relative to
                     positional averages, aggregating them into team season scores to predict league standings. The model achieved
                     an average error of 2.18 places in the EPL table. Additionally, we ranked transfers based on performance vs.
                     cost and assessed clubs' efficiency in gaining squad value. <a href="https://www.wolverinesportsanalytics.com/projects/soccer-transfer-market" target="_blank" rel="noreferrer">Check it out!</a></p><br></br>
                  <p>Technologies used: python, mysql, beautifulsoup, pandas</p>
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

