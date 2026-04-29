import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-medical-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-sky-50 rounded-full blur-3xl opacity-40 z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-medical-blue-100/50 border border-medical-blue-200 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-medical-blue-600 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-medical-blue-700">Precision in Every Detail</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-slate-900 mb-8 font-serif">
              Precision Medical <br />
              <span className="text-medical-blue-600 italic">Equipment</span> for Modern Healthcare
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-xl mb-10 leading-relaxed font-sans font-light">
              We deliver the next generation of diagnostic, surgical, and critical care technology to the world's leading medical institutions. 
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-medical-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-medical-blue-700 transition-all duration-300 shadow-xl shadow-medical-blue-600/20 flex items-center justify-center space-x-2 group">
                <span>Explore Products</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-medical-blue-300 transition-all duration-300 hover:bg-slate-50">
                Contact Specialist
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-12 border-t border-slate-100 grid grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="text-medical-blue-600 bg-medical-blue-50 p-2 rounded-lg"><ShieldCheck size={20} /></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-medical-blue-600 bg-medical-blue-50 p-2 rounded-lg"><Star size={20} /></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Hospital Trusted</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-medical-blue-600 bg-medical-blue-50 p-2 rounded-lg"><Globe size={20} /></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Global Distribution</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-medical-blue-900/10 border-8 border-white">
              <img 
                src="/images/hero.png" 
                alt="Medical Equipment" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Soft Shadow Element */}
            <div className="absolute inset-0 bg-medical-blue-600/5 -rotate-3 rounded-[3rem] blur-xl z-0 transform scale-105"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
