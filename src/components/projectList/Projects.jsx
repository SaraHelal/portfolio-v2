import  './projectList.css'
import Project from './Project'
import data from '../../data/project-data.js'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function Projects() {
  const [offset, setOffset] = useState(0);
  const projectRef = useRef(0)
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
    const projectsDisplay = data.map((p, idx)=>
    <Project 
        key={p.id}
        id={p.id}
        title={p.title}
        desc={p.desc}
        imgUrl={p.imgUrl}
        skills={p.skills}
        githubUrl = {p.githubUrl}
        animation =  {p.animation}
        
     />)
  return (
    <div className='container' ref={projectRef} id="projectsSection">
      <h1 id="resume-title" 
                className={`text-4xl text-gray-600
                 my-12  text-left ${offset > (projectRef.current.offsetTop - 500) && 'active'}`}>Projects_</h1>
        <div className='projects  '>
            {projectsDisplay}        
        </div>

        
        
    </div>
  )
}

export default Projects