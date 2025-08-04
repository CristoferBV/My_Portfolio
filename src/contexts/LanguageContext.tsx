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
    'about.description1': 'Soy un desarrollador fullstack egresado de la Universidad Nacional de Costa Rica, con experiencia práctica construyendo aplicaciones web y móviles. He trabajado con tecnologías como React, Angular, TypeScript, Django y Node.js.',
    'about.description2': 'Mi enfoque está en crear soluciones intuitivas, accesibles y eficientes, aplicando buenas prácticas de desarrollo y metodologías ágiles. Me gusta integrar APIs, servicios en la nube e inteligencia artificial para agregar valor real.',
    'about.description3': 'Cuando no estoy programando, disfruto investigar nuevas herramientas, aprender sobre automatización y compartir conocimientos con otros desarrolladores en espacios de colaboración y comunidad.',
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

    // Descripciones de proyectos
    'projects.faceSecurityGuard.description': 'Seguridad facial con OpenCV y Python',
    'projects.faceSecurityGuard.longDescription': 'Una aplicación de seguridad facial que utiliza OpenCV y Python para detectar y reconocer rostros en tiempo real. Incluye características como autenticación de usuarios y gestión de acceso.',

    'projects.pauna.description': 'Portal exclusivo para la biblioteca y administración del Campus Coto de la Universidad Nacional de Costa Rica.',
    'projects.pauna.longDescription': 'Un sistema integral para la gestión de la biblioteca y administración del campus, que permite a los estudiantes acceder a recursos académicos, gestionar préstamos y consultar información relevante. Incluye un panel de administración para gestionar usuarios y recursos.',

    'projects.transcriptImages.description': 'OCR para documentos de construcción',
    'projects.transcriptImages.longDescription': 'Una aplicación web integral para dispositivos móviles diseñada para que las empresas de construcción de muebles capturen, procesen y organicen documentos de construcción utilizando tecnología OCR.',

    'projects.walletCompass.description': 'Simulación de billetera virtual con tarjetas, cédulas y carné estudiantil.',
    'projects.walletCompass.longDescription': 'Una aplicación móvil que simula una billetera virtual, permitiendo a los usuarios gestionar sus tarjetas, cédulas y carnets estudiantiles de manera eficiente.',

    'projects.serversRedes.description': 'Sistema P2P con múltiples servidores y clientes',
    'projects.serversRedes.longDescription': 'Este proyecto implementa un sistema peer-to-peer (P2P) con múltiples servidores y clientes. El servidor almacena videos en una ruta local y gestiona solicitudes de descarga mediante TCP.',

    
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
    'contact.successMessage': 'Email enviado con éxito',
    'contact.errorMessage': 'Error al enviar el email. Por favor, inténtalo de nuevo más tarde',

    // Footer
    'footer.madeWith': 'Hecho con',
    'footer.by': 'por Tu Nombre',
    'footer.rights': 'Cristofer Barrios Valverde.',
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

    // Project descriptions
    'projects.faceSecurityGuard.description': 'Facial security with OpenCV and Python',
    'projects.faceSecurityGuard.longDescription': 'A facial security application using OpenCV and Python to detect and recognize faces in real-time. Includes features like user authentication and access control.',

    'projects.pauna.description': 'Exclusive portal for the library and administration of the UNA Coto Campus.',
    'projects.pauna.longDescription': 'A comprehensive system for managing the campus library and administration, allowing students to access academic resources, manage loans, and consult relevant information. Includes an admin panel to manage users and resources.',

    'projects.transcriptImages.description': 'OCR for construction documents',
    'projects.transcriptImages.longDescription': 'A mobile-friendly web application designed for furniture construction companies to capture, process, and organize construction documents using OCR technology.',

    'projects.walletCompass.description': 'Virtual wallet simulation with ID and student cards.',
    'projects.walletCompass.longDescription': 'A mobile app that simulates a virtual wallet, allowing users to manage their cards, IDs, and student cards efficiently.',

    'projects.serversRedes.description': 'P2P system with multiple servers and clients',
    'projects.serversRedes.longDescription': 'This project implements a peer-to-peer (P2P) system with multiple servers and clients. The server stores videos locally and handles download requests via TCP.',

    
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
    "contact.successMessage": "Email sent successfully",
    "contact.errorMessage": "Failed to send email. Please try again later",
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.by': 'by Your Name',
    'footer.rights': 'Cristofer Barrios Valverde.',
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