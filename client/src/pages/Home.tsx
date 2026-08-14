// Operational Editorial direction: warm paper, ink navy, muted coral, signal lime.
// This page makes verified experience legible and labels conceptual work explicitly.
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BarChart3, Check, ChevronDown, CircleDot, Menu, Network, ShieldCheck, Sparkles, Users, Workflow, X } from "lucide-react";

const sections = [
  { id: "intro", label: "00 / Intro" },
  { id: "approach", label: "01 / Approach" },
  { id: "work", label: "02 / Selected work" },
  { id: "experience", label: "03 / Experience" },
  { id: "contact", label: "04 / Contact" },
];

const focusAreas = [
  { icon: Users, number: "01", title: "People", text: "Leadership, coaching, team development, and the communication habits that keep execution moving." },
  { icon: Workflow, number: "02", title: "Process", text: "Operations, QA, SOPs, KPIs, and practical improvement loops built around root-cause thinking." },
  { icon: Network, number: "03", title: "Technology", text: "AI-enabled workflows, dashboards, APIs, CRM integrations, and cleaner data movement." },
];

const caseStudies = [
  { id: "dashboard", type: "Verified experience + demonstration", tag: "01 / Performance intelligence", title: "KPI & executive dashboard", summary: "Turning raw performance signals into a management rhythm for sales, appointments, conversions, and team execution.", icon: BarChart3, facts: ["Developed KPI dashboards and executive reporting systems at The Movement.", "Tracked sales, appointments, conversions, team performance, and operational metrics.", "Used reporting to identify growth opportunities and optimize conversion rates."], flow: ["Raw data", "KPI logic", "Dashboard", "Management action"] },
  { id: "qa", type: "Verified experience", tag: "02 / Quality systems", title: "Quality assurance framework", summary: "A practical audit, feedback, and coaching loop that makes quality consistent enough to improve sales effectiveness.", icon: ShieldCheck, facts: ["Led a 20-person chatter team at RSF Agency before being selected to launch a QA team.", "Developed audit processes, feedback frameworks, and coaching guidelines.", "Led the QA project to completion with qualitative improvements in consistency, compliance, and sales effectiveness."], flow: ["Interaction", "Audit", "Root cause", "Coach", "Reassess"] },
  { id: "automation", type: "Portfolio Demonstration / Concept", tag: "03 / Workflow systems", title: "AI workflow automation", summary: "A conceptual operating model for reducing manual work, connecting platforms, and giving teams a cleaner path from input to action.", icon: Sparkles, facts: ["Grounded in CV-documented AI-powered automations, API use, workflow design, and process optimization.", "Shows how a business input can move through AI, business logic, APIs, CRM or data systems, and reporting.", "This is a portfolio reconstruction, not a claim about a named client implementation."], flow: ["Business input", "AI / LLM", "Business logic", "API / CRM", "Insight"] },
];

const timeline = [
  { date: "Mar 2026 — Jul 2026", role: "Territory Director", company: "The Movement", detail: "Regional expansion, strategic partnerships, leadership teams, KPI dashboards, executive reporting, and AI-powered workflow automation." },
  { date: "Sep 2024 — Jan 2026", role: "Operations Team Leader → Quality Assurance", company: "RSF Agency", detail: "Led 20 chatters, then launched a QA function with audit processes, feedback frameworks, and coaching guidelines." },
  { date: "Feb 2024 — Apr 2024", role: "Quality Supervisor", company: "iQor", detail: "Directed quality initiatives and used performance metrics to identify trends and opportunities for improvement." },
  { date: "Aug 2022 — Feb 2024", role: "Assistant Operation Manager", company: "iQor", detail: "Managed team performance, operational assessments, recruitment, onboarding, quality standards, audits, and reporting." },
  { date: "Feb 2022 — Jul 2022", role: "Virtual Assistant", company: "All Finds Solution", detail: "Provided administrative support, calendar management, appointment scheduling, and transaction coordination." },
  { date: "2017 — 2022", role: "Sales Team Leader", company: "iQor", detail: "Led 18 customer service representatives, used Salesforce, tracked performance KPIs, and coached for conversion and customer experience." },
  { date: "2015 — 2017", role: "Technical Support Representative", company: "Convergy's — BPO", detail: "Resolved software, hardware, connectivity, printing, and related technical issues across calls, chat, and email." },
  { date: "2013 — 2015", role: "Customer Service Representative", company: "Transcom — BPO", detail: "Handled customer concerns through active listening, empathy, problem-solving, and education on company offerings." },
];

