import  './navbar.css'
import { useState , useRef , useEffect } from 'react';
const Navbar = () => {
    const [offset, setOffset] = useState(0)
    const menuRef = useRef()
    const [isOpen , setIsOpen] = useState(false)
    useEffect(()=>{
        const onScroll = ()=> setOffset(window.pageYOffset)
        window.removeEventListener('scroll' , onScroll)
        window.addEventListener('scroll' , onScroll , {passive: true})
        return ()=>window.removeEventListener('scroll' , onScroll)
    },)
  return (
        <div className={`menu ${offset > 50 && 'active'}`} ref={menuRef} >
            <div className="container ">
                <nav className='flex items-center justify-between flex-wrap py-4'>
                
                    <div className="block lg:hidden">
                    <button 
                    data-collapse-toggle="mobile-menu" type="button"
                    aria-controls="mobile-menu" aria-expanded="false"
                    
                    className={`flex items-center px-3 py-2 border 
                    rounded text-teal-200 border-teal-400 
                    hover:text-white hover:border-white
                    focus:outline-none focus:ring-2 focus:ring-gray-200
                    `} onClick={()=>{setIsOpen(old=> !old)}}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                    </div>
                    <div
                     id="mobile-menu"
                     className={`w-full ${ isOpen ? 'openMenu' : 'hidden'} flex-grow lg:flex lg:items-center lg:w-auto`}>
                        <div id="nav-list" className="text-base lg:flex-grow  uppercase  font-semibold mt-1">
                            <a href="#header" className="block mt-8 lg:inline-block lg:mt-0  hover:text-teal-400 mr-10">
                            Hello
                            </a>
                            <a href="#to-resume" className="block mt-8 lg:inline-block lg:mt-0  hover:text-teal-400 mr-10">
                            Resume
                            </a>
                            <a href="#projectsSection" className="block mt-8 lg:inline-block lg:mt-0  hover:text-teal-400  mr-10">
                            Projects
                            </a>
                            <a href="#contact" className="block mt-8 lg:inline-block lg:mt-0  hover:text-teal-400">
                            Contact
                            </a>
                        </div>
                    <div>
                    </div>
                    </div>
                </nav>
            </div>
        </div>


  )
}

export default Navbar