import React from 'react';
import { motion } from 'framer-motion';

const IndustriesServed = () => {
  const industries = [
    { title: 'Hospitals', units: '500+', desc: 'Full-scale equipment for departments from ER to Oncology.' },
    { title: 'Specialty Clinics', units: '1200+', desc: 'Specialized diagnostic tools for targeted patient care.' },
    { title: 'Diagnostic Labs', units: '3000+', desc: 'High-throughput automation for modern pathology.' },
    { title: 'Research Units', units: '150+', desc: 'Cutting-edge technology for future medical discoveries.' }
  ];

  return (
    <section id="industries" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-widest text-medical-blue-600 mb-4 font-sans">Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl text-slate-900 leading-tight">
              Powering the Entire <br />
              <span className="text-medical-blue-600 italic">Healthcare Continuum</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm font-light leading-relaxed mb-2">
            From rural clinics to metropolitan superspecialty hospitals, our equipment adapts to every scale of care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] border border-slate-100 hover:border-medical-blue-100 transition-all duration-300 bg-warm-neutral-50"
            >
              <div className="mb-8">
                <span className="text-5xl font-serif text-slate-200 group-hover:text-medical-blue-100 transition-colors duration-500 font-bold">{ind.units}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 font-serif">{ind.title}</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed italic">
                {ind.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-200/50 flex justify-end">
                <div className="w-8 h-px bg-slate-200 group-hover:w-16 group-hover:bg-medical-blue-600 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
