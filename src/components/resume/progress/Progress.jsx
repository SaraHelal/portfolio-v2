import  './progress.css'
import skills from '../../../data/skills'
const Progress = () => {
  return (
    <div id="general-skills">
        <div className="container">
            <h3 className="uppercase text-gray-400 font-semibold tracking-widest mb-12 font-roboto">General Skills</h3>
            <div className="mb-24 w-1/2 ">
                <div className="flex flex-wrap justify-start">
                    {
                        skills.map((skill ,idx) =>
                            (
                            <p 
                            className="text-xs font-roboto
                             text-gray-600 uppercase 
                             font-bold w-fit p-5 border border-1 border-gray-500 mr-2 mb-2 shadow-lg"
                              key={idx}> 
                            {skill}
                            </p>
                        ))
                    }
                        
                        
                        
                </div>
                   {/* <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">CSS3</span>
                            <span className="text-xs font-roboto text-gray-600">80%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-80 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">JavaScript</span>
                            <span className="text-xs font-roboto text-gray-600">75%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-75 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">JQuery</span>
                            <span className="text-xs font-roboto text-gray-600">68%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-68 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">Vue.Js</span>
                            <span className="text-xs font-roboto text-gray-600">65%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-65 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">React.Js</span>
                            <span className="text-xs font-roboto text-gray-600">65%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-65 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">Bootstrap</span>
                            <span className="text-xs font-roboto text-gray-600">80%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-80 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">Tailwind</span>
                            <span className="text-xs font-roboto text-gray-600">70%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-70 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">Php</span>
                            <span className="text-xs font-roboto text-gray-600">83%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-83 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">Mysql</span>
                            <span className="text-xs font-roboto text-gray-600">70%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-70 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">GIT</span>
                            <span className="text-xs font-roboto text-gray-600">60%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-60 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    <div className="">
                        <p className="flex justify-between items-center mb-2"> 
                            <span className="text-xs font-roboto text-gray-600 uppercase">Wordpress</span>
                            <span className="text-xs font-roboto text-gray-600">70%</span>
                        </p>
                        <div className="progress bg-gray-300 rounded-xl">
                            <div className="progress-60 w-0 h-2 bg-teal-500 rounded-xl"></div>
                        </div>
                    </div>
                    
  </div> */}
                
            </div>
        </div> 
    </div>
  )
}

export default Progress