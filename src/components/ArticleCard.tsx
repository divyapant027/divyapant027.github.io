interface ArticleCardProps {
  outlet: string;
  title: string;
  date?: string;
  excerpt?: string;
  url?: string;
  dark?: boolean;
}

export default function ArticleCard({
  outlet,
  title,
  date,
  excerpt,
  url,
  dark = true,
}: ArticleCardProps) {
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative block overflow-hidden rounded-lg border p-7 transition-all duration-400 ${
        dark
          ? "card-elegant-dark border-cream/[0.08] bg-navy-light"
          : "card-elegant border-cream-dark/80 bg-white"
      }`}
    >
      {/* Gold top accent line — slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 bg-gold/60 transition-transform duration-500 group-hover:scale-x-100" />

      {/* Outlet label */}
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-gold">
        {outlet}
      </p>

      {date && (
        <p
          className={`mt-1 text-[0.75rem] ${
            dark ? "text-cream/55" : "text-text-light/70"
          }`}
        >
          {date}
        </p>
      )}

      {/* Title */}
      <h3
        className={`mt-4 font-heading text-lg font-semibold leading-snug ${
          dark ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h3>

      {/* Excerpt */}
      {excerpt && (
        <p
          className={`mt-3 text-[0.8125rem] leading-relaxed ${
            dark ? "text-cream/65" : "text-text-light"
          }`}
          style={{ lineHeight: 1.65 }}
        >
          {excerpt}
        </p>
      )}

      {/* Read more link */}
      {url && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.75rem] font-medium tracking-wide text-gold transition-all duration-300 group-hover:gap-2.5">
          Read article
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </Wrapper>
  );
}
