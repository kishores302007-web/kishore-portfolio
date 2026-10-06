const education = [
  {
    period: "Present",
    title: "B.E. Computer Science & Engineering",
    institution: "Karpagam Institute of Technology",
    duration: "2024 – 2028",
    score: "CGPA: 7.7",
    description:
      "Building a strong foundation in computer science, developing practical skills, and exploring the world of technology.",
  },
  {
    period: "Higher Secondary",
    title: "Higher Secondary Certificate (HSC)",
    institution: "T.M.H.N.U. Mat. Hr. Sec. School — Theni",
    duration: "2023 – 2024",
    score: "Percentage: 69%",
    description:
      "Higher Secondary Education with a focus on Computer Science and Mathematics.",
  },
  {
    period: "Secondary School",
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "T.M.H.N.U. Mat. Hr. Sec. School — Theni",
    duration: "2021 – 2022",
    score: "Percentage: 67%",
    description:
      "Completed secondary education with a strong academic foundation and active participation in school activities.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Education
          </h2>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-cyan-400" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-14">

            {education.map((item, index) => (
              <div
                key={item.title}
                className="relative grid sm:grid-cols-2 sm:gap-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-[#050505] sm:left-1/2" />

                {/* Education Content */}
                <div
                  className={`pl-10 sm:pl-0 ${
                    index % 2 === 0
                      ? "sm:col-start-1 sm:text-right"
                      : "sm:col-start-2 sm:row-start-1"
                  }`}
                >

                  {/* Period */}
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                    {item.period}
                  </p>

                  {/* Degree / Certificate */}
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="mt-2 text-sm font-medium text-zinc-300">
                    {item.institution}
                  </p>

                  {/* Duration */}
                  <p className="mt-2 text-sm text-zinc-500">
                    {item.duration}
                  </p>

                  {/* Score */}
                  {item.score && (
                    <p className="mt-2 text-sm font-semibold text-cyan-400">
                      {item.score}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}