import logotipo from "../assets/logotipo.PNG"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-0">
      <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }} 
      className="flex flex-shrink-0 items-center">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          
        className="mx-0 w-40 hy-20 px-4" src={logotipo} alt="logo"  draggable="false"/>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0}} 
        animate={{ opacity: 1 }}
        transition={{duration: 3}}
      className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ duration: 0.3 }}> 
        <a title="Instagram" href="https://www.linkedin.com/in/alfonso-ferraro-a173m8a20031a6d15/" target="_blank"><FaLinkedin/></a>
        </motion.div>
        
        <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ duration: 0.3 }}>
        <a title="Instagram" href="https://github.com/Alfonio" target="_blank"><FaGithub/></a>
        </motion.div>

        <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ duration: 0.3 }}>
        <a title="Instagram" href="https://twitter.com/alfo_thomas" target="_blank"><BsTwitterX/></a>
        </motion.div>
        
        <motion.div
         whileHover={{ scale: 1.2 }}
         transition={{ duration: 0.3 }}>
          <a title="Instagram" href="https://www.instagram.com/alfo_thomas/" target="_blank"><FaInstagram/></a>
       
        </motion.div>
       
      </motion.div>
    </nav>
  )
}

export default Navbar
