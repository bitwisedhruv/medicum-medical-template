import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Stethoscope, 
  Monitor, 
  Wind, 
  Camera, 
  Bed, 
  ArrowUpRight 
} from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    {
      title: 'Diagnostic Equipment',
      icon: <Stethoscope size={28} />,
      desc: 'Advanced tools for early and accurate clinical diagnosis.',
      count: '42 Products'
    },
    {
      title: 'Surgical Instruments',
      icon: <Activity size={28} />,
      desc: 'High-precision tools engineered for complex procedures.',
      count: '150+ Products'
    },
    {
      title: 'ICU & Critical Care',
      icon: <Wind size={28} />,
      desc: 'Life-support systems for the most demanding environments.',
      count: '28 Products'
    },
    {
      title: 'Imaging Systems',
      icon: <Camera size={28} />,
      desc: 'Next-gen ultrasound, X-ray, and specialized scanning.',
      count: '15 Products'
    },
    {
      title: 'Patient Monitoring',
      icon: <Monitor size={28} />,
      desc: 'Real-time telemetry and vital signs monitoring systems.',
      count: '34 Products'
    },
    {
      title: 'Hospital Furniture',
      icon: <Bed size={28} />,
      desc: 'Ergonomic solutions for patient comfort and clinic flow.',
      count: '60 Products'
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-medical-blue-600 mb-4 font-sans">Product Catalog</h2>
          <h3 className="text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
            Comprehensive <span className="text-medical-blue-600 italic">Medical Solutions</span>
          </h3>
          <p className="text-lg text-slate-500 font-light">
            Our portfolio spans every critical department of the modern medical facility, engineered to work in perfect harmony.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card group hover:border-medical-blue-200 hover:shadow-xl hover:shadow-medical-blue-600/5 cursor-pointer p-8 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-400 group-hover:bg-medical-blue-50 group-hover:text-medical-blue-600 transition-colors duration-500">
                {cat.icon}
              </div>
              
              <h4 className="text-2xl text-slate-900 mb-4 font-serif group-hover:text-medical-blue-600 transition-colors duration-300">
                {cat.title}
              </h4>
              <p className="text-slate-500 mb-8 font-light leading-relaxed">
                {cat.desc}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{cat.count}</span>
                <div className="w-10 h-10 border border-slate-100 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-medical-blue-600 group-hover:text-white group-hover:border-medical-blue-600 transition-all duration-300 scale-90 group-hover:scale-100">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-medical-blue-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-medical-blue-600/20">
            Download Full Catalog 2024
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
