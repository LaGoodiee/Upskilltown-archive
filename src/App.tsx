/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  X, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

interface Project {
  n: string;
  c: string;
  u: string;
  d: string;
  k: string;
  v: number;
}

const PROJECTS: Project[] = [
  {
    n: "HealthBridge Pharmacy",
    c: "Multi-page website",
    u: "https://healthbrigdepharmacy.netlify.app",
    d: "A full pharmacy site with services, products and contact pages.",
    k: "#0a9d6b",
    v: 0,
  },
  {
    n: "Upskilltown",
    c: "Multi-page website",
    u: "https://upskilltown.ai.studio",
    d: "The main site for our skills training brand, built across several pages.",
    k: "#ff4a00",
    v: 1,
  },
  {
    n: "The Neighbourhood Connect",
    c: "Single-page website",
    u: "https://lagoodiee.github.io/theneigbourhoodconnect/",
    d: "One clear page that brings a local community together.",
    k: "#3b6cf6",
    v: 2,
  },
  {
    n: "Zeta Foodies",
    c: "Single-page website",
    u: "https://lagoodiee.github.io/Zeta-foodies/",
    d: "A food brand page built to make people hungry and get orders.",
    k: "#e0a100",
    v: 0,
  },
  {
    n: "Muta Stores",
    c: "Ad landing page",
    u: "https://mutastores.online/",
    d: "A focused page made to turn ad clicks into store sales.",
    k: "#d6336c",
    v: 1,
  },
  {
    n: "Upskilltown Offer",
    c: "Ad landing page",
    u: "https://upskiltownoffer.goodnex03.workers.dev",
    d: "A single-offer page with one goal: get the sign-up.",
    k: "#141210",
    v: 2,
  },
  {
    n: "Lanre Events",
    c: "Ad landing page",
    u: "https://lagoodiee.github.io/lanreevents-co/",
    d: "An events landing page built to collect bookings and enquiries.",
    k: "#7a3cf0",
    v: 0,
  },
  {
    n: "Personal Portfolio",
    c: "Portfolio",
    u: "https://lagoodiee.github.io/portfolioo/",
    d: "A clean portfolio that puts the work first.",
    k: "#0f8ea8",
    v: 1,
  },
];

const CATEGORIES = [
  "All",
  "Multi-page website",
  "Single-page website",
  "Ad landing page",
  "Portfolio",
];

