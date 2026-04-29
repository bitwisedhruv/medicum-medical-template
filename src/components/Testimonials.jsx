import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The integration of Medicum's imaging systems into our cardiology wing has transformed our workflow Efficiency is up by 30%.",
      author: "Sr. Marcus Thorne",
      role: "Head of Cardiology, St. Jude's",
      initials: "MT"
    },
    {
      text: "Exceptional precision in their surgical tools. The ergonomic design significantly reduces surgeon fatigue during long procedures.",
      author: "Dr. Sarah Jenkins",
      role: "Chief Surgeon, Mayo Medical",
      initials: "SJ"
    },
    {
      text: "Reliability is the most important factor for us. Medicum's critical care units have never let us down in five years of operation.",
      author: "Robert Chen",
      role: "Operations Director, Global Health",
      initials: "RC"
    }
  ];

  return (
    <section className="py-24 bg-warm-neutral-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="col-span-1">
            <h2 className="text-xs font-bold uppercase tracking-widest text-medical-blue-600 mb-4 font-sans">Echoes of Trust</h2>
            <h3 className="text-4xl text-slate-900 mb-8 leading-tight">
              What the World's Leading <br />
              <span className="text-medical-blue-600 italic">Medical Professionals</span> Say
            </h3>
            <div className="flex flex-col space-y-6 pt-8 border-t border-slate-200">
               <div>
                <p className="text-3xl font-bold text-slate-900 font-serif">500+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Healthcare Partners</p>
               </div>
               <div>
                <p className="text-3xl font-bold text-slate-900 font-serif">20+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Years of Innovation</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={test.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`premium-card p-10 ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className="text-medical-blue-100 mb-8">
                  <Quote size={40} />
                </div>
                <p className="text-xl text-slate-600 mb-10 font-light leading-relaxed italic">
                  "{test.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-sm">
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-sans uppercase tracking-tight">{test.author}</h4>
                    <p className="text-xs text-slate-400">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
