import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setCount(Math.round(obj.val)),
        });
      },
    });
  }, [target]);

  return (
    <span ref={ref} className="stat-counter">
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
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
    <section
      id="about"
      ref={sectionRef}
      className="py-32 section-padding"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="about-reveal inline-block text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">
              About Us
            </span>
            <h2 className="about-reveal text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Your Digital Presence Is Either an{" "}
              <span className="text-gradient-orange">Asset</span> or a{" "}
              <span className="text-muted-foreground">Liability.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="about-reveal text-secondary-foreground leading-relaxed">
              Most businesses fail digitally — not because they lack ambition, but because they settle for poor UX, slow systems, and weak branding without strategic thinking behind any of it.
            </p>
            <p className="about-reveal text-secondary-foreground leading-relaxed">
              We exist to change that. As a strategic partner combining deep technical expertise with design precision, we build digital systems that are measurably effective. Every decision is data-driven. Every pixel is intentional.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="about-reveal text-center lg:text-left p-6 border-t border-border"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
