import './history.css'

const History = () => {
  return (
    <>
    <div>
        <div className="container">
            <h3 id="to-animate-progressbar" className="uppercase text-gray-400 font-semibold tracking-widest mb-12 font-roboto">Employment</h3>
            <div className="mb-16">
                <div className="pb-12 pl-6  border-l-2 border-teal-500 before:absolute before:w-3 before:h-3 before:top-0 before:content-[''] before:-left-1.5 before:rounded-full before:bg-white before:border-2 before:border-teal-500 relative">
                    <p className="text-base text-teal-500 font-bold uppercase font-roboto">Freelancer</p>
                    <span className="text-xs text-gray-400 mb-6 font-roboto">2020 -Now</span>
                    <p className="text-base font-semibold text-gray-600 capitalize">Front-End Developer</p>
                </div>
                <div className="pb-12 pl-6  border-l-2 border-teal-500 before:absolute before:w-3 before:h-3 before:top-0 before:content-[''] before:-left-1.5 before:rounded-full before:bg-white before:border-2 before:border-teal-500 relative">
                    <p className="text-base text-teal-500 font-bold uppercase font-roboto">Smacrs Company</p>
                    <span className="text-xs text-gray-400 mb-6 font-roboto">2014-2016</span>
                    <p className="text-base font-semibold text-gray-600 capitalize ">Wordpress developer</p>
                </div>
            </div>

        </div>
    </div>
   <div>
        <div className="container">
            <h3 className="uppercase text-gray-400 font-semibold tracking-widest mb-12 font-roboto">Education</h3>
            <div className="mb-16">
                <div className="pb-12 pl-6  border-l-2 border-teal-500 before:absolute before:w-3 before:h-3 before:top-0 before:content-[''] before:-left-2 before:rounded-full before:bg-white before:border-2 before:border-teal-500 relative">
                    <p className="text-base text-teal-500 font-bold uppercase font-roboto">Engineering Faculty - Mansoura University</p>
                    <span className="text-xs text-gray-400 mb-6 font-roboto">2008-2013</span>
                    <p className="text-base font-semibold text-gray-600 capitalize">Computer and control systems </p>
                </div>
                <div className="pb-12 pl-6  border-l-2 border-teal-500 before:absolute before:w-3 before:h-3 before:top-1 before:content-[''] before:-left-1.5 before:rounded-full before:bg-white before:border-2 before:border-teal-500 relative">
                    <p className="text-base text-teal-500 font-bold uppercase font-roboto">Information Technology Institute (ITI)</p>
                    <span className="text-xs text-gray-400 mb-6 font-roboto">2013-2014</span>
                    <p className="text-base font-semibold text-gray-600 capitalize">Professional Development</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default History