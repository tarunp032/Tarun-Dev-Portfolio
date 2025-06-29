import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "React_Quiz_App",
    description:
      "A dynamic quiz project built with React.js featuring multiple-choice questions, real-time scoring, and a responsive user interface.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/tarunp032/React_Quiz_App",
  },
  {
    id: 2,
    title: "Role-Based MERN Access App",
    description:
      "A secure MERN stack application with role-based authentication and product access control for users, clients, and admins.",
    image: "/projects/project2.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/tarunp032/Role-Based-Access-MERN-App",
  },
  {
    id: 3,
    title: "MindMeld AI Chat App",
    description:
      "Focuses on simplicity and OpenAI-based functionality.",
    image: "/projects/project3.png",
    tags: ["JavaScript", "HTML", "CSS", "OpenAI API"],
    githubUrl: "https://github.com/tarunp032/MindMeld-AI",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                {/* GitHub Icon aligned bottom-right */}
                <div className="mt-6 flex justify-end">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tarunp032"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
