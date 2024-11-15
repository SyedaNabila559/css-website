"use client"
import Link from "next/link";
import "./header.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";





const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <header className="header">
            <div className="logo">
                <h1>ChocoNuts</h1>
            </div>
            <button className="toggle-button" onClick={toggleMenu}>
            <GiHamburgerMenu />
      </button>


            <nav>
            <ul className={`navList ${isOpen ? "open" : ""}`}>

                    <li className="li"><Link href="/">Home</Link></li>
                    <li className="li"><Link href="/about">About</Link></li>
                    <li className="li"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;



  