import { RiReactjsLine } from "react-icons/ri"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { TbBrandNextjs } from "react-icons/tb"
import { SiTailwindcss } from "react-icons/si"
import { FaBootstrap } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { SiMysql } from "react-icons/si"
import { DiSqllite } from "react-icons/di"
import { FaGitAlt  } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { motion } from "framer-motion";

const iconoVariante = (duracion) =>({
    initial: {y: -10},
    animate:{
        y:[10, -10],
        transition:{
            duration:duracion,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse"
        }
    }
})

function Technologies() {
  return (
    <div>
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1 
            whileInView={{opacity:1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1}}
            className="my-20 text-center text-4xl">Tecnologías</motion.h1>
            <motion.div 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-10">
                <motion.div 
                variants={iconoVariante(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text-orange-700"/>
                </motion.div>
                <motion.div 
                  variants={iconoVariante(3)}
                  initial="initial"
                  animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3Alt className="text-7xl  text-blue-500"/>
                </motion.div>
                <motion.div 
                variants={iconoVariante(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500"/>
                </motion.div>
                <motion.div
                variants={iconoVariante(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-500"/>
                </motion.div>
                <motion.div
                variants={iconoVariante(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl border-neutral-900"/>
                </motion.div>
                <motion.div
                 variants={iconoVariante(2)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss className="text-7xl text-cyan-500"/>
                </motion.div>

            </motion.div>
            
            <motion.div 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 1.5}}
            className=" pt-6 flex flex-wrap items-center justify-center gap-10">
                
            <motion.div
             variants={iconoVariante(1.7)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaBootstrap className="text-7xl text-violet-800"/>
                </motion.div>
                <motion.div 
                variants={iconoVariante(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                variants={iconoVariante(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-orange-500"/>
                </motion.div>
                <motion.div 
                variants={iconoVariante(1.7)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-blue-500"/>
                </motion.div>
                <motion.div
                variants={iconoVariante(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiSqllite className="text-7xl text-blue-500"/>
                </motion.div>
                <motion.div
                variants={iconoVariante(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-green-400 "/>
                </motion.div>

            </motion.div>
        </div>
    </div>
  )
}

export default Technologies