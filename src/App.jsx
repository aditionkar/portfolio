import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';  // Import react-scroll's Link component
import Hero from "./components/Hero/Hero";
import { RevealBento } from "./components/About/About";
import Projects from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { FaArrowUp } from 'react-icons/fa';

export default function App() {
  const [showButton, setShowButton] = useState(false);
  const [heroKey, setHeroKey] = useState(0); // Track key to refresh Hero component

  // Show or hide the button based on the scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Reset Hero component when scrolling to the top
  const resetHero = () => {
    setHeroKey(prevKey => prevKey + 1); // Increment key to force re-render
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      <div className="bg-zinc-900">
        {/* Pass the key to Hero to force a re-render */}
        <Hero key={heroKey} />

        <RevealBento />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <div className="fixed bottom-10 right-10">
          <Link to="hero" smooth duration={500} onClick={resetHero}>
            <button className="bg-zinc-900 border border-violet-500 text-white p-3 rounded-full shadow-md hover:bg-violet-300 transition-colors w-12 h-12 flex items-center justify-center">
            <FaArrowUp />
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
