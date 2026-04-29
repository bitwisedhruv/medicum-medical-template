import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Globe2, Headphones, Box } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Certified Quality',
      icon: <ShieldCheck size={24} />,
      desc: 'Full compliance with ISO 13485 and global medical device regulations.'
    },
    {
      title: 'Precision Engineering',
      icon: <CheckCircle2 size={24} />,
      desc: 'Swiss-grade engineering ensuring 99.9% uptime for critical systems.'
    },
    {
      title: 'Global Standards',
      icon: <Globe2 size={24} />,
      desc: 'Uniform hardware and software standards across all regions.'
    },
    {
      title: 'Reliable Support',
      icon: <Headphones size={24} />,
      desc: '24/7 dedicated technical support and annual maintenance contracts.'
    },
    {
      title: 'Fast Distribution',
      icon: <Zap size={24} />,
      desc: 'Optimized logistics for rapid across-border delivery of parts and units.'
    },
    {
      title: 'Customized Solutions',
      icon: <Box size={24} />,
      desc: 'Tailored equipment packages designed for your specific clinic needs.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="container-custom">
        <div className="bg-medical-blue-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-medical-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-medical-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="relative z-10">
            <div className="max-w-2xl mb-16">
              <h2 className="text-xs font-bold uppercase tracking-widest text-medical-blue-400 mb-4 font-sans">The Medicum Advantage</h2>
              <h3 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
                Why Hospitals Trust Us to <br />
                <span className="text-medical-blue-400">Power Their Clinics</span>
              </h3>
              <p className="text-lg text-medical-blue-100/70 font-light leading-relaxed">
                We combine German engineering precision with empathetic customer service to create a seamless experience for healthcare providers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-medical-blue-400 mb-6 border border-white/5">
                    {feature.icon}
                  </div>
                  <h4 className="text-white text-xl font-bold mb-3 font-serif">{feature.title}</h4>
                  <p className="text-medical-blue-100/60 text-sm leading-relaxed font-light italic">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
