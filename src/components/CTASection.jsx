import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 group">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-medical-blue-900 via-slate-950 to-slate-900 opacity-90"></div>
          
          <div className="relative z-10 py-20 px-8 md:px-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl text-white mb-8 font-serif leading-tight">
                Equip Your Institution with <br />
                <span className="text-medical-blue-400 italic">Uncompromising Precision</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Connect with our product specialists to design a custom equipment package tailored to your clinic's surgical and diagnostic requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="w-full sm:w-auto bg-medical-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-medical-blue-700 transition-all duration-300 shadow-xl shadow-medical-blue-600/20 flex items-center justify-center space-x-3 group">
                  <FileText size={22} className="group-hover:rotate-6 transition-transform" />
                  <span>Request Full Catalog</span>
                </button>
                <button className="w-full sm:w-auto bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-3">
                  <MessageSquare size={22} />
                  <span>Talk to a Specialist</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Decorative Corner Orbs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-medical-blue-600/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-blue-600/10 rounded-full blur-3xl -mr-48 -mb-48"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
