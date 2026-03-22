import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Loader2
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {

  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const validateForm = () => {

    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return false;
    }

    if (!formData.email.trim()) {
      toast({ title: "Email is required", variant: "destructive" });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({ title: "Invalid email format", variant: "destructive" });
      return false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {

      const response = await fetch("https://formspree.io/f/xojkldva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {

        toast({
          title: "Message sent successfully 🎉",
          description: "I'll get back to you soon."
        });

        setFormData({
          name: "",
          email: "",
          message: ""
        });

      } else {
        throw new Error();
      }

    } catch {

      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });

    } finally {

      setIsSubmitting(false);

    }

  };

  return (

    <section
      id="contact"
      className="relative py-24 px-6 bg-[#020617] text-white overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <motion.div
          className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[180px]"
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[180px]"
          animate={{ x: [0, -100, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

      </div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">

            Let's
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Connect
            </span>

          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project idea or want to collaborate? I'd love to hear from you.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">

            <h3 className="text-xl font-semibold mb-6">
              Contact Details
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>minalkesarkar8@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>+91 7624923602</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>Dandeli, Karnataka</span>
              </div>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/MeenalKesarkar"
                target="_blank"
                className="p-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 transition"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="p-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                className="p-3 rounded-lg bg-white/5 hover:bg-cyan-500/20 transition"
              >
                <Instagram />
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl">

            <h3 className="text-xl font-semibold mb-6">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium",
                  "bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >

                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

};