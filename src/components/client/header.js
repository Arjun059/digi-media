"use client"

import {useState, useEffect} from "react";
import PreHeader from "../server/preheader";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function showHideMenu() {
      
            setShowMenu((state) => {
                return !state
            })

    }

    return (
        <>        
            <PreHeader></PreHeader>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" className="logo">
                        <img src="/images/logo-v1.png" alt="" />
                    </a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul 
                        className="nav"
                    style={showMenu ? {display: "block"} : {}}  
                    >
                        <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                        <li className="scroll-to-section"><a href="#about">About</a></li>
                        <li className="scroll-to-section"><a href="#services">Services</a></li>
                        <li className="scroll-to-section"><a href="#portfolio">Projects</a></li>
                        <li className="scroll-to-section"><a href="#blog">Blog</a></li>
                        <li className="scroll-to-section"><a href="#contact">Contact</a></li> 
                        <li className="scroll-to-section"><div className="border-first-button"><a href="#contact">Free Quote</a></div></li> 
                    </ul>        
                    <a 
                     className='menu-trigger'
                     onClick={showHideMenu} 
                    >
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
                </div>
            </div>
            </header>
        </>

    )
}


