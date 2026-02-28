import { useEffect, useRef, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  type: 'videoclip' | 'cortometraje' | 'fotografia';
}

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('todos');

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

  const projects: Project[] = [
    {
      id: 1,
      title: 'Siluetas',
      category: 'Videoclip',
      image: '/nebulaweb/images/projects/Sin título_1.1.20.jpg',
      type: 'videoclip',
    },
    {
      id: 2,
      title: 'Introspección',
      category: 'Cortometraje',
      image: '/nebulaweb/images/projects/Sin título_1.1.1.jpg',
      type: 'cortometraje',
    },
    {
      id: 3,
      title: 'La Llamada',
      category: 'Videoclip',
      image: '/nebulaweb/images/projects/DSC00091.JPG',
      type: 'videoclip',
    },
    {
      id: 4,
      title: 'Memorias',
      category: 'Cortometraje',
      image: '/nebulaweb/images/projects/Sin título_1.1.7.jpg',
      type: 'cortometraje',
    },
    {
      id: 5,
      title: 'Luz Interior',
      category: 'Videoclip',
      image: '/nebulaweb/images/projects/Sin título_1.1.21.jpg',
      type: 'videoclip',
    },
    {
      id: 6,
      title: 'Renacer',
      category: 'Cortometraje',
      image: '/nebulaweb/images/projects/Sin título_1.1.22.jpg',
      type: 'cortometraje',
    },
  ];

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'videoclip', label: 'Videoclips' },
    { id: 'cortometraje', label: 'Cortometrajes' },
  ];

  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      id="portafolio"
      ref={sectionRef}
      className="section relative bg-black/50"
    >
      <div className="grid-pattern" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal">
            <span className="text-[#D946EF] text-sm font-semibold tracking-widest uppercase">
              Portafolio
            </span>
          </div>

          <h2 className="reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Nuestros <span className="nebula-text">Proyectos</span>
          </h2>

          <p className="reveal stagger-2 text-gray-400 max-w-2xl mx-auto">
            Una selección de nuestros trabajos más recientes en videoclips
            musicales y producción cinematográfica.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal stagger-3 flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#D946EF] to-[#C026D3] text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal stagger-${(index % 3) + 1} group relative overflow-hidden rounded-xl aspect-video cursor-pointer`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[#D946EF] text-xs font-semibold uppercase tracking-wider mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-3">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm transition-all">
                    <Play size={14} fill="currentColor" />
                    Ver
                  </button>
                  <button className="flex items-center gap-2 bg-[#D946EF]/80 hover:bg-[#D946EF] text-white px-4 py-2 rounded-full text-sm transition-all">
                    <ExternalLink size={14} />
                    Detalles
                  </button>
                </div>
              </div>

              {/* Play Icon (always visible) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#D946EF]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <Play size={24} fill="white" className="text-white ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="reveal stagger-5 text-center mt-10">
          <a
            href="https://www.canva.com/design/DAGkYk5wqvg/OYdtOjPEcWpjavyymeMriA/edit?utm_content=DAGkYk5wqvg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            Ver Todo el Portafolio
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
