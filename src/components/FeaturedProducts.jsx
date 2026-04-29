import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-warm-neutral-100">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-medical-blue-600 mb-4 font-sans text-center">Equipment Showcase</h2>
          <h3 className="text-4xl md:text-5xl text-slate-900 mb-6 leading-tight text-center">
            Pinnacle of <span className="text-medical-blue-600 italic">Medtech Innovation</span>
          </h3>
        </div>

        {/* Featured Item 1 */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-medical-blue-600 px-4 py-1.5 rounded-full inline-block mb-6">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Flagship Series</span>
            </div>
            <h4 className="text-4xl text-slate-900 mb-6 font-serif">Aura Vision X9 <br />Ultrasound System</h4>
            <p className="text-lg text-slate-500 mb-8 font-light leading-relaxed">
              Equipped with deep-learning AI algorithms, the X9 provides real-time anatomical identification and automated measurements, reducing diagnosis time by 40% while increasing accuracy.
            </p>
            <ul className="space-y-4 mb-10">
              {['Ultra-High Definition 8K Display', 'AI-Driven Tissue Recognition', 'Ergonomic 4-Pivot Workflow Integration'].map((feat) => (
                <li key={feat} className="flex items-center space-x-3 text-slate-600">
                  <div className="w-1.5 h-1.5 bg-medical-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium">{feat}</span>
                </li>
              ))}
            </ul>
            <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-medical-blue-600 hover:border-medical-blue-600 transition-colors">
              Technical Specifications
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white p-8 border border-slate-200/50">
              <img 
                src={`${import.meta.env.BASE_URL}images/ultrasound.png`} 
                alt="Ultrasound System" 
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-medical-blue-100/50 rounded-full blur-3xl -z-10 rotate-12 transform scale-75"></div>
          </motion.div>
        </div>

        {/* Featured Item 2 (Reversed) */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative"
          >
             <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-900 p-8 border border-slate-800">
              <img 
                src={`${import.meta.env.BASE_URL}images/hero.png`} 
                alt="Patient Monitor" 
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-200/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="bg-slate-900 px-4 py-1.5 rounded-full inline-block mb-6">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Next-Gen Monitoring</span>
            </div>
            <h4 className="text-4xl text-slate-900 mb-6 font-serif">VitalPulse Pro <br />Multi-Parametric Monitor</h4>
            <p className="text-lg text-slate-500 mb-8 font-light leading-relaxed">
              Designed for ICU and Critical Care, the VitalPulse Pro offers seamless hospital-wide telemetry connectivity and a modular hardware architecture that adapts to patient needs.
            </p>
            <ul className="space-y-4 mb-10">
              {['Seamless Epic/Cerner Integration', 'Hot-Swappable Battery Modules', 'True 12-Lead ECG Analysis Engine'].map((feat) => (
                <li key={feat} className="flex items-center space-x-3 text-slate-600">
                  <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  <span className="text-sm font-medium">{feat}</span>
                </li>
              ))}
            </ul>
            <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-medical-blue-600 hover:border-medical-blue-600 transition-colors">
              Request On-site Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
