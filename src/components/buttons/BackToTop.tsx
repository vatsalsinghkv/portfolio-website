import React, { useState, useEffect, useCallback } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollThreshold = 300;
    const scrolled = window.scrollY > scrollThreshold;
    setIsVisible(scrolled);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const baseClass = 'back-to-top-upside';
  const visibleClass = 'link-is-visible';
  const buttonClass = isVisible ? `${baseClass} ${visibleClass}` : baseClass;

  return (
    <>
      <style>{`
        .back-to-top-upside {
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transform: translate3d(0, 200%, 0);
          transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
          position: fixed;
          bottom: 2.2rem; 
          right: 8rem; 
        }

        .back-to-top-upside a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border: none;
          height: 64px;
          width: 64px;
          border-radius: 50%;
          background-color: #fefeff; 
          transition: all .3s;
          position: relative;
          box-shadow: 0 0 10px rgba(0,0,0,0.1); 
        }

        .back-to-top-upside a:hover,
        .back-to-top-upside a:focus {
          background-color: #1f2937;
        }

        .back-to-top-upside a:hover svg path,
        .back-to-top-upside a:focus svg path {
          fill: white;
        }

        .back-to-top-upside svg {
          height: 12px;
          width: 12px;
        }

        .back-to-top-upside svg path {
          fill: #1f2937; /* Dark gray for icon */
          transition: fill .3s;
        }

        .back-to-top-upside.link-is-visible {
          opacity: 1;
          visibility: visible;
          transform: translate3d(0, 0, 0);
        }

        @media (max-width: 640px) {
            .back-to-top-upside {
                bottom: 3rem; 
                right: 1.5rem; 
            }
            .back-to-top-upside a {
                height: 52px;
                width: 52px;
            }
        }
      `}</style>

      <div id="back-to-top-upside" className={buttonClass}>
        <a href="#top" onClick={(e) => { e.preventDefault(); scrollToTop(); }} aria-label="Back to Top">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#0F0F0F" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default BackToTop;