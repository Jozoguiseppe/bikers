import { BrandLogoLink } from "@/components/BrandLogoLink";
import { site } from "@/content/site";

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={22}
      height={22}
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54V12h2.54V9.79c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={22}
      height={22}
    >
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.67 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.18 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.7.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.7.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      width={22}
      height={22}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function SiteFooter() {
  const { footer } = site;
  return (
    <footer
      id="contact"
      className="scroll-mt-14 border-t border-white/[0.08] bg-[#0A0A0C] px-6 py-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 sm:text-left">
          <BrandLogoLink size="footer" className="mx-auto sm:mx-0" />
          <div>
          <p className="font-black uppercase tracking-tight text-[#F5F5F5] text-lg">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-[#F5F5F5]/60 text-sm">
            {site.tagline}
          </p>
          <p className="mt-3 text-[#F5F5F5]/50 text-sm">{footer.line}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <ul className="flex items-center gap-5">
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-[#F5F5F5] transition-[color,box-shadow,border-color] hover:border-[#E67A2E]/55 hover:text-[#E67A2E] hover:shadow-[0_0_20px_rgba(230,122,46,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E67A2E] focus-visible:outline-offset-2"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-[#F5F5F5] transition-[color,box-shadow,border-color] hover:border-[#E67A2E]/55 hover:text-[#E67A2E] hover:shadow-[0_0_20px_rgba(230,122,46,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E67A2E] focus-visible:outline-offset-2"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneE164}`}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 text-[#F5F5F5] transition-[color,box-shadow,border-color] hover:border-[#E67A2E]/55 hover:text-[#E67A2E] hover:shadow-[0_0_20px_rgba(230,122,46,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E67A2E] focus-visible:outline-offset-2"
                aria-label={`Phone ${site.phoneDisplay}`}
              >
                <IconPhone />
              </a>
            </li>
          </ul>
          <p className="text-[#F5F5F5]/35 text-xs">
            © {footer.copyrightYear} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
