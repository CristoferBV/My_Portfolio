import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con React, Node.js y MongoDB.',
      longDescription: 'Una aplicación de comercio electrónico completa que incluye autenticación de usuarios, carrito de compras, procesamiento de pagos con Stripe, panel de administración y gestión de inventario. Desarrollada con React, Node.js, Express y MongoDB.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas y colaboración en tiempo real.',
      longDescription: 'Una aplicación de productividad que permite a los equipos colaborar en tiempo real. Incluye funciones como asignación de tareas, seguimiento de progreso, notificaciones push y integración con calendarios. Construida con React, Socket.io y Firebase.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Firebase', 'Material-UI'],
      github: '#',
      demo: '#',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard interactivo del clima con visualizaciones de datos y pronósticos.',
      longDescription: 'Un dashboard completo del clima que muestra pronósticos detallados, mapas interactivos, datos históricos y alertas meteorológicas. Utiliza APIs múltiples para obtener datos precisos y presenta la información de manera visualmente atractiva.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Weather API', 'Chart.js'],
      github: '#',
      demo: '#',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis para redes sociales con métricas detalladas y reportes.',
      longDescription: 'Una plataforma completa de análisis de redes sociales que ayuda a las empresas a rastrear su rendimiento, analizar el engagement y generar reportes detallados. Incluye integración con múltiples plataformas sociales y visualizaciones avanzadas.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js'],
      github: '#',
      demo: '#',
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Sitio web personal con animaciones avanzadas y diseño responsivo.',
      longDescription: 'Un portafolio personal moderno con animaciones fluidas, efectos de parallax y diseño completamente responsivo. Incluye un CMS personalizado para gestionar proyectos y un blog integrado.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Contentful'],
      github: '#',
      demo: '#',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'AI Chat Application',
      description: 'Aplicación de chat inteligente con integración de IA y procesamiento de lenguaje natural.',
      longDescription: 'Una aplicación de chat avanzada que utiliza inteligencia artificial para proporcionar respuestas inteligentes y asistencia automatizada. Incluye reconocimiento de voz, traducción en tiempo real y análisis de sentimientos.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'OpenAI API', 'WebSocket', 'Python'],
      github: '#',
      demo: '#',
      category: 'fullstack'
    }
  ];

  const categories = ['all', 'frontend', 'fullstack'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const navigateProject = (direction: 'prev' | 'next') => {
    if (selectedProject === null) return;
    
    const currentIndex = projects.findIndex(p => p.id === selectedProject);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    } else {
      newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedProject(projects[newIndex].id);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            {t('projects.title')}{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('projects.titleHighlight')}
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            {t('projects.description')}
          </motion.p>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:text-indigo-400'
                }`}
              >
                {category === 'all' ? t('projects.all') : category === 'frontend' ? t('projects.frontend') : t('projects.fullstack')}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group hover:border-indigo-400/50 transition-colors cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, '_blank');
                          }}
                        >
                          <Github size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, '_blank');
                          }}
                        >
                          <ExternalLink size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 text-sm rounded-lg">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 flex space-x-2">
                          <button
                            onClick={() => navigateProject('prev')}
                            className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={() => navigateProject('next')}
                            className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800"
                          >
                            <ChevronRight size={20} />
                          </button>
                          <button
                            onClick={() => setSelectedProject(null)}
                            className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-800"
                          >
                            <X size={20} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-xl font-semibold text-white mb-3">
                            {t('projects.technologies')}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-indigo-600/20 text-indigo-400 rounded-lg font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-4">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            <Github size={20} />
                            <span>{t('projects.viewCode')}</span>
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            <ExternalLink size={20} />
                            <span>{t('projects.viewDemo')}</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;