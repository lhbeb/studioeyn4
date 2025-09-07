import React, { useEffect, useState } from "react";

const HERO_VIDEO_URL =
  "https://player.vimeo.com/video/1101869436?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";

const words = ["EYN", "EYE"];

const Hero: React.FC = () => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[wordIndex];
    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 220); // slower typing
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1800); // longer pause after typing
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 100); // slower deleting
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }, 700); // longer pause before next word
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section className="relative w-full bg-white overflow-hidden md:pt-40 md:pb-32">
      {/* Mobile: Precise viewport-optimized layout */}
      <div className="block md:hidden" style={{ 
        height: 'calc(100vh - 80px)', // Full viewport minus navbar height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '16px',
        paddingBottom: '16px'
      }}>
        {/* Top: Hero text */}
        <div className="container-custom flex-shrink-0">
          <h1 className="font-normal text-black leading-tight text-2xl uppercase tracking-tight animate-slide-up" style={{ fontWeight: 400, margin: 0 }}>
            <span
              className="inline-block text-black font-mono align-middle w-full whitespace-nowrap"
              style={{ minWidth: '3ch', display: 'block' }}
            >
              {displayed}&nbsp;
            </span>
            <span className="block w-full whitespace-nowrap">DON'T JUST</span>
            <span className="block w-full whitespace-nowrap">SEE BRANDS.</span>
            <span className="block w-full whitespace-nowrap">WE SHAPE THEM</span>
          </h1>
        </div>
        
        {/* Middle: Video - takes remaining space */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-sm aspect-video relative">
            <iframe
              src={HERO_VIDEO_URL}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="STUDIOEYN"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-lg"
              style={{ zIndex: 1 }}
            ></iframe>
          </div>
        </div>
        
        {/* Bottom: CTA button */}
        <div className="container-custom flex-shrink-0">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-md bg-black text-white text-sm font-normal shadow hover:bg-gray-900 transition-colors duration-200 animate-slide-up animation-delay-400 uppercase"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
      {/* Desktop: Side-by-side layout */}
      <div className="hidden md:flex container-custom flex-row items-stretch w-full h-full">
        {/* Left: Text with gradient overlay (heading only) */}
        <div className="relative z-10 flex-1 flex items-stretch bg-white order-1">
          <div className="w-full h-full bg-gradient-to-r from-white/95 to-white/0 rounded-xl flex flex-col justify-between">
            <h1 className="mt-8 mb-8 font-normal text-black leading-tight text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight animate-slide-up" style={{ fontWeight: 400 }}>
              <span
                className="inline-block text-black font-mono align-middle w-full whitespace-nowrap"
                style={{ minWidth: '3ch', display: 'block' }}
              >
                {displayed}&nbsp;
              </span>
              <span className="block w-full whitespace-nowrap">DON'T JUST</span>
              <span className="block w-full whitespace-nowrap">SEE BRANDS.</span>
              <span className="block w-full whitespace-nowrap">WE SHAPE THEM</span>
            </h1>
            <a
              href="#contact"
              className="mb-8 inline-flex self-start px-5 py-4 rounded-md bg-black text-white text-lg font-normal shadow hover:bg-gray-900 transition-colors duration-200 animate-slide-up animation-delay-400 uppercase"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
        {/* Right: Vimeo video */}
        <div className="flex-1 relative bg-white order-2">
          <div className="w-full aspect-video min-h-[300px] h-auto block relative">
            <iframe
              src={HERO_VIDEO_URL}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="STUDIOEYN"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ zIndex: 1 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;