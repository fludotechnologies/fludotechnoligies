import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
      })
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl pt-20">
        <div className="mb-6">
          <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary font-medium">
            Digital Solutions Agency
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-8"
        >
          We Build Digital
          <br />
          Systems That{" "}
          <span className="text-gradient-orange">Drive Revenue.</span>
        </h1>

        <p
          ref={subRef}
          className="text-lg md:text-xl text-secondary-foreground max-w-2xl leading-relaxed mb-12"
        >
          We design and engineer high-performance websites, custom software,
          and scalable digital platforms for ambitious brands.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="border border-foreground/20 text-foreground px-8 py-4 text-sm font-semibold tracking-wide uppercase rounded-sm hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
