import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const achievements = [
    { number: "5+", label: "Projects", icon: <Briefcase className="h-5 w-5" />, suffix: "" },
    { number: "1", label: "Year Freelancing", icon: <Calendar className="h-5 w-5" />, suffix: "+" },
    { number: "100", label: "Learning", icon: <Target className="h-5 w-5" />, suffix: "%" },
    { number: "10", label: "Projects Completed", icon: <User className="h-5 w-5" />, suffix: "+" }
  ];

  const techStack = [
    { category: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML5"] },
    { category: "Backend", items: ["Node.js", "Express"] },
    { category: "Cloud", items: ["AWS","Vercel", "MongoDB"] }
  ];

  const features = ["Full-stack developer", "Clean and maintainable code", "Responsive UI design", "Problem-solving mindset", "Continuos learning", "Project-based development"];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/MeenalKesarkar" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/meenal-kesarkar-031070258" },
    { icon: <Mail className="h-5 w-5" />, href: "minalkesarkar8@gmail.com" }
  ];

  const tabContent = {
    personal: "I'm a passionate MERN stack developer who enjoys building modern web applications. I love exploring new technologies and constantly improving my development skills through hands-on projects.",
    professional: "I completed MERN stack training and built several projects including an e-commerce platform, blog application, and portfolio website using MongoDB, Express, React, and Node.js.",
    approach: "My development approach focuses on writing clean code, designing responsive interfaces, and building practical solutions while continuously learning and improving."
  };

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Meenal_Kesarkar_Resume.pdf';
    link.download = 'Meenal_Kesarkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float"><div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" /></div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000"><div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" /></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 md:mb-20 px-2 sm:px-6">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
            <div className="relative">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">ABOUT ME</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Turning</span>
            <span className="block text-primary animate-pulse">Ideas Into Reality</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I design and build modern web applications focused on <span className="text-primary font-semibold">performance</span>, <span className="text-primary font-semibold">usability</span>, and <span className="text-primary font-semibold">elegant user experience.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:group-hover:scale-110 relative">
                      <img src="/profile-meenal.png" alt="Meenal K" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Meenal Kesarkar</h2>
                    <p className="text-primary text-base sm:text-lg font-semibold mb-3 sm:mb-4">MERN Stack Developer</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {achievements.map((achievement, index) => (
                        <div key={index} className={`p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 ${counter === index ? 'bg-primary/10 border-primary/50' : ''}`}>
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            {achievement.icon}
                            <div>
                              <div className="font-bold text-sm sm:text-lg">{achievement.number}{achievement.suffix}</div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground">{achievement.label}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row border-b border-border mb-4 sm:mb-6">
                  {['personal', 'professional', 'approach'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium transition-all duration-300 ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="min-h-[100px] sm:min-h-[120px]">
                  <AnimatePresence mode="sync">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                    >
                      {tabContent[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Code className="h-4 sm:h-6 w-4 sm:w-6 text-primary" />Tech Stack Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {techStack.map((stack, index) => (
                  <div key={index} className="bg-background/50 border border-border rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:scale-105 group">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1 sm:p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300"><Code className="h-3 sm:h-4 w-3 sm:w-4" /></div>
                      <h4 className="font-semibold text-sm sm:text-lg">{stack.category}</h4>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {stack.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />{item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <div className="flex flex-col space-y-4">
                <div className="p-4 bg-background/50 rounded-xl border border-border text-center">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Quick Connect</h4>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <a key={index} href={social.href} className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="w-full p-3 sm:p-4 border border-border rounded-xl text-center font-semibold transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <Download className="h-4 sm:h-5 w-4 sm:w-5" />
                    Download Resume
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2"><Star className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />Why Choose Me</h3>
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};