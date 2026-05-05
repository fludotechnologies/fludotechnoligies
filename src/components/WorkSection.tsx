import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import urbangentsStudy from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import gnagarStudy from "@/assets/g-nagar-study.png";
import hhbosStudy from "@/assets/hhbos-case-study.png";
import vertexStudy from "@/assets/vertex-study.png";
import agencyFinance from "@/assets/agency-finance.png";
import tassTravels from "@/assets/tass-tours.png";

const caseStudies = [
  {
    image: hhbosStudy,
    industry: "Business Services",
    title: "HHBOS – Back Office Solutions Website",
    challenge:
      "Traditional service business lacked digital presence and credibility, limiting inbound client acquisition.",
    solution:
      "Designed and developed a modern corporate website with clear service positioning, trust-building sections, and lead-focused structure.",
    result:
      "Improved brand perception and enabled consistent inbound inquiries through digital presence.",
    metrics: [
      { label: "Website Performance", value: "95+ Score" },
      { label: "Lead Funnel Setup", value: "Optimized" },
      { label: "Brand Visibility", value: "Enhanced" },
    ],
  },
  {
    image: agencyFinance,
    industry: "Fintech / Business Management",
    title: "Agency Finance Management System",
    challenge:
      "Managing finances across multiple clients, team members, and projects manually led to confusion, lack of transparency, and difficulty tracking profits, expenses, and pending payments.",
    solution:
      "Developed a centralized finance management platform to track client payments, team payouts, project budgets, expenses, and transactions with real-time insights and structured dashboards.",
    result:
      "Streamlined financial operations, improved transparency in money flow, and enabled better decision-making with clear tracking of profits and expenses.",
    metrics: [
      { label: "Financial Tracking Accuracy", value: "Improved" },
      { label: "Manual Work Reduction", value: "70% Reduced" },
      { label: "Transaction Visibility", value: "Real-time" },
    ],
  },
  {
    image: gnagarStudy,
    industry: "Finance Management",
    title: "G-Nagar – Residential Finance Management System",
    challenge:
      "Manual financial tracking and reporting for residential association management.",
    solution:
      "Developed a web application for expense tracking, member records, and financial transparency.",
    result:
      "Improved accountability, reporting accuracy, and financial visibility for residents.",
    metrics: [
      { label: "Expense Tracking", value: "Automated" },
      { label: "Reporting System", value: "Real-Time" },
      { label: "Data Accuracy", value: "Enhanced" },
    ],
  },
  {
    image: tassTravels,
    industry: "Transportation / Travel Services",
    title: "Tass Travels Billing Software",
    challenge:
      "Manual invoice generation and record-keeping caused errors, delays, and inefficiencies in managing drivers, vehicles, and trip-based billing.",
    solution:
      "Built a digital billing and management system to handle driver and vehicle records, automate invoice generation, and manage trip-based transactions efficiently.",
    result:
      "Eliminated manual errors, improved billing speed, and enabled organized management of drivers, vehicles, and financial records.",
    metrics: [
      { label: "Invoice Processing Time", value: "60% Faster" },
      { label: "Manual Errors", value: "Minimized" },
      { label: "Operational Efficiency", value: "Significantly Improved" },
    ],
  },

  {
    image: vertexStudy,
    industry: "Education",
    title: "Vertex Tuition Center",
    challenge:
      "Needed a professional online presence to showcase academic excellence and attract new students.",
    solution:
      "Built a clean, informative website highlighting courses, faculty, results, and admissions process.",
    result:
      "Strengthened digital credibility and streamlined student enrollment inquiries.",
    metrics: [
      { label: "Mobile Optimization", value: "100%" },
      { label: "Inquiry Growth", value: "+Improved" },
      { label: "User Engagement", value: "High" },
    ],
  },
  {
    image: caseStudy2,
    industry: "EdTech",
    title: "Vertex CMS – Student Management Platform",
    challenge:
      "Manual processes for attendance, notes, and student tracking were inefficient and time-consuming.",
    solution:
      "Developed a centralized CMS platform to manage students, teachers, attendance, notes, and academic tracking.",
    result:
      "Digitized operations, reduced administrative workload, and improved academic transparency.",
    metrics: [
      { label: "Process Automation", value: "Full System" },
      { label: "Admin Efficiency", value: "+Improved" },
      { label: "Data Centralization", value: "100%" },
    ],
  },
  {
    image: urbangentsStudy,
    industry: "E-Commerce",
    title: "UrbanGents – Men’s Fashion Store",
    challenge:
      "Needed a scalable e-commerce platform with smooth checkout and product management.",
    solution:
      "Built a full-stack e-commerce platform with authentication, cart, order management, and admin dashboard.",
    result:
      "Delivered a complete online retail system ready for digital sales and growth.",
    metrics: [
      { label: "Secure Payments", value: "Integrated" },
      { label: "Admin Dashboard", value: "Custom Built" },
      { label: "Scalable Architecture", value: "Yes" },
    ],
  },
];

const INITIAL_COUNT = 4;

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2); // load 2 more each time
  };
  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT); // load 2 more each time
  };

  const visibleStudies = caseStudies.slice(0, visibleCount);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".case-card").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 0.9,
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
    <section id="work" className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">
          Selected Work
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-16 max-w-2xl">
          Results That <span className="text-gradient-orange">Speak.</span>
        </h2>

        <div className="flex flex-col gap-24">
          {visibleStudies.map((study, i) => (
            <div
              key={study.title}
              className={`case-card grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
              style={i % 2 === 1 ? { direction: "rtl" } : undefined}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-lg aspect-square group"
                style={{ direction: "ltr" }}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                <span className="absolute top-6 left-6 text-xs tracking-[0.2em] uppercase text-primary font-medium bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {study.industry}
                </span>
              </div>

              {/* Content */}
              <div style={{ direction: "ltr" }}>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">
                      Challenge
                    </span>
                    <p className="text-muted-foreground mt-1">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">
                      Solution
                    </span>
                    <p className="text-muted-foreground mt-1">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">
                      Result
                    </span>
                    <p className="text-foreground font-medium mt-1">
                      {study.result}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border-t border-border pt-4"
                    >
                      <span className="text-xl md:text-2xl font-display font-bold text-primary">
                        {metric.value}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < caseStudies.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {/* ✅ Show less Button */}
        {visibleCount >= caseStudies.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleShowLess}
              className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkSection;
