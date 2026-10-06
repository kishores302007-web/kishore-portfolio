const contactDetails = [
  {
    label: "Email",
    value: "kishores302007@gmail.com",
    href: "mailto:kishores302007@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/kishore-senthilkumarc",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "View my projects",
    href: "https://github.com/kishores302007-web",
    icon: "⌘",
  },
  {
    label: "Phone",
    value: "+91 7010370910",
    href: "tel:+917010370910",
    icon: "☎",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Let&apos;s Connect
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get In Touch
          </h2>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Have an idea, opportunity, or just want to connect?
            I&apos;d be happy to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {contactDetails.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={
                contact.label === "Email" || contact.label === "Phone"
                  ? undefined
                  : "_blank"
              }
              rel={
                contact.label === "Email" || contact.label === "Phone"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-5">

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/20">
                  {contact.icon}
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {contact.label}
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-zinc-200 transition-colors group-hover:text-cyan-400">
                    {contact.value}
                  </p>
                </div>

                {/* Arrow */}
                <span className="ml-auto text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
<div className="mt-12 text-center">
  <p className="text-sm text-zinc-500">
    Open to collaborations, projects, hackathons, and new opportunities.
  </p>

  <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
    {/* Email */}
    <a
      href="mailto:kishores302007@gmail.com"
      className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300"
    >
        Send Me an Email
        <span>→</span>
    </a>

    {/* Resume */}
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
    >
        View My Resume
        <span>↗</span>
    </a>
    </div>
    </div>

      </div>
    </section>
  );
}