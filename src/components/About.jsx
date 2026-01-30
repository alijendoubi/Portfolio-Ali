import { useScrollReveal } from '../hooks/useScrollReveal';

const technologies = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React', category: 'Framework' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Three.js', category: 'Graphics' },
    { name: 'PHP', category: 'Backend' },
];

const About = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="about" className="py-24 px-6 bg-void-black">
            <div className="max-w-4xl mx-auto">
                <h2
                    ref={ref}
                    className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                >
                    About <span className="text-accent">Me</span>
                </h2>

                <div className="space-y-6 text-slate leading-relaxed mb-12">
                    <p>
                        I'm a business student and full-stack developer based in <span className="text-white font-medium">Italy</span>,
                        passionate about creating digital solutions that bridge technology and business strategy.
                    </p>

                    <p>
                        My journey into programming started early — while my classmates had game consoles, I had a computer
                        and a coding book. That curiosity led me to explore everything from game development to modern web applications.
                    </p>

                    <p>
                        Today, I specialize in building <span className="text-white font-medium">SaaS platforms</span>,
                        <span className="text-white font-medium"> IoT solutions</span>, and
                        <span className="text-white font-medium"> modern web applications</span>. I love the intersection
                        of design and development, where great user experience meets clean, scalable code.
                    </p>

                    <p>
                        When I'm not coding, you'll find me studying business strategy, exploring new technologies,
                        or working on side projects that solve real-world problems.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-6 text-white">Technologies I work with</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all group"
                            >
                                <h4 className="text-white font-medium group-hover:text-accent transition-colors">
                                    {tech.name}
                                </h4>
                                <p className="text-xs text-slate mt-1">{tech.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
