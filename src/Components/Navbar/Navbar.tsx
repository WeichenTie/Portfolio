import { useState } from 'react';
import './Navbar.css'
import { motion } from "framer-motion";

const NavItem = (props: any) => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <motion.li className='nav-item'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            {props.children}
            {isHovered && <NavUnderline></NavUnderline>}
        </motion.li>
    )
}
const NavUnderline = () => {
    return (
        <motion.div layoutId='nav-underline' className='nav-underline'>
        </motion.div>
    )
}


const Navbar = () => {


    return (
        <ul id="navbar">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Blogs</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Contact Me</NavItem>
        </ul>
    )
}

export default Navbar;