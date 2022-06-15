import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import History from './history/History'
import Progress from './progress/Progress'
import  './resume.css'

const Resume = () => {
  const [offset, setOffset] = useState(0);
  const resumeRef = useRef(0)
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
        <section id="resume" className="mb-20" ref={resumeRef}>
            <div className="container">
                <h1 id="resume-title" 
                className={`text-4xl text-gray-600
                 my-8 w-44 text-left ${offset > (resumeRef.current.offsetTop - 500) && 'active'}`}>Resume_</h1>
            </div>
        </section>
        <History />
        <Progress />
    </>
    
  )
}

export default Resume