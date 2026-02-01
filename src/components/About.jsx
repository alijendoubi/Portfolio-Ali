import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const technologies = [
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'React', category: 'framework' },
    { name: 'Next.js', category: 'framework' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Tailwind CSS', category: 'styling' },
    { name: 'Three.js', category: 'graphics' },
    { name: 'PHP', category: 'backend' },
];

const About = () => {
    const [ref, isVisible] = useScrollReveal();
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 bg-void-black">
            <div className="max-w-4xl mx-auto">
                <h2
                    ref={ref}
                    className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                >
                    {t('about.title')} <span className="text-accent">{t('about.titleAccent')}</span>
                </h2>

                <div className="space-y-6 text-slate leading-relaxed mb-12">
                    <p>
                        {t('about.paragraph1')}
                        <span className="text-white font-medium">{t('about.paragraph1Highlight')}</span>
                        {t('about.paragraph1End')}
                    </p>

                    <p>
                        {t('about.paragraph2')}
                    </p>

                    <p>
                        {t('about.paragraph3Start')}
                        <span className="text-white font-medium">{t('about.paragraph3Saas')}</span>,{' '}
                        <span className="text-white font-medium">{t('about.paragraph3Iot')}</span>, {t('about.paragraph3Web').toLowerCase() === t('about.paragraph3Web') ? '' : 'and '}
                        <span className="text-white font-medium">{t('about.paragraph3Web')}</span>
                        {t('about.paragraph3End')}
                    </p>

                    <p>
                        {t('about.paragraph4')}
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-6 text-white">{t('about.techTitle')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all group"
                            >
                                <h4 className="text-white font-medium group-hover:text-accent transition-colors">
                                    {tech.name}
                                </h4>
                                <p className="text-xs text-slate mt-1">{t(`about.techCategories.${tech.category}`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
