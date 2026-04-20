import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Linkedin, Youtube } from "lucide-react";
import content from "../../data/content";

function platformIcon(platform: string) {
  if (platform.toLowerCase().includes("tiktok"))
    return <img src="/icons/tiktok.svg" alt="" className="h-4 w-4 shrink-0 rounded-[3px]" />;
  if (platform.toLowerCase().includes("instagram"))
    return <img src="/icons/instagram.svg" alt="" className="h-4 w-4 shrink-0 rounded-[3px]" />;
  if (platform.toLowerCase().includes("youtube"))
    return <Youtube className="h-4 w-4 shrink-0" />;
  if (platform === "LinkedIn")
    return <Linkedin className="h-4 w-4 shrink-0" />;
  return null;
}

export default function Contact() {
  const { contact } = content;
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <section id="contact" className="px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-light-muted">
          Looking for high-performing UGC for your app, tool, or product? I'd
          love to hear about your project.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-hover"
          >
            <Mail className="h-5 w-5" />
            Send Me an Email
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-2 rounded-lg border px-5 py-3.5 text-sm font-medium transition-all duration-200 ${
              copied
                ? "border-green-500/40 bg-green-500/10 text-green-400"
                : "border-dark-border bg-dark-card text-light-muted hover:border-accent/30 hover:bg-dark-hover hover:text-light"
            }`}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 opacity-60" />
                {contact.email}
              </>
            )}
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {contact.socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-dark-border bg-dark-card px-4 py-2.5 text-sm font-medium text-light-muted transition-all duration-200 hover:border-accent/30 hover:bg-dark-hover hover:text-light"
            >
              {platformIcon(social.platform)}
              {social.handle}
            </a>
          ))}
        </div>

        {contact.ratesNote && (
          <p className="mt-8 text-sm text-light-muted/60">{contact.ratesNote}</p>
        )}
      </motion.div>
    </section>
  );
}
