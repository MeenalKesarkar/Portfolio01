import {
  ArrowUp,
  Linkedin,
  Instagram,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/meenal-kesarkar-031070258/",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/meenalll__",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/MeenalKesarkar",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: "minalkesarkar8@gmail.com",
      href: "mailto:minalkesarkar8@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      text: "+91 7624923602",
      href: "tel:+917624923602",
    },
  ];

  return (
    <footer className="px-6 py-16 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Footer Card */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-slate-900/90 via-indigo-900/80 to-slate-900/90 rounded-2xl p-10 border border-indigo-500/20 shadow-2xl">

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Branding */}
            <div className="flex flex-col gap-4">

              <h3 className="text-2xl font-semibold text-white">
                Meenal Kesarkar
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                MERN Stack Developer building modern and responsive web applications.
              </p>

              <div className="flex gap-4 mt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="p-2 rounded-lg bg-white/10 hover:bg-indigo-500 transition text-white"
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-4">

              <h4 className="text-white text-lg font-semibold tracking-wide">
                Navigation
              </h4>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">

              <h4 className="text-white text-lg font-semibold tracking-wide">
                Contact
              </h4>

              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <span className="text-indigo-400">
                      {info.icon}
                    </span>

                    <a
                      href={info.href}
                      className="hover:text-white transition"
                    >
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-indigo-500/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

            <p>
              © {currentYear} <span className="text-white">Meenal Kesarkar</span>. All rights reserved.
            </p>

            <div className="flex items-center gap-6">

              <a href="#" className="hover:text-white transition">
                Privacy
              </a>

              <a href="#" className="hover:text-white transition">
                Terms
              </a>

              <motion.a
                href="#hero"
                className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition"
                whileHover={{ y: -3 }}
              >
                <ArrowUp size={18} />
              </motion.a>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};