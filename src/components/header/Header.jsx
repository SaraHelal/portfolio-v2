import  './header.css'
import HeaderImg from '../../img/header.png'

const Header = () => {
  return (
    <header id="header" className="header pt-32 ">
            <div className="contianer mx-auto px-16 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-20">
                    <div className="hidden lg:block col-span-2 relative">
                        <img src={HeaderImg} alt="" className="absolute top-32 lg:top-20 left-4 w-full" />
                    </div>
                    <div className="col-span-2 font-roboto z-50">
                    <h1 className="text-white text-3xl lg:text-5xl mb-2">Sara Helal</h1>
                        <span className="text-white text-base">Front-End Developer</span>
                        <dl className="my-8">
                            <dt className="text-white opacity-50 font-bold uppercase">Age: </dt> 
                            <dd className="text-base text-white ">30</dd>
                            <dt className="text-white opacity-50 font-bold uppercase">Phone:</dt> 
                            <dd className="text-base text-white"><a href="tel:+447539168959">(+44) 753-916-89-59</a></dd>
                            <dt className="text-white opacity-50 font-bold uppercase">Email:</dt>
                            <dd className="text-base text-white"><a href="mailto:s.helal91@gmail.com">s.helal91@gmail.com</a></dd> 
                            <dt className="text-white opacity-50 font-bold uppercase">Address: </dt>
                            <dd className="text-base text-white">London, UK</dd>
                        </dl>
                        <div>
                            <a href="https://github.com/SaraHelal" ><i className="fab fa-github fa-xl text-white opacity-40 hover:opacity-100 transition duration-150 ease-out hover:ease-in mr-2"></i></a>
                            <a href="https://www.linkedin.com/in/sara-helal-68151b89" ><i className="fab fa-linkedin fa-xl text-white opacity-40 hover:opacity-100 transition duration-150 ease-out hover:ease-in mr-2"></i></a>
                        </div>
                    </div>

                </div>
            
            </div>
        </header>
  )
}

export default Header