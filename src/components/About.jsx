import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-warm-neutral-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="/images/surgical.png" 
                alt="Modern Surgical Suite" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 border-white/30 backdrop-blur-xl">
                  <p className="text-slate-900 font-serif text-lg leading-relaxed italic">
                    "Precision is not an option; it is our foundation. We build equipment that doctors trust with life itself."
                  </p>
                  <div className="mt-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-medical-blue-600 flex items-center justify-center text-white font-bold">DR</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Dr. Helena Vance</p>
                      <p className="text-xs text-slate-500">Chief of Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-medical-blue-600 mb-4 font-sans">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
              A Legacy of <span className="text-medical-blue-600">Clinical Excellence</span> and Engineering Innovation
            </h3>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
              Founded over two decades ago, Medicum has been at the forefront of medical technology evolution. We don't just sell equipment; we partner with hospitals to architect modern clinical environments that prioritize patient outcomes above all.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 font-sans uppercase">Precision Engineering</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Every device is calibrated to global gold standards for unmistakable accuracy.</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 font-sans uppercase">Global Reliability</h4>
                <p className="text-sm text-slate-500 leading-relaxed">24/7 support and rapid distribution networks across six continents.</p>
              </div>
            </div>

            <button className="text-medical-blue-600 font-bold flex items-center space-x-2 group hover:text-medical-blue-700">
              <span className="border-b-2 border-medical-blue-600 pb-1">Learn about our factory protocols</span>
              <div className="group-hover:translate-x-2 transition-transform">→</div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
