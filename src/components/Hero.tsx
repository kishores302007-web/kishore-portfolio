export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-5 pt-24 sm:px-6 sm:pt-28"
    >
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-2 lg:gap-16">

        {/* Profile Image / Visual */}
        <div className="order-1 flex w-full justify-center lg:order-2 lg:justify-end">
          <div className="relative flex h-[360px] w-full max-w-[320px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/50 sm:h-[440px] sm:max-w-[360px] lg:h-[520px] lg:max-w-[420px]">

            <div className="relative h-full w-full">
                <img
                    src="/images/kishore-profile.png"
                    alt="Kishore S"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

        </div>
        </div>

        {/* Content */}
        <div className="order-2 w-full max-w-2xl text-center lg:order-1 lg:text-left">

          <p className="mb-4 text-lg font-medium text-cyan-400">
            Hi, I'm 👋
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            KISHORE S,
          </h1>

          <p className="mt-7 text-base leading-8 text-zinc-400 sm:text-lg">
            someone who enjoys turning “what if?” into “let’s build
            it.” I love learning by doing, experimenting with ideas, and
            creating things that can make people’s lives a little easier.
            For me, every project is not just about technology—it’s about
            curiosity, creativity, and becoming better with every step.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row lg:justify-start">

            <a
              href="/resume.pdf"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:bg-cyan-300 sm:w-auto"
            >
              View My Resume
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400 hover:text-cyan-400 sm:w-auto"
            >
              Stay in touch
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}