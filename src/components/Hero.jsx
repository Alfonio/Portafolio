import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const norma = (delay) => ({
  hidden: {x: -100, opacity:0},
  visible:{
    x:0, opacity:1, transition:{duration:1, delay:delay},
  }
})

function Hero() {
  return (
    
<div className="border-b border-neutral-900 pb-4 lg:mb-35">
  <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2 px-20">
      <div className="flex flex-col items-center lg:items-start">
        <motion.h1 
        variants={norma(0)}
        initial= "hidden"
        animate="visible"
        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Alfonso Ferraro</motion.h1>
        <motion.span 
        variants={norma(0.5)}
        initial= "hidden"
        animate="visible"
        className="bg-gradient-to-r from-pink-400 via-slate-300 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent"> Front-End & Data Science</motion.span>     
        <motion.p 
         variants={norma(1)}
         initial= "hidden"
         animate="visible"
        className="my-2 max-w-xl py-6 font-light tracking-tighter">
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-8">
      <div className="flex justify-center">
        <motion.img 
        initial={{x: 100, opacity:0 }}
        animate={{x:0, opacity: 1}}
        transition={{duration: 1, delay: 1.3}}
        src={profilePic} alt="Mi cara" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Hero