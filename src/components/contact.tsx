"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { socialLinks } from "@/lib/data";
import { CvDownloadMenu } from "@/components/cv-download-menu";

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
            <CvDownloadMenu
              buttonLabel="Download Resume"
              buttonVariant="primary"
              buttonSize="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
