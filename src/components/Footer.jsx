import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Footer = () => {
    const [offset, setOffset] = useState(0);
    const footerTitleRef = useRef(0)
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
  return (
    <>
        <footer id="contact" className="pb-16 md:p-16" ref ={footerTitleRef}>
            <div className="container">
            <h1 id="footer-title" className={`text-4xl font-roboto text-white pt-10 ${offset > (footerTitleRef.current.offsetTop - 300) && 'active'}`}>Get in touch_</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <dl className="my-8">
                        <dt className="text-white font-bold uppercase">Phone:</dt> 
                        <dd className="text-base text-white"><a href="tel:+905415673788">(+44) 753-916-89-59</a></dd>
                        <dt className="text-white font-bold uppercase">email:</dt>
                        <dd className="text-base text-white"><a href="mailto:s.helal91@gmail.com">s.helal91@gmail.com</a></dd> 
                    </dl>
                    <div>
                        <a href="https://github.com/SaraHelal" ><i className="fab fa-github fa-xl text-white opacity-40 hover:opacity-100 transition duration-150 ease-out hover:ease-in mr-4"></i></a>
                        <a href="https://www.linkedin.com/in/sara-helal-68151b89" ><i className="fab fa-linkedin fa-xl text-white opacity-40 hover:opacity-100 transition duration-150 ease-out hover:ease-in mr-4"></i></a>
                        
                    </div>
                </div>
                <div>
                    <h2 className="text-white  tracking-widest mb-6 font-roboto">Or just write me a letter here_</h2>
                    <form action="" method="">
                        <input type="text" name="name" placeholder="Your Name" id="" className="text-white border border-white rounded-md w-full placeholder:text-white p-3 font-roboto mb-4 focus:outline-none" /><br />
                        <input type="text" name="email" placeholder="Your E-mail" id="" className="text-white border border-white rounded-md w-full placeholder:text-white p-3 font-roboto mb-4 focus:outline-none" /><br />
                        <textarea name="message"  cols="30" rows="10" placeholder="Type Your Message Here" className=" text-white border border-white rounded-md w-full placeholder:text-white p-3 font-roboto mb-4 focus:outline-none"></textarea>
                        <button className="bg-teal-700 rounded-full text-white uppercase font-bold p-3 w-full shadow-lg" onSubmit={(e)=>{e.preventDefault()}}>Send</button>
                    </form>
                </div>
            </div>
            
            </div>
        </footer>

    </>
  )
}

export default Footer