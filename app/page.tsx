"use client";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("../client/src/pages/Home"), {
  ssr: false,
  loading: () => (
    <main className="min-h-screen bg-[#fbf7ef] px-5 py-24 text-[#28252a]">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#ff6b6b]">Prompt Gallery</p>
        <h1 className="mt-5 max-w-3xl font-display text-6xl font-black leading-[0.9] tracking-[-0.06em]">Find the scene before the words.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#746c73]">A visual library of ready-to-use AI video prompts for stories, lessons, ads, vlogs, and more.</p>
      </div>
    </main>
  ),
});

export default function Page() {
  return <Home />;
}
