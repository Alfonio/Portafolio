import { CONTACT } from "../constants"
import { motion } from "framer-motion";


function enviarCorreo() {
  const correo = "alfosotff8903@gmail.com"; // Tu dirección de correo
  const url = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(correo);
  window.open(url, "_blank");
}


function Contactos() {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.8}}
        className="my-10 text-center text-3xl">Contactame En...</motion.h1>
        <div className="text-center tracking-tighter">
          <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className="my-4">{CONTACT.address}</motion.p>
          <motion.p 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 2}}
          className="my-4">{CONTACT.phoneNo}</motion.p>
          <motion.a 
                 whileInView={{opacity: 1}}
                 initial={{opacity: 0}}
                 transition={{duration: 3 }}
          className="border-b"   onClick={enviarCorreo}
          href="#">{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contactos