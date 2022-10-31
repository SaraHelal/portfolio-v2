import './history.css'

const History = () => {
  return (
    <>
    <div>
        <div className="container">
            <h3 id="to-animate-progressbar" className="uppercase text-gray-400 font-semibold tracking-widest mb-12 font-roboto">Employment</h3>
            <div className="mb-16">
                <div className="pb-12 pl-6  border-l-2 border-teal-500 before:absolute before:w-3 before:h-3 before:top-0 before:content-[''] before:-left-1.5 before:rounded-full before:bg-white before:border-2 before:border-teal-500 relative">
                    <p className="text-base text-teal-500 font-bold uppercase font-roboto">Self Taught</p>
                    <span className="text-xs text-gray-400 mb-6 font-roboto">2020 -Now</span>
                    <p className="text-base font-semibold text-gray-600 capitalize">I have spent two years studying frontend technologies
                    and have done many projects working with frameworks like react and vue
                    (e.g. booking website, Ecommerce shopping site, todo list, admin dashboard)
                    </p>
                </div>

                <div className="pb-12 pl-6  border-l-2 border-teal-500 before:absolute before:w-3 before:h-3 before:top-0 before:content-[''] before:-left-1.5 before:rounded-full before:bg-white before:border-2 before:border-teal-500 relative">
                    <p className="text-base text-teal-500 font-bold uppercase font-roboto">Full-time mother</p>
                    <span className="text-xs text-gray-400 mb-6 font-roboto">2016-2020</span>
                    <p className="text-base font-semibold text-gray-600 capitalize ">I took a break those years because I had two beautiful kids
                    and they were my responsibility.
                    </p>
                </div>

                <div className="pb-12 pl-6  border-l-2 border-teal-500 before:absolute before:w-3 before:h-3 before:top-0 before:content-[''] before:-left-1.5 before:rounded-full before:bg-white before:border-2 before:border-teal-500 relative">
                    <p className="text-base text-teal-500 font-bold uppercase font-roboto">Smacrs Company</p>
                    <span className="text-xs text-gray-400 mb-6 font-roboto">2014-2016</span>
                    <p className="text-base font-semibold text-gray-600 capitalize ">I worked as a WordPress designer.
                    We set up many projects for the Egyptian government,
                    As well as women's and beauty blogging sites.My
                    Role was creating the frontend pages with html,css and php.</p>
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