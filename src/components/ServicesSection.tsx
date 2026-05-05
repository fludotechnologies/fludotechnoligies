import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Monitor,
  Code2,
  ShoppingCart,
  Palette,
  Gauge,
  Smartphone,
  Megaphone,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description:
      "High-performance, responsive websites built with modern frameworks. Optimized for speed, scalability, SEO, and conversion — engineered to elevate your digital presence.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored business applications including dashboards, CRM systems, admin panels, and workflow automation tools designed to streamline operations and scale with growth.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform Development",
    description:
      "Secure, conversion-focused online stores with seamless checkout, payment gateway integration, inventory systems, and analytics-driven performance tracking.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Performance-driven digital marketing to increase visibility, attract quality leads, and boost conversions. Powered by data, creative strategy, and targeted campaigns across digital platforms.",
  },
  {
    icon: Gauge,
    title: "AI & Automation Solutions",
    description:
      "Intelligent chatbots, AI-powered workflows, process automation, and smart reporting systems that enhance productivity and decision-making.",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Cross-platform and native mobile applications built with scalable architecture, API integrations, and optimized performance for Android and iOS ecosystems.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card-anim", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`,
    );
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="services" ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">
          What We Do
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-16 max-w-2xl">
          Services Built for{" "}
          <span className="text-gradient-orange">Growth.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card service-card-anim"
                onMouseMove={handleMouseMove}
              >
                <Icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
