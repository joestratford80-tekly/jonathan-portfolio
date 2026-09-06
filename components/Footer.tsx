import { socialLinks } from "@/data/socialLinks";
import { footerNote, footerTag, siteMeta } from "@/data/siteContent";

const SITE_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "AI", href: "#ai" },
];

const MORE_LINKS = [
  { label: "Creative", href: "#creative" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-[70px] pb-10">
      <div className="mx-auto max-w-wrap px-8">
        <div className="mb-[60px] flex flex-wrap justify-between gap-10">
          <div>
            <div className="font-display text-[1.4rem] font-semibold">{siteMeta.name.toUpperCase()}</div>
            <div className="mt-2.5 text-[12.5px] uppercase tracking-[.1em] text-ink-faint">{footerTag}</div>
          </div>
          <div className="flex flex-wrap gap-[70px]">
            <FooterCol title="Site" links={SITE_LINKS} />
            <FooterCol title="More" links={MORE_LINKS} />
            <FooterCol
              title="Elsewhere"
              links={[
                { label: "GitHub", href: socialLinks.github },
                { label: "LinkedIn", href: socialLinks.linkedin },
                { label: "Kaggle", href: socialLinks.kaggle },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-[26px] text-[12.5px] text-ink-faint">
          <span>{footerNote}</span>
          <span>
            © {year} {siteMeta.name}
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h5 className="mb-3.5 text-[11px] uppercase tracking-[.1em] text-ink-faint">{title}</h5>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="block py-[5px] text-sm text-ink-dim transition-colors hover:text-accent"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
