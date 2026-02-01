import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
    const [ref, isVisible] = useScrollReveal();
    const { t } = useLanguage();

    const experiences = t('experience.experiences');

    return (
        <section id="experience" className="py-24 px-6 bg-void-black">
            <div className="max-w-4xl mx-auto">
                <h2
                    ref={ref}
                    className={`text-3xl md:text-4xl font-bold mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                >
                    {t('experience.title')} <span className="text-accent">{t('experience.titleAccent')}</span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => {
                        const [itemRef, itemVisible] = useScrollReveal();

                        return (
                            <div
                                key={index}
                                ref={itemRef}
                                className={`relative pl-8 border-l-2 border-slate/20 transition-all duration-700 delay-${index * 100} ${itemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-void-black" />

                                <div className="mb-2">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {exp.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm">
                                        <span className="text-accent font-medium">{exp.company}</span>
                                        <span className="text-slate">•</span>
                                        <span className="text-slate">{exp.period}</span>
                                        {index < 2 && (
                                            <span className="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                                                {t('experience.current')}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-slate leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
