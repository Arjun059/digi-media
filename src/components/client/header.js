"use client"

import {useState, useEffect} from "react";
import PreHeader from "../server/preheader";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Home")




    function showHideMenu() {
      
            setShowMenu((state) => {
                return !state
            })

    }

    function handleMenuClick(type) {
        setActiveMenu(type)
        showHideMenu()
    }

    return (
        <>        
            <PreHeader></PreHeader>
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s" >
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
                        <li className="scroll-to-section" onClick={() => handleMenuClick("Home")}><a href="#top" className={activeMenu == "Home" ? "active" : ""}>Home</a></li>
                        <li className="scroll-to-section" onClick={() => handleMenuClick("About")}><a href="#about" className={activeMenu == "About" ? "active" : ""}>About</a></li>
                        <li className="scroll-to-section" onClick={() => handleMenuClick("Services")}><a href="#services" className={activeMenu == "Services" ? "active" : ""}>Services</a></li>
                        <li className="scroll-to-section" onClick={() => handleMenuClick("Projects")}><a href="#portfolio" className={activeMenu == "Projects" ? "active" : ""}>Projects</a></li>
                        <li className="scroll-to-section" onClick={() => handleMenuClick("Blog")}><a href="#blog" className={activeMenu == "Home" ? "Blog" : ""}>Blog</a></li>
                        <li className="scroll-to-section" onClick={() => handleMenuClick("Contact")}><a href="#contact" className={activeMenu == "Contact" ? "active" : ""}>Contact</a></li> 
                        <li className="scroll-to-section" onClick={() => handleMenuClick("Quote")}><div className="border-first-button"><a href="#contact" className={activeMenu == "Quote" ? "active" : ""}>Free Quote</a></div></li> 
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


