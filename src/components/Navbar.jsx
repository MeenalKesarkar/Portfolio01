import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-blue-500/20 transition"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef(null);
  const lastScrollY = useRef(0);

 
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      try {
        audioRef.current.volume = 1;
        audioRef.current.muted = false;
        await audioRef.current.play();
      } catch (err) {
        console.log("Play error:", err);
      }
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = current;

      const sections = navItems.map((item) => item.href);

      for (const section of sections) {
        const element = document.querySelector(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            current >= offsetTop - 200 &&
            current < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

     
      <motion.div
        className="fixed top-5 right-5 flex gap-3 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <a
          href="#hero"
          className="p-3 rounded-full bg-blue-950/80 backdrop-blur-xl border border-blue-800/40 hover:bg-blue-500/20 transition"
        >
          <Globe className="w-6 h-6 text-blue-400" />
        </a>

        <a
          href="https://github.com/MeenalKesarkar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-blue-950/80 backdrop-blur-xl border border-blue-800/40 hover:bg-blue-500/20 transition"
        >
          <Github className="w-6 h-6 text-gray-300" />
        </a>

        <a
          href="https://www.linkedin.com/in/meenal-kesarkar-031070258/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-blue-950/80 backdrop-blur-xl border border-blue-800/40 hover:bg-blue-500/20 transition"
        >
          <Linkedin className="w-6 h-6 text-blue-400" />
        </a>

       
        <button
          onClick={toggleMusic}
          className="p-3 rounded-full bg-blue-950/80 backdrop-blur-xl border border-blue-800/40 hover:bg-blue-500/20 transition"
        >
          {isMusicPlaying ? (
            <Volume2 className="w-6 h-6 text-blue-400" />
          ) : (
            <VolumeX className="w-6 h-6 text-gray-400" />
          )}
        </button>
      </motion.div>

     
      <motion.div
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all",
          showNavbar ? "opacity-100" : "opacity-0 translate-y-10"
        )}
      >
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-950/90 to-indigo-950/90 backdrop-blur-xl border border-blue-800/40 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center p-2 rounded-full transition",
                activeSection === item.href
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:text-blue-400"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs md:text-sm font-medium hidden md:block mt-1">
                {item.name}
              </span>
            </a>
          ))}

          <div className="px-2">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </>
  );
};