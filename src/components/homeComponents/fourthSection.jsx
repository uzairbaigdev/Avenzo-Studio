import React, { useState, useEffect } from 'react';

/**
 * Shared SVG Icon Primitives
 */
function Icon({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const CheckIcon = (props) => (
  <Icon {...props}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);

const SearchIcon = (props) => (
  <Icon {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </Icon>
);

const CodeIcon = (props) => (
  <Icon {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Icon>
);

const CpuIcon = (props) => (
  <Icon {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </Icon>
);

const RocketIcon = (props) => (
  <Icon {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </Icon>
);

export default function FourthSection() {
  const [activeSprint, setActiveSprint] = useState(0);

  // Automatic cycle through sprints/phases every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSprint((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#07080a] py-28 px-6 lg:px-10 text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D9A94E]/10 blur-[160px] animate-pulse duration-[4000ms]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A94E]/30 bg-[#D9A94E]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D9A94E] shadow-[0_0_15px_rgba(217,169,78,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A94E] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9A94E]"></span>
            </span>
            How We Work
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Structured process you can <br className="hidden sm:inline" />
            <span className="text-[#D9A94E]">actually follow</span>
          </h2>
          <p className="mt-6 text-base text-neutral-400 sm:text-lg">
            From initial concept to deployment and scaling—inspect every milestone, make informed decisions, and keep full control of your digital project.
          </p>
        </div>

        {/* Asymmetrical Feature Bento Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN (2 Stacked Cards) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Top Left Card: Discovery & Strategy */}
            <div 
              onClick={() => setActiveSprint(0)}
              className={`relative flex-1 rounded-3xl border p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden group ${
                activeSprint === 0 
                  ? 'border-[#D9A94E] bg-[#0E1015] shadow-[0_10px_30px_rgba(217,169,78,0.15)]' 
                  : 'border-white/10 bg-[#0E1015]/90 hover:border-[#D9A94E]/40'
              }`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A94E]">Phase 01</span>
                <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-[#D9A94E] transition-colors duration-300">
                  Strategy &amp; Architecture
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-md">
                  We analyze your goals, map target workflows, and define clear tech stacks. Swap APIs or databases without rebuilding your foundation.
                </p>
              </div>

              {/* Visual Component Illustration */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-[#14171F] p-4 text-xs font-mono space-y-2 font-medium">
                <div className="flex items-center justify-between text-neutral-400 border-b border-white/5 pb-2">
                  <span className="flex items-center gap-2">
                    <SearchIcon className="h-4 w-4 text-[#D9A94E]" />
                    Discovery Stage
                  </span>
                  <span className="text-[10px] bg-[#D9A94E]/20 text-[#D9A94E] px-2 py-0.5 rounded">Completed</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300 pt-1">
                  <span>{"{ }"} Requirements Scope</span>
                  <span className="text-emerald-400 text-[11px]">Validated</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span>{"{ }"} Tech Stack Selected</span>
                  <span className="text-emerald-400 text-[11px]">React + Tailwind</span>
                </div>
              </div>
            </div>

            {/* Bottom Left Card: Deployment & Infrastructure */}
            <div 
              onClick={() => setActiveSprint(2)}
              className={`relative flex-1 rounded-3xl border p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden group ${
                activeSprint === 2 
                  ? 'border-[#D9A94E] bg-[#0E1015] shadow-[0_10px_30px_rgba(217,169,78,0.15)]' 
                  : 'border-white/10 bg-[#0E1015]/90 hover:border-[#D9A94E]/40'
              }`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A94E]">Phase 03</span>
                <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-[#D9A94E] transition-colors duration-300">
                  Deploys where you decide
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-md">
                  Protect your assets with seamless cloud deployment, modern Vercel/Firebase integration, or self-hosted servers.
                </p>
              </div>

              <div className="mt-8 space-y-2.5">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#D9A94E]/20 text-[#D9A94E]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </div>
                  <span>Production Ready CI/CD Pipelines</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#D9A94E]/20 text-[#D9A94E]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </div>
                  <span>Full Ownership of Source Code on GitHub</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Sprint Timeline) */}
          <div className="lg:col-span-6">
            <div 
              onClick={() => setActiveSprint(1)}
              className={`h-full rounded-3xl border p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden ${
                activeSprint === 1 
                  ? 'border-[#D9A94E] bg-[#0E1015] shadow-[0_10px_30px_rgba(217,169,78,0.15)]' 
                  : 'border-white/10 bg-[#0E1015]/90 hover:border-[#D9A94E]/40'
              }`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9A94E]">Phase 02</span>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Agile Execution &amp; Continuous Testing
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  Enforce clean code structure and real-time updates from development stages.
                </p>
              </div>

              {/* Interactive Dynamic Timeline */}
              <div className="mt-10 space-y-4">
                {/* Sprint 01 */}
                <div 
                  onClick={(e) => { e.stopPropagation(); setActiveSprint(0); }}
                  className={`rounded-2xl border p-4 text-xs font-sans transition-all duration-300 ${
                    activeSprint === 0 
                      ? 'border-[#D9A94E] bg-[#191C26] shadow-[0_0_15px_rgba(217,169,78,0.15)] text-white' 
                      : 'border-white/10 bg-[#14171F] text-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-semibold text-[#D9A94E]">Sprint 01 — UI &amp; Components</span>
                    <span className="text-emerald-400">Completed</span>
                  </div>
                  <p className="text-xs">Designed responsive screens and interactive components.</p>
                </div>

                {/* Sprint 02 */}
                <div 
                  onClick={(e) => { e.stopPropagation(); setActiveSprint(1); }}
                  className={`rounded-2xl border p-4 text-xs font-sans transition-all duration-300 ${
                    activeSprint === 1 
                      ? 'border-[#D9A94E] bg-[#191C26] shadow-[0_0_15px_rgba(217,169,78,0.15)] text-white' 
                      : 'border-white/10 bg-[#14171F] text-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-semibold text-[#D9A94E] flex items-center gap-1.5">
                      <CpuIcon className="h-3.5 w-3.5 animate-spin" /> Sprint 02 — Development
                    </span>
                    <span className="bg-[#D9A94E] text-black font-bold px-2 py-0.5 rounded text-[10px]">In Progress</span>
                  </div>
                  <p className="text-xs">Building core backend integrations and state management.</p>
                </div>

                {/* Sprint 03 */}
                <div 
                  onClick={(e) => { e.stopPropagation(); setActiveSprint(2); }}
                  className={`rounded-2xl border p-4 text-xs font-sans transition-all duration-300 ${
                    activeSprint === 2 
                      ? 'border-[#D9A94E] bg-[#191C26] shadow-[0_0_15px_rgba(217,169,78,0.15)] text-white' 
                      : 'border-white/10 bg-[#14171F] text-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-semibold flex items-center gap-1.5">
                      <RocketIcon className="h-3.5 w-3.5 text-[#D9A94E]" /> Sprint 03 — Launch Prep
                    </span>
                    <span>Upcoming</span>
                  </div>
                  <p className="text-xs">Final optimization and cross-device QA testing.</p>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-10 rounded-2xl bg-[#14171F] p-4 border border-white/5 text-xs text-neutral-400 flex items-center gap-3">
                <CodeIcon className="h-5 w-5 text-[#D9A94E] shrink-0" />
                <span>Clear timelines, zero surprises, and weekly progress demos guaranteed.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}