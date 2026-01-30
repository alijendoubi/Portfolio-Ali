import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-neon-blue/50 transition-colors duration-300"
        >
            <div className="mb-4 flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
                    {project.name}
                </h3>
                <span className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-300">
                    {project.language}
                </span>
            </div>

            <p className="text-gray-400 mb-6 line-clamp-3 text-sm">
                {project.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>★ {project.stars}</span>
                </div>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium hover:underline decoration-neon-blue underline-offset-4"
                >
                    View Code →
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
