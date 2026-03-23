import {
  Download,
  Code,
  Sparkles,
  Shield,
  TrendingUp,
  Award,
  Zap,
  MousePointerClick
} from "lucide-react";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const HeroSection = () => {

  const [lineIndex,setLineIndex] = useState(0);
  const [typed,setTyped] = useState("");

  const code = [
    "import Developer from 'meenal.dev';",
    "",
    "const meenal = new Developer({",
    "  role: 'MERN Stack Developer',",
    "  skills: ['React','Node','MongoDB'],",
    "  passion: 'Building modern web apps'",
    "});",
    "",
    "meenal.buildAmazingThings();",
    "console.log('🚀 Let's create something great');"
  ];

  useEffect(()=>{

    const currentLine = code[lineIndex];

    if(typed.length < currentLine.length){

      const timeout = setTimeout(()=>{
        setTyped(currentLine.slice(0,typed.length+1));
      },35);

      return ()=>clearTimeout(timeout);

    }else{

      const timeout = setTimeout(()=>{

        if(lineIndex < code.length-1){
          setLineIndex(lineIndex+1);
          setTyped("");
        }else{
          setLineIndex(0);
          setTyped("");
        }

      },700);

      return ()=>clearTimeout(timeout);

    }

  },[typed,lineIndex]);


  const achievements = [
    {number:"5+",label:"Projects",icon:<TrendingUp size={14}/>},
    {number:"1+",label:"Freelancing",icon:<Shield size={14}/>},
    {number:"100%",label:"Learning",icon:<Award size={14}/>},
    {number:"MERN",label:"Stack",icon:<Zap size={14}/>}
  ];


  const handleResume = ()=>{
    window.open("/Meenal_Kesarkar_Resume.pdf","_blank");
  };


  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">


      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/30 blur-[140px] rounded-full"/>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/30 blur-[120px] rounded-full"/>


      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">


        <div>

          <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-8"
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          >
            <Sparkles size={14}/>
            Available for opportunities
          </motion.div>


          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

            <span className="block">
              Hi I'm
            </span>

            <span className="block bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mt-2">
              Meenal Kesarkar
            </span>

            <span className="text-3xl text-gray-300 font-semibold block mt-3">
              MERN Stack Developer
            </span>

          </h1>


          <p className="text-gray-400 text-lg mt-6 max-w-xl">
            I build scalable, modern and high-performance web applications
            using React, Node.js and MongoDB.
          </p>



          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">

            {achievements.map((item,index)=>(
              <div
              key={index}
              className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur text-center"
              >

                <div className="flex justify-center items-center gap-2 text-primary mb-2">
                  {item.icon}
                  <span className="font-bold">{item.number}</span>
                </div>

                <p className="text-xs text-gray-400">
                  {item.label}
                </p>

              </div>
            ))}

          </div>


        

          <button
          onClick={handleResume}
          className="mt-10 flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >

            <Download size={18}/>
            View Resume

          </button>

        </div>


   

        <div className="flex justify-center">

          <div className="bg-black/70 border border-white/10 rounded-xl p-8 backdrop-blur-xl shadow-2xl max-w-md w-full">

            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full"/>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"/>
              <div className="w-3 h-3 bg-green-400 rounded-full"/>
            </div>


            <div className="font-mono text-sm text-gray-300 min-h-[220px]">

              {code.map((line,i)=>(
                <div key={i}>

                  {i < lineIndex && line}

                  {i === lineIndex && (
                    <>
                      {typed}
                      <span className="animate-pulse text-cyan-400">|</span>
                    </>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>


      

      <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary flex flex-col items-center"
      animate={{y:[0,6,0]}}
      transition={{duration:2,repeat:Infinity}}
      >

        <MousePointerClick size={16}/>
        <span className="text-xs mt-2">
          Scroll
        </span>

      </motion.div>

    </section>
  );
};