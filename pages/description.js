import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'

export default function Description() {

  useEffect(() => {
    // Intersection Observer for parallelogram-one
    const observerOne = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles['parallelogram-one']); } 
        // } else {
        //   entry.target.classList.remove(styles['parallelogram-one']);
        // }
      });
    });
  
    const hiddenElementsOne = document.querySelectorAll(`.${styles['disappear-parallelogram-one']}`);
    hiddenElementsOne.forEach((el) => observerOne.observe(el));
  
    // Intersection Observer for parallelogram-two
    const observerTwo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles['parallelogram-two']); }
        // } else {
        //   entry.target.classList.remove(styles['parallelogram-two']);
        // }
      });
    });
  
    const hiddenElementsTwo = document.querySelectorAll(`.${styles['disappear-parallelogram-two']}`);
    hiddenElementsTwo.forEach((el) => observerTwo.observe(el));
  
    // Intersection Observer for parallelogram-three
    const observerThree = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles['parallelogram-three']); }
        // } else {
        //   entry.target.classList.remove(styles['parallelogram-three']);
        // }
      });
    });
  
    const hiddenElementsThree = document.querySelectorAll(`.${styles['disappear-parallelogram-three']}`);
    hiddenElementsThree.forEach((el) => observerThree.observe(el));
  
  }, []);
  

  return (
    <div className="relative bg-bgGray w-screen h-screen overflow-y-scroll overflow-x-hidden">
      {/* Video */}
      <div className={`${styles.videoWrapper} fixed top-0 left-0 w-full h-full z-0 pointer-events-none`}>
        <video
          src={require("/video.mp4")}
          autoPlay
          muted
          loop
          className={`${styles.video} object-cover w-full h-full`}
        />
      </div>

      <div className="flex flex-col items-center h-max justify-center w-screen relative z-10">
        {/* Top section */}
        <div className={`${styles['top']}`}>
          <div className="bg-black rounded-lg p-8 flex center justify-center items-center mb-20 mt-20 border-solid">
            {/* Picture */}
            <div className="w-56 h-32 rounded-full bg-white mr-8 flex justify-center items-center">
              <Image src = {require("/my_picture.png")} alt = "Personal Picture" className="w-32 h-32 rounded-full p-1" />
            </div>
            {/* Text */}
            <div>
              <h2 className="text-xl font-bold mb-2">Hello and welcome to my page!</h2>
              <div className="text-gray-100">
                <h1 className="mb-4 font-bold">
                  Ambitious, Determined and Focused. This is my mentality. This is me! 
                </h1>
                <h1 className="mb-4">
                  My name is Iobaj Andrei Sebastian, currently a student, in the 3rd year, English Computer Science Department, Faculty of Automatics and Computers, Technical University of Cluj-Napoca.
                </h1>
                <h1 className="mb-4">
                  Persuing excelence at every given opportunity, striving for innovation in my search for knowledge and embracing challenges head-on are my desires for personal growth. Scroll below if you want to learn more about myself and what I do.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href={'/'} className="bg-transparent -mt-16 mb-8" >
              <button className={`bg-white p-2 px-4 rounded-lg mb-4`}>
                Return
              </button>
          </Link>
        </div>

        {/* Parallelograms */} 
          <div className={`bg-black transform -skew-x-6 h-72 mb-48 mt-24 border-solid border-white border-x-2 border-y-2 ${styles['disappear-parallelogram-one']}`} style={{ width: '650px', marginRight: '650px' }}>
            <br></br>
            <h1 className="transform skew-x-12 text-5xl mt-0 mb-4 ml-2 mr-2 animate-none"> &nbsp;Motivation: </h1>
            <h2 className="transform skew-x-12 mt-1 mb-0 ml-2 mr-2 animate-none"> &nbsp;&nbsp; Studying computers, building hardware components and designing programs or systems, was the path I wanted to walk on in life, ever since, as a kid, I discovered the power this technology does hold. Knowledge above all else. </h2>
            <br></br>
            <h2 className="transform skew-x-12 mt-1 mb-0 ml-2 mr-2 animate-none">&nbsp;&nbsp; Now that I am presently learning the intricate details of how computers and large systems operate, I could not be happier being surrounded by what I enjoy most. Logic and Science!</h2>
          </div>
          <div className={`bg-black transform skew-x-6 h-72 mb-48 border-solid border-white border-x-2 border-y-2 ${styles['disappear-parallelogram-two']}`} style={{ width: '650px', marginLeft: '650px' }}>
            <br></br>
            <h1 className="transform text-5xl mt-0 mb-4 ml-2 mr-2 animate-none" style={{ transform: 'skewX(-26deg)' }}> &nbsp;Domains of Study & Passion: </h1>
            <h2 className="transform skew-x-12 mt-1 mb-0 ml-4 mr-4 animate-none" style={{ transform: 'skewX(-26deg)' }}> &nbsp;&nbsp; Throughout the years, I was able to come into contact with a lot new technologies and concepts. The ones that I found to be the most interesting are: 
              <ul className="ml-16" style={{ listStyleType: 'disc' }}>
                <li>The subject of AI and problem modelling</li>
                <li>Hardware Systems design and implementation</li>
                <li>Software programs development for complex problem solving</li>
              </ul>
            </h2>
            <h2 className="transform skew-x-12 mt-1 mb-0 ml-4 mr-4 animate-none" style={{ transform: 'skewX(-26deg)' }}> &nbsp;&nbsp; I am now confident that, in my future carrer, at least one of the above topics is my domain of choice and I can firmly state that I will give my all to achieve my dreams!</h2>
          </div>
          <div className={`bg-black transform -skew-x-6 h-72 mb-28 border-solid border-white border-x-2 border-y-2 ${styles['disappear-parallelogram-three']}`} style={{ width: '650px', marginRight: '650px' }}>
            <br></br>
            <h1 className="transform skew-x-12 text-5xl mt-0 mb-4 ml-2 mr-2 animate-none"> &nbsp;Projects: </h1>
            <h2 className="transform skew-x-12 mt-1 mb-0 ml-2 mr-2 animate-none"> &nbsp;&nbsp; Most of my projects can be found on my <Link href={'https://github.com/DelGha'} className="font-bold">Github</Link>. Some of my most interesting and challenging projects so far are: </h2>
            <ul className="ml-16" style={{ listStyleType: 'disc' }}>
                <li>Robotic Arm using Arduino</li>
                <li>Among Us Simulator using FOL</li>
                <li>This presentation and the E-Commerce sites using React</li>
              </ul>
              <h2 className="transform skew-x-12 mt-1 mb-0 ml-2 mr-2 animate-none"> &nbsp;&nbsp; The desire of achieving something staggering through my work and project has never been stronger. I want to create something that both me and others are proud of. I want my work to speak for me! To be me!</h2>
          </div>
      </div>
    </div>
  );
}
