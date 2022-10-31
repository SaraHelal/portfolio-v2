import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import pdf from '../assets/frontend-cv.pdf'
 

const Intro = () => {
  const [offset, setOffset] = useState(0);
  const helloRef = useRef(0)
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
    <section id="hello" className="hello" ref={helloRef}>
        <div className="container">
            <h1 id="hello-title" className={`text-4xl text-gray-600
                 my-12  text-left ${offset > (helloRef.current.offsetTop - 500) && 'active'}`}>Hello_</h1>
            <p className="text-base text-gray-500 font-roboto w-3/4 pb-6">
                Hi, I’m Sara Helal, a front-end developer 
                focused on creating beautiful
                and user friendly applications while writing clean code.

            </p>
            <div className="flex justify-center items-center py-3 w-48 bg-pink-500 text-white text-sm font-semibold hover:bg-teal-400 uppercase rounded-full mb-8">
              <a href={pdf} id="to-resume" target='_blank' rel="noreferrer" download='sara_cv.pdf' >
                Download CV
              </a>
              <FontAwesomeIcon icon ={faDownload} className="ml-2"/>
            </div>
        </div>
    </section>
    <hr className="border-t border-dotted my-8 " />
    </>
  )
}

export default Intro