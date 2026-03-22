import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      id: 1,
      name: "Rohit Patil",
      role: "Software Engineer",
      content:
        "Meenal helped us build a clean and responsive website for our business. She was very professional, communicated clearly, and delivered the project on time. The final website looks modern and works perfectly on all devices.",
      rating: 5
    },
    {
      id: 2,
      name: "Ramchandra Kshirsagar",
      role: "Small Business Owner",
      content:
        "Working with Meenal was a great experience. She converted our design ideas into a fully functional and responsive website. Her attention to detail in layout, styling, and user experience really made the website stand out.",
      rating: 5,
      image: "/testimonials/ramchandra.png"
    },
    {
      id: 3,
      name: "Pratiksha Babshet",
      role: "Small Business Owner",
      content:
        "Meenal is a passionate developer who quickly understands project requirements and implements them efficiently. Her attention to detail and commitment to delivering quality work make her a reliable developer to work with.",      
      rating: 5
   }
  ];

 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);

      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 px-6 bg-gradient-to-b from-[#020617] via-[#020617] to-black overflow-hidden"
    >

    

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />

      </div>

      <div className="max-w-6xl mx-auto">

       
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          <motion.h2
            variants={item}
            className="text-4xl font-bold text-white"
          >
            What People Say
          </motion.h2>

          <motion.p
            variants={item}
            className="text-muted-foreground mt-4"
          >
            What clients say about working with me.
          </motion.p>

        </motion.div>

    

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visibleTestimonials.map((t) => (

            <motion.div
              key={t.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-purple-500/20 to-transparent"
            >

              <div className="h-full rounded-2xl bg-[#050816]/90 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between transition-all duration-300">

             

                <Quote className="text-primary/50 mb-5 w-7 h-7" />


                <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
                  "{t.content}"
                </p>

                

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

               

                <div className="flex items-center gap-4">

                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/40"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-semibold">
                      {t.name.charAt(0)}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

    

        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-12">

            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-white/20 hover:bg-primary/20 transition"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-white/20 hover:bg-primary/20 transition"
            >
              <ChevronRight className="text-white" />
            </button>

          </div>
        )}

      </div>

    </section>
  );
};