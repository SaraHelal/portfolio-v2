import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGithubAlt, faGithubSquare, faGitSquare  } from "@fortawesome/free-brands-svg-icons"


const Project = ({title,desc,imgUrl,skills , githubUrl}) => {
    const skillsDisplay = skills &&skills.map((skill,index)=>(
        <span className="shadow-lg border border-gray-300  px-2 mr-2 py-1 inline-block mb-2  text-gray-700" key={index} >{skill}</span>

    ))
  return (
    <div className='project border border-gray-200 hover:shadow-xl'>
    <div className='tab'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
    </div>
    <div className='project-details'>
        <div className="projectImg h-1/3">
            <img src={imgUrl} alt="project-img" />

        </div>
        <div className=" p-10 h-1/3">
                <h2 className="text-lg uppercase text-gray-700 font-semibold tracking-widest mb-2">{title}</h2>
                <p className="text-base text-gray-600">{desc}
                </p>
        </div>
        <div className="px-10 pb-10 h-1/3">
                <h3 className="uppercase text-gray-700 text-sm font-semibold pb-6 ">Used stacks: </h3>
                <div className="pb-5">
                    {skillsDisplay}
                </div>
         </div>
         <a href={githubUrl} target="_blank" className="github text-lg text-right " rel="noreferrer">
           <FontAwesomeIcon icon={faGithub} size="lg" />
         </a>
    </div>
</div>
  )
}

export default Project