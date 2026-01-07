const traits = ["Fast Learner", "Problem Solver", "Team Friendly"];

const AboutSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm <span className="text-primary">Khairy Naiem</span>, a
                Front-End Developer with a solid Computer Science background and
                hands-on experience building responsive, high-performance web
                applications using React.js, Next.js, and modern UI frameworks.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Proficient in JavaScript (ES6+), state management, and API
                integration, with a strong focus on clean, maintainable, and
                scalable code. Experienced in translating UI/UX designs into
                user-centered digital experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Actively seeking an opportunity to contribute to a
                forward-thinking team and help deliver impactful, scalable web
                solutions.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center m-4">
                <div className="w-100 h-100 rounded-xl bg-card border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                  {/* <span className="text-6xl font-bold text-gradient">KN</span> */}
                  <img src="/khairy.jpeg" alt="khairy naiem" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
