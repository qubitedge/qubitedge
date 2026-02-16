import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { name: "Manufacturing", href: "#services" },
    { name: "Machining", href: "#services" },
    { name: "Assembly", href: "#services" },
    { name: "Designing", href: "#services" },
    { name: "Inspection (QA/QC)", href: "#services" },
    { name: "Fabrication", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
  ],
  resources: [
    { name: "Order Form", href: "#order" },
    { name: "Contact", href: "#contact" },
  ],
};

export const Footer = () => {
  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-industrial py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <a
              href="#"
              className="font-serif text-2xl font-bold mb-4 block font-sans font-semibold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              qubitedge<span className="text-accent">.</span>
            </a>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-sm text-center md:text-left">
              Precision engineering and manufacturing solutions for your most
              demanding projects. qubitedge is your trusted partner for quality
              and consistency.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://linkedin.com/company/qubitedge.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-fit px-4 py-2 rounded-full
                  bg-primary-foreground/10 hover:bg-primary-foreground/20
                  transition-colors group border-2 border-transparent
                  hover:border-accent"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-200" />
                <span className="hidden md:inline text-primary-foreground/80 font-medium group-hover:text-accent transition-colors">
                  Connect on LinkedIn
                </span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} qubitedge. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link
              to="/policy"
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
