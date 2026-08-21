"use client";

/* Candy Editorial Studio: calm recovery state using the same warm cream, coral, and ink system as the gallery. */
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Prompt Gallery client error", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#fbf7ef] px-5 py-20 text-[#28252a] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl border-t-4 border-[#ff6b6b] pt-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#ff6b6b]">Prompt Gallery · Recovery</p>
        <h1 className="mt-5 max-w-2xl font-display text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-7xl">The gallery needs a fresh frame.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#746c73]">An unexpected browser error interrupted this view. Your saved notes remain on this device. Try loading the gallery again.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => reset()} className="rounded-full bg-[#ff6b6b] px-5 py-3 text-sm font-bold text-white shadow-[4px_4px_0_#28252a] transition hover:-translate-y-0.5">Try again</button>
          <a href="/" className="rounded-full border border-[#2d2932]/15 bg-white px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5">Reload homepage</a>
        </div>
      </div>
    </main>
  );
}
