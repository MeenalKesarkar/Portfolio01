import {
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/meenal-kesarkar-031070258", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/meenalll__", label: "Instagram" },
    { icon: <Github size={18} />, href: "https://github.com/MeenalKesarkar", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "minalkesarkar8@gmail.com", href: "mailto:minalkesarkar8@gmail.com.com" },
    { icon: <Phone size={16} />, text: "+91 7624923602", href: "tel:+917624923602" },
  ];

  return (
    <footer className="px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            <div className="space-y-4 max-w-xs">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Meenal</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
               Passionate developer creating clean and user-friendly web apps
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">Redirect To :</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <h4 className="text-gray-900 dark:text-white font-medium mb-6 text-sm uppercase tracking-wider">
                Contact
              </h4>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center justify-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-gray-600 dark:text-gray-400">{info.icon}</span>
                    <a href={info.href} className="hover:text-gray-900 dark:hover:text-white">
                      {info.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-xs text-gray-600 dark:text-gray-400 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
            <div>
              <p>© {currentYear} Meenal. All rights reserved. Design inspired by MD Sahil</p>
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};