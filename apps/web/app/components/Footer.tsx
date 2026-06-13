"use client"

export default function Footer(){
    return <footer className="mt-40 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-24">

    <h2 className="text-7xl font-light tracking-tight">
      Let's work together
    </h2>

    <a
      href="mailto:me.amritt@gmail.com"
      className="inline-flex items-center gap-2 mt-8 text-white/70 hover:text-white"
    >
      me.amritt@gmail.com →
    </a>

    <div className="flex justify-center py-20">
      {/* visual element */}
    </div>

    <div className="border-t border-white/10 pt-8">

      <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-white/40">

        <div className="flex gap-8">
          <a href="https://github.com/Amxitt">Github</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:me.amritt@gmail.com">Email</a>
          <a href="/amrit-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back To Top ↑
        </button>

      </div>

    </div>
  </div>
</footer>
}