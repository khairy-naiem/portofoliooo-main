import { useState } from "react";

type SkillCategory = "ALL" | "FRONTEND" | "TOOLS" | "SOFT";

interface Skill {
  name: string;
  level: "Advanced" | "Intermediate";
  category: "FRONTEND" | "TOOLS" | "SOFT";
}

const skills: Skill[] = [
  { name: "HTML5", level: "Advanced", category: "FRONTEND" },
  { name: "CSS3", level: "Advanced", category: "FRONTEND" },
  { name: "JavaScript (ES6+)", level: "Advanced", category: "FRONTEND" },
  { name: "TypeScript", level: "Intermediate", category: "FRONTEND" },
  { name: "React.js", level: "Advanced", category: "FRONTEND" },
    { name: "React Native", level: "Advanced", category: "FRONTEND" },
  { name: "Next.js", level: "Advanced", category: "FRONTEND" },
  { name: "Bootstrap", level: "Advanced", category: "FRONTEND" },
  { name: "Tailwind CSS", level: "Advanced", category: "FRONTEND" },
  { name: "Material UI", level: "Intermediate", category: "FRONTEND" },
  { name: "Redux", level: "Intermediate", category: "FRONTEND" },
  { name: "React Query", level: "Intermediate", category: "FRONTEND" },
  { name: "Axios", level: "Advanced", category: "FRONTEND" },
  { name: "Framer Motion", level: "Intermediate", category: "FRONTEND" },
  { name: "Git", level: "Advanced", category: "TOOLS" },
  { name: "GitHub", level: "Advanced", category: "TOOLS" },
  { name: "Firebase", level: "Intermediate", category: "TOOLS" },
  { name: "Figma", level: "Intermediate", category: "TOOLS" },
  { name: "Adobe XD", level: "Intermediate", category: "TOOLS" },
  { name: "Problem Solving", level: "Advanced", category: "SOFT" },
  { name: "Communication", level: "Advanced", category: "SOFT" },
  { name: "Teamwork", level: "Advanced", category: "SOFT" },
  { name: "Time Management", level: "Advanced", category: "SOFT" },
];

const categories: SkillCategory[] = ["ALL", "FRONTEND", "TOOLS", "SOFT"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("ALL");

  const filteredSkills =
    activeCategory === "ALL"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-foreground font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <span
                className={`text-xs ${
                  skill.level === "Advanced"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
