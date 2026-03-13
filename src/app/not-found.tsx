import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center text-cream">
      <span className="mb-6 block h-px w-12 bg-gold opacity-70" />
      <h1
        className="font-heading"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1 }}
      >
        404
      </h1>
      <p className="mt-4 max-w-md text-base font-light tracking-wide text-cream/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
      >
        Back to Home
      </Link>
    </section>
  );
}
