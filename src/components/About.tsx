export default function About() {
  return (
    <section
    id="about"
    className="px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-cyan-400" />
        </div>

        {/* Main About Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">

          {/* Left Profile Card */}
          <div className="mx-auto w-full max-w-[320px] rounded-3xl border border-white/10 bg-white/[0.03] p-7">

            {/* Photo Placeholder */}
            <div className="flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-5xl font-bold text-cyan-400">
                KS
              </div>
            </div>

            {/* Name */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white">
                Kishore S
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Computer Science Engineering Student
              </p>
            </div>

            {/* Status */}
            <div className="mt-6 flex justify-center">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-400">
                Learning • Building • Growing
              </span>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-white/10" />

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4 text-center">

              <div>
                <p className="text-lg font-bold text-cyan-400">
                  CSE
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Student
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-cyan-400">
                  KIT
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Karpagam
                </p>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div>

            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              A Student Who Loves to Build
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">

              <p>
                I’m a{" "}
                <strong className="font-semibold text-white">
                  Computer Science Engineering student at Karpagam Institute
                  of Technology
                </strong>
                , passionate about learning through hands-on experience. I
                enjoy taking what I learn and turning it into projects,
                experiments, and practical solutions. For me, every project
                is a chance to learn something new and improve along the way.
              </p>

              <p>
                Beyond academics, I actively participate in{" "}
                <strong className="font-semibold text-cyan-400">
                  hackathons
                </strong>{" "}
                and contribute to the student community as an{" "}
                <strong className="font-semibold text-white">
                  Microsoft Student Ambassador, iNSIGHTS Campus Ambassador, and AWS Student Builder Group Core Team Member, 
                </strong>
                . I enjoy organizing events, collaborating with other
                students, sharing knowledge, and creating opportunities for
                others to learn and grow.
              </p>

              <p>
                I’m currently exploring{" "}
                <strong className="font-semibold text-white">
                  AI, Cloud, Full-Stack Development, IoT, and DSA
                </strong>
                , while continuously learning through projects, hackathons,
                and new challenges. I believe in{" "}
                <strong className="font-semibold text-cyan-400">
                  learning by doing, sharing what I learn, and growing
                  together
                </strong>
                .
              </p>

            </div>

            {/* Interest Tags */}
            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "AI",
                "Cloud",
                "Full-Stack",
                "IoT",
                "DSA",
                "Hackathons",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}