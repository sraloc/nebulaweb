import { useEffect, useRef } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const Team = () => {
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

  const team: TeamMember[] = [
    {
      name: 'Valentina Rojas',
      role: 'Directora Creativa',
      image: '/nebulaweb/images/team/DSC00820.jpg.jpeg',
    },
    {
      name: 'Diego Herrera',
      role: 'Director de Fotografía',
      image: '/nebulaweb/images/team/DSC00906.jpg.jpeg',
    },
    {
      name: 'Martín Castro',
      role: 'Productor Ejecutivo',
      image: '/nebulaweb/images/team/DSC00927.jpg.jpeg',
    },
    {
      name: 'Camila Soto',
      role: 'Editora de Video',
      image: '/nebulaweb/images/team/DSC00935.jpg.jpeg',
    },
    {
      name: 'Nicolás Vega',
      role: 'Director de Arte',
      image: '/nebulaweb/images/team/DSC00667.jpg.jpeg',
    },
    {
      name: 'Sebastián Morales',
      role: 'Sonidista',
      image: '/nebulaweb/images/team/DSC00728.jpg.jpeg',
    },
    {
      name: 'Joaquín Pérez',
      role: 'Colorista',
      image: '/nebulaweb/images/team/DSC00879.jpg.jpeg',
    },
  ];

  return (
    <section
      id="equipo"
      ref={sectionRef}
      className="section relative"
    >
      <div className="grid-pattern" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="text-[#D946EF] text-sm font-semibold tracking-widest uppercase">
              Nuestro Equipo
            </span>
          </div>

          <h2 className="reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Los <span className="nebula-text">creativos</span> detrás de cada
            proyecto
          </h2>

          <p className="reveal stagger-2 text-gray-400 max-w-2xl mx-auto">
            Un equipo multidisciplinario de profesionales apasionados por el
            cine, la música y el arte visual. Juntos, convertimos ideas en
            realidad.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`reveal stagger-${(index % 4) + 1} group`}
            >
              <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 card-hover">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#D946EF] text-sm font-medium mb-3">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D946EF] flex items-center justify-center transition-colors"
                      aria-label={`Instagram de ${member.name}`}
                    >
                      <Instagram size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D946EF] flex items-center justify-center transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D946EF] flex items-center justify-center transition-colors"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="reveal stagger-5 mt-16 text-center">
          <div className="bg-gradient-to-r from-[#D946EF]/10 to-[#F0ABFC]/10 rounded-2xl p-8 border border-[#D946EF]/20">
            <h3 className="text-white text-xl font-bold mb-3">
              ¿Quieres ser parte del equipo?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Siempre estamos buscando talento creativo para sumar a nuestra
              familia. Envíanos tu portfolio y cuéntanos sobre ti.
            </p>
            <button className="btn-nebula">Únete al Equipo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
