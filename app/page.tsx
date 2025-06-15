import React from 'react';
import { Content } from "./components/content/contentSection";
import { AccordionFAQ } from "./components/faq/accordionFAQ";
import { Footer } from "./components/footer/footerSection";
import { Hero } from "./components/hero/heroSection";
import { Navigation } from "./components/navigation/navigationBar";

export default function Home(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav Section */}
      <section className="py-16">
        <Navigation />
      </section>
      {/* Hero Section */}
      <section className="py-16">
        <Hero />
      </section>

      {/* Content Section */}
      <section className="py-16">
        <Content />
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-center text-3xl font-heading mb-4">
            Frequently Asked Questions
          </h2>
          <AccordionFAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-secondary">
        <Footer />
      </footer>
    </main>
  );
}