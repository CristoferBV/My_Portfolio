import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-400 hover:bg-indigo-600/30 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>

          <div className="text-center">
            <p className="text-gray-400 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>



          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;