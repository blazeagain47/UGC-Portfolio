import content from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border bg-dark px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-light-muted sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; {year} {content.hero.name}. All rights reserved.</p>
        <div className="flex gap-6">
          {content.contact.socials.map((social) => (
            <a
              key={social.handle}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-light"
            >
              {social.handle}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