function getHostName(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    projectType: 'Multi-page website',
    budget: '#15000',
    details: '',
  });

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("ut-theme");
    } catch {
      // ignore
    }

    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('ut-theme', nextTheme);
    } catch {
      // ignore
    }
  };

  const filteredProjects = selectedCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.c === selectedCategory);

  const headlineWords = "Websites and landing pages that turn visitors into customers.".split(" ");

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    // Prepare WhatsApp redirect message
    const msg = `Hi Upskilltown! I want to start a project.\nName: ${inquiryData.name || 'Client'}\nEmail: ${inquiryData.email || 'N/A'}\nType: ${inquiryData.projectType}\nBudget: ${inquiryData.budget}\nDetails: ${inquiryData.details || 'Let us discuss on chat.'}`;
    const waUrl = `https://wa.me/2347068276281?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[#ff4a00] selection:text-white transition-colors duration-400">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-md border-b border-[var(--line)] transition-colors duration-400">
        <div className="wrap flex items-center justify-between h-[68px] gap-3">
          <a 
            href="#top" 
            className="brand flex items-center gap-2.5 font-extrabold text-[1.15rem] tracking-tight group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4a00]"
            aria-label="Upskilltown Agency home"
          >
            <svg viewBox="0 0 100 100" className="w-[38px] h-[38px] shrink-0" aria-hidden="true">
              <rect width="100" height="100" rx="28" fill="#ff4a00" />
              <circle cx="27" cy="26" r="8" fill="#141210" />
              <path 
                d="M27 47V62A23 23 0 0 0 73 62V28M54 42L73 23L92 42" 
                transform="translate(-6 0) scale(.92) translate(4 4)" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="12" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
            <div className="leading-tight">
              <span className="block font-bold">Upskilltown</span>
              <small className="block font-sans text-[0.62rem] tracking-[0.35em] font-semibold text-[var(--mute)]">
                AGENCY
              </small>
            </div>
          </a>

          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="relative w-[60px] h-[34px] rounded-full border border-[var(--line)] bg-[var(--surface)] p-0 cursor-pointer transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4a00]"
              role="switch"
              aria-checked={theme === 'dark'}
              aria-label="Toggle dark mode"
            >
              <span 
                className={`absolute top-[3px] left-[3px] w-[26px] h-[26px] rounded-full bg-[var(--ink)] text-[var(--bg)] grid place-items-center text-sm font-semibold transition-transform duration-400 ease-[cubic-bezier(0.7,0,0.2,1)] ${
                  theme === 'dark' ? 'translate-x-[26px]' : 'translate-x-0'
                }`}
              >
                {theme === 'dark' ? '☾' : '☀'}
              </span>
            </button>

            {/* Start a project CTA */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-[0.95rem] bg-[#ff4a00] text-white hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_#ff4a00] transition-all duration-200 cursor-pointer"
            >
              Start a project
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="wrap relative pt-12 md:pt-20 lg:pt-24 pb-10 md:pb-16">
          {/* Animated SVG Hand-Drawn Arrow */}
          <svg 
            className="absolute right-0 top-6 md:top-12 lg:top-16 w-[120px] md:w-[190px] lg:w-[240px] pointer-events-none opacity-20 sm:opacity-90 transition-opacity" 
            viewBox="0 0 120 120" 
            aria-hidden="true"
          >
            <circle className="arrow-circle" cx="20" cy="20" r="9" />
            <path 
              className="arrow-path" 
              d="M20 50V70A30 30 0 0 0 80 70V22M58 42L80 20L102 42" 
            />
          </svg>

          {/* Kinetic Headline */}
          <h1 
            className="font-heading font-extrabold text-[2.7rem] sm:text-[4rem] md:text-[5.2rem] lg:text-[6.2rem] leading-[1.02] max-w-[12em] tracking-tight text-[var(--ink)]"
            aria-label="Websites and landing pages that turn visitors into customers."
          >
            {headlineWords.map((word, i) => (
              <span key={i} className="hero-word mr-[0.24em]">
                <i 
                  className="hero-word-inner"
                  style={{ animationDelay: `${i * 75 + 150}ms` }}
                >
                  {word}
                </i>
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-sub max-w-[34em] text-[1.08rem] sm:text-[1.2rem] text-[var(--mute)] mt-7 mb-8 leading-relaxed">
            We design and build multi-page websites, single-page sites, ad landing pages and portfolios. Open any project below to see it live.
          </p>

          {/* Action CTAs */}
          <div className="hero-fade-cta flex items-center gap-3.5 flex-wrap">
            <a 
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[0.98rem] bg-[#ff4a00] text-white hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-10px_#ff4a00] transition-all duration-200 cursor-pointer"
            >
              See our work
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[0.98rem] bg-transparent text-[var(--ink)] border border-[var(--line)] hover:border-[var(--ink)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Chat with us
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 border-y border-[var(--line)] mt-14 py-2">
            <div className="py-5 pr-4">
              <b className="font-heading text-[1.8rem] sm:text-[2.6rem] tracking-tight block leading-tight text-[var(--ink)]">
                4
              </b>
              <span className="text-[var(--mute)] text-[0.92rem]">kinds of pages</span>
            </div>
            <div className="py-5 pl-5 sm:pl-8 border-l border-[var(--line)]">
              <b className="font-heading text-[1.8rem] sm:text-[2.6rem] tracking-tight block leading-tight text-[var(--ink)]">
                100%
              </b>
              <span className="text-[var(--mute)] text-[0.92rem]">mobile-ready</span>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="wrap py-14 sm:py-20 lg:py-24" id="work">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-8">
            <h2 className="font-heading text-[2.2rem] sm:text-[3.2rem] lg:text-[3.6rem] font-extrabold tracking-tight text-[var(--ink)]">
              Work we’ve shipped
            </h2>
            <div className="text-[0.9rem] text-[var(--mute)] hidden sm:block">
              Hover to scroll preview · Click to visit live
            </div>
          </div>

          {/* Filter Tabs */}
          <div 
            className="flex gap-2 flex-wrap mb-9" 
            role="group" 
            aria-label="Filter projects"
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isActive}
                  className={`font-medium text-[0.92rem] px-4.5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[var(--ink)] text-[var(--bg)] border-[var(--ink)] shadow-sm"
                      : "bg-transparent text-[var(--ink)] border-[var(--line)] hover:border-[var(--ink)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, index) => {
              const host = getHostName(project.u);

              return (
                <a
                  key={project.n}
                  href={project.u}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card group block rounded-[22px] bg-[var(--card)] border border-[var(--line)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow)] focus-visible:ring-2 focus-visible:ring-[#ff4a00]"
                  style={{ animationDelay: `${index * 60}ms` }}
                  aria-label={`${project.n} – open live site`}
                >
                  {/* Mock Browser Preview Window */}
                  <div className="h-[240px] bg-[var(--surface)] p-[18px_18px_0] overflow-hidden relative">
                    <div className="bg-white rounded-t-xl h-full overflow-hidden shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] flex flex-col border border-black/5">
                      {/* Browser top chrome */}
                      <div className="h-[26px] bg-[#f1efec] flex items-center gap-[5px] px-2.5 shrink-0 border-b border-[#e5e1db]">
                        <i className="w-[7px] h-[7px] rounded-full bg-[#e35d52] inline-block" />
                        <i className="w-[7px] h-[7px] rounded-full bg-[#f4be4f] inline-block" />
                        <i className="w-[7px] h-[7px] rounded-full bg-[#61c554] inline-block" />
                        <em className="ml-2 flex-1 h-[14px] rounded-[6px] bg-white font-normal text-[8px] leading-[14px] font-sans text-[#99948c] px-2 overflow-hidden text-ellipsis whitespace-nowrap not-italic">
                          {host}
                        </em>
                      </div>

                      {/* Webpage Content with Hover Scroll Effect */}
                      <div className="browser-page flex-1 bg-white">
                        {/* Dynamic Mockup Hero */}
                        <div 
                          className="h-[96px] rounded-[8px] p-3 flex flex-col justify-center gap-1.5 shadow-sm"
                          style={{ backgroundColor: project.k }}
                        >
                          <s className="block h-[9px] rounded-[5px] bg-white/90 no-underline" />
                          <s className="block h-[9px] w-[60%] rounded-[5px] bg-white/70 no-underline" />
                          <u className="block w-[44px] h-[12px] rounded-[6px] bg-white mt-1 no-underline" />
                        </div>

                        {/* Variant Layout Patterns */}
                        {project.v === 0 && (
                          <div className="mt-3 space-y-2.5">
                            <div className="grid grid-cols-3 gap-2">
                              <div className="h-[52px] rounded-[7px] bg-[#f1efec] relative overflow-hidden">
                                <span 
                                  className="absolute left-2 bottom-2 w-1/2 h-[5px] rounded-[3px]"
                                  style={{ backgroundColor: project.k }}
                                />
                              </div>
                              <div className="h-[52px] rounded-[7px] bg-[#f1efec] relative overflow-hidden">
                                <span 
                                  className="absolute left-2 bottom-2 w-1/2 h-[5px] rounded-[3px]"
                                  style={{ backgroundColor: project.k }}
                                />
                              </div>
                              <div className="h-[52px] rounded-[7px] bg-[#f1efec] relative overflow-hidden">
                                <span 
                                  className="absolute left-2 bottom-2 w-1/2 h-[5px] rounded-[3px]"
                                  style={{ backgroundColor: project.k }}
                                />
                              </div>
                            </div>
                            <div className="h-[7px] rounded-[4px] bg-[#ece8e2]" />
                            <div className="h-[7px] w-[55%] rounded-[4px] bg-[#ece8e2]" />
                            <div className="grid grid-cols-3 gap-2 pt-1">
                              <div className="h-[50px] rounded-[7px] bg-[#f1efec]" />
                              <div className="h-[50px] rounded-[7px] bg-[#f1efec]" />
                              <div className="h-[50px] rounded-[7px] bg-[#f1efec]" />
                            </div>
                            <div className="h-[7px] rounded-[4px] bg-[#ece8e2]" />
                          </div>
                        )}

                        {project.v === 1 && (
                          <div className="mt-3 space-y-2.5">
                            <div className="grid grid-cols-2 gap-2.5">
                              <div 
                                className="h-[68px] rounded-[7px] opacity-85"
                                style={{ backgroundColor: project.k }}
                              />
                              <div 
                                className="h-[68px] rounded-[7px] bg-[#f1efec]"
                              />
                            </div>
                            <div className="h-[7px] rounded-[4px] bg-[#ece8e2]" />
                            <div className="h-[7px] w-[55%] rounded-[4px] bg-[#ece8e2]" />
                            <div className="grid grid-cols-2 gap-2.5 pt-1">
                              <div className="h-[68px] rounded-[7px] bg-[#f1efec]" />
                              <div 
                                className="h-[68px] rounded-[7px] opacity-85"
                                style={{ backgroundColor: project.k }}
                              />
                            </div>
                          </div>
                        )}

                        {project.v === 2 && (
                          <div className="mt-3 space-y-2.5">
                            <div className="h-[7px] rounded-[4px] bg-[#ece8e2]" />
                            <div className="h-[7px] w-[55%] rounded-[4px] bg-[#ece8e2]" />
                            <div className="grid grid-cols-3 gap-2 pt-1">
                              <div className="h-[52px] rounded-[7px] bg-[#f1efec]" />
                              <div 
                                className="h-[52px] rounded-[7px] opacity-85"
                                style={{ backgroundColor: project.k }}
                              />
                              <div className="h-[52px] rounded-[7px] bg-[#f1efec]" />
                            </div>
                            <div className="grid grid-cols-2 gap-2.5 pt-1">
                              <div 
                                className="h-[60px] rounded-[7px] opacity-85"
                                style={{ backgroundColor: project.k }}
                              />
                              <div className="h-[60px] rounded-[7px] bg-[#f1efec]" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-[20px_22px_22px]">
                    <span className="inline-block text-[0.78rem] font-semibold text-[#ff4a00] mb-2 tracking-wide uppercase">
                      {project.c}
                    </span>
                    <h3 className="font-heading text-[1.42rem] font-bold mb-2 text-[var(--ink)] leading-snug group-hover:text-[#ff4a00] transition-colors">
                      {project.n}
                    </h3>
                    <p className="text-[var(--mute)] text-[0.95rem] mb-4 leading-relaxed min-h-[2.8rem]">
                      {project.d}
                    </p>

                    <div className="visit flex justify-between items-center text-[0.92rem] font-semibold border-t border-[var(--line)] pt-3.5">
                      <span className="text-[var(--mute)] font-medium max-w-[65%] truncate">
                        {host}
                      </span>
                      <b className="visit-cta flex items-center gap-1 text-[var(--ink)] group-hover:text-[#ff4a00] transition-colors font-semibold">
                        Visit site
                        <ArrowUpRight className="visit-arrow w-4 h-4 transition-transform duration-300" />
                      </b>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Contact CTA Band */}
        <section className="wrap my-8 mb-20" id="contact">
          <div className="bg-[#ff4a00] text-white rounded-[32px] p-8 sm:p-14 lg:p-18 flex justify-between items-center gap-8 flex-wrap shadow-[0_24px_50px_-20px_rgba(255,74,0,0.45)]">
            <div className="max-w-[20em]">
              <span className="text-white/85 font-semibold tracking-wider text-xs uppercase mb-2 inline-block">
                Starting from #15000 · Ready to stand out?
              </span>
              <h2 className="font-heading text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight">
                Need a page that brings in customers?
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* WhatsApp direct chat */}
              <a 
                href="https://wa.me/2347068276281?text=Hi%20Upskilltown%2C%20I%20want%20a%20website%20or%20landing%20page." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-3 px-7 py-4 rounded-full font-bold text-[1.05rem] bg-[#141210] text-white hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] shrink-0" aria-hidden="true">
                  <path 
                    fill="#25D366" 
                    d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.200l-.3-.2-3 .8.8-2.9-.2-.3A8.200 8.200 0 1 1 12 20.200Zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.100l-.8 1c-.1.200-.3.200-.5.100-1.500-.7-2.400-1.300-3.400-2.900-.3-.5.300-.5.800-1.500.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.100-.7.300-.7.700-1 1.500-1 2.300.1 1 .5 2 1.100 2.800 1.300 1.700 2.900 3 4.800 3.700 1.800.6 2.300.5 3.100.4.700-.1 1.700-.7 1.900-1.400.2-.6.200-1.200.1-1.300-.1-.1-.3-.2-.6-.3Z"
                  />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Quick Inquiry modal button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex justify-center items-center gap-2 px-6 py-4 rounded-full font-semibold text-[1.02rem] bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/30 transition-all duration-200 cursor-pointer"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Tell us your scope</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] py-8 text-[var(--mute)] text-[0.9rem] transition-colors">
        <div className="wrap flex justify-between items-center gap-3 flex-wrap">
          <span>© 2026 Upskilltown Agency</span>
          <span className="text-[var(--mute)]">Websites. Landing pages. Portfolios.</span>
          <a href="#top" className="hover:text-[var(--ink)] transition-colors text-xs font-semibold uppercase tracking-wider">
            Back to top ↑
          </a>
        </div>
      </footer>

      {/* Project Scope / Inquiry Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-[var(--card)] text-[var(--ink)] rounded-3xl border border-[var(--line)] p-6 sm:p-8 max-w-[540px] w-full shadow-2xl relative">
            <button 
              onClick={() => {
                setIsModalOpen(false);
                setInquirySent(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[var(--surface)] text-[var(--mute)] hover:text-[var(--ink)] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold">Inquiry prepared!</h3>
                <p className="text-[var(--mute)] text-sm max-w-sm mx-auto">
                  Opening WhatsApp with your customized brief so our team can immediately review and give you a quote.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setInquirySent(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[var(--ink)] text-[var(--bg)] font-semibold text-sm cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#ff4a00] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" /> Start a project
                  </span>
                  <h3 id="modal-title" className="font-heading text-2xl font-extrabold tracking-tight">
                    Tell us what you want to build
                  </h3>
                  <p className="text-[var(--mute)] text-xs mt-1">
                    Fill in your details (packages start from #15000) and we’ll chat with you right away with estimates and examples.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-[var(--mute)]">
                      Your Name or Business
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alex Morgan"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm focus:outline-none focus:border-[#ff4a00] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-[var(--mute)]">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="alex@company.com"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm focus:outline-none focus:border-[#ff4a00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-[var(--mute)]">
                        Page Type
                      </label>
                      <select 
                        value={inquiryData.projectType}
                        onChange={(e) => setInquiryData({ ...inquiryData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm focus:outline-none focus:border-[#ff4a00] transition-colors"
                      >
                        <option value="Multi-page website">Multi-page website</option>
                        <option value="Single-page website">Single-page website</option>
                        <option value="Ad landing page">Ad landing page</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="Redesign / Other">Redesign / Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-[var(--mute)]">
                      Estimated Budget (Starting at #15000)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["#15000", "#30000", "#50000+"].map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setInquiryData({ ...inquiryData, budget: tier })}
                          className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-colors cursor-pointer ${
                            inquiryData.budget === tier 
                              ? "bg-[#ff4a00] text-white border-[#ff4a00]" 
                              : "bg-[var(--surface)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--ink)]"
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-[var(--mute)]">
                      Project Notes (Optional)
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about the audience, required pages or reference sites you like..."
                      value={inquiryData.details}
                      onChange={(e) => setInquiryData({ ...inquiryData, details: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface)] border border-[var(--line)] text-sm focus:outline-none focus:border-[#ff4a00] transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-semibold text-sm bg-[#ff4a00] text-white hover:bg-[#e04200] transition-colors cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setInquirySent(false);
                    }}
                    className="py-3 px-5 rounded-full font-semibold text-sm bg-[var(--surface)] text-[var(--mute)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