function SectionLabel({ children }: { children: string }) { return <div className="section-label"><span className="label-dot" />{children}</div>; }
function ArrowLink({ href, children }: { href: string; children: string }) { return <a className="arrow-link" href={href}>{children}<ArrowUpRight size={16} strokeWidth={2.2} /></a>; }
function Monogram() { return <span className="monogram-mark" aria-hidden="true"><i className="stroke-a" /><i className="stroke-b" /><b className="monogram-node" /></span>; }
function CaseArt({ kind }: { kind: string }) {
  if (kind === "dashboard") return <div className="case-art dashboard-art" aria-hidden="true"><span className="chart-axis" /><span className="bar bar-a" /><span className="bar bar-b" /><span className="bar bar-c" /><span className="chart-line" /><span className="chart-node" /><span className="art-label label-a">KPI</span><span className="art-label label-b">SIGNAL</span></div>;
  if (kind === "qa") return <div className="case-art qa-art" aria-hidden="true"><span className="qa-ring ring-a" /><span className="qa-ring ring-b" /><span className="qa-node node-a" /><span className="qa-node node-b" /><span className="qa-node node-c" /><span className="qa-arrow arrow-a">↗</span><span className="qa-arrow arrow-b">↘</span><span className="art-label label-a">AUDIT</span><span className="art-label label-b">COACH</span></div>;
  return <div className="case-art automation-art" aria-hidden="true"><span className="auto-line line-a" /><span className="auto-line line-b" /><span className="auto-line line-c" /><span className="auto-node auto-a" /><span className="auto-node auto-b" /><span className="auto-node auto-c" /><span className="auto-node auto-d" /><span className="art-label label-a">INPUT</span><span className="art-label label-b">LLM</span><span className="art-label label-c">CRM</span></div>;
}

