import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectCard = ({ project, featured = false }) => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
        >
            <div className="mb-4 flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                {project.featured && (
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        Featured
                    </span>
                )}
            </div>

            <p className="text-slate mb-6 line-clamp-3 text-sm leading-relaxed">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-slate border border-white/10"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-slate text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{project.stars}</span>
                </div>
                <div className="flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-accent transition-colors"
                        aria-label="View GitHub repository"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate hover:text-accent transition-colors"
                            aria-label="View live demo"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [ref, isVisible] = useScrollReveal();
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24 px-6 bg-void-black/50 relative">
            <div className="max-w-7xl mx-auto">
                <h2
                    ref={ref}
                    className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                >
                    Featured <span className="text-accent">Projects</span>
                </h2>
                <p className="text-slate mb-12 max-w-2xl">
                    A selection of projects showcasing my work in full-stack development, SaaS platforms, and modern web applications.
                </p>

                {/* Featured Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} featured />
                    ))}
                </div>

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <>
                        <h3 className="text-2xl font-bold mb-8 text-white">
                            Other <span className="text-accent">Projects</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Projects;
