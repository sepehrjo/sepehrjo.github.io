"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export function About() {
  return (
    <SectionWrapper id="about" className="bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Academic Interests</h3>
          <div className="flex flex-wrap gap-3">
            {personalInfo.academicInterests.map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
