import React from "react";
import styles from "./bubble.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Hero() {

  const hasMounted = useRef(false); 

  useEffect(() => {
    if (!hasMounted.current) {
      console.log('Hero component is refreshed!');
      hasMounted.current = true;  // Mark the component as mounted
    }
  }, []);

  return (
    <>
      <section id="hero"  className=" hero-section w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto h-screen mb-40 md:mb-0">
        <div>
          <motion.span
            className="block mb-4 text-xs md:text-base text-violet-500 font-medium "
            initial={{ x: "-100%", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "spring", stiffness: 50, delay: 0 }}
          >
            Hey there, I'm
          </motion.span>

          
          <motion.div
            className="text-4xl md:text-6xl font-semibold text-white bg-zinc-900"
            initial={{ x: "-100%", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
          >
            <BubbleText />
          </motion.div>

          
          <motion.p
            className="text-lg md:text-xl mb-6 text-slate-400 mt-4"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "spring", stiffness: 50, delay: 1 }}
          >
            <span className="inline-flex items-center">
              <span className="hover:scale-95 transition ease-in-out duration-300">
                Full Stack Developer
              </span>
              <span className="mx-2">•</span>
              <span className="hover:scale-95 transition ease-in-out duration-300">
                AIML Enthusiast
              </span>
            </span>
          </motion.p>

          
          <motion.div
            className="links"
            initial={{ y: "100%", opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ type: "spring", stiffness: 50, delay: 1.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="social-button">
                <a
                  href="https://github.com/aditionkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:fill-violet-500 fill-white duration-300"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </a>
              </div>

              <div className="social-button">
                <a
                  href="https://www.linkedin.com/in/aditionkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative w-12 h-12 rounded-full group">
                    <div className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                    <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="group-hover:fill-violet-500 fill-white duration-300"
                          d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ y: "100%", opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ type: "spring", stiffness: 50, delay: 2 }}
          >
            <button className="group group-hover:before:duration-500 mt-6 group-hover:after:duration-500 after:duration-500 hover:border-violet-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-violet-300 relative bg-neutral-700 h-16 w-64 border text-left p-3 text-gray-50 font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg text-base">
              Download Resume
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <ShuffleGrid />
        </motion.div>
      </section>
    </>
  );
}

const BubbleText = () => {
  return (
    <h2 className=" text-5xl font-medium text-indigo-300">
      {"Aditi Onkar".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/hero1.jpg",
  },
  {
    id: 2,
    src: "/images/hero2.jpg",
  },
  {
    id: 3,
    src: "/images/hero3.jpg",
  },
  {
    id: 4,
    src: "/images/hero4.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 2000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-1 ">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;
