"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { Download } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-background/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get In <span className="text-gradient">Touch</span>
      </h2>
      
      <div className="max-w-3xl mx-auto text-center">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group min-w-[200px]"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-8">
            <a href="/Sepehr_Jokanian_CV.pdf" download>
              <Button size="lg" className="w-full sm:w-auto group">
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
