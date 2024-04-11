import logotipo from "../assets/logotipo.PNG"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {FaInstagram} from "react-icons/fa";
function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-0">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-0 w-40 hy-20 px-4" src={logotipo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <BsTwitterX/>
        <FaInstagram/>
      </div>
    </nav>
  )
}

export default Navbar
