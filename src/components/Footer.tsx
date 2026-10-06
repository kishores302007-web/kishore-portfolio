const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kishore-senthilkumarc",
  },
  {
    name: "GitHub",
    href: "https://github.com/kishores302007-web",
  },
  {
    name: "Email",
    href: "mailto:kishores302007@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white transition-colors hover:text-cyan-400"
            >
              Kishore S
            </a>

            <p className="mt-1 text-xs text-zinc-600">
              Learning • Building • Growing
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name === "Email" ? undefined : "_blank"}
                rel={
                  link.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/5" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kishore S. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-cyan-400"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}