import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  codeUrl: string;
  liveUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Voya -- Flight&Hotel Booking",
    description:
      "A responsive flight and hotel booking web application built using React and TypeScript, focusing on performance, scalability, and clean architecture. The platform enables users to search, filter, and book flights and hotels through an intuitive and well-structured UI. Redux was used for efficient state management, while Tailwind CSS ensured a consistent, modern, and fully responsive design.",
    image: "/Voya.png",
    codeUrl: "https://github.com/khairy-naiem/voyatest.git",
    liveUrl: "https://voya-pb8s.vercel.app/",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Adalena -- Bags Store",
    description:
      "A modern e-commerce platform for a bags store developed with React and TypeScript to deliver a smooth and engaging shopping experience. The application includes product listings, detailed product pages, and responsive layouts. State management was handled using Redux, and Tailwind CSS was utilized to build a clean, scalable, and mobile-first UI with consistent styling.",
    image: "/adalene.png",
    codeUrl: "https://github.com/khairy-naiem/adalene-store.git",
    liveUrl: "https://adalene-store.netlify.app/",
    tags: ["React", "Redux", "Tailwind CSS", "E-Commerce"],
  },
  {
    title: "BObos -- Clothing Store",
    description:
      "A stylish clothing e-commerce platform built with React and TypeScript, focusing on usability and performance. The project features dynamic product displays, category filtering, and a fully responsive design. Redux was implemented to manage application state efficiently, while Tailwind CSS was used to create a modern and maintainable UI system.",
    image: "/bobos.png",
    codeUrl: "https://github.com/khairy-naiem/bobos.git",
    liveUrl: "https://bobos-one.vercel.app/",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Coffee Shop e-commerce project",
    description: "A responsive e-commerce platform for a coffee shop developed with JavaScript, HTML5, CSS3, Bootstrap, and jQuery to deliver a smooth and engaging shopping experience. The application includes product listings, detailed product pages, and responsive layouts. jQuery was used to handle dynamic content and interactions, while Bootstrap was used to create a responsive and mobile-first UI with consistent styling.",
    image: "/coffe.png",
    codeUrl: "https://github.com/toka09/E-commerce-project1.git",
    liveUrl: "https://e-commerce-rq94.vercel.app/",
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-20 text-center">
          Some Things I've Built
        </h2>

        <div className="flex flex-col gap-24 md:gap-32 max-w-[1200px] mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative grid grid-cols-12 items-center gap-8"
            >
              {/* Image Section */}
              <div
                className={`col-span-12 md:col-span-7 relative ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                  }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full rounded bg-muted/20 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10 rounded" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto md:h-full object-cover rounded shadow-lg filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>

              {/* Content Section */}
              <div
                className={`col-span-12 md:col-span-5 relative z-20 pointer-events-none md:row-start-1 ${index % 2 === 0
                    ? "md:col-start-8 md:text-right"
                    : "md:col-start-1 md:text-left"
                  }`}
              >
                <div
                  className={`
                    relative
                    lg:absolute
                    lg:top-1/2
                    lg:-translate-y-1/2
                    lg:w-[115%]
                    ${index % 2 === 0 ? "lg:right-0" : "lg:left-0"}
                  `}
                >
                  <p className="text-primary font-mono text-sm mb-2">
                    Featured Project
                  </p>

                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors pointer-events-auto"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="bg-card text-muted-foreground p-6 md:p-8 rounded-lg shadow-xl mb-6 pointer-events-auto border border-border/50 text-sm leading-relaxed">
                    {project.description}
                  </div>

                  <ul
                    className={`flex flex-wrap gap-4 text-xs font-mono text-muted-foreground mb-8 ${index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start"
                      }`}
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-secondary/50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex items-center gap-6 pointer-events-auto ${index % 2 === 0
                        ? "lg:justify-end"
                        : "lg:justify-start"
                      }`}
                  >
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repo"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <a
            href="https://github.com/khairy-naiem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm"
          >
            View Full Project Archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
