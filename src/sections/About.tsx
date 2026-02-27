import { useEffect, useRef } from 'react';
import { Camera, Film, Music, Clapperboard } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Music,
      title: 'Videoclips',
      description:
        'Producción completa de videoclips musicales con narrativa visual impactante y estética única.',
    },
    {
      icon: Film,
      title: 'Cortometrajes',
      description:
        'Desarrollo y producción de cortometrajes con enfoque cinematográfico y storytelling emocional.',
    },
    {
      icon: Clapperboard,
      title: 'Contenido Digital',
      description:
        'Creación de contenido para redes sociales, spots publicitarios y material promocional.',
    },
    {
      icon: Camera,
      title: 'Fotografía',
      description:
        'Sesiones fotográficas profesionales para artistas, eventos y producciones audiovisuales.',
    },
  ];

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="section relative"
    >
      <div className="grid-pattern" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="reveal">
              <span className="text-[#D946EF] text-sm font-semibold tracking-widest uppercase">
                Sobre Nosotros
              </span>
            </div>

            <h2 className="reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Creamos <span className="nebula-text">experiencias</span> visuales
              que conectan
            </h2>

            <div className="reveal stagger-2 space-y-4 text-gray-300 leading-relaxed">
              <p>
                Nébula Visión Studio nació de la pasión compartida por el cine y la
                música. Somos una productora audiovisual chilena conformada por un
                equipo de 10 profesionales apasionados por contar historias a través
                de imágenes.
              </p>
              <p>
                Actualmente nos especializamos en la producción de videoclips
                musicales, donde hemos tenido el privilegio de colaborar con
                diversos artistas del panorama musical chileno. Nuestro primer
                cortometraje marca el inicio de nuestra expansión hacia el mundo
                cinematográfico.
              </p>
              <p>
                Creemos en el poder de la narrativa visual para emocionar, inspirar
                y transformar. Cada proyecto es una oportunidad de crear algo
                único y memorable.
              </p>
            </div>

            {/* Mission/Vision */}
            <div className="reveal stagger-3 mt-8 grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Nuestra Misión</h3>
                <p className="text-gray-400 text-sm">
                  Elevar la producción audiovisual chilena mediante historias
                  auténticas y visuales de alto impacto.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <h3 className="text-white font-semibold mb-2">Nuestra Visión</h3>
                <p className="text-gray-400 text-sm">
                  Ser referentes en la industria cinematográfica latinoamericana,
                  expandiendo fronteras creativas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`reveal stagger-${index + 1} bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover group`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D946EF]/20 to-[#F0ABFC]/20 flex items-center justify-center mb-4 group-hover:from-[#D946EF]/30 group-hover:to-[#F0ABFC]/30 transition-all">
                  <service.icon className="text-[#D946EF]" size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
