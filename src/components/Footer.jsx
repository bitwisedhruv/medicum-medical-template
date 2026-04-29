import React from 'react';
import { Globe, Share2, Play, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
             <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-medical-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-medical-blue-600/20">
                <span className="text-white font-serif font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-slate-900">
                MEDICUM<span className="text-medical-blue-600">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-light italic mb-8">
              Global leaders in medical equipment manufacturing and clinical engineering solutions. Elevating healthcare standards since 2004.
            </p>
            <div className="flex space-x-4">
              {[Globe, Share2, Play].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-medical-blue-600 hover:border-medical-blue-200 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8 font-sans">Equipment</h4>
            <ul className="space-y-4">
              {['Diagnostic Systems', 'Surgical Units', 'Critical Care', 'Imaging Portables', 'Hospital Furniture'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-500 hover:text-medical-blue-600 transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8 font-sans">Resources</h4>
            <ul className="space-y-4">
              {['Case Studies', 'Whitepapers', 'Support Portal', 'Global Distribution', 'Certifications'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-500 hover:text-medical-blue-600 transition-colors font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8 font-sans">HQ Office</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-medical-blue-600 shrink-0" />
                <span className="text-sm text-slate-500 font-light leading-relaxed">
                  128 Medical Plaza, <br />Innovation District, Berlin 10115
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-medical-blue-600 shrink-0" />
                <span className="text-sm text-slate-500 font-light leading-relaxed">+49 (0) 30 555 334 0</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-medical-blue-600 shrink-0" />
                <span className="text-sm text-slate-500 font-light leading-relaxed">solutions@medicum-global.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-light">
            © 2024 Medicum Global Systems GmbH. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Legal Terms</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Cookie Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
