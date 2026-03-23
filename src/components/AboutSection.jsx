import React, { useState } from "react";
import {
  Briefcase,
  Code,
  User,
  Download,
  Calendar,
  Sparkles,
  Target,
  Github,
  Linkedin,
  Mail,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const achievements = [
    { number: "5+", label: "Projects", icon: <Briefcase size={18} /> },
    { number: "1", label: "Year Freelancing", icon: <Calendar size={18} /> },
    { number: "100%", label: "Learning", icon: <Target size={18} /> },
    { number: "Open", label: "Opportunities", icon: <User size={18} /> },
  ];

  const techStack = [
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS"] },
    { category: "Backend", items: ["Node.js", "Express"] },
    { category: "Database / Cloud", items: ["MongoDB", "AWS"] },
  ];

  const features = [
    "Full-stack developer",
    "Clean and maintainable code",
    "Responsive UI design",
    "Problem-solving mindset",
    "Continuous learning",
    "Project-based development",
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/MeenalKesarkar" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/meenal-kesarkar-031070258/" },
    { icon: <Mail size={18} />, href: "mailto:minalkesarkar8@gmail.com" },
  ];

  const tabContent = {
    personal:
      "I'm a passionate MERN stack developer who enjoys building modern web applications. I love exploring new technologies and constantly improving my development skills through hands-on projects.",
    professional:
      "I completed MERN stack training and built several projects including an e-commerce platform, blog application, and portfolio website using MongoDB, Express, React, and Node.js.",
    approach:
      "My development approach focuses on writing clean code, designing responsive interfaces, and building practical solutions while continuously learning and improving.",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Meenal_Kesarkar_Resume.pdf";
    link.download = "Meenal_Kesarkar_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#030014] text-white overflow-hidden"
    >
      

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px] opacity-30"
          animate={{ x: [0, 120, 0], y: [0, -100, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <motion.div
          className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] opacity-30"
          animate={{ x: [0, -120, 0], y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

      </div>

      <div className="max-w-6xl mx-auto">

   

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm">
            <Sparkles size={16} /> ABOUT ME
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Turning Ideas Into
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Real Applications
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I design and build modern web applications focused on performance,
            usability, and elegant user experience.
          </p>

        </div>

       

        <div className="grid md:grid-cols-3 gap-8">

         

          <div className="md:col-span-2 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8">

            <div className="flex items-center gap-6 mb-6">

              <img
                src="/profile-meenal.png"
                alt="Meenal"
                className="w-28 h-28 rounded-xl object-cover border border-white/20"
              />

              <div>
                <h2 className="text-2xl font-semibold">Meenal Kesarkar</h2>
                <p className="text-purple-400">MERN Stack Developer</p>
              </div>

            </div>

          

            <div className="grid grid-cols-2 gap-4 mb-6">

              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  {item.icon}
                  <div>
                    <div className="font-semibold">{item.number}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                </div>
              ))}

            </div>

        

            <div className="flex gap-6 border-b border-white/10 mb-6">

              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 capitalize ${
                    activeTab === tab
                      ? "text-purple-400 border-b border-purple-400"
                      : "text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}

            </div>

            <p className="text-gray-300 leading-relaxed">
              {tabContent[activeTab]}
            </p>

          </div>

       

          <div className="space-y-6">

        

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">

              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Code size={18} /> Tech Stack
              </h3>

              {techStack.map((stack, i) => (
                <div key={i} className="mb-4">

                  <h4 className="text-purple-400 text-sm mb-1">
                    {stack.category}
                  </h4>

                  <div className="text-gray-400 text-sm">
                    {stack.items.join(", ")}
                  </div>

                </div>
              ))}

            </div>

      

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">

              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Star size={18} /> Why Choose Me
              </h3>

              <ul className="space-y-2 text-gray-400 text-sm">
                {features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

            </div>


            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">

              <h3 className="font-semibold mb-4">Let's Connect</h3>

              <div className="flex gap-4 mb-4">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="p-2 bg-white/5 rounded-lg hover:bg-purple-500/20 transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 transition rounded-lg py-2"
              >
                <Download size={18} /> Download Resume
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};