import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ContactFooter } from '../components/ContactFooter';

// Mock Data Interface
interface ProjectData {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  description: string;
  details: {
    client: string;
    year: string;
    services: string;
  };
  images: string[];
}

// Data
const projects: ProjectData[] = [
  {
    id: '01',
    title: 'IHateLovePDF Suite',
    category: 'SaaS & Web App',
    heroImage: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_02_21-PM.webp',
    description: 'An all-in-one browser-based PDF utility platform designed to split, merge, compress, convert, edit, unlock, and protect PDF files directly in the browser with maximum security and sub-second processing speeds. Eliminates payload limits and privacy risks.',
    details: {
      client: 'IHateLovePDF',
      year: '2025',
      services: 'Full-Stack, WebAssembly, Security'
    },
    images: [
      'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_10_51-PM.webp',
      'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_21_42-PM.webp'
    ]
  },
  {
    id: '02',
    title: 'QuickBite API',
    category: 'Backend System',
    heroImage: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_45_01-PM.webp',
    description: 'Built a complete food ordering backend using Node.js, Express.js, and MongoDB with separate logins for users, admin, products, and orders using JWT and bcrypt for password security. Added real-time order status updates using Socket.io and secured the API with Helmet.js, rate limiting, and Zod-based input validation.',
    details: {
      client: 'QuickBite',
      year: '2024',
      services: 'REST API, Socket.io, MongoDB'
    },
    images: [
      'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_28_15-PM.webp',
      'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_43_05-PM.webp'
    ]
  },
  {
    id: '03',
    title: 'SwipeRide API',
    category: 'Real-time Backend',
    heroImage: 'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_48_28-PM.webp',
    description: 'Building a real-time ride-sharing backend using Node.js, Express.js, MongoDB, JWT (for rider/driver/admin roles), Socket.io (live tracking), and Redis (fast driver location tracking). Used Google Maps API for fare calculation, Paystack for payments, and MongoDB\'s geospatial queries to find nearby drivers with dynamic radius expansion.',
    details: {
      client: 'SwipeRide',
      year: '2024',
      services: 'Geospatial Queries, Redis, WebSockets'
    },
    images: [
      'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_49_56-PM.webp',
      'https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/bruce/ChatGPT-Image-Jan-9-2026-03_49_59-PM.webp'
    ]
  }
];

export const CaseStudy: React.FC = () => {
  const { id } = useParams();
  // Default to first project if ID not found or generic
  const project = projects.find(p => p.id === id) || projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Navigation / Back Button */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 mix-blend-difference text-white">
        <Link to="/" className="flex items-center gap-2 text-sm font-sans tracking-widest uppercase hover:opacity-70 transition-opacity">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      {/* 1. Project Name Header */}
      <header className="pt-40 pb-20 px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block font-sans text-xs tracking-[0.2em] text-gray-500 mb-6 uppercase">
            {project.category}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
            {project.title}
          </h1>
        </motion.div>
      </header>

      {/* 2. Full-width Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full h-[60vh] md:h-[80vh] overflow-hidden"
      >
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 3. Project Details Text Section */}
      <section className="py-24 px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="border-t border-gray-200 pt-4">
              <span className="block font-sans text-xs text-gray-400 mb-1">Client</span>
              <span className="font-serif text-xl">{project.details.client}</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <span className="block font-sans text-xs text-gray-400 mb-1">Year</span>
              <span className="font-serif text-xl">{project.details.year}</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <span className="block font-sans text-xs text-gray-400 mb-1">Services</span>
              <span className="font-serif text-xl">{project.details.services}</span>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <p className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Vertical Stack of Images */}
      <section className="px-4 md:px-12 lg:px-20 pb-32 max-w-screen-2xl mx-auto flex flex-col gap-8 md:gap-16">
        {project.images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img 
              src={img} 
              alt={`Project detail ${index + 1}`} 
              className="w-full h-auto object-cover rounded-sm"
            />
          </motion.div>
        ))}
      </section>

      {/* 5. More Projects Carousel */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="px-4 md:px-12 lg:px-20 max-w-screen-2xl mx-auto mb-12 flex justify-between items-end">
          <h3 className="font-serif text-3xl md:text-4xl">More Projects</h3>
          <div className="flex gap-4">
            <ArrowRight className="text-gray-400" />
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-8 px-4 md:px-12 lg:px-20 pb-12 snap-x scrollbar-hide">
          {projects.map((p) => (
            <Link 
              to={`/case-study/${p.id}`} 
              key={p.id}
              className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <img 
                  src={p.heroImage} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h4 className="font-serif text-2xl group-hover:underline">{p.title}</h4>
              <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">{p.category}</span>
            </Link>
          ))}
          {/* Placeholder for loop/extra items */}
          <div className="min-w-[5vw]"></div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
};
