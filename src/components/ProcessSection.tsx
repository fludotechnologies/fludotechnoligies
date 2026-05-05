import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    number: "01",
    title: "Discovery & Business Analysis",
    description:
      "We begin with deep stakeholder discussions to understand business objectives, technical constraints, and success metrics. Every project starts with clarity, not assumptions.",
    details: [
      "Stakeholder Workshops",
      "Requirement Gathering",
      "Competitor & Market Analysis",
      "Feasibility & Risk Assessment",
    ],
  },
  {
    number: "02",
    title: "Solution Architecture & Planning",
    description:
      "We design a scalable technical architecture aligned with your growth vision. Timelines, milestones, and KPIs are defined before a single line of code is written.",
    details: [
      "System Architecture Design",
      "Tech Stack Selection",
      "Database & API Planning",
      "Project Roadmap & Sprint Planning",
    ],
  },
  {
    number: "03",
    title: "UI/UX & Experience Design",
    description:
      "We translate strategy into intuitive digital experiences. Every interaction is mapped to reduce friction and increase engagement.",
    details: [
      "User Flows & Wireframes",
      "High-Fidelity UI Design",
      "Design System Creation",
      "Interactive Prototyping",
    ],
  },
  {
    number: "04",
    title: "Agile Development",
    description:
      "Our engineering team builds in structured sprints with continuous collaboration. Transparent progress tracking ensures predictable delivery.",
    details: [
      "Frontend & Backend Development",
      "API Integrations",
      "Security Implementation",
      "Weekly Sprint Reviews",
    ],
  },
  {
    number: "05",
    title: "Testing, Security & Deployment",
    description:
      "Before launch, we ensure performance, security, and reliability meet enterprise standards. Deployment is automated and monitored.",
    details: [
      "QA & Automated Testing",
      "Performance Optimization",
      "Cloud Deployment (AWS/Vercel)",
      "CI/CD Pipeline Setup",
    ],
  },
  {
    number: "06",
    title: "Growth, Optimization & Support",
    description:
      "Post-launch, we continuously refine, monitor analytics, and optimize for business growth. Your product evolves as your company scales.",
    details: [
      "Performance Monitoring",
      "Analytics & CRO",
      "Feature Enhancements",
      "Maintenance & SLA Support",
    ],
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-phase").forEach((el, i) => {
        gsap.from(el, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
            How We <span className="text-gradient-orange">Work.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-24">
            {phases.map((phase, i) => (
              <div
                key={phase.number}
                className={`process-phase relative flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border border-primary items-center justify-center z-10">
                  <span className="text-primary font-display font-bold text-sm">
                    {phase.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${i % 2 === 1 ? "md:text-right" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <span className="text-primary font-display font-bold text-sm">
                      Phase {phase.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 ${i % 2 === 1 ? "md:justify-end" : ""}`}
                  >
                    {phase.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-xs px-3 py-1.5 border border-border rounded-full text-muted-foreground"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
