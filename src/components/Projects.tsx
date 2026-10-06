const projects = [
  {
    number: "01",
    title: "RESTAware",
    description:
      "Wearable-based fatigue monitoring system that analyzes physiological and activity signals to detect fatigue and provide timely alerts.",
    tech: ["TypeScript", "Python", "C++", "Docker"],
    github:
      "https://github.com/kishores302007-web/RestAware_fatigues.git",
  },
  {
    number: "02",
    title: "Mystery Case",
    description:
      "An interactive case-solving game where players uncover clues, connect the dots, and solve a new mystery every day.",
    tech: ["JavaScript", "Python", "HTML", "CSS"],
    github:
      "https://github.com/kishores302007-web/Mystery_case_webapplication.git",
  },
  {
    number: "03",
    title: "Gov-Easy-Book",
    description:
      "A web application that simplifies government office visits by allowing users to book service tokens online and reduce waiting time.",
    tech: ["JavaScript", "Python", "HTML", "CSS"],
    github:
      "https://github.com/kishores302007-web/Token_Booking.git",
  },
  {
    number: "04",
    title: "VidAI",
    description:
      "A multilingual, voice-first platform that helps citizens discover government schemes, prepare documents, find nearby offices, and track applications in one place.",
    tech: ["TypeScript", "HTML", "CSS"],
    github:
      "https://github.com/kishores302007-web/VIDAI.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            What I&apos;ve Built
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-cyan-400" />
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
                  {project.number}
                </span>

                <span className="text-zinc-600 transition-colors group-hover:text-cyan-400">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors group-hover:border-cyan-400/20"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub */}
              <div className="mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-400"
                >
                  View on GitHub
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}