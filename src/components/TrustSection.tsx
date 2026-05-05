import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Fludo Technologies transformed our traditional service business into a strong digital presence. The website clearly communicates our expertise and has improved how clients perceive our brand.",
    name: "Managing Director",
    role: "HHBOS – Back Office Service",
  },
  {
    quote:
      "The Vertex website and student management system streamlined our academic operations. Attendance, notes, and student tracking are now fully organized and efficient.",
    name: "Academic Coordinator",
    role: "Vertex Tuition Center",
  },
  {
    quote:
      "Managing our association finances used to be manual and time-consuming. The G-Nagar platform brought transparency, accuracy, and real-time financial tracking for all residents.",
    name: "Association Secretary",
    role: "G-Nagar Residential Association",
  },
];

const clientLogos = [
  "HHBOS",
  "Vertex",
  "G-Nagar",
  "Marvel Customs",
  "UrbanGents",
];

const TrustSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".trust-reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Client logos */}
        <div className="trust-reveal mb-24">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] text-center mb-12">
            Trusted By Forward-Thinking Brands
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-12 text-muted-foreground/40 font-display font-bold text-lg tracking-widest uppercase hover:text-muted-foreground transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="trust-reveal service-card flex flex-col justify-between"
            >
              <p className="text-foreground leading-relaxed mb-8 text-lg italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