export default function Home() {
  const [active, setActive] = useState("intro");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCase, setOpenCase] = useState<string | null>("dashboard");
  useEffect(() => {
    const observed = sections.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActive(visible.target.id); }, { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.35, 0.7] });
    observed.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const closeMobile = () => setMobileOpen(false);
  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#intro" onClick={closeMobile} aria-label="Noel Amorcillo Jr. home"><Monogram /><span><strong>NOEL</strong><span> / AMORCILLO JR.</span></span></a>
      <button className="mobile-toggle" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
      <nav className={`top-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {sections.slice(1).map((section) => <a key={section.id} className={active === section.id ? "active" : ""} href={`#${section.id}`} onClick={closeMobile}>{section.label.split(" / ")[1]}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMobile}>Let's connect <ArrowUpRight size={15} /></a>
      </nav>
    </header>
    <aside className="section-rail" aria-label="Page sections"><span className="rail-title mono">FIELD REPORT / 2026</span><div className="rail-track" />{sections.map((section) => <a key={section.id} className={active === section.id ? "active" : ""} href={`#${section.id}`}><span>{section.label}</span><i /></a>)}</aside>
    <main>
      <section id="intro" className="hero section-anchor">
        <div className="hero-copy"><SectionLabel>Operations / growth / systems</SectionLabel><p className="eyebrow">13+ years building clarity inside complex work</p><h1>People move the work.<br /><em>Systems make it scale.</em></h1><p className="hero-lede">I’m Noel Amorcillo Jr., an operations and business development leader who connects team leadership, performance management, data, and AI-enabled automation to improve how businesses execute.</p><div className="hero-actions"><ArrowLink href="#work">Explore selected work</ArrowLink><a className="text-link" href="#experience">View career path <ArrowDownRight size={15} /></a></div><div className="hero-meta"><span><CircleDot size={13} /> Currently open to conversations</span><span>Bacolod City · Philippines</span></div></div>
        <div className="hero-visual" aria-label="Abstract operational workbench with process lines and signal markers"><div className="hero-art"><span className="hero-paper paper-one" /><span className="hero-paper paper-two" /><span className="hero-paper paper-three" /><span className="hero-route route-one" /><span className="hero-route route-two" /><span className="hero-route route-three" /><span className="hero-node hero-node-one" /><span className="hero-node hero-node-two" /><span className="hero-node hero-node-three" /><span className="hero-caption caption-one">PEOPLE</span><span className="hero-caption caption-two">PROCESS</span><span className="hero-caption caption-three">TECH</span></div><div className="visual-stamp"><span>PEOPLE</span><span>PROCESS</span><span>TECHNOLOGY</span></div><div className="visual-note"><span className="mono">FIELD NOTE 01</span><strong>From signal<br />to system.</strong></div></div>
        <div className="hero-scroll"><span>Scroll to inspect the work</span><ArrowDownRight size={17} /></div>
      </section>
      <section id="approach" className="approach section-anchor"><div className="section-intro"><SectionLabel>01 / The operating model</SectionLabel><h2>Different tools.<br /><em>One way of thinking.</em></h2></div><div className="approach-copy"><p className="large-copy">My work sits at the intersection of the human and the operational: coach the team, find the constraint, improve the system, then measure what changed.</p><p>That progression has taken me from customer service and technical support through sales leadership, operations management, quality assurance, territory expansion, and AI-powered workflow design.</p><ArrowLink href="#experience">Trace the progression</ArrowLink></div><div className="focus-grid">{focusAreas.map(({ icon: Icon, number, title, text }) => <article className="focus-card" key={title}><div className="focus-top"><span className="mono">{number}</span><Icon size={22} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section id="work" className="work section-anchor"><div className="work-heading"><div><SectionLabel>02 / Selected work</SectionLabel><h2>Evidence, not<br /><em>empty adjectives.</em></h2></div><p>Each story below pairs documented experience with a clear view of the operating logic behind it. Concept work is labeled plainly.</p></div><div className="case-list">{caseStudies.map((study, index) => { const Icon = study.icon; const expanded = openCase === study.id; return <article className={`case-card ${expanded ? "expanded" : ""}`} key={study.id}><div className="case-visual"><CaseArt kind={study.id} /><span className="case-number">{String(index + 1).padStart(2, "0")}</span><span className={`evidence-badge ${study.type.includes("Concept") ? "concept" : ""}`}>{study.type}</span></div><div className="case-content"><div className="case-kicker"><span>{study.tag}</span><Icon size={20} /></div><h3>{study.title}</h3><p>{study.summary}</p><div className="flow-row">{study.flow.map((item, flowIndex) => <span key={item}><b>{item}</b>{flowIndex < study.flow.length - 1 && <ArrowUpRight size={13} />}</span>)}</div><button className="case-toggle" onClick={() => setOpenCase(expanded ? null : study.id)} aria-expanded={expanded}>{expanded ? "Hide evidence" : "Inspect evidence"}<ChevronDown size={16} className={expanded ? "rotate" : ""} /></button>{expanded && <div className="evidence-detail"><ul>{study.facts.map((fact) => <li key={fact}><Check size={15} />{fact}</li>)}</ul></div>}</div></article>; })}</div></section>
      <section id="experience" className="experience section-anchor"><div className="experience-head"><SectionLabel>03 / Career path</SectionLabel><div><h2>The career path<br /><em>behind the system.</em></h2><p>From customer conversations to territory-wide operating systems, the through-line is practical: understand the work, support the people, improve the loop.</p></div></div><div className="timeline-wrap"><div className="timeline-line" />{timeline.map((item, index) => <article className="timeline-item" key={`${item.company}-${item.date}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-date mono">{item.date}</div><div className="timeline-role"><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.detail}</p></div></article>)}</div><div className="education-strip"><div><span className="mono">EDUCATION</span><strong>Bachelor of Science in Office Administration</strong><p>Bacolod City College · 2010</p></div><div><span className="mono">TRAINING</span><strong>Leadership Training</strong><p>Performance Peak Coaching · 2017</p></div><div className="education-mark"><Monogram /></div></div></section>
      <section id="contact" className="contact section-anchor"><div className="contact-visual"><div className="contact-grid" /><div className="contact-node node-one" /><div className="contact-node node-two" /><div className="contact-node node-three" /><span className="mono">PEOPLE + PROCESS + TECHNOLOGY</span></div><div className="contact-copy"><SectionLabel>04 / Open channel</SectionLabel><h2>Let’s talk about<br /><em>the work behind the work.</em></h2><p>I’m open to conversations about operations leadership, sales performance, quality systems, business development, and practical AI or automation opportunities.</p><div className="contact-actions"><a className="dark-button" href="#intro">Back to top <ArrowUpRight size={16} /></a><span className="contact-note mono">Public links available on request</span></div></div></section>
    </main>
    <footer className="site-footer"><span>NOEL AMORCILLO JR.</span><span>Operations · Business Development · Automation</span><span className="mono">© 2026 / BUILT WITH CLARITY</span></footer>
  </div>;
}
