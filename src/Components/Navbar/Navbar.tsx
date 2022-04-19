import { useState, useContext, useEffect, useLayoutEffect } from 'react';
import './Navbar.css'
import { AnimatePresence, motion } from "framer-motion";

const NavItem = (props: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.li className='nav-item'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {props.children}
            {isHovered && <NavUnderline></NavUnderline>}
        </motion.li>
    )
}
const NavUnderline = () => {
    return (
        <AnimatePresence>
            <motion.div
                layoutId='nav-underline'
                className='nav-underline'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
            </motion.div>
        </AnimatePresence>
    )
}


const Navbar = () => {
    window.addEventListener('scroll', (e) =>{console.log(e);
    });
    return (
        <motion.ul id="navbar">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Blogs</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Contact Me</NavItem>
        </motion.ul>
    )
}

export default Navbar;