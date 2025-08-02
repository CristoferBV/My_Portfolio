import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': 'Hola, mi nombre es',
    'hero.role1': 'Desarrollador Frontend',
    'hero.role2': 'Desarrollador Backend',
    'hero.role3': 'Desarrollador Full Stack',
    'hero.description': 'Transformo ideas en experiencias digitales extraordinarias e inovadoras. Especializado en crear aplicaciones modernas, interfaces intuitivas y eficientes.',
    'hero.downloadCV': 'Descargar CV',
    
    // About
    'about.title': 'Sobre',
    'about.titleHighlight': 'Mí',
    'about.description1': 'Soy un desarrollador frontend apasionado con más de 5 años de experiencia creando experiencias web excepcionales. Me especializo en React, TypeScript y tecnologías modernas de desarrollo.',
    'about.description2': 'Mi enfoque se centra en crear interfaces de usuario intuitivas y performantes que no solo se ven increíbles, sino que también proporcionan una experiencia de usuario fluida y accesible.',
    'about.description3': 'Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y compartir conocimientos con la comunidad de desarrolladores.',
    'about.stat1': 'Proyectos Completados',
    'about.stat2': 'Clientes Satisfechos',
    'about.stat3': 'Años de Experiencia',
    'about.stat4': 'Tazas de Café',
    
    // Skills
    'skills.title': 'Mis',
    'skills.titleHighlight': 'Habilidades',
    'skills.description': 'Tecnologías y herramientas que domino para crear soluciones extraordinarias',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    'skills.additional': 'Tecnologías Adicionales',
    
    // Projects
    'projects.title': 'Mis',
    'projects.titleHighlight': 'Proyectos',
    'projects.description': 'Una selección de mis trabajos más recientes y destacados',
    'projects.all': 'Todos',
    'projects.frontend': 'Frontend',
    'projects.fullstack': 'Full Stack',
    'projects.viewCode': 'Ver Código',
    'projects.viewDemo': 'Ver Demo',
    'projects.technologies': 'Tecnologías Utilizadas',
    
    // Contact
    'contact.title': 'Trabajemos',
    'contact.titleHighlight': 'Juntos',
    'contact.description': '¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ayudarte a hacerlo realidad.',
    'contact.info': 'Información de Contacto',
    'contact.followMe': 'Sígueme en',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.subjectPlaceholder': '¿De qué quieres hablar?',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Teléfono',
    'contact.locationLabel': 'Ubicación',
    
    // Footer
    'footer.madeWith': 'Hecho con',
    'footer.by': 'por Tu Nombre',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.tagline': 'Transformando ideas en experiencias digitales extraordinarias',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.role1': 'Frontend Developer',
    'hero.role2': 'UI/UX Designer',
    'hero.role3': 'Full Stack Developer',
    'hero.description': 'I transform ideas into extraordinary digital experiences. Specialized in creating modern web applications and intuitive interfaces.',
    'hero.downloadCV': 'Download CV',
    
    // About
    'about.title': 'About',
    'about.titleHighlight': 'Me',
    'about.description1': 'I\'m a passionate frontend developer with over 5 years of experience creating exceptional web experiences. I specialize in React, TypeScript, and modern development technologies.',
    'about.description2': 'My focus is on creating intuitive and performant user interfaces that not only look incredible, but also provide a smooth and accessible user experience.',
    'about.description3': 'When I\'m not coding, I enjoy exploring new technologies, contributing to open source projects, and sharing knowledge with the developer community.',
    'about.stat1': 'Projects Completed',
    'about.stat2': 'Happy Clients',
    'about.stat3': 'Years of Experience',
    'about.stat4': 'Cups of Coffee',
    
    // Skills
    'skills.title': 'My',
    'skills.titleHighlight': 'Skills',
    'skills.description': 'Technologies and tools I master to create extraordinary solutions',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.additional': 'Additional Technologies',
    
    // Projects
    'projects.title': 'My',
    'projects.titleHighlight': 'Projects',
    'projects.description': 'A selection of my most recent and featured work',
    'projects.all': 'All',
    'projects.frontend': 'Frontend',
    'projects.fullstack': 'Full Stack',
    'projects.viewCode': 'View Code',
    'projects.viewDemo': 'View Demo',
    'projects.technologies': 'Technologies Used',
    
    // Contact
    'contact.title': 'Let\'s Work',
    'contact.titleHighlight': 'Together',
    'contact.description': 'Have a project in mind? I\'d love to hear about it and help you make it a reality.',
    'contact.info': 'Contact Information',
    'contact.followMe': 'Follow me on',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subjectPlaceholder': 'What would you like to talk about?',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.locationLabel': 'Location',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.by': 'by Your Name',
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Transforming ideas into extraordinary digital experiences',
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};