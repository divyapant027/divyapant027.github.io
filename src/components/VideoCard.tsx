import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  channel: string;
  subscribers: string;
  description?: string;
}

export default function VideoCard({
  id,
  title,
  channel,
  subscribers,
  description,
}: VideoCardProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg"
    >
      {/* Thumbnail with elegant overlay */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-navy-light">
        <Image
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />

        {/* Play button — refined circle with gold accent */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/30 bg-navy/60 backdrop-blur-sm transition-all duration-400 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-gold/90">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-0.5 h-5 w-5 text-cream transition-colors duration-300 group-hover:text-navy"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Subtle border ring for definition */}
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/[0.06]" />
      </div>

      {/* Info — tighter spacing, refined typography */}
      <div className="mt-4 px-0.5">
        <h3 className="font-heading text-[0.9375rem] font-semibold leading-snug text-cream md:text-base">
          {title}
        </h3>
        <p className="mt-1.5 text-[0.75rem] tracking-wide text-cream/60">
          {channel}
          <span className="mx-1.5 inline-block h-0.5 w-0.5 rounded-full bg-cream/50 align-middle" />
          {subscribers}
        </p>
        {description && (
          <p className="mt-2.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-cream/65">
            {description}
          </p>
        )}
      </div>
    </a>
  );
}
