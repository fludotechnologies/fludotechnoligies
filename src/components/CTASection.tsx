import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-4xl mx-auto text-center cta-content">
        <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">
          Start a Project
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight mb-8">
          Ready to Scale Your{" "}
          <span className="text-gradient-orange">Digital Presence?</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
          Whether you're launching a new product, rebuilding your platform, or
          optimizing what you have — let's talk about how we can drive
          measurable results for your business.
        </p>
        <a
          href="mailto:fludotechnologies@gmail.com"
          className="inline-block bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold tracking-wide uppercase rounded-sm cta-glow hover:opacity-90 transition-opacity"
        >
          Let's Build Something Powerful
        </a>
      </div>
    </section>
  );
};

export default CTASection;
