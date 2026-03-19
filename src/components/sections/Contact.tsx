import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import Button from "../ui/Button";
import content from "../../data/content";

export default function Contact() {
  const { contact } = content;

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

        <div className="mt-10">
          <Button href={`mailto:${contact.email}`} size="lg">
            <Mail className="h-5 w-5" />
            Send Me an Email
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {contact.socials.map((social) => (
            <a
              key={social.handle}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-light-muted transition-colors hover:text-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {social.handle}
              <span className="text-xs text-light-muted/50">
                ({social.platform})
              </span>
            </a>
          ))}
        </div>

        {contact.ratesNote && (
          <p className="mt-8 text-sm text-light-muted/60">
            {contact.ratesNote}
          </p>
        )}
      </motion.div>
    </section>
  );
}
