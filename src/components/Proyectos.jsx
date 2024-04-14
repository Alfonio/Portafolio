import { PROJECTS } from "../constants"
import { motion } from "framer-motion";

function Proyectos() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">Experiencias</motion.h2>
        <div>
            {PROJECTS.map((project,index) =>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                whileInView={{opacity:1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className="w-full lg:w-1/2"> 
                    <img src={project.image} alt={project.title}  width={250} height={250}  className="mb-4 rounded"/>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1, x: -70, y:30}}
                initial={{opacity: 0, x: 100, y:-30}}
                transition={{duration: 1}}
                className="w-full max-w-xl lg:w-1/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech,index) =>(
                        <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-600">{tech}</span>
                    ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Proyectos