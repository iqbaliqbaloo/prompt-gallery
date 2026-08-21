import Link from "next/link";

export default function PageNotFound() {
  return (
    <main className="min-h-screen bg-[#fbf7ef] px-5 py-10 text-[#28252a] sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1180px] flex-col justify-between">
        <header className="flex items-center justify-between border-b border-[#2d2932]/10 pb-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Return to Prompt Gallery home">
            <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#ff6b6b] text-white shadow-[4px_4px_0_#28252a]">✦</span>
            <span><span className="block font-display text-xl font-bold leading-none">Prompt Gallery</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.2em] text-[#746c73]">Creative video library</span></span>
          </Link>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6b6b]">Frame not found</span>
        </header>
        <section className="grid items-center gap-10 py-16 lg:grid-cols-[.8fr_1.2fr] lg:py-24">
          <div><p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#ff6b6b]">404 / Wrong take</p><h1 className="font-display text-[clamp(5rem,13vw,11rem)] font-black leading-[0.78] tracking-[-0.08em]">Not<br /><em className="text-[#ff6b6b]">here.</em></h1></div>
          <div className="max-w-xl"><h2 className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">This scene didn’t make the final cut.</h2><p className="mt-5 max-w-lg text-lg leading-relaxed text-[#746c73]">The page may have moved, or the URL may be from a prompt that has not been added to the shelf yet.</p><Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b6b] px-5 py-3.5 text-sm font-bold text-white shadow-[5px_5px_0_#28252a] transition hover:-translate-y-1">Return home →</Link></div>
        </section>
        <footer className="flex flex-col justify-between gap-3 border-t border-[#2d2932]/10 pt-5 text-sm text-[#746c73] sm:flex-row"><span>Make the next frame feel inevitable.</span><span className="font-mono text-[10px] uppercase tracking-[0.18em]">Prompt Gallery · 2026</span></footer>
      </div>
    </main>
  );
}
