import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "Yared798@gmail.com",
    href: "mailto:Yared798@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "yared-abebe23",
    href: "https://www.linkedin.com/in/yared-abebe23/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "YaredCodes",
    href: "https://github.com/YaredCodes",
    icon: "github",
  },
  {
    label: "Telegram",
    value: "@yaredabe23",
    href: "https://t.me/yaredabe23",
    icon: "telegram",
  },
  {
    label: "Phone",
    value: "+251 975 736 889",
    href: "tel:+251975736889",
    icon: "phone",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-17px w-17px"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-17px w-17px"
        aria-hidden="true"
      >
        <path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
      </svg>
    );
  }

  if (type === "telegram") {
    return <Send size={17} />;
  }

  if (type === "phone") {
    return <Phone size={17} />;
  }

  return <Mail size={17} />;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 sm:px-8 sm:py-32 md:px-12 lg:px-20 lg:py-40"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-500px w-500px -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/0.025 blur-[140px]" />

      <div className="relative z-10">
        {/* Section Label */}
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-600">
          06 — Contact
        </p>

        {/* Main Heading */}
        <div className="mt-12 max-w-6xl sm:mt-16">
          <h2 className="text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.88] tracking-[-0.06em] text-white">
            Have a project
            <br />
            <span className="text-neutral-500">in mind?</span>
          </h2>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16">
          <p className="max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Whether you&apos;re building a product, need a website, or simply
            want to talk about technology, I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:Yared798@gmail.com"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03] sm:px-8 sm:py-5"
          >
            Let&apos;s talk

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Contact Details */}
        <div className="mt-24 grid gap-x-8 gap-y-10 border-t border-white/10 pt-8 sm:mt-32 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
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
              className="group flex items-start gap-4"
            >
              <div className="mt-0.5 text-neutral-600 transition-colors duration-300 group-hover:text-white">
                <ContactIcon type={contact.icon} />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                  {contact.label}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <p className="text-sm text-neutral-300 transition-colors duration-300 group-hover:text-white">
                    {contact.value}
                  </p>

                  <ArrowUpRight
                    size={13}
                    className="text-neutral-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Location / Availability */}
        <div className="mt-10 grid gap-8 border-t border-white/5 pt-8 sm:grid-cols-2">
          <div className="flex items-start gap-4">
            <MapPin size={17} className="mt-0.5 text-neutral-600" />

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                Location
              </p>

              <p className="mt-2 text-sm text-neutral-300">Ethiopia</p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
              Availability
            </p>

            <p className="mt-2 text-sm text-neutral-300">
              Open to software engineering opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}