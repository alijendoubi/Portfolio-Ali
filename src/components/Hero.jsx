import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Background3D from './Background3D';

const Hero = () => {
    const { t } = useLanguage();

    const scrollToProjects = (e) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-void-black">
            <Background3D />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-4xl"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-accent tracking-widest text-sm md:text-base font-semibold mb-4 uppercase"
                >
                    {t('hero.greeting')}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
                >
                    {t('hero.name')}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
                >
                    {t('hero.tagline')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate max-w-2xl text-base md:text-lg leading-relaxed mb-8 mx-auto"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 justify-center flex-wrap"
                >
                    <a
                        href="#projects"
                        onClick={scrollToProjects}
                        className="px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-all duration-300 hover:scale-105"
                    >
                        {t('hero.viewWork')}
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-lg bg-accent/10 border-2 border-transparent text-accent font-semibold hover:border-accent transition-all duration-300"
                    >
                        {t('hero.getInTouch')}
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-slate/30 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-accent rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
