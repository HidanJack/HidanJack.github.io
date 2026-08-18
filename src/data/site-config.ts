import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://hidanjack.github.io',
    avatar: {
        src: avatar,
        alt: 'Luis Catalán'
    },
    title: 'Luis Catalán',
    subtitle: 'Python Developer · Data Engineer · OCR & Graph Systems',
    description:
        'Portafolio de Luis Catalán, desarrollador Python especializado en pipelines OCR, matching multi-criterio con grafos (NetworkX, Neo4j) y sistemas con LLM on-device.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Luis Catalán - Portafolio'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Sobre mí',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/HidanJack'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/luis-catalán-reyes-032a48329'
        },
        {
            text: 'Email',
            href: 'mailto:luis.catalan.r@hotmail.com'
        }
    ],
    hero: {
        title: 'Hola, soy Luis Catalán',
        text: "Desarrollador **Python** con más de 3 años de experiencia construyendo pipelines ETL, extracción OCR y sistemas de conciliación bancaria en producción, procesando más de 1 millón de registros reales.\nMe especializo en OCR (Tesseract, YOLOv10, OpenCV), matching multi-criterio con grafos (NetworkX, Neo4j) y, más recientemente, en extender Python con Rust (PyO3) para cómputo de alto rendimiento y en integrar LLMs 100% on-device.\n\nRevisa algunos de mis proyectos abajo, o conéctate conmigo en [LinkedIn](https://linkedin.com/in/luis-catalán-reyes-032a48329) o [GitHub](https://github.com/HidanJack).",
        image: {
            src: hero,
            alt: 'Persona trabajando frente a una computadora'
        },
        actions: [
            {
                text: 'Contáctame',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Suscríbete',
        text: 'Recibe actualizaciones sobre nuevos proyectos.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
