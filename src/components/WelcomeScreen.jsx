import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const WelcomeScreen = ({ onWelcomeComplete }) => {

  const [phase, setPhase] = useState(0);

  const welcomeMessages = [
    "Frontend Developer",
    "MERN Stack Developer",
    "Building Modern Web Experiences"
  ];

  useEffect(() => {

    const phase1 = setTimeout(() => setPhase(1), 800);
    const phase2 = setTimeout(() => setPhase(2), 1800);
    const phase3 = setTimeout(() => setPhase(3), 3000);

    const complete = setTimeout(() => {
      onWelcomeComplete();
    }, 5200);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(complete);
    };

  }, [onWelcomeComplete]);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#030014]">

      {/* Animated Aurora Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30"
          animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <motion.div
          className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] opacity-30"
          animate={{ x: [0, -120, 0], y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center px-6 max-w-3xl"
      >

        {/* Role Badge */}

        {phase >= 0 && (
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-wide text-gray-300"
          >
            <Sparkles size={16} />
            {welcomeMessages[phase % welcomeMessages.length]}
          </motion.div>
        )}

        {/* Main Heading */}

        {phase >= 1 && (
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Meenal
            </span>
          </motion.h1>
        )}

        {/* Subtitle */}

        {phase >= 2 && (
          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto"
          >
            A glimpse into my work as a Frontend and MERN Developer.
          </motion.p>
        )}

        {/* Loading Indicator */}

        {phase >= 3 && (
          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-3"
          >

            <motion.div
              className="h-2 w-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />

            <p className="text-sm text-gray-500">
              Loading my best work for you...
            </p>

          </motion.div>
        )}

      </motion.div>

    </div>
  );
};

export default WelcomeScreen;