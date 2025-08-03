import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Coffee, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: Code2, value: '6+', label: t('about.stat1') },
    { icon: Users, value: '3+', label: t('about.stat2') },
    { icon: Award, value: '1', label: t('about.stat3') },
    { icon: Coffee, value: '∞', label: t('about.stat4') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-18 mb-18">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t('about.title')}{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {t('about.titleHighlight')}
              </span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden">
              
              {/* Imagen centrada */}
              <img
                src="/Cristofer Barrios Valverde.png"
                alt="Cristofer Barrios Valverde"
                className="absolute inset-0 w-full h-full object-contain opacity-92 p-2 scale-110"
              />

              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <p className="text-lg font-semibold">Cristofer Barrios Valverde</p>
                <p className="text-sm opacity-80">Desarrollador FullStack</p>
              </div>

              {/* Decoratives elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-400/20 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400/20 rounded-full blur-xl z-0"></div>
            </div>
          </motion.div>

        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center group hover:border-indigo-400/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600/20 rounded-lg mb-4 group-hover:bg-indigo-600/30 transition-colors">
                  <Icon className="text-indigo-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;