import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  Zap,
  Shield,
  Stethoscope,
  ArrowRight,
  User,
  Flower,
  Smile,
  Sparkles,
  Instagram,
  Facebook,
  MessageCircle,
  Plus
} from 'lucide-react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const ToothIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 3C4.23858 3 2 5.23858 2 8C2 10.7614 4.23858 13 7 13C7.69378 13 8.3459 12.8588 8.9375 12.6016C9.58203 14.043 10.6875 15.25 12 16C13.3125 15.25 14.418 14.043 15.0625 12.6016C15.6541 12.8588 16.3062 13 17 13C19.7614 13 22 10.7614 22 8C22 5.23858 19.7614 3 17 3C16.3062 3 15.6541 3.14118 15.0625 3.39844C14.418 1.95703 13.3125 0.75 12 0C10.6875 0.75 9.58203 1.95703 8.9375 3.39844C8.3459 3.14118 7.69378 3 7 3Z" />
    <path d="M12 16V24" />
    <path d="M7 13C7 17.5 9 21 12 21C15 21 17 17.5 17 13" />
  </svg>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <img 
    src="https://images.vexels.com/media/users/3/265416/isolated/preview/ceed76d9d91ce68159d452babb000d60-human-white-tooth-icon.png" 
    alt="Dr Shabeer's Logo" 
    className={`w-10 h-10 object-contain ${className}`}
    referrerPolicy="no-referrer"
  />
);

const ToothShineIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <div className={`relative ${className}`} style={{ width: size, height: size }}>
    <ToothIcon size={size} />
    <Sparkles size={size/2} className="absolute -top-1 -right-1 text-amber-300" />
  </div>
);

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- Components ---

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Laser Technology', href: '#laser' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 shrink-0 p-1">
            <Logo />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl font-bold tracking-tight block leading-tight">Dr Shabeer's</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary leading-tight">Laser Dentistry</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onBookClick}
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 lg:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                onBookClick();
                setIsMobileMenuOpen(false);
              }}
              className="bg-primary text-white w-full py-4 rounded-2xl font-bold mt-2 shadow-lg shadow-primary/20"
            >
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-premium-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-accent/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Advanced Technology
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Advanced <span className="text-primary">Laser Dentistry</span> in Bengaluru
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-lg leading-relaxed">
              Precision dental treatments with modern laser technology and patient-focused care. Experience dentistry that's faster, safer, and more comfortable.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={onBookClick}
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group"
            >
              Book Appointment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:+919902078955"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Phone size={20} className="text-primary" /> Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 pt-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-100">
                  <img 
                    src={`https://picsum.photos/seed/patient${i}/100/100`} 
                    alt="Patient" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-semibold text-slate-900">5.0 Rating <span className="text-slate-500 font-normal">(11+ Reviews)</span></p>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Dynamic Composition */}
        <div className="lg:col-span-6 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Main Image */}
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white relative">
              <img 
                src="https://slimdental.com/wp-content/uploads/2023/04/slim-dental-new-york-oral-healt-services-with-excellence-laser-dentistry.jpg" 
                alt="Modern Laser Dentistry" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 max-w-[200px] border border-white/20"
            >
              <div className="w-10 h-10 bg-secondary/20 text-primary rounded-xl flex items-center justify-center mb-3">
                <Zap size={20} />
              </div>
              <p className="text-sm font-bold text-slate-900">Laser Precision</p>
              <p className="text-xs text-slate-500 mt-1">Minimally invasive treatments for faster healing.</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-white/20"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Expert Care</p>
                <p className="text-xs text-slate-500">Dr. Shabeer Ahamed</p>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 top-1/2 -left-12 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DoctorHighlight = () => {
  const highlights = [
    "Laser Dentistry Specialist",
    "Advanced Gum Treatment",
    "Modern Dental Technology"
  ];

  return (
    <section id="doctor" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-[4rem] bg-accent rotate-3 absolute inset-0 -z-10" />
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://media.istockphoto.com/id/1222938816/photo/highly-qualified-young-dentist-posing-at-modern-clinic.jpg?s=612x612&w=0&k=20&c=FHEtAmsvvqZnXMlmNLrbYKTqfSpm05ybvET8Cxm4z3U=" 
                  alt="Dr. Shabeer Ahamed" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute bottom-10 -right-8 bg-primary text-white p-6 rounded-3xl shadow-xl">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-xs uppercase tracking-widest font-semibold opacity-80">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">The Specialist</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Dr. Shabeer Ahamed</h3>
              <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                Dr. Shabeer Ahamed is a dental specialist known for advanced laser dentistry and periodontal treatments, providing precise and comfortable dental care using modern technology. His patient-first approach ensures every treatment is tailored to your unique needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlights.map((h) => (
                <span key={h} className="px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-semibold flex items-center gap-2 shadow-sm">
                  <CheckCircle2 size={18} className="text-primary" /> {h}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <Stethoscope size={80} />
                </div>
                <p className="text-xl font-medium italic opacity-90 relative z-10">
                  "Our mission is to provide world-class dental care using the latest innovations in laser technology, making treatments painless and recovery faster for our patients."
                </p>
                <div className="mt-6 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-[1px] bg-primary" />
                  <p className="font-bold tracking-wide">DR. SHABEER AHAMED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LaserFeature = () => {
  const benefits = [
    { title: "Minimal Pain", icon: <ToothIcon size={24} /> },
    { title: "Faster Healing", icon: <Zap size={24} /> },
    { title: "More Precise", icon: <Shield size={24} /> },
    { title: "Reduced Bleeding", icon: <CheckCircle2 size={24} /> },
    { title: "Comfortable Procedures", icon: <Flower size={24} /> }
  ];

  return (
    <section id="laser" className="py-12 md:py-24 relative overflow-hidden bg-laser-gradient">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-white/80 font-bold uppercase tracking-[0.3em] text-sm mb-4">Future of Dentistry</h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-6">Why Choose Laser Dentistry?</h3>
          <p className="text-white/80 text-lg">
            Laser technology has revolutionized dental care, offering a more comfortable and precise alternative to traditional methods.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={b.title}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-center group transition-all"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 md:mb-6 shadow-xl group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h4 className="text-white font-bold text-sm md:text-lg leading-tight">{b.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    { 
      title: "Laser Dentistry", 
      description: "Painless and precise treatments using advanced laser tech.", 
      details: "Our laser technology allows for bloodless surgeries, faster healing times, and minimal post-operative discomfort. Ideal for gum contouring, cavity preparations, and soft tissue procedures.",
      icon: <Zap /> 
    },
    { 
      title: "Gum Treatment", 
      description: "Specialized periodontal care for healthy gums and teeth.", 
      details: "We specialize in treating gingivitis and periodontitis using deep cleaning and laser-assisted therapy to restore gum health and prevent tooth loss.",
      icon: <Shield /> 
    },
    { 
      title: "Root Canal", 
      description: "Advanced endodontic therapy to save your natural teeth.", 
      details: "Save your infected teeth with our precision root canal treatments. We use rotary endodontics for faster, more accurate, and pain-free results.",
      icon: <Stethoscope /> 
    },
    { 
      title: "Dental Implants", 
      description: "Permanent and natural-looking tooth replacement solutions.", 
      details: "Replace missing teeth with high-quality biocompatible implants that look, feel, and function just like natural teeth.",
      icon: <Plus /> 
    },
    { 
      title: "Wisdom Tooth", 
      description: "Safe and comfortable removal of impacted wisdom teeth.", 
      details: "Expert extraction of wisdom teeth with minimal trauma, ensuring a smooth recovery process using advanced surgical techniques.",
      icon: <CheckCircle2 /> 
    },
    { 
      title: "Teeth Cleaning", 
      description: "Professional scaling and polishing for a brighter smile.", 
      details: "Remove plaque, tartar, and stains with our professional cleaning services. We use ultrasonic scalers for a thorough and comfortable experience.",
      icon: <ToothShineIcon /> 
    },
    { 
      title: "Dental Fillings", 
      description: "High-quality aesthetic fillings to restore tooth structure.", 
      details: "We use tooth-colored composite resins to restore cavities, providing a durable and natural-looking finish.",
      icon: <Shield /> 
    },
    { 
      title: "Smile Design", 
      description: "Transform your smile with customized cosmetic dentistry.", 
      details: "Achieve your dream smile with veneers, teeth whitening, and alignment corrections tailored to your facial features.",
      icon: <Smile /> 
    }
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">Comprehensive Dental Care</h3>
            <p className="text-slate-600 mt-6 text-lg">
              From routine checkups to advanced laser surgeries, we offer a full spectrum of dental services under one roof.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Need Help?</p>
                <p className="text-lg font-bold text-slate-900">+91 99020 78955</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              layout
              transition={{ 
                layout: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                opacity: { duration: 0.2 }
              }}
              className={`bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group cursor-pointer ${expandedIndex === i ? 'col-span-2 row-span-1' : ''}`}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <motion.div layout className="w-10 h-10 md:w-14 md:h-14 bg-accent text-primary rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                {React.cloneElement(s.icon as React.ReactElement, { size: 24 })}
              </motion.div>
              <motion.h4 layout className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-4">{s.title}</motion.h4>
              <motion.p layout className="text-slate-500 leading-relaxed text-xs md:text-sm">{s.description}</motion.p>
              
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-slate-100"
                  >
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {s.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div layout className="mt-6 md:mt-8 flex items-center gap-2 text-primary font-bold text-xs md:text-sm">
                {expandedIndex === i ? 'Show Less' : 'Learn More'} <ChevronRight size={16} className={expandedIndex === i ? 'rotate-90' : ''} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustIndicators = () => {
  const stats = [
    { label: "Rating", value: "5.0 ⭐", icon: <Star /> },
    { label: "Experience", value: "15+ Yrs", icon: <Clock /> },
    { label: "Technology", value: "Laser", icon: <Zap /> },
    { label: "Patient Care", value: "100%", icon: <User /> }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
              <div className="text-primary mb-4">
                {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
              </div>
              <p className="text-3xl font-extrabold text-slate-900 mb-1">{s.value}</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const reviews: Review[] = [
    { name: "Sandeep Kumar", rating: 5, text: "Best place for dental issues. Dr. Shabeer is very professional and explains everything clearly.", date: "2 months ago" },
    { name: "Priya Sharma", rating: 5, text: "Caring doctor with vast experience. The laser treatment was completely painless and healing was very fast.", date: "1 month ago" },
    { name: "Rahul V", rating: 5, text: "One of the best periodontists in town. Highly recommended for any gum related treatments.", date: "3 weeks ago" },
    { name: "Ananya R", rating: 5, text: "The clinic is very clean and modern. Dr. Shabeer made me feel very comfortable during my root canal.", date: "5 months ago" }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="reviews" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">What Our Patients Say</h3>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x no-scrollbar relative"
        >
          {reviews.map((r, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-accent/30 border border-accent/50 relative snap-center">
              <div className="flex text-amber-400 mb-4 md:mb-6">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6 md:mb-8 font-medium">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center font-bold text-primary shadow-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm md:text-base">{r.name}</p>
                    <p className="text-[10px] md:text-xs text-slate-500 font-medium">{r.date}</p>
                  </div>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-1.5 mt-4 md:hidden">
          {reviews.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-primary' : 'w-1.5 bg-slate-200'}`} 
            />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <a 
            href="https://www.google.com/search?sca_esv=ce1d9c6da6b8c5e1&sxsrf=ANbL-n5QXhBWw0aBHDu9BWA5YbvNk9PTHw:1772714289121&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOR_QQ5XEo1NK2jGM9NcTH6k3RgwOJ9P7D6wu4nAYln0U_4G7X-xPQYO7DBxrhgGFilOKovPqzWSdcdccETHLiEXnoObR3Q632jK0m-3Z4ccvvpUosA%3D%3D&q=Dr+Shabeer%27s+laser+dentistry+Reviews&sa=X&ved=2ahUKEwjh6Par44iTAxVRSGcHHfbwMV8Q0bkNegQIPxAH&biw=1536&bih=742&dpr=1.25" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            View all Google Reviews <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", title: "Modern Treatment Room" },
    { src: "https://dranjidentalcare.com/wp-content/uploads/2024/01/modern-dental-practice-dental-chair-other-accessories-used-by-dentists-scaled.webp", title: "Advanced Dental Chair" },
    { src: "https://t3.ftcdn.net/jpg/15/21/93/68/360_F_1521936864_SzON3ER9kSSQc2VbwNv0LqOYknsslUII.jpg", title: "Clinic Reception" },
    { src: "https://www.galbiatidentalgroup.com/wp-content/uploads/2024/01/1920-min.jpg", title: "Sterilization Unit" },
    { src: "https://www.dmcounsel.com/hubfs/Dental%20Tools.jpeg", title: "Dental Equipment" },
    { src: "https://harkeloffice.com/wp-content/uploads/2025/08/patients-in-the-waiting-room-area.jpg", title: "Patient Comfort Area" }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.7)); // 0.7 because min-w-[70vw]
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Clinic</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">A Glimpse Inside</h3>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x no-scrollbar"
        >
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="min-w-[70vw] md:min-w-0 relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-lg snap-center"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-64 md:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-8">
                <p className="text-white font-bold text-lg md:text-xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center gap-1.5 mt-4 md:hidden">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-primary' : 'w-1.5 bg-slate-200'}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs: FAQ[] = [
    { question: "Is laser dentistry painful?", answer: "Most patients report significantly less discomfort with laser dentistry compared to traditional methods. In many cases, anesthesia is not even required." },
    { question: "What is gum treatment?", answer: "Gum treatment, or periodontics, involves deep cleaning and specialized procedures to treat gum disease, prevent tooth loss, and ensure overall oral health." },
    { question: "How long does a root canal take?", answer: "With modern technology, most root canal treatments can be completed in 1-2 visits, each lasting about 45-90 minutes depending on complexity." },
    { question: "How often should I visit a dentist?", answer: "We recommend a professional checkup and cleaning every 6 months to maintain optimal oral health and catch any issues early." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Common Questions</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Frequently Asked</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-3xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${openIndex === i ? 'bg-primary text-white rotate-45' : 'bg-slate-100 text-slate-500'}`}>
                  <Plus size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Contact Us</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900">Get in Touch</h3>
              <p className="text-slate-600 mt-6 text-lg">
                We're here to help you achieve your best smile. Visit us or give us a call to schedule your consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Our Location</p>
                  <p className="text-slate-600 leading-relaxed">
                    Sai Mitra Meadows, B Block, No.301<br />
                    1st A Cross, 8th Main Rd, Kaggadasapura<br />
                    C V Raman Nagar, Bengaluru, 560093<br />
                    <span className="text-sm font-semibold text-primary mt-1 block">Plus Code: XMPC+W5 Bengaluru</span>
                  </p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Dr+Shabeer's+Laser+Dentistry" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-3 hover:underline"
                  >
                    Get Directions <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Phone Number</p>
                  <p className="text-slate-600 text-lg font-medium">+91 99020 78955</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-1">Opening Hours</p>
                  <p className="text-slate-600">Open daily – Closes 8 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.970119336113!2d77.6745!3d12.9789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116676f688e1%3A0x6d90048e9f90248!2sDr%20Shabeer's%20Laser%20Dentistry!5e0!3m2!1sen!2sin!4v1709630000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shrink-0 p-1">
                <Logo />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold tracking-tight block leading-tight">Dr Shabeer's</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-primary leading-tight">Laser Dentistry</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing advanced laser dental care with precision and compassion in the heart of Bengaluru.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#doctor" className="hover:text-primary transition-colors">About Doctor</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Laser Dentistry</li>
              <li>Gum Treatment</li>
              <li>Root Canal</li>
              <li>Dental Implants</li>
              <li>Smile Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6">Stay updated with dental health tips and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex-1 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary p-3 rounded-xl hover:bg-primary/90 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Dr Shabeer's Laser Dentistry. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    treatment: 'Laser Dentistry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Appointment Request
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Treatment: ${formData.treatment}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919902078955?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 lg:p-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-extrabold text-slate-900">Book Appointment</h3>
                  <p className="text-slate-500 mt-2">Fill in the details to schedule your visit.</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                    <input 
                      required
                      type="time" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Treatment Type</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none"
                    value={formData.treatment}
                    onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                  >
                    <option>Laser Dentistry</option>
                    <option>Gum Treatment</option>
                    <option>Root Canal</option>
                    <option>Dental Implants</option>
                    <option>Smile Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your concern..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98] mt-4"
                >
                  Send Request via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FloatingActions = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-4">
      <motion.a 
        href="https://wa.me/919902078955"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl"
      >
        <WhatsAppIcon size={28} />
      </motion.a>
      <motion.a 
        href="tel:+919902078955"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl"
      >
        <Phone size={28} />
      </motion.a>
      <motion.button 
        onClick={onBookClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl"
      >
        <Calendar size={28} />
      </motion.button>
    </div>
  );
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <TrustIndicators />
        <DoctorHighlight />
        <LaserFeature />
        <ServicesGrid />
        <Testimonials />
        <Gallery />
        <FAQSection />
        <Contact />
      </main>

      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      <FloatingActions onBookClick={() => setIsBookingOpen(true)} />
    </div>
  );
}
