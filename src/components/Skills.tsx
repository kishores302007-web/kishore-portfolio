const skillCategories = [
  {
    title: "Programming",
    skills: ["C++", "Java", "Python"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Git", "GitHub", "Docker"],
  },
  {
    title: "Data & AI",
    skills: ["AI / ML", "SQL", "Data Structures & Algorithms"],
  },
  {
    title: "Other Interests",
    skills: ["IoT", "Hackathons", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technical Skills
          </h2>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-cyan-400" />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${
                index === skillCategories.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}