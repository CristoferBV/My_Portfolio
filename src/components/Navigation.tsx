import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'skills', label: t('nav.skills'), icon: Code },
    { id: 'projects', label: t('nav.projects'), icon: Briefcase },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  useEffect(() => {
    const navItemsLocal = [
      { id: 'home', label: t('nav.home'), icon: Home },
      { id: 'about', label: t('nav.about'), icon: User },
      { id: 'skills', label: t('nav.skills'), icon: Code },
      { id: 'projects', label: t('nav.projects'), icon: Briefcase },
      { id: 'contact', label: t('nav.contact'), icon: Mail },
    ];

    const handleScroll = () => {
      const sections = navItemsLocal.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItemsLocal[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Cristofer Barrios
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? 'text-indigo-400 bg-indigo-400/10'
                          : 'text-gray-300 hover:text-indigo-400'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button and Language Selector */}
            <div className="md:hidden flex items-center space-x-3">
              <LanguageSelector />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-indigo-400"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          className="md:hidden bg-gray-800/95 backdrop-blur-md overflow-hidden"
        >
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'text-indigo-400 bg-indigo-400/10'
                      : 'text-gray-300 hover:text-indigo-400'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navigation;