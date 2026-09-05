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

const StarIcon = (props) => (
  <Icon {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Icon>
);

const QuoteIcon = (props) => (
  <Icon {...props}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 5-4 5v3zm11 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 4-2 5-4 5v3z" />
  </Icon>
);

const CheckCircleIcon = (props) => (
  <Icon {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Icon>
);

const ArrowRightIcon = (props) => (
  <Icon {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Icon>
);

// Realistically Detailed Testimonial Comments
const REVIEWS = [
  {
    id: 1,
    name: "Muhammad Tariq",
    role: "Head of Product",
    company: "FinTech Global Solutions",
    location: "Karachi, PK",
    avatar: "MT",
    rating: 5,
    tag: "Enterprise Scale",
    comment:
      "Their execution process was completely transparent from day one. They handled our high-throughput payment flow integration with zero downtime. The delivery speed and code standards exceeded our expectations.",
  },
  {
    id: 2,
    name: "Syeda Fatima Noor",
    role: "Co-Founder & CTO",
    company: "AgriTech Logistics",
    location: "Lahore, PK",
    avatar: "FN",
    rating: 5,
    tag: "Custom Architecture",
    comment:
      "We needed an architectural rebuild to scale across 12 cities in Pakistan. The weekly progress demos kept us completely synced. They delivered full source ownership and clean documentation on time.",
  },
  {
    id: 3,
    name: "Bilal Hassan",
    role: "Director of Engineering",
    company: "RetailX eCommerce",
    location: "Islamabad, PK",
    avatar: "BH",
    rating: 5,
    tag: "UI/UX & Performance",
    comment:
      "Extremely sharp engineering team. Our store mobile performance score went from 48 to 94 after their rebuild. They transformed our customer checkout experience and increased conversions by 32%.",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    role: "VP of Digital Transformation",
    company: "Apex Healthcare PK",
    location: "Rawalpindi, PK",
    avatar: "AK",
    rating: 5,
    tag: "Cloud Deployment",
    comment:
      "Deploying secure patient portals under tight deadlines is tough, but their CI/CD deployment pipelines made updates painless. Professional communication and absolute reliability throughout the sprint cycles.",
  },
  {
    id: 5,
    name: "Zubair Raza",
    role: "Founder",
    company: "PayPulse Middle East",
    location: "Dubai, UAE",
    avatar: "ZR",
    rating: 5,
    tag: "Cross-Border SaaS",
    comment:
      "Working across timezones was seamless. They treated our platform vision as their own and built a robust React & Node backend setup that handles thousands of daily active users effortlessy.",
  },
  {
    id: 6,
    name: "Usman Ghani",
    role: "Chief Operating Officer",
    company: "OmniSupply Networks",
    location: "Faisalabad, PK",
    avatar: "UG",
    rating: 5,
    tag: "Agile Execution",
    comment:
      "Zero surprises, clear milestones, and incredible attention to UI micro-interactions. If you want high-grade product design with rock-solid frontend performance, this is the team to hire.",
  },
];

export default function SixthSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeReview, setActiveReview] = useState(0);

  // Auto-slide through featured testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#07080a] py-28 px-6 lg:px-10 text-white overflow-hidden">
      {/* Dynamic Background Ambient Glows & Grid Background */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#D9A94E]/10 blur-[170px] animate-pulse duration-[4000ms]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A94E]/30 bg-[#D9A94E]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D9A94E] shadow-[0_0_15px_rgba(217,169,78,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D9A94E] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9A94E]"></span>
            </span>
            Client Testimonials
          </div>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
            Trusted by industry leaders <br className="hidden sm:inline" />
            <span className="text-[#D9A94E]">across the world</span>
          </h2>
          <p className="mt-6 text-base text-neutral-400 sm:text-lg">
            Real feedback from engineering directors, founders, and product managers who scaled their software platforms with us.
          </p>
        </div>

        {/* Featured Dynamic Spotlight Card */}
        <div className="mt-14 rounded-3xl border border-[#D9A94E]/40 bg-gradient-to-b from-[#0E1015] to-[#0A0C10] p-8 md:p-12 shadow-[0_10px_40px_rgba(217,169,78,0.12)] relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A94E] to-transparent animate-pulse" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1 text-[#D9A94E]">
                  {[...Array(REVIEWS[activeReview].rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-[#D9A94E]" />
                  ))}
                </div>
                <span className="text-xs font-mono uppercase bg-[#D9A94E]/10 border border-[#D9A94E]/30 text-[#D9A94E] px-2.5 py-1 rounded-md">
                  {REVIEWS[activeReview].tag}
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl text-white font-medium leading-relaxed italic">
                "{REVIEWS[activeReview].comment}"
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="h-12 w-12 rounded-full bg-[#D9A94E] text-black font-bold flex items-center justify-center text-sm shadow-md">
                  {REVIEWS[activeReview].avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    {REVIEWS[activeReview].name}
                    <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {REVIEWS[activeReview].role} — <span className="text-neutral-200">{REVIEWS[activeReview].company}</span> ({REVIEWS[activeReview].location})
                  </p>
                </div>
              </div>
            </div>

            {/* Selector Indicators */}
            <div className="lg:col-span-4 flex lg:flex-col gap-3 justify-center">
              {REVIEWS.map((rev, idx) => (
                <button
                  key={rev.id}
                  onClick={() => setActiveReview(idx)}
                  className={`text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    activeReview === idx
                      ? 'border-[#D9A94E] bg-[#191C26] shadow-[0_0_15px_rgba(217,169,78,0.15)] text-white'
                      : 'border-white/10 bg-[#14171F] text-neutral-400 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold font-mono text-[#D9A94E]">{rev.avatar}</span>
                    <span className="text-xs font-semibold truncate max-w-[140px]">{rev.name}</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono hidden sm:inline">{rev.location}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Testimonial Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl border border-white/10 bg-[#0E1015]/90 p-7 hover:border-[#D9A94E]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(217,169,78,0.1)] flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-skew-sweep" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#D9A94E]">
                    {[...Array(item.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-[#D9A94E]" />
                    ))}
                  </div>
                  <QuoteIcon className="h-6 w-6 text-white/10 group-hover:text-[#D9A94E]/30 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#14171F] border border-[#D9A94E]/40 text-[#D9A94E] font-bold text-xs flex items-center justify-center shrink-0">
                  {item.avatar}
                </div>
                <div className="overflow-hidden">
                  <h5 className="text-xs font-bold text-white group-hover:text-[#D9A94E] transition-colors truncate">
                    {item.name}
                  </h5>
                  <p className="text-[11px] text-neutral-400 truncate">
                    {item.role}, <span className="text-neutral-300">{item.company}</span>
                  </p>
                  <p className="text-[10px] text-[#D9A94E]/80 font-mono">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Footer Navigation */}
        <footer className="mt-24 border-t border-white/10 pt-12 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="col-span-2 space-y-4">
              <span className="text-xl font-bold tracking-wider text-white">
                PLATFORM<span className="text-[#D9A94E]">.</span>
              </span>
              <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
                Engineering resilient modern applications with transparent milestones, dedicated engineering talent, and scalable software architecture.
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Navigation</p>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><a href="#services" className="hover:text-[#D9A94E] transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-[#D9A94E] transition-colors">Process</a></li>
                <li><a href="#work" className="hover:text-[#D9A94E] transition-colors">Work</a></li>
                <li><a href="#testimonials" className="hover:text-[#D9A94E] transition-colors">Reviews</a></li>
              </ul>
            </div>

            {/* Technologies Column */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Technologies</p>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><a href="#" className="hover:text-[#D9A94E] transition-colors">React &amp; Next.js</a></li>
                <li><a href="#" className="hover:text-[#D9A94E] transition-colors">Tailwind CSS</a></li>
                <li><a href="#" className="hover:text-[#D9A94E] transition-colors">Node &amp; Express</a></li>
                <li><a href="#" className="hover:text-[#D9A94E] transition-colors">PostgreSQL &amp; Redis</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white mb-3">Legal</p>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><a href="#" className="hover:text-[#D9A94E] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D9A94E] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#D9A94E] transition-colors">Security Overview</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-6 text-[11px] text-neutral-500 gap-4">
            <p>© {new Date().getFullYear()} Platform Inc. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Engineered with precision &amp; high performance.
            </p>
          </div>
        </footer>

      </div>
    </section>
  );
}