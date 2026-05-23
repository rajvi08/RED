import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-black">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(106,15,19,0.35) 0%, transparent 55%)",
        }}
      />
      <div className="container-royal relative text-center">
        <span className="eyebrow">Lost Address</span>
        <h1 className="mt-8 font-display text-[clamp(5rem,18vw,14rem)] leading-none text-[#efe7da]">
          IV<span className="text-gold">·</span>IV
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-[1.9] text-silver/70">
          The room you are searching for does not exist — yet. Return to the
          atelier and try another door.
        </p>
        <div className="mt-12">
          <Link href="/" className="btn-royal" data-cursor="hover">
            <span>Return Home</span>
            <span className="h-px w-8 bg-gold/70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
